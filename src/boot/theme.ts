import { ThemePlugin } from "src/plugins/theme/ThemePlugin";

export default function({Vue} : any) {
    Vue.use(ThemePlugin, [
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
            { "name": "light", "color": "#DFE1DF" }
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
            { "name": "light", "color": "#DFE1DF" }
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
              { "name": "light", "color": "#DFE1DF" }
            ]
          }
      ]);
} 