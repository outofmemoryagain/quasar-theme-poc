> WIP
# Quasar Theme Prototype
A rough prototype for a directive to change the colors based on a defined theme which can be dynamically loaded at runtime.  This is a bruteforce approach that could be optimized, and it is designed to be able to support browsers that do not support css variables, but could be updated to use variables when supported and this less efficient approach otherwise.

```
quasar dev
```

## Change Theme
Click button in toolbar "Change Theme" it will cycle through the theme to apply the defined colors.

## Theme defintion
The theme colors are currently defined in the theme bootfile.  This is still an early protype and there are a lot of improvements and optimizations that could be made.  For example, only colors are supported today, but additional rule types could be supported in the future, for example "dark" to indicate if a color is dark an make the appropriate adjustments to components with that color applied, or a component style that applies modifications to the defualt style.

