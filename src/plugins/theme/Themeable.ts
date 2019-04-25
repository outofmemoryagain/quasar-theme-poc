import { VNode, VNodeDirective } from "vue";
import { IThemeStyle, ElementTheme } from "./ElementTheme";
import { QInputTheme} from "./QInputTheme";
import { QComponentTheme } from "./QComponentTheme";
import { QBtnTheme } from "./QBtnTheme";
import { QBtnDropdownTheme } from "./QBtnDropdownTheme";
import { QCheckboxTheme } from "./QCheckboxTheme";
import { QChipsInputTheme } from "./QChipsInputTheme";
import { QSliderTheme } from "./QSliderTheme";

const themeStyles = new Map<string, IThemeStyle>();
themeStyles.set("q-search", new QInputTheme());
themeStyles.set("q-input", new QInputTheme());
themeStyles.set("q-select", new QInputTheme());
themeStyles.set("q-icon", new QInputTheme());
themeStyles.set("q-stepper", new QInputTheme());
themeStyles.set("q-slider", new QSliderTheme());
themeStyles.set("q-chips-input", new QChipsInputTheme());
themeStyles.set("q-btn", new QBtnTheme());
themeStyles.set("q-btn-dropdown", new QBtnDropdownTheme());
themeStyles.set("q-checkbox", new QCheckboxTheme());
const componentTheme = new QComponentTheme();
const elementTheme = new ElementTheme();

var unwatch : any = () => null;

function getThemeStyle(vnode: VNode) : IThemeStyle {
  if(vnode.componentOptions && vnode.componentOptions.tag) {
    const tag = vnode.componentOptions.tag;
    if(themeStyles.has(tag)) {      
      return themeStyles.get(tag) as IThemeStyle;
    }
    else {
      return componentTheme;
    }
    
  }
  return elementTheme;
}

function updateStyles(el: HTMLElement, value: VNodeDirective, vnode: VNode, isUpdate?: boolean){
  if(el && vnode.context) {    
    const themeStyle = getThemeStyle(vnode);
    if(themeStyle && (!isUpdate || themeStyle.updateRequired(value))) {
      const theme = vnode.context.$theme;
      if(theme && theme.theme) {        
        const component = vnode.componentInstance;
        const bg = themeStyle.getBackground(value, theme, component);
        const text = themeStyle.getText(value, theme, component);
        themeStyle.updateStyle(el, bg, text, component);
      }
    }    
  }
}

export default {
  bind(el: any, value: VNodeDirective, vnode: VNode) {
    if(vnode.context) {
      unwatch = vnode.context.$watch('$theme.theme', () => {
        updateStyles(el, value, vnode);
      })
    }

    updateStyles(el, value, vnode);
  },
  componentUpdated(el: any, value: VNodeDirective, vnode: VNode) {
    updateStyles(el, value, vnode, true);
  },
  unbind() {
    unwatch()
  }
};