# Favicon

| prop        | Type      | default
| ----------- | --------- | ---------- 
| `favicon`   | Boolean   | `true`

You can switch the favicon according to the `prefers-color-scheme`.

## Naming favicons  

Favicons should be named as follows:  

- For `light` the default favicon will be used, for example: `https://example.com/favicon.svg` or `/favicon.svg`
- For `dark` will be used, for example: `https://example.com/favicon-dark.svg` or `/favicon-dark.svg`

::: tip
For `@vue-a11y/dark-mode`:
- You can use absolute URL (`https://example.com/favicon.svg`) or relative (`/favicon.svg`);
- You can use any extension for the favicon. `svg` is currently the most recommended and supported in modern browsers. See more about [svg favicons](https://css-tricks.com/svg-favicons-and-all-the-fun-things-we-can-do-with-them/#why-svg);
:::

Insert default favicon into your `index.html`

e.g.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- omitted -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
```

If the user has defined in his `dark` operating system as color mode preference for applications, `@vue-a11y/dark-mode` will identify and make the change to your favicon.

e.g.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- omitted -->
    <link rel="icon" type="image/svg+xml" href="/favicon-dark.svg">
```

---

::: tip
You can see this working, just go to your operating system's color settings and change to `dark`, go back to that documentation and check the favicon has changed.

This is a practice used by several sites, one of which is github.
:::