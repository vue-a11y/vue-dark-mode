<template>
  <button
    @click="toggleDarkMode"
    @keydown.enter="toggleDarkMode"
    class="darkmode"
  >
    <svg
      version="1.1"
      v-if="darkMode"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 202.748 202.748"
      style="enable-background:new 0 0 202.748 202.748;"
      xml:space="preserve"
    >
      <path d="M199.876,119.867c-2.405-1.886-5.715-2.124-8.366-0.6c-12.57,7.225-25.856,10.889-39.489,10.889
        c-43.804,0-79.44-35.638-79.44-79.443c0-13.693,3.669-26.961,10.906-39.434c1.537-2.648,1.309-5.965-0.576-8.379
        c-1.884-2.414-5.047-3.441-7.989-2.591c-21.161,6.1-40.207,19.042-53.629,36.441C7.363,54.809,0,76.437,0,99.297
        c0,57.035,46.4,103.438,103.434,103.438c22.86,0,44.493-7.36,62.561-21.286c17.411-13.419,30.359-32.454,36.459-53.6
        C203.302,124.911,202.282,121.754,199.876,119.867z M103.434,187.734C54.671,187.734,15,148.061,15,99.297
        c0-32.898,18.825-62.836,47.436-77.882c-3.228,9.485-4.855,19.284-4.855,29.298c0,52.076,42.366,94.443,94.44,94.443
        c10,0,19.816-1.634,29.347-4.873C166.324,168.9,136.36,187.734,103.434,187.734z"/>
    </svg>
    <svg
      version="1.1"
      v-else
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 219.786 219.786"
      style="enable-background:new 0 0 219.786 219.786;"
      xml:space="preserve"
    >
      <g>
        <path d="M109.881,183.46c-4.142,0-7.5,3.358-7.5,7.5v21.324c0,4.142,3.358,7.5,7.5,7.5c4.143,0,7.5-3.358,7.5-7.5V190.96
          C117.381,186.817,114.023,183.46,109.881,183.46z"/>
        <path d="M109.881,36.329c4.143,0,7.5-3.358,7.5-7.5V7.503c0-4.142-3.357-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5v21.326
          C102.381,32.971,105.739,36.329,109.881,36.329z"/>
        <path d="M47.269,161.909l-15.084,15.076c-2.93,2.928-2.931,7.677-0.003,10.606c1.465,1.465,3.385,2.198,5.305,2.198
          c1.919,0,3.837-0.732,5.302-2.195l15.084-15.076c2.93-2.928,2.931-7.677,0.003-10.606
          C54.946,158.982,50.198,158.982,47.269,161.909z"/>
        <path d="M167.208,60.067c1.919,0,3.838-0.732,5.303-2.196l15.082-15.076c2.929-2.929,2.93-7.677,0.002-10.607
          c-2.929-2.93-7.677-2.931-10.607-0.001l-15.082,15.076c-2.929,2.928-2.93,7.677-0.002,10.606
          C163.368,59.335,165.288,60.067,167.208,60.067z"/>
        <path d="M36.324,109.895c0-4.142-3.358-7.5-7.5-7.5H7.5c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h21.324
          C32.966,117.395,36.324,114.037,36.324,109.895z"/>
        <path d="M212.286,102.395h-21.334c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h21.334c4.143,0,7.5-3.358,7.5-7.5
          C219.786,105.754,216.429,102.395,212.286,102.395z"/>
        <path d="M47.267,57.871c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.732,5.303-2.196c2.929-2.929,2.929-7.678,0-10.607
          L42.797,32.188c-2.929-2.929-7.678-2.929-10.606,0c-2.929,2.929-2.929,7.678,0,10.606L47.267,57.871z"/>
        <path d="M172.52,161.911c-2.929-2.929-7.678-2.93-10.607-0.001c-2.93,2.929-2.93,7.678-0.001,10.606l15.074,15.076
          c1.465,1.465,3.384,2.197,5.304,2.197c1.919,0,3.839-0.732,5.303-2.196c2.93-2.929,2.93-7.678,0.001-10.606L172.52,161.911z"/>
        <path d="M109.889,51.518c-32.187,0-58.373,26.188-58.373,58.377c0,32.188,26.186,58.375,58.373,58.375
          c32.19,0,58.378-26.187,58.378-58.375C168.267,77.706,142.078,51.518,109.889,51.518z M109.889,153.27
          c-23.916,0-43.373-19.458-43.373-43.375c0-23.918,19.457-43.377,43.373-43.377c23.919,0,43.378,19.459,43.378,43.377
          C153.267,133.812,133.808,153.27,109.889,153.27z"/>
      </g>
    </svg>
    <!-- <svg-icon
      :title="$t('a11y.dark_theme_title_on')"
      v-if="darkMode"
      class="text-gray-600 fill-current"
      width="20px"
      height="20px"
      name="day"
      fill="#fff"
    /> -->
    <!-- <svg-icon
      :title="$t('a11y.dark_theme_title_off')"
      v-else
      class="text-gray-600 fill-current"
      width="20px"
      height="20px"
      name="night"
    /> -->
    <!-- eslint-disable-next-line vue/require-component-is -->
    <component is="style" :media="darkMode ? 'screen' : 'none'">
      html {
      background-color: #222 !important;
      }

      body {
      filter: contrast(90%) invert(90%) hue-rotate(180deg) !important;
      -ms-filter: invert(100%);
      -webkit-filter: contrast(90%) invert(90%) hue-rotate(180deg) !important;
      text-rendering: optimizeSpeed;
      image-rendering: optimizeSpeed;
      -webkit-font-smoothing: antialiased;
      -webkit-image-rendering: optimizeSpeed;
      }

      input, textarea, select {
      color: purple;
      }

      img, video, iframe, canvas, svg, embed[type='application/x-shockwave-flash'], object[type='application/x-shockwave-flash'], *[style*='url('] {
      filter: invert(100%) hue-rotate(-180deg) !important;
      -ms-filter: invert(100%) !important;
      -webkit-filter: invert(100%) hue-rotate(-180deg) !important;
      }
    </component>
  </button>
</template>

<script>
export default {
  name: 'DarkMode',
  data () {
    return {
      darkMode: false
    }
  },
  methods: {
    toggleDarkMode () {
      state.darkMode = !state.darkMode
      this.$emit('darkMode', state.darkMode)
    }
  }
}
</script>

<style scoped>
.darkmode {
  padding: 6px 6px;
}
</style>
