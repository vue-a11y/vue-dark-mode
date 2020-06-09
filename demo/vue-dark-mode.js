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

  var script = {
    name: 'DarkMode',

    props: {
      defaultMode: {
        type: String,
        default: 'light'
      },
      modes: {
        type: Array,
        default: function default$1 () {
          return ['light', 'dark', 'system']
        }
      },
      className: {
        type: String,
        default: '%cm-mode'
      },
      storage: {
        type: String,
        default: 'localStorage'
      },
      metaThemeColor: {
        type: Object,
        default: function () { return ({}); }
      },
      ariaLabel: {
        type: String,
        default: 'toggle to %cm mode color'
      },
      ariaLive: {
        type: String,
        default: '%cm color mode is enabled'
      }
    },

    data: function data () {
      return {
        elementMetaThemeColor: null,
        chosenMode: null,
        currentMode: null,
        listenerDark: null
      }
    },

    computed: {
      getPrefersColorScheme: function getPrefersColorScheme () {
        var this$1 = this;

        if (this.$isServer) { return false }
        var colorSchemeTypes = ['dark', 'light'];
        var colorScheme = null;
        colorSchemeTypes.forEach(function (type) {
          if (this$1.getMediaQueryList(type).matches) {
            colorScheme = type;
          }
        });
        return colorScheme
      },

      getAriaLabel: function getAriaLabel () {
        return this.ariaLabel.replace(/%cm/g, this.getNextMode)
      },

      getAriaLive: function getAriaLive () {
        return this.ariaLive.replace(/%cm/g, this.chosenMode)
      },

      getNextMode: function getNextMode () {
        var this$1 = this;

        var currentIndex = this.modes.findIndex(function (mode) { return mode === this$1.chosenMode; });
        return this.modes[currentIndex === (this.modes.length - 1) ? 0 : currentIndex + 1]
      },

      getStorageColorMode: function getStorageColorMode () {
        return window[this.storage].getItem('colorMode')
      },

      isSystem: function isSystem () {
        return this.getStorageColorMode === 'system'
      }
    },

    created: function created () {
      if (this.getPrefersColorScheme && this.isSystem) {
        this.currentMode = this.getPrefersColorScheme;
        return this.setMode('system')
      }
      var colorMode = this.getStorageColorMode || this.defaultMode;
      this.currentMode = colorMode;
      this.setMode(colorMode);
    },

    mounted: function mounted () {
      this.elementMetaThemeColor = document.querySelector('meta[name="theme-color"]');
      this.listenerDark = this.getMediaQueryList('dark');
      this.listenerDark.addListener(this.handlePreferColorScheme);
    },

    beforeDestroy: function beforeDestroy () {
      this.listenerDark.removeListener(this.handlePreferColorScheme);
    },

    methods: {
      setMode: function setMode (chosenMode) {
        this.chosenMode = chosenMode;
        window[this.storage].setItem('colorMode', this.chosenMode);
        this.handleColorModeClass('add');
        if (Object.keys(this.metaThemeColor).length) { this.setMetaThemeColor(this.metaThemeColor[this.currentMode] || this.metaThemeColor[this.getPrefersColorScheme]); }
        this.$emit('change-mode', this.chosenMode);
      },

      getMediaQueryList: function getMediaQueryList (type) {
        return window.matchMedia(("(prefers-color-scheme: " + type + ")"))
      },

      setMetaThemeColor: function setMetaThemeColor (color) {
        var this$1 = this;

        if (color) {
          this.$nextTick(function () {
            if (this$1.elementMetaThemeColor) { this$1.elementMetaThemeColor.setAttribute('content', color); }
          });
        }
      },

      handleColorModeClass: function handleColorModeClass (action) {
        if (this.$isServer) { return }
        return document.documentElement.classList[action](("" + (this.className.replace(/%cm/g, this.currentMode))))
      },

      handlePreferColorScheme: function handlePreferColorScheme (e) {
        if (this.isSystem) {
          this.handleColorModeClass('remove');
          this.currentMode = e.matches ? 'dark' : 'light';
          this.setMode('system');
        }
      },

      toggleColorMode: function toggleColorMode () {
        var selectedMode = this.getNextMode;
        this.handleColorModeClass('remove');
        this.currentMode = selectedMode === 'system' ? this.getPrefersColorScheme : selectedMode;
        this.setMode(selectedMode);
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
        staticClass: "vue-dark-mode",
        attrs: { "aria-label": _vm.getAriaLabel, title: _vm.getAriaLabel },
        on: { click: _vm.toggleColorMode }
      },
      [
        _c("span", {
          staticClass: "visually-hidden",
          attrs: { "aria-live": "assertive" },
          domProps: { textContent: _vm._s(_vm.getAriaLive) }
        }),
        _vm._v(" "),
        _vm._t("default", null, { mode: _vm.chosenMode })
      ],
      2
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) { return }
      inject("data-v-57bbf072_0", { source: "\n.vue-dark-mode {\r\n  appearance: none;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  background-color: transparent;\r\n  color: inherit;\r\n  border: none;\r\n  cursor: pointer;\n}\n.visually-hidden {\r\n  position: absolute;\r\n  white-space: nowrap;\r\n  width: 1px;\r\n  height: 1px;\r\n  overflow: hidden;\r\n  border: 0;\r\n  padding: 0;\r\n  clip: rect(0 0 0 0);\r\n  clip-path: inset(50%);\r\n  margin: -1px;\n}\r\n", map: {"version":3,"sources":["D:\\Work\\Projetos\\Open-source\\Github\\Organization\\vue-a11y\\repositories\\vue-dark-mode\\src\\VueDarkMode.vue"],"names":[],"mappings":";AAkKA;EACA,gBAAA;EACA,wBAAA;EACA,qBAAA;EACA,6BAAA;EACA,cAAA;EACA,YAAA;EACA,eAAA;AACA;AAEA;EACA,kBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,mBAAA;EACA,qBAAA;EACA,YAAA;AACA","file":"VueDarkMode.vue","sourcesContent":["<template>\r\n  <button\r\n    :aria-label=\"getAriaLabel\"\r\n    :title=\"getAriaLabel\"\r\n    class=\"vue-dark-mode\"\r\n    @click=\"toggleColorMode\"\r\n  >\r\n    <span\r\n      class=\"visually-hidden\"\r\n      aria-live=\"assertive\"\r\n      v-text=\"getAriaLive\"\r\n    />\r\n    <slot :mode=\"chosenMode\" />\r\n  </button>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: 'DarkMode',\r\n\r\n  props: {\r\n    defaultMode: {\r\n      type: String,\r\n      default: 'light'\r\n    },\r\n    modes: {\r\n      type: Array,\r\n      default () {\r\n        return ['light', 'dark', 'system']\r\n      }\r\n    },\r\n    className: {\r\n      type: String,\r\n      default: '%cm-mode'\r\n    },\r\n    storage: {\r\n      type: String,\r\n      default: 'localStorage'\r\n    },\r\n    metaThemeColor: {\r\n      type: Object,\r\n      default: () => ({})\r\n    },\r\n    ariaLabel: {\r\n      type: String,\r\n      default: 'toggle to %cm mode color'\r\n    },\r\n    ariaLive: {\r\n      type: String,\r\n      default: '%cm color mode is enabled'\r\n    }\r\n  },\r\n\r\n  data () {\r\n    return {\r\n      elementMetaThemeColor: null,\r\n      chosenMode: null,\r\n      currentMode: null,\r\n      listenerDark: null\r\n    }\r\n  },\r\n\r\n  computed: {\r\n    getPrefersColorScheme () {\r\n      if (this.$isServer) return false\r\n      const colorSchemeTypes = ['dark', 'light']\r\n      let colorScheme = null\r\n      colorSchemeTypes.forEach(type => {\r\n        if (this.getMediaQueryList(type).matches) {\r\n          colorScheme = type\r\n        }\r\n      })\r\n      return colorScheme\r\n    },\r\n\r\n    getAriaLabel () {\r\n      return this.ariaLabel.replace(/%cm/g, this.getNextMode)\r\n    },\r\n\r\n    getAriaLive () {\r\n      return this.ariaLive.replace(/%cm/g, this.chosenMode)\r\n    },\r\n\r\n    getNextMode () {\r\n      const currentIndex = this.modes.findIndex(mode => mode === this.chosenMode)\r\n      return this.modes[currentIndex === (this.modes.length - 1) ? 0 : currentIndex + 1]\r\n    },\r\n\r\n    getStorageColorMode () {\r\n      return window[this.storage].getItem('colorMode')\r\n    },\r\n\r\n    isSystem () {\r\n      return this.getStorageColorMode === 'system'\r\n    }\r\n  },\r\n\r\n  created () {\r\n    if (this.getPrefersColorScheme && this.isSystem) {\r\n      this.currentMode = this.getPrefersColorScheme\r\n      return this.setMode('system')\r\n    }\r\n    const colorMode = this.getStorageColorMode || this.defaultMode\r\n    this.currentMode = colorMode\r\n    this.setMode(colorMode)\r\n  },\r\n\r\n  mounted () {\r\n    this.elementMetaThemeColor = document.querySelector('meta[name=\"theme-color\"]')\r\n    this.listenerDark = this.getMediaQueryList('dark')\r\n    this.listenerDark.addListener(this.handlePreferColorScheme)\r\n  },\r\n\r\n  beforeDestroy () {\r\n    this.listenerDark.removeListener(this.handlePreferColorScheme)\r\n  },\r\n\r\n  methods: {\r\n    setMode (chosenMode) {\r\n      this.chosenMode = chosenMode\r\n      window[this.storage].setItem('colorMode', this.chosenMode)\r\n      this.handleColorModeClass('add')\r\n      if (Object.keys(this.metaThemeColor).length) this.setMetaThemeColor(this.metaThemeColor[this.currentMode] || this.metaThemeColor[this.getPrefersColorScheme])\r\n      this.$emit('change-mode', this.chosenMode)\r\n    },\r\n\r\n    getMediaQueryList (type) {\r\n      return window.matchMedia(`(prefers-color-scheme: ${type})`)\r\n    },\r\n\r\n    setMetaThemeColor (color) {\r\n      if (color) {\r\n        this.$nextTick(() => {\r\n          if (this.elementMetaThemeColor) this.elementMetaThemeColor.setAttribute('content', color)\r\n        })\r\n      }\r\n    },\r\n\r\n    handleColorModeClass (action) {\r\n      if (this.$isServer) return\r\n      return document.documentElement.classList[action](`${this.className.replace(/%cm/g, this.currentMode)}`)\r\n    },\r\n\r\n    handlePreferColorScheme (e) {\r\n      if (this.isSystem) {\r\n        this.handleColorModeClass('remove')\r\n        this.currentMode = e.matches ? 'dark' : 'light'\r\n        this.setMode('system')\r\n      }\r\n    },\r\n\r\n    toggleColorMode () {\r\n      const selectedMode = this.getNextMode\r\n      this.handleColorModeClass('remove')\r\n      this.currentMode = selectedMode === 'system' ? this.getPrefersColorScheme : selectedMode\r\n      this.setMode(selectedMode)\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n.vue-dark-mode {\r\n  appearance: none;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  background-color: transparent;\r\n  color: inherit;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.visually-hidden {\r\n  position: absolute;\r\n  white-space: nowrap;\r\n  width: 1px;\r\n  height: 1px;\r\n  overflow: hidden;\r\n  border: 0;\r\n  padding: 0;\r\n  clip: rect(0 0 0 0);\r\n  clip-path: inset(50%);\r\n  margin: -1px;\r\n}\r\n</style>\r\n"]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__ = undefined;
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

  exports.DarkMode = __vue_component__;
  exports.default = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
