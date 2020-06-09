# Meta theme-color

"Starting in version 39 of Chrome for Android on Lollipop, you'll now be able to use the theme-color meta tag to set the toolbar color."
-- [Support for theme-color in Chrome 39 for Android](https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android)

With that in mind, when the user changes the theme, the `@vue-a11y/dark-mode` checks whether you have `<meta name="theme-color" content="...">` and modifies it using the colors defined by the `metaThemeColor` prop, so when the color mode is changed, the toolbar color of Chrome for Android will also be changed.

| Prop              | Type     
| ----------------- | --------- 
| `metaThemeColor`  | Object    

::: tip
Since `system` assumes light or dark, then you do not need to define theme-color for this mode.
:::

```vue
<DarkMode 
  :metaThemeColor="{
    light: '#f2f2f2 ',
    dark: '#232b32',
    sepia: '#d8c7a2'
  }"
  :modes="[
    'light',
    'dark',
    'system',
    'sepia'
  ]">
  <template v-slot="{ mode }">
    Color mode: {{ mode }}
  </template>
</DarkMode>
```