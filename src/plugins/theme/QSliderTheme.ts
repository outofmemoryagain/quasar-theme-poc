import Vue from "vue";
import { QComponentTheme } from "./QComponentTheme";
export class QSliderTheme extends QComponentTheme {  
  public updateStyle(el: HTMLElement, background: string, text: string, component: Vue) {
    super.updateStyle(el, text, background, component);
    component.$nextTick(() => {
      const chips = el.getElementsByClassName("q-chip");
      for (const chip of chips) {
        super.updateStyle(chip as HTMLElement, background, text, component);
      }
    });
  }
}