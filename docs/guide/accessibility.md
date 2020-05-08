# Accessibility & i18n

You can customize the messages that will be announced to screen reader users.
This option is interesting when you have several languages (i18n) in your app.

## aria-label

The aria-label is used to label the `<button>` which is responsible for switching between color modes.

| Prop          | Type      | Default
| ------------- | --------- | ----------------------------------------------------
| `ariaLabel`   | String    | `toggle to %cm mode color`

::: tip
**`%cm`**: We use this placeholder to announce the next color mode that will be implemented if the user clicks or presses enter (when focused).
:::

## aria-live

After changing the color mode, the message will be changed in the element with `aria-live="assertive"`, which will immediately announce to the user which color mode has been chosen.

| Prop          | Type      | Default
| ------------- | --------- | ----------------------------------------------------
| `ariaLive`    | String    | `%cm color mode is enabled`


::: tip
**`%cm`**:  We use this placeholder to announce the chosen color mode.
:::

<br />

---

### Example (spanish)

```vue
<VueDarkMode 
  ariaLabel="Cambiar al modo de color %cm"
  ariaLive="Se eligió el modo de color %cm"
>
  <template v-slot="{ mode }">
    Modo de color: {{ mode }}
  </template>
</VueDarkMode>
```

**Output:**

```html
<button
  aria-label="Cambiar al modo de color light"
  title="Cambiar al modo de color light"
  class="vue-dark-mode"
>
  <span
    aria-live="assertive"
    class="visually-hidden"
  >
    Se eligió el modo de color oscuro.
  </span>
  ...
</button>
```

