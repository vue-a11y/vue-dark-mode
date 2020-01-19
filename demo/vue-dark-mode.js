
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.VueDarkMode = {}));
}(this, (function (exports) { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script = {
    name: 'DarkMode',
    data: function data () {
      return {
        darkMode: false
      }
    },
    methods: {
      toggleDarkMode: function toggleDarkMode () {
        this.darkMode = !this.darkMode;
        this.$emit('darkMode', this.darkMode);
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      var options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      var hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }
  //# sourceMappingURL=normalize-component.mjs.map

  var isOldIE = typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
      return function (id, style) { return addStyle(id, style); };
  }
  var HEAD;
  var styles = {};
  function addStyle(id, css) {
      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
      if (!style.ids.has(id)) {
          style.ids.add(id);
          var code = css.source;
          if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                      ' */';
          }
          if (!style.element) {
              style.element = document.createElement('style');
              style.element.type = 'text/css';
              if (css.media)
                  { style.element.setAttribute('media', css.media); }
              if (HEAD === undefined) {
                  HEAD = document.head || document.getElementsByTagName('head')[0];
              }
              HEAD.appendChild(style.element);
          }
          if ('styleSheet' in style.element) {
              style.styles.push(code);
              style.element.styleSheet.cssText = style.styles
                  .filter(Boolean)
                  .join('\n');
          }
          else {
              var index = style.ids.size - 1;
              var textNode = document.createTextNode(code);
              var nodes = style.element.childNodes;
              if (nodes[index])
                  { style.element.removeChild(nodes[index]); }
              if (nodes.length)
                  { style.element.insertBefore(textNode, nodes[index]); }
              else
                  { style.element.appendChild(textNode); }
          }
      }
  }
  //# sourceMappingURL=browser.mjs.map

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "button",
      {
        staticClass: "vue-darkmode",
        on: {
          click: _vm.toggleDarkMode,
          keydown: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return _vm.toggleDarkMode($event)
          }
        }
      },
      [
        _vm._t("default", null, { mode: _vm.darkMode }),
        _vm._v(" "),
        _c(
          "style",
          {
            tag: "component",
            attrs: { media: _vm.darkMode ? "screen" : "none" }
          },
          [
            _vm._v(
              "\n    html {\n    background-color: #222 !important;\n    color: #333 !important;\n    }\n\n    body {\n    filter: contrast(90%) invert(90%) hue-rotate(180deg) !important;\n    -ms-filter: invert(100%);\n    -webkit-filter: contrast(90%) invert(90%) hue-rotate(180deg) !important;\n    text-rendering: optimizeSpeed;\n    image-rendering: optimizeSpeed;\n    -webkit-font-smoothing: antialiased;\n    -webkit-image-rendering: optimizeSpeed;\n    }\n\n    input, textarea, select {\n    color: purple;\n    }\n\n    img, video, iframe, canvas, svg, embed[type='application/x-shockwave-flash'], object[type='application/x-shockwave-flash'], *[style*='url('] {\n    filter: invert(100%) hue-rotate(-180deg) !important;\n    -ms-filter: invert(100%) !important;\n    -webkit-filter: invert(100%) hue-rotate(-180deg) !important;\n    }\n  "
            )
          ]
        )
      ],
      2
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) { return }
      inject("data-v-23cc55f3_0", { source: "\n.vue-darkmode[data-v-23cc55f3] {\r\n  padding: 6px 8px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  border-color: inherit;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n  appearance: none;\r\n  background-color: transparent;\r\n  color: inherit;\n}\r\n", map: {"version":3,"sources":["D:\\Work\\Projetos\\Open-source\\Github\\Organization\\vue-a11y\\repositories\\vue-dark-mode\\src\\vue-dark-mode.vue"],"names":[],"mappings":";AAsDA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,qBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,6BAAA;EACA,cAAA;AACA","file":"vue-dark-mode.vue","sourcesContent":["<template>\r\n  <button\r\n    @click=\"toggleDarkMode\"\r\n    @keydown.enter=\"toggleDarkMode\"\r\n    class=\"vue-darkmode\"\r\n  >\r\n    <slot :mode=\"darkMode\"></slot>\r\n    <component :is=\"'style'\" :media=\"darkMode ? 'screen' : 'none'\">\r\n      html {\r\n      background-color: #222 !important;\r\n      color: #333 !important;\r\n      }\r\n\r\n      body {\r\n      filter: contrast(90%) invert(90%) hue-rotate(180deg) !important;\r\n      -ms-filter: invert(100%);\r\n      -webkit-filter: contrast(90%) invert(90%) hue-rotate(180deg) !important;\r\n      text-rendering: optimizeSpeed;\r\n      image-rendering: optimizeSpeed;\r\n      -webkit-font-smoothing: antialiased;\r\n      -webkit-image-rendering: optimizeSpeed;\r\n      }\r\n\r\n      input, textarea, select {\r\n      color: purple;\r\n      }\r\n\r\n      img, video, iframe, canvas, svg, embed[type='application/x-shockwave-flash'], object[type='application/x-shockwave-flash'], *[style*='url('] {\r\n      filter: invert(100%) hue-rotate(-180deg) !important;\r\n      -ms-filter: invert(100%) !important;\r\n      -webkit-filter: invert(100%) hue-rotate(-180deg) !important;\r\n      }\r\n    </component>\r\n  </button>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: 'DarkMode',\r\n  data () {\r\n    return {\r\n      darkMode: false\r\n    }\r\n  },\r\n  methods: {\r\n    toggleDarkMode () {\r\n      this.darkMode = !this.darkMode\r\n      this.$emit('darkMode', this.darkMode)\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n.vue-darkmode {\r\n  padding: 6px 8px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  border-color: inherit;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n  appearance: none;\r\n  background-color: transparent;\r\n  color: inherit;\r\n}\r\n</style>\r\n"]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__ = "data-v-23cc55f3";
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    var __vue_component__ = normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      createInjector,
      undefined,
      undefined
    );

  function install (Vue) {
    if (install.installed) { return }
    install.installed = true;
    Vue.component('VueDarkMode', __vue_component__);
  }

  // auto install
  if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
    window.Vue.use(install);
  }

  exports.default = __vue_component__;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
