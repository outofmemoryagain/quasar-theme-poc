export class ThemeSettings {
  public theme?: Theme;
  public themes: Theme[];

  constructor(themes: Theme[]) {
    this.themes = themes;
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
}

export interface Theme {
  name: string;
  colors: ThemeColor[];
}

export interface ThemeColor {
  name: string;
  color: string;
}