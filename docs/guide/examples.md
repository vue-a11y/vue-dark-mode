# Examples

## Simple button

```vue
<vue-dark-mode>
  <template v-slot="{ mode }">
    Color mode: {{ mode }}
  </template>
</vue-dark-mode>
```

**Output**

<div style="padding: 10px;background-color: var(--bg-secondary);">
  <ClientOnly>
    <vue-dark-mode style="padding: 8px 12px;border: 1px solid var(--border-color);">
      <template v-slot="{ mode }">
        Color mode: {{ mode }}
      </template>
    </vue-dark-mode>
  </ClientOnly>
</div>

<br />
<br />
<br />

## Icon Toggle button

```vue
<vue-dark-mode>
  <template v-slot="{ mode }">
    <MyLightIcon v-show="mode === 'light'">
    <MyDarkIcon v-show="mode === 'dark'">
    <MySystemIcon v-show="mode === 'system'">
  </template>
</vue-dark-mode>
```

**Output**

<div style="padding: 10px;background-color: var(--bg-secondary);">
  <ClientOnly>
    <vue-dark-mode style="padding: 10px 14px;">
      <template v-slot="{ mode }">
        <svg v-show="mode === 'dark'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        <svg v-show="mode === 'light'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        <svg v-show="mode === 'system'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
      </template>
    </vue-dark-mode>
  </ClientOnly>
</div>

<br />
<br />
<br />