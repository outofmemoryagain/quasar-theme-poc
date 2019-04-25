import { QComponentTheme } from "./QComponentTheme";
import { ThemeSettings } from "./ThemeSettings";
import Vue, { VNodeDirective } from "vue";

export class QInputTheme extends QComponentTheme {
  public getBackground(value: VNodeDirective, theme: ThemeSettings, component: Vue) : string {
    if(component.$props.color && component.$props.inverted) {
      return theme.getColor(component.$props.color);
    }
    return "";
  }
  public getText(value: VNodeDirective, theme: ThemeSettings, component: Vue) : string {
    if(component.$props.color && !component.$props.inverted) {
      return theme.getColor(component.$props.color);
    }
    return "";
  }
}