# Class naming

The class by default for deciding the color mode is inserted in the HTML tag. `${color}-mode`

e.g.

```html
<!DOCTYPE html>
<html lang="en" class="light-mode">
<head>
  <meta charset="UTF-8">
...
```

## Custom

You can also customize the class name.

| prop           | Type      | default
| -------------- | --------- | ----------------------------------------------------
| `className`    | String    | `%cm-mode`

::: tip
**`%cm`**: We use this placeholder to color mode that will be implemented
:::

**e.g.**

```vue
<DarkMode className="%cm-theme">
  <template v-slot="{ mode }">
    Color mode: {{ mode }}
  </template>
</DarkMode>
```

**Output:**

```html
<!DOCTYPE html>
<html lang="en" class="light-theme">
<head>
  <meta charset="UTF-8">
...
```