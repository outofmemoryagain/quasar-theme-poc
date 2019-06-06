import { VNodeDirective, VNode } from "vue";
import { Theme, ThemeColor } from "./ThemeSettings";
import { colors } from "quasar";

let observer : any;

function updateStyle(el: HTMLElement, color: string, value: ThemeColor) {
    const bgElements = el.getElementsByClassName("bg-" + color);
    for (const element of bgElements) {
      const htmlEl = element as HTMLElement;
      if(htmlEl && htmlEl.style) {        
        const bg = htmlEl.style.getPropertyValue("background");
        if(bg !== value.colorRgb) {
          // console.log("setting background from " + bg + " to " + value.colorRgb);
          htmlEl.style.setProperty("background", value.colorRgb, "important");
        }
      }
    }

    const textElements = el.getElementsByClassName("text-" + color);    
    for (const element of textElements) {
      const htmlEl = element as HTMLElement;
      if(htmlEl && htmlEl.style) {
        const elColor = htmlEl.style.getPropertyValue("color");
        if(elColor !== value.colorRgb) {
          // console.log("setting color from " + elColor + " to " + value.colorRgb);
          htmlEl.style.setProperty("color", value.colorRgb, "important");
        }
      }
    }
}

function updateStyles(el: HTMLElement, value: VNodeDirective){
    const theme = value.value as Theme;
    if(theme) {
      theme.colors.forEach(color => updateStyle(el, color.name, color));
    }
}


function removeTheme(mutationsList: MutationRecord[], value: VNodeDirective){
  mutationsList.forEach(mutation => {
    if(mutation.type === "attributes" && mutation.target){
      const target = mutation.target as HTMLElement;
      if(mutation.oldValue){
        const theme = value.value as Theme;
        if(theme) {
          theme.colors.forEach(color => {
            removeBgTheme(color, mutation, target);
            removeTextTheme(color, mutation, target);
          });
        }
      }
    }
  });
}

export default {
  bind(el: any, value: VNodeDirective, vnode: VNode) {
    setTheme(value, vnode);
  },
  update(el: any, value: VNodeDirective, vnode: VNode){
    setTheme(value, vnode);
  },
  unbind() {
    observer.disconnect();
  }
};

function setTheme(value: VNodeDirective, vnode: VNode){
  // If IE use workaround to setBrand since CSS variables are not supported.
  if(vnode.context && vnode.context.$q.platform.is.ie) {    
    if(observer) {
      observer.disconnect();
    }
    observer = new MutationObserver((mutationsList)=> {
      // Remove existing theme modifications to ensure that changes in style based on state changes, such as 
      // active day in the QDate control are handled properly.  Without this the active rendered color style
      // would still be applied even after the day selection had changed.
      removeTheme(mutationsList, value);

      // Reapply the styles.  This approach is a little bit brute forced, and could probably be optimized to 
      // be solely driven by the mutations list fro the observable.  But some performance testing would need to 
      // be done to determine if inspecting every element from a mutation list is more performant than
      // just reapplying the styles as it is currently doing.
      return updateStyles(document.body, value);
    });
    observer.observe(document.body,  { attributes: true, childList: true, subtree: true, characterData: true, attributeOldValue: true });

    updateStyles(document.body, value);
  }
  else {
    const theme = value.value as Theme;
    if(theme) {
      theme.colors.forEach(color => colors.setBrand(color.name, color.color));
    }
  }
}

function removeBgTheme(color: ThemeColor, mutation: MutationRecord, target: HTMLElement) {
  
  const bg = `bg-${color.name}`;
  if ((mutation.oldValue && mutation.oldValue.includes(bg)) && !target.className.includes(bg)) {
    if (target.style) {
      const bgValue = target.style.getPropertyValue("background");
      if (bgValue === color.colorRgb) {
        target.style.removeProperty("background");
        target.classList.remove("q-themed");
      }
    }
  }
}

function removeTextTheme(color: ThemeColor, mutation: MutationRecord, target: HTMLElement) {
  const bg = `text-${color.name}`;
  if ((mutation.oldValue && mutation.oldValue.includes(bg)) && !target.className.includes(bg)) {
    if (target.style) {
      const bgValue = target.style.getPropertyValue("color");
      if (bgValue === color.colorRgb) {
        target.style.removeProperty("color");
      }
    }
  }
}
