# TailwindCSS Dark Mode

By default, [tailwindcss-dark-mode](https://github.com/ChanceArthur/tailwindcss-dark-mode) uses the `.mode-dark` selector for dark mode.  

It is possible to [changing the Selector](https://github.com/ChanceArthur/tailwindcss-dark-mode#changing-the-selector) in "tailwindcss-dark-mode" plug-in, however, you can also adjust the class using the [className](/guide/class-naming.html) prop to generate the class compatible with the plugin.

e.g.

```vue
<VueDarkMode className="mode-%cm">
  <template v-slot="{ mode }">
    Color mode: {{ mode }}
  </template>
</VueDarkMode>
```

```html
<!DOCTYPE html>
<html lang="en" class="mode-dark">
<head>
  <meta charset="UTF-8">
...
```
