import Vue from 'vue'
import { ThemeSettings } from './plugins/theme/ThemeSettings';

declare module 'vue/types/vue' {
  interface Vue {
    $theme: ThemeSettings;
  }
}

// declare module 'vue/types/options' {
//   interface ComponentOptions<V extends Vue> {
//     preFetch?: (options: any) => void | Promise<void>
//   }
// }
