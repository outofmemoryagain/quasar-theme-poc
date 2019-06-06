import { VNodeDirective } from "vue";
import { Theme, ThemeColor } from "./ThemeSettings";
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
  bind(el: any, value: VNodeDirective) {
    setTheme(el, value);
  },
  update(el:any, value: VNodeDirective){
    setTheme(el, value);
  },
  unbind() {
    observer.disconnect();
  }
};

function setTheme(el: any, value: VNodeDirective){
  if(observer)
  {
    observer.disconnect();
  }
  observer = new MutationObserver((mutationsList)=> {      
    removeTheme(mutationsList, value);
    return updateStyles(document.body, value);
  });
  observer.observe(document.body,  { attributes: true, childList: true, subtree: true, characterData: true, attributeOldValue: true });

  updateStyles(document.body, value);
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
