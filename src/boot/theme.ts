import { ThemePlugin } from "src/plugins/theme/ThemePlugin";

export default function({Vue} : any) {
  const options = {
    defaultTheme: "default",
    themes: [
      {
        name: "default", colors: [
          { "name": "primary", "color": "#009ED7" },
          { "name": "secondary", "color": "#00B8E4" },
          { "name": "tertiary", "color": "#37424B" },
          { "name": "neutral", "color": "#D9D9D6" },
          { "name": "positive", "color": "#B2D236" },
          { "name": "negative", "color": "#EE2D3A" },
          { "name": "info", "color": "#01579b" },
          { "name": "warning", "color": "#FFC50D" },
          { "name": "faded", "color": "#a4a7a9" },
          { "name": "dark", "color": "#37424B" },
          { "name": "black", "color": "#212120" },
          { "name": "white", "color": "#FFFFFF" },
          { "name": "light", "color": "#DFE1DF" },
          { "name": "body", "color": "#FFFFFF"}
        ]
      },
      {
        name: "alternative", colors: [
          { "name": "primary", "color": "#b5121b" },
          { "name": "secondary", "color": "#526b4c" },
          { "name": "tertiary", "color": "#0369A8" },
          { "name": "neutral", "color": "#D9D9D6" },
          { "name": "positive", "color": "#526b4c" },
          { "name": "negative", "color": "#f44336" },
          { "name": "info", "color": "#151719" },
          { "name": "warning", "color": "#eb730a" },
          { "name": "faded", "color": "#a4a7a9" },
          { "name": "dark", "color": "#37424B" },
          { "name": "black", "color": "#212120" },
          { "name": "white", "color": "#FFFFFF" },
          { "name": "light", "color": "#DFE1DF" },
          { "name": "body", "color": "#FFFFFF"}
        ]
      },
      {
          name: "alternative2", colors: [
            { "name": "primary", "color": "#3e5e7a" },
            { "name": "secondary", "color": "#8ee8df" },
            { "name": "tertiary", "color": "#9C27B0" },
            { "name": "neutral", "color": "#D9D9D6" },
            { "name": "positive", "color": "#21BA45" },
            { "name": "negative", "color": "#C10015" },
            { "name": "info", "color": "#31CCEC" },
            { "name": "warning", "color": "#F2C037" },
            { "name": "faded", "color": "#a4a7a9" },
            { "name": "dark", "color": "#37424B" },
            { "name": "black", "color": "#212120" },
            { "name": "white", "color": "#FFFFFF" },
            { "name": "light", "color": "#DFE1DF" },
            { "name": "body", "color": "#FFFFFF"}
          ]
        }
        ,
      {
          name: "dark", colors: [
            { "name": "primary", "color": "#1a2936" },
            { "name": "secondary", "color": "#0f423d" },
            { "name": "tertiary", "color": "#9c27b0" },
            { "name": "accent", "color": "#D9D9D6" },
            { "name": "positive", "color": "#0d541d" },
            { "name": "negative", "color": "#5c020c" },
            { "name": "info", "color": "#19606e" },
            { "name": "warning", "color": "#7d5c00" },
            { "name": "faded", "color": "#454647" },
            { "name": "dark", "color": "#DFE1DF" },
            { "name": "black", "color": "#DFE1DF" },
            { "name": "white", "color": "#FFFFFF" },
            { "name": "light", "color": "#37424B" },
            { "name": "body", "color": "#37424B"}
          ]
        }
    ]};
    Vue.use(ThemePlugin, options);
} 