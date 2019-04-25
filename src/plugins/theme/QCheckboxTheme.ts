import { QInputTheme } from "./QInputTheme";
import Vue from "vue";

export class QCheckboxTheme extends QInputTheme {
  public updateRequired() {
    return true;
  }
  public updateStyle(el: HTMLElement, background: string, text: string, component: Vue) {
      const children = el.childNodes;
      for (const child of children) {
        const childEl = child as HTMLElement;
        if(childEl && childEl.classList && childEl.classList.contains("q-option-inner")) {
          super.updateStyle(child as HTMLElement, component.$props.value ? background : "default", component.$props.value ? text : "default", component);
        }
      }
  }
}