import { QComponentTheme } from "./QComponentTheme";
import { ThemeSettings } from "./ThemeSettings";
import Vue, { VNodeDirective } from "vue";

export class QInputTheme extends QComponentTheme {
  public getBackground(value: VNodeDirective, theme: ThemeSettings, component: Vue) : string {
    if(component.$props.bgColor) {
      return theme.getColor(component.$props.bgColor);
    }
    return "";
  }
  public getText(value: VNodeDirective, theme: ThemeSettings, component: Vue) : string {
    if(component.$props.color) {
      return theme.getColor(component.$props.color);
    }
    else if(component.$props.bgColor) {
      return theme.getColor("primary");
    }
    return "";
  }

  public updateStyle(el: HTMLElement, background: string, text: string, component: Vue) {
    component.$nextTick(() => {
      const fieldControls = el.getElementsByClassName("q-field__control");
      for (const fieldControl of fieldControls) {
        super.updateStyle(fieldControl as HTMLElement, background, text, component);
      }
      const fieldControlContainers = el.getElementsByClassName("q-field__control-container");
      for (const fieldControlContainer of fieldControlContainers) {
        super.updateStyle(fieldControlContainer as HTMLElement, background, text, component);
      }
      
    });
  }
}