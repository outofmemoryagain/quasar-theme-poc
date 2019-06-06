import { colors } from "quasar";

export class ThemeSettings {
  public theme?: Theme;
  public themes: Theme[];

  constructor(themes: Theme[]) {
    this.themes = themes.map(t => {
      t.colors.forEach(c => {
        const colorRgb = colors.hexToRgb(c.color);
        c.colorRgb = `rgb(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b})`;
      });
      return t;
    });
    if(themes && themes.length > 0){
      this.theme = themes[0];
    }
  }

  public setTheme(name: string){
    if(this.themes){    
      this.theme = this.themes.find(t => t.name === name);
    }
  }

  public getColor(name: string){
    if(this.theme){
      const color = this.theme.colors.find(c => c.name === name);
      return color ? color.color : "default";
    }
    return "";
  }

  public getColorRgb(name: string) {
    if(this.theme){
      const color = this.theme.colors.find(c => c.name === name);
      if(color) {
        const colorRgb = colors.hexToRgb(color.color);
        return `rgb(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b})`;
      }      
    }
    return "";
  }
}

export interface Theme {
  name: string;
  colors: ThemeColor[];
}

export interface ThemeColor {
  name: string;
  color: string;
  colorRgb: string;
}