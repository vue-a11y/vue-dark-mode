export const styles = `
  html {
    background-color: #222 !important;
    color: #333 !important;
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
`
