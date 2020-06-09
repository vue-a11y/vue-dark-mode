# Events

## change-mode

Event fired every color mode change.


| Event          | value                                                        |
| -------------- | ------------------------------------------------------------ |
| `change-mode`  | color mode token. (`light` \| `dark` \| `system` \| `myCustomMode`)  | 

```vue
<VueDarkMode @change-mode="myColorModeHandler">
  <template v-slot="{ mode }">
    Color mode: {{ mode }}
  </template>
</VueDarkMode>
```

```js
export default {
  // ...
  methods: {
    myColorModeHandler (mode) {
      // action here
    }
  }
}
```