import { ThemeSettings } from "./ThemeSettings";
import Vue, { VNodeDirective } from "vue";

export interface IThemeStyle {
  updateRequired(value: VNodeDirective, component?: Vue) : boolean;
  getBackground(value: VNodeDirective, theme: ThemeSettings, component?: Vue) : string;
  getText(value: VNodeDirective, theme: ThemeSettings, component?: Vue) : string;
  updateStyle(el: HTMLElement, background: string, text: string, component?: Vue): void;
}

export class ElementTheme implements IThemeStyle {
  public updateRequired(value: VNodeDirective, component?: Vue) {
    return (value.value !== value.oldValue);
  }
  public getBackground(value: VNodeDirective, theme: ThemeSettings, component: Vue) : string {
    if(value.arg === "color") {
      return theme.getColor(value.value);
    }
    return "";
  }
  public getText(value: VNodeDirective, theme: ThemeSettings, component: Vue) : string {
    if(value.arg === "text") {
      return theme.getColor(value.value);
    }
    return "";
  }

  public updateStyle(el: HTMLElement, background: string, text: string) {
    if(el) {
      if(background) {
        el.style.background = background !== "default" ? background : "";
      }
      
      if(text) {
        el.style.color = text !== "default" ? text : "";
      }
    }
  }
}