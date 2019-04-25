import Vue from "vue";
import { QBtnTheme } from "./QBtnTheme";

export class QBtnDropdownTheme extends QBtnTheme {
  public updateStyle(el: HTMLElement, background: string, text: string, component: Vue) {
    if(el) {
      super.updateStyle(el, background, text, component);
      const children = el.childNodes;
      for (const child of children) {
        super.updateStyle(child as HTMLElement, background, text, component);
      }
    }
  }
}