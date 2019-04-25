import { QComponentTheme } from "./QComponentTheme";
import Vue, { VNodeDirective } from "vue";
import { ThemeSettings } from "./ThemeSettings";

export class QBtnTheme extends QComponentTheme {

  public getBackground(value: VNodeDirective, theme: ThemeSettings, component: Vue) : string {
    if(component.$props.color && !component.$props.flat) {
      return theme.getColor(component.$props.color);
     }
     return "";    
  }
  public getText(value: VNodeDirective, theme: ThemeSettings, component: Vue) : string {
    if(component.$props.color && component.$props.flat) {
      return theme.getColor(component.$props.color);
    }
    return "";
  }
}