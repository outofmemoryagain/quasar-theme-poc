import { QInputTheme } from "./QInputTheme";
import Vue from "vue";
import { QComponentTheme } from "./QComponentTheme";

export class QChipsInputTheme extends QComponentTheme {
  public updateRequired() {
    return true;
  }
  public updateStyle(el: HTMLElement, background: string, text: string, component: Vue) {
    component.$nextTick(() => {
      const chips = el.getElementsByClassName("q-chip");
      for (const chip of chips) {
        super.updateStyle(chip as HTMLElement, background, text, component);
      }
    });
  }
}