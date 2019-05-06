import { VNode, VNodeDirective } from "vue";

import Vue from "vue";


var unwatch : any = () => null;

function updateStyle(el: HTMLElement, color: string, value: string, component: Vue) {
  component.$nextTick(() => {
    const bgElements = el.getElementsByClassName("bg-" + color);
    for (const element of bgElements) {
      const el = element as HTMLElement;
      if(el && el.style) {
          el.style.setProperty("background", value, "important");
      }
    }

    const textElements = el.getElementsByClassName("text-" + color);
    for (const element of textElements) {
      const el = element as HTMLElement;
      if(el && el.style) {
          el.style.setProperty("color", value, "important");
      }
    }          
  });
}

function updateStyles(el: HTMLElement, value: VNodeDirective, vnode: VNode, isUpdate?: boolean){
  if(el && vnode.context) {    
      const theme = vnode.context.$theme;
      if(theme && theme.theme && vnode.componentInstance) {        
        const component = vnode.componentInstance;
        theme.theme.colors.forEach(color => updateStyle(el, color.name, color.color, component))
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