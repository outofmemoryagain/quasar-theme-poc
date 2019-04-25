import { ThemeSettings } from "./ThemeSettings";
import Vue, { VNodeDirective } from "vue";
import { IThemeStyle } from "./ElementTheme";

export class QComponentTheme implements IThemeStyle {
  public updateRequired(value: VNodeDirective, component?: Vue) {
    return (value.value !== value.oldValue);
  }
  public getBackground(value: VNodeDirective, theme: ThemeSettings, component: Vue) : string {
    if(value.arg === "color") {
      return theme.getColor(value.value);
    }
    else if(component.$props.color) {
      return theme.getColor(component.$props.color);
     }
     return "";    
  }
  public getText(value: VNodeDirective, theme: ThemeSettings, component: Vue) : string {
    if(value.arg === "text") {
      return theme.getColor(value.value);
    }
    else if(component.$props.textColor) {
      return theme.getColor(component.$props.textColor);
    }
    return "";
  }

  public updateStyle(el: HTMLElement, background: string, text: string, component: Vue) {
    if(el && el.style) {
      if(background) {
        if(background === "default") {
          el.style.removeProperty("background");
        }
        else {
          el.style.setProperty("background", background, "important");
        }        
      }
      if(text) {
        if(text === "default") {
          el.style.removeProperty("color");
        }
        else {
          el.style.setProperty("color", text, "important");
        }
      }
    }
  }
}