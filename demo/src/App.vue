<template>
  <div id="app">
    <header class="header">
      <h1>
        Vue DarkMode
      </h1>
      <div>
        <DarkMode
          class="btn-darkmode"
          :modes="['light', 'dark', 'system']"
          :meta-theme-color="{light: '#efefef', dark: '#232b32'}"
          lang="it"
          aria-label="Passa al colore modalità %cm."
          aria-live="La modalità %cm è stata selezionata."
          @change-mode="test"
        >
          <template v-slot="{ mode }">
            <svg
              v-show="mode === 'dark'"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            <svg
              v-show="mode === 'light'"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-sun"
            ><circle
              cx="12"
              cy="12"
              r="5"
            /><line
              x1="12"
              y1="1"
              x2="12"
              y2="3"
            /><line
              x1="12"
              y1="21"
              x2="12"
              y2="23"
            /><line
              x1="4.22"
              y1="4.22"
              x2="5.64"
              y2="5.64"
            /><line
              x1="18.36"
              y1="18.36"
              x2="19.78"
              y2="19.78"
            /><line
              x1="1"
              y1="12"
              x2="3"
              y2="12"
            /><line
              x1="21"
              y1="12"
              x2="23"
              y2="12"
            /><line
              x1="4.22"
              y1="19.78"
              x2="5.64"
              y2="18.36"
            /><line
              x1="18.36"
              y1="5.64"
              x2="19.78"
              y2="4.22"
            /></svg>
            <svg
              v-show="mode === 'system'"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-monitor"
            ><rect
              x="2"
              y="3"
              width="20"
              height="14"
              rx="2"
              ry="2"
            /><line
              x1="8"
              y1="21"
              x2="16"
              y2="21"
            /><line
              x1="12"
              y1="17"
              x2="12"
              y2="21"
            /></svg>
          </template>
        </DarkMode>
      </div>
    </header>
    <main>
      <div class="container">
        <p>
          Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. Aenean finibus iaculis ante non euismod. Integer congue eu eros sed ullamcorper. Integer in est at lorem hendrerit luctus sed luctus purus. Cras eget velit vitae purus hendrerit ultricies. Nunc ut bibendum mi. Praesent semper tortor at odio dignissim, ut vehicula ex mollis. Praesent nibh diam, hendrerit ac erat et, dignissim scelerisque neque. Aenean condimentum pharetra feugiat. Aliquam ex tortor, luctus ut scelerisque in, cursus elementum tellus. Curabitur convallis sit amet sem imperdiet pulvinar. Quisque finibus sem pellentesque neque placerat, sed laoreet urna ornare. Morbi in ex nisl. Nam et erat vel mi volutpat malesuada.
        </p>
        <p class="image">
          <img
            src="https://picsum.photos/id/547/800/600"
            alt="landscapes with mountains"
          >
        </p>
        <p>
          Sed neque nunc, gravida vel odio ut, elementum elementum libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis feugiat neque quis nisl tempus, vel varius diam euismod. Duis condimentum placerat ligula, ac scelerisque velit. Nullam mollis massa vitae dolor posuere fermentum. Fusce hendrerit at ex eget commodo. Mauris leo tortor, varius non ipsum sed, commodo lobortis metus. Vivamus pellentesque diam in massa vulputate interdum. Aenean consequat, tellus at fringilla laoreet, nisl augue sagittis risus, mollis pulvinar quam ipsum sit amet neque. Pellentesque laoreet ut lacus ac varius.
        </p>
      </div>
    </main>
  </div>
</template>

<script>
import { DarkMode } from '../vue-dark-mode'

export default {
  name: 'App',

  components: {
    DarkMode
  },

  mounted () {
    setTimeout(function () {
      document.body.style.transition = 'background-color .3s'
    }, 1000)
  },

  methods: {
    test: function (e) {
      console.log(e)
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box !important;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #f3f5f4;
  --bg-secondary: #fff;
  --color: #333;
}

html.dark-mode {
  --bg: #091a28;
  --bg-secondary: #232b32;
  --color: #DDD8CA;
}

html.sepia-mode {
  --bg: #FBF0D9;
  --bg-secondary: #FBF0D9;
  --color: #5F4B32;
}

.dark-mode img {
  filter: saturate(60%) brightness(80%);
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.8rem;
  background-color: var(--bg-secondary);
  color: var(--color);
}

a {
  color: #42B983;
}

.header {
  width: 100%;
  padding: 16px 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 2%;
}

.container > p {
  margin-bottom: 20px;
}

.container > p.image {
  text-align: center;
}

.btn-darkmode.vue-dark-mode {
  padding: 8px 12px;
}
</style>
