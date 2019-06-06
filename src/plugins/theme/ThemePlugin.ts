import themeable from "./Themeable";
import { ThemeSettings } from "./ThemeSettings";

export class ThemePlugin {
  public static install(Vue: any, options: any) {
    const themeSettings = new ThemeSettings(options.themes);
    themeSettings.setTheme(options.defaultTheme); 
    Vue.util.defineReactive(themeSettings, "theme", themeSettings.theme);
    Vue.prototype.$theme = themeSettings;
    Vue.directive("themeable", themeable);
  }
}



