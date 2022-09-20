(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/processes/scripts/edit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Menu.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Menu.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["options", "environment"],
  data: function data() {
    return {
      changeItems: {},
      newItems: [],
      sectionRight: true,
      items: []
    };
  },
  watch: {},
  computed: {
    section: function section() {
      var _this = this;

      var response = {};
      response.left = [];
      response.right = [];
      this.items = [];
      this.options.forEach(function (item) {
        if (item.type === "group") {
          item.items.forEach(function (sub) {
            _this.items.push(sub.id);

            return Object.assign(sub, _this.changeItems[sub.id]);
          });
        }

        response[item.section].push(Object.assign(item, _this.changeItems[item.id]));

        _this.items.push(item.id);
      });
      this.newItems.forEach(function (item) {
        if (_this.items.indexOf(item.id) === -1) {
          response[item.section].push(item);

          _this.items.push(item.id);
        }
      });
      return response;
    }
  },
  methods: {
    executeFunction: function executeFunction(callback) {
      if (typeof callback === "function") {
        callback();
      } else {
        eval("this.environment.".concat(callback));
      }
    },
    isVisible: function isVisible(item, type) {
      return item.type === type && item.hide !== true;
    },
    changeItem: function changeItem(id, value) {
      this.changeItems[id] = value;
      this.changeOptions(this.section.left);
      this.changeOptions(this.section.right);
    },
    changeOptions: function changeOptions(data) {
      var _this2 = this;

      data.forEach(function (item) {
        item = Object.assign(item, _this2.changeItems[item.id]);

        if (item.type === "group") {
          _this2.changeOptions(item.items);
        }
      });
    },
    addItem: function addItem(value) {
      this.newItems.push(value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_monaco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-monaco */ "./resources/js/vue-monaco-amd.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _customFilters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customFilters */ "./resources/js/processes/scripts/customFilters.js");
/* harmony import */ var _customFilters__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_customFilters__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Menu */ "./resources/js/components/Menu.vue");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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




/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["process", "script", "scriptExecutor", "testData"],
  data: function data() {
    var options = [{
      id: "button_script_save",
      section: "right",
      type: "button",
      title: this.$t("Save Script"),
      name: this.$t("Save"),
      icon: "fas fa-save",
      action: function action() {
        ProcessMaker.EventBus.$emit("save-script");
      }
    }];
    return {
      executionKey: null,
      resizing: false,
      monacoOptions: {
        automaticLayout: true
      },
      code: this.script.code,
      preview: {
        error: {
          exception: '',
          message: ''
        },
        executing: false,
        data: this.testData ? this.testData : "{}",
        config: "{}",
        output: "",
        success: false,
        failure: false
      },
      outputOpen: true,
      optionsMenu: options,
      boilerPlateTemplate: this.$t(" \r Welcome to ProcessMaker 4 Script Editor \r To access Environment Variables use {accessEnvVar} \r To access Request Data use {dataVariable} \r To access Configuration Data use {configVariable} \r To preview your script, click the Run button using the provided input and config data \r Return an array and it will be merged with the processes data \r Example API to retrieve user email by their ID {apiExample} \r API Documentation {apiDocsUrl} \r "),
      nonce: null
    };
  },
  watch: {
    "preview.output": function previewOutput(output) {
      if (output && !this.outputOpen) {
        this.outputOpen = true;
      }
    }
  },
  components: {
    MonacoEditor: vue_monaco__WEBPACK_IMPORTED_MODULE_0__["default"],
    TopMenu: _components_Menu__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: {
    language: function language() {
      return this.scriptExecutor.language;
    }
  },
  mounted: function mounted() {
    var _this = this;

    ProcessMaker.EventBus.$emit("script-builder-init", this);
    ProcessMaker.EventBus.$on("save-script", function (onSuccess, onError) {
      _this.save(onSuccess, onError);
    });
    window.addEventListener("resize", this.handleResize);
    var userID = document.head.querySelector('meta[name="user-id"]');
    window.Echo["private"]("ProcessMaker.Models.User.".concat(userID.content)).listen('.ProcessMaker\\Events\\ScriptResponseEvent', function (response) {
      _this.outputResponse(response);
    });
    this.loadBoilerplateTemplate();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    resizeEditor: function resizeEditor() {
      var domNode = this.editorReference.getDomNode();
      var clientHeight = this.$refs.editorContainer.clientHeight;
      domNode.style.height = clientHeight.toString() + 'px';
    },
    outputResponse: function outputResponse(response) {
      var _this2 = this;

      if (response.nonce !== this.nonce) {
        return;
      }

      if (this.executionKey && this.executionKey !== response.data.watcher) {
        return;
      }

      ProcessMaker.apiClient.get("scripts/execution/" + response.response.key).then(function (response) {
        if (response.data.exception) {
          _this2.preview.executing = false;
          _this2.preview.failure = true;
          _this2.preview.error.exception = response.data.exception;
          _this2.preview.error.message = response.data.message;
        } else {
          _this2.preview.executing = false;
          _this2.preview.success = true;
          _this2.preview.output = response.data;
        }
      });

      if (response.status !== 200) {
        this.preview.executing = false;
        this.preview.failure = true;
        this.preview.error.exception = response.status;
        this.preview.error.message = response.response;
      }
    },
    stopResizing: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.debounce(function () {
      this.resizing = false; //this.resizeEditor();
    }, 50),
    handleResize: function handleResize() {
      this.resizing = true;
      this.stopResizing();
    },
    execute: function execute() {
      var _this3 = this;

      this.preview.executing = true;
      this.preview.success = false;
      this.preview.failure = false;
      this.preview.output = undefined; // Attempt to execute a script, using our temp variables

      this.nonce = Math.random().toString(36);
      ProcessMaker.apiClient.post("scripts/" + this.script.id + "/preview", {
        code: this.code,
        data: this.preview.data,
        config: this.preview.config,
        timeout: this.script.timeout,
        nonce: this.nonce
      }).then(function (response) {
        _this3.executionKey = response.data.key;
      });
    },
    onClose: function onClose() {
      window.location.href = "/designer/scripts";
    },
    save: function save(onSuccess, onError) {
      var _this4 = this;

      ProcessMaker.apiClient.put("scripts/" + this.script.id, _defineProperty({
        code: this.code,
        title: this.script.title,
        description: this.script.description,
        script_executor_id: this.script.script_executor_id,
        run_as_user_id: this.script.run_as_user_id,
        timeout: this.script.timeout
      }, "description", this.script.description)).then(function (response) {
        ProcessMaker.alert(_this4.$t("The script was saved."), "success");

        if (typeof onSuccess === "function") {
          onSuccess(response);
        }
      })["catch"](function (err) {
        if (typeof onError === "function") {
          onError(err);
        }
      });
    },
    loadBoilerplateTemplate: function loadBoilerplateTemplate() {
      if (this.script.code === "[]") {
        switch (this.script.language) {
          case 'php':
            this.code = Vue.filter('php')(this.boilerPlateTemplate);
            break;

          case 'lua':
            this.code = Vue.filter('lua')(this.boilerPlateTemplate);
            break;

          case 'javascript':
            this.code = Vue.filter('javascript')(this.boilerPlateTemplate);
            break;

          case 'csharp':
            this.code = Vue.filter('csharp')(this.boilerPlateTemplate);
            break;

          case 'java':
            this.code = Vue.filter('java')(this.boilerPlateTemplate);
            break;

          case 'python':
            this.code = Vue.filter('python')(this.boilerPlateTemplate);
            break;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=style&index=0&id=b07b3d6c&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=style&index=0&id=b07b3d6c&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container[data-v-b07b3d6c] {\n  max-width: 100%;\n  padding: 0 0 0 0;\n}\n.script-toggle[data-v-b07b3d6c] {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background: #f7f7f7;\n}\n.accordion-icon[data-v-b07b3d6c] {\n  transition: all 200ms;\n}\n.collapsed .accordion-icon[data-v-b07b3d6c] {\n  transform: rotate(-90deg);\n}\n.editor-inspector[data-v-b07b3d6c] {\n  height: 200px;\n}\n.output[data-v-b07b3d6c] {\n  min-height: 300px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/nano-assign/dist/nano-assign.common.js":
/*!*************************************************************!*\
  !*** ./node_modules/nano-assign/dist/nano-assign.common.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * nano-assign v1.0.1
 * (c) 2018-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */


var index = function(obj) {
  var arguments$1 = arguments;

  for (var i = 1; i < arguments.length; i++) {
    // eslint-disable-next-line guard-for-in, prefer-rest-params
    for (var p in arguments[i]) { obj[p] = arguments$1[i][p]; }
  }
  return obj
};

module.exports = index;


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=style&index=0&id=b07b3d6c&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=style&index=0&id=b07b3d6c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScriptEditor.vue?vue&type=style&index=0&id=b07b3d6c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=style&index=0&id=b07b3d6c&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card-header",
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            [
              _vm._l(_vm.section.left, function (item, index) {
                return [
                  _vm.isVisible(item, "group")
                    ? _c(
                        "b-button-group",
                        { key: index, attrs: { size: "sm" } },
                        _vm._l(item.items, function (button, indexButton) {
                          return button.hide !== true
                            ? _c(
                                "b-button",
                                {
                                  key: indexButton,
                                  staticClass: "text-capitalize",
                                  attrs: {
                                    variant: button.variant || "secondary",
                                    title: button.title,
                                    tabindex: "1",
                                  },
                                  on: {
                                    click: function ($event) {
                                      return _vm.executeFunction(button.action)
                                    },
                                  },
                                },
                                [
                                  _c("i", { class: button.icon }),
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(button.name) +
                                      "\n          "
                                  ),
                                ]
                              )
                            : _vm._e()
                        }),
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isVisible(item, "button")
                    ? _c(
                        "b-button",
                        {
                          key: index,
                          staticClass: "text-capitalize",
                          attrs: {
                            variant: item.variant || "secondary",
                            size: "sm",
                            title: item.title,
                          },
                          on: {
                            click: function ($event) {
                              return _vm.executeFunction(item.action)
                            },
                          },
                        },
                        [
                          _c("i", { class: item.icon }),
                          _vm._v(
                            "\n          " + _vm._s(item.name) + "\n        "
                          ),
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  item.type !== "group" && item.type !== "button"
                    ? _c(item.type, {
                        key: index,
                        tag: "component",
                        attrs: { options: item.options },
                      })
                    : _vm._e(),
                ]
              }),
            ],
            2
          ),
          _vm._v(" "),
          _vm.sectionRight
            ? _c(
                "b-col",
                { staticClass: "text-right" },
                [
                  _vm._l(_vm.section.right, function (item, index) {
                    return [
                      _vm.isVisible(item, "group")
                        ? _c(
                            "b-button-group",
                            { key: index, attrs: { size: "sm" } },
                            _vm._l(item.items, function (button, indexButton) {
                              return button.hide !== true
                                ? _c(
                                    "b-button",
                                    {
                                      key: "group-" + indexButton,
                                      staticClass: "text-capitalize",
                                      attrs: {
                                        variant: button.variant || "secondary",
                                        title: button.title,
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.executeFunction(
                                            button.action
                                          )
                                        },
                                      },
                                    },
                                    [
                                      _c("i", { class: button.icon }),
                                      _vm._v(
                                        "\n            " +
                                          _vm._s(button.name) +
                                          "\n          "
                                      ),
                                    ]
                                  )
                                : _vm._e()
                            }),
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isVisible(item, "button")
                        ? _c(
                            "b-button",
                            {
                              key: index,
                              staticClass: "text-capitalize",
                              attrs: {
                                size: "sm",
                                variant: item.variant || "secondary",
                                title: item.title,
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.executeFunction(item.action)
                                },
                              },
                            },
                            [
                              _c("i", { class: item.icon }),
                              _vm._v(
                                "\n          " +
                                  _vm._s(item.name) +
                                  "\n        "
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      item.type !== "group" && item.type !== "button"
                        ? _c(item.type, {
                            key: index,
                            tag: "component",
                            attrs: { options: item.options },
                          })
                        : _vm._e(),
                    ]
                  }),
                ],
                2
              )
            : _vm._e(),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=template&id=b07b3d6c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=template&id=b07b3d6c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-container",
    { staticClass: "h-100" },
    [
      _c(
        "b-card",
        { staticClass: "h-100", attrs: { "no-body": "" } },
        [
          _c("top-menu", {
            ref: "menuScript",
            attrs: { options: _vm.optionsMenu },
          }),
          _vm._v(" "),
          _c(
            "b-card-body",
            { ref: "editorContainer", staticClass: "overflow-hidden p-4" },
            [
              _c(
                "b-row",
                { staticClass: "h-100" },
                [
                  _c(
                    "b-col",
                    { staticClass: "vh-25 p-0", attrs: { cols: "9" } },
                    [
                      _c("monaco-editor", {
                        staticClass: "h-100",
                        class: { hidden: _vm.resizing },
                        attrs: {
                          options: _vm.monacoOptions,
                          language: _vm.language,
                        },
                        model: {
                          value: _vm.code,
                          callback: function ($$v) {
                            _vm.code = $$v
                          },
                          expression: "code",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "h-100", attrs: { cols: "3" } },
                    [
                      _c(
                        "b-card",
                        { staticClass: "h-100", attrs: { "no-body": "" } },
                        [
                          _c(
                            "b-card-header",
                            { staticClass: "light-gray-background" },
                            [
                              _c(
                                "b-row",
                                { staticClass: "d-flex align-items-center" },
                                [
                                  _c("b-col", [
                                    _vm._v(_vm._s(_vm.$t("Debugger"))),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "text-right",
                                      attrs: { "align-self": "end" },
                                    },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          staticClass:
                                            "text-capitalize pl-3 pr-3",
                                          attrs: {
                                            disabled: _vm.preview.executing,
                                            size: "sm",
                                          },
                                          on: { click: _vm.execute },
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "fas fa-caret-square-right",
                                          }),
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(_vm.$t("Run")) +
                                              "\n                  "
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-card-body",
                            { staticClass: "overflow-hidden p-0" },
                            [
                              _c(
                                "b-list-group",
                                { staticClass: "w-100 h-100 overflow-auto" },
                                [
                                  _c(
                                    "b-list-group-item",
                                    {
                                      staticClass:
                                        "script-toggle border-0 mb-0",
                                    },
                                    [
                                      _c(
                                        "b-row",
                                        {
                                          directives: [
                                            {
                                              name: "b-toggle",
                                              rawName:
                                                "v-b-toggle.configuration",
                                              modifiers: {
                                                configuration: true,
                                              },
                                            },
                                          ],
                                        },
                                        [
                                          _c("b-col", [
                                            _c("i", {
                                              staticClass: "fas fa-cog",
                                            }),
                                            _vm._v(
                                              "\n                      " +
                                                _vm._s(
                                                  _vm.$t("Configuration")
                                                ) +
                                                "\n                    "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "b-col",
                                            {
                                              staticClass: "mr-2",
                                              attrs: {
                                                "align-self": "end",
                                                cols: "1",
                                              },
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fas fa-chevron-down accordion-icon",
                                              }),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-list-group-item",
                                    {
                                      staticClass:
                                        "p-0 border-left-0 border-right-0 border-top-0 mb-0",
                                    },
                                    [
                                      _c(
                                        "b-collapse",
                                        { attrs: { id: "configuration" } },
                                        [
                                          _c("monaco-editor", {
                                            staticClass: "editor-inspector",
                                            attrs: {
                                              options: Object.assign(
                                                {},
                                                _vm.monacoOptions,
                                                { minimap: { enabled: false } }
                                              ),
                                              language: "json",
                                            },
                                            model: {
                                              value: _vm.preview.config,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.preview,
                                                  "config",
                                                  $$v
                                                )
                                              },
                                              expression: "preview.config",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-list-group-item",
                                    {
                                      staticClass:
                                        "script-toggle border-0 mb-0",
                                    },
                                    [
                                      _c(
                                        "b-row",
                                        {
                                          directives: [
                                            {
                                              name: "b-toggle",
                                              rawName: "v-b-toggle.input",
                                              modifiers: { input: true },
                                            },
                                          ],
                                        },
                                        [
                                          _c("b-col", [
                                            _c("i", {
                                              staticClass: "fas fa-sign-in-alt",
                                            }),
                                            _vm._v(
                                              "\n                      " +
                                                _vm._s(_vm.$t("Sample Input")) +
                                                "\n                    "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "b-col",
                                            {
                                              staticClass: "mr-2",
                                              attrs: {
                                                "align-self": "end",
                                                cols: "1",
                                              },
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fas fa-chevron-down accordion-icon",
                                              }),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-list-group-item",
                                    {
                                      staticClass:
                                        "p-0 border-left-0 border-right-0 border-top-0 mb-0",
                                    },
                                    [
                                      _c(
                                        "b-collapse",
                                        { attrs: { id: "input" } },
                                        [
                                          _c("monaco-editor", {
                                            staticClass: "editor-inspector",
                                            attrs: {
                                              options: Object.assign(
                                                {},
                                                _vm.monacoOptions,
                                                { minimap: { enabled: false } }
                                              ),
                                              language: "json",
                                            },
                                            model: {
                                              value: _vm.preview.data,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.preview,
                                                  "data",
                                                  $$v
                                                )
                                              },
                                              expression: "preview.data",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-list-group-item",
                                    {
                                      staticClass:
                                        "script-toggle border-0 mb-0",
                                    },
                                    [
                                      _c(
                                        "b-row",
                                        {
                                          class: _vm.outputOpen
                                            ? null
                                            : "collapsed",
                                          attrs: {
                                            "aria-expanded": _vm.outputOpen
                                              ? "true"
                                              : "false",
                                            "aria-controls": "output",
                                          },
                                          on: {
                                            click: function ($event) {
                                              _vm.outputOpen = !_vm.outputOpen
                                            },
                                          },
                                        },
                                        [
                                          _c("b-col", [
                                            _c("i", {
                                              staticClass:
                                                "far fa-caret-square-right",
                                            }),
                                            _vm._v(
                                              "\n                      " +
                                                _vm._s(_vm.$t("Output")) +
                                                "\n                    "
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "b-col",
                                            {
                                              staticClass: "mr-2",
                                              attrs: {
                                                "align-self": "end",
                                                cols: "1",
                                              },
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fas fa-chevron-down accordion-icon",
                                              }),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-list-group-item",
                                    {
                                      staticClass:
                                        "p-0 border-left-0 border-right-0 border-top-0 mb-0",
                                    },
                                    [
                                      _c(
                                        "b-collapse",
                                        {
                                          staticClass: "bg-dark",
                                          attrs: {
                                            id: "output",
                                            visible: _vm.outputOpen,
                                          },
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "output text-white",
                                            },
                                            [
                                              _vm.preview.success
                                                ? _c(
                                                    "pre",
                                                    {
                                                      staticClass: "text-white",
                                                    },
                                                    [
                                                      _c("samp", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.preview.output
                                                          )
                                                        ),
                                                      ]),
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.preview.failure
                                                ? _c("div", [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "text-light bg-danger",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.preview.error
                                                              .exception
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "text-light text-monospace small",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.preview.error
                                                              .message
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                  ])
                                                : _vm._e(),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("b-card-footer", { staticClass: "d-flex" }, [
            _c("span", { staticClass: "text-secondary text-sm" }, [
              _vm._v("\n        Language:\n        "),
              _c("span", { staticClass: "text-uppercase" }, [
                _vm._v(_vm._s(_vm.language)),
              ]),
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "ml-auto" }, [
              _vm.preview.executing
                ? _c("i", { staticClass: "fas fa-spinner fa-spin" })
                : _vm._e(),
              _vm._v(" "),
              _vm.preview.success
                ? _c("i", { staticClass: "fas fa-check text-success" })
                : _vm._e(),
              _vm._v(" "),
              _vm.preview.failure
                ? _c("i", { staticClass: "fas fa-times-circle text-danger" })
                : _vm._e(),
            ]),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-monaco/dist/vue-monaco.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue-monaco/dist/vue-monaco.es.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nano_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nano-assign */ "./node_modules/nano-assign/dist/nano-assign.common.js");
/* harmony import */ var nano_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nano_assign__WEBPACK_IMPORTED_MODULE_0__);


var MonacoEditor = {
  name: 'MonacoEditor',
  props: {
    original: String,
    value: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      "default": 'vs'
    },
    language: String,
    options: Object,
    amdRequire: {
      type: Function
    },
    diffEditor: {
      type: Boolean,
      "default": false
    }
  },
  model: {
    event: 'change'
  },
  watch: {
    options: {
      deep: true,
      handler: function handler(options) {
        if (this.editor) {
          var editor = this.getModifiedEditor();
          editor.updateOptions(options);
        }
      }
    },
    value: function value(newValue) {
      if (this.editor) {
        var editor = this.getModifiedEditor();

        if (newValue !== editor.getValue()) {
          editor.setValue(newValue);
        }
      }
    },
    original: function original(newValue) {
      if (this.editor && this.diffEditor) {
        var editor = this.getOriginalEditor();

        if (newValue !== editor.getValue()) {
          editor.setValue(newValue);
        }
      }
    },
    language: function language(newVal) {
      if (this.editor) {
        var editor = this.getModifiedEditor();
        this.monaco.editor.setModelLanguage(editor.getModel(), newVal);
      }
    },
    theme: function theme(newVal) {
      if (this.editor) {
        this.monaco.editor.setTheme(newVal);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.amdRequire) {
      this.amdRequire(['vs/editor/editor.main'], function () {
        _this.monaco = window.monaco;

        _this.$nextTick(function () {
          _this.initMonaco(window.monaco);
        });
      });
    } else {
      // ESM format so it can't be resolved by commonjs `require` in eslint
      // eslint-disable-next-line import/no-unresolved
      var monaco = __webpack_require__(/*! monaco-editor */ "monaco-editor");

      this.monaco = monaco;
      this.$nextTick(function () {
        _this.initMonaco(monaco);
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.editor && this.editor.dispose();
  },
  methods: {
    initMonaco: function initMonaco(monaco) {
      var _this2 = this;

      this.$emit('editorWillMount', this.monaco);
      var options = nano_assign__WEBPACK_IMPORTED_MODULE_0___default()({
        value: this.value,
        theme: this.theme,
        language: this.language
      }, this.options);

      if (this.diffEditor) {
        this.editor = monaco.editor.createDiffEditor(this.$el, options);
        var originalModel = monaco.editor.createModel(this.original, this.language);
        var modifiedModel = monaco.editor.createModel(this.value, this.language);
        this.editor.setModel({
          original: originalModel,
          modified: modifiedModel
        });
      } else {
        this.editor = monaco.editor.create(this.$el, options);
      } // @event `change`


      var editor = this.getModifiedEditor();
      editor.onDidChangeModelContent(function (event) {
        var value = editor.getValue();

        if (_this2.value !== value) {
          _this2.$emit('change', value, event);
        }
      });
      this.$emit('editorDidMount', this.editor);
    },

    /** @deprecated */
    getMonaco: function getMonaco() {
      return this.editor;
    },
    getEditor: function getEditor() {
      return this.editor;
    },
    getModifiedEditor: function getModifiedEditor() {
      return this.diffEditor ? this.editor.getModifiedEditor() : this.editor;
    },
    getOriginalEditor: function getOriginalEditor() {
      return this.diffEditor ? this.editor.getOriginalEditor() : this.editor;
    },
    focus: function focus() {
      this.editor.focus();
    }
  },
  render: function render(h) {
    return h('div');
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(MonacoEditor.name, MonacoEditor);
}

/* harmony default export */ __webpack_exports__["default"] = (MonacoEditor);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/components/Menu.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Menu.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu_vue_vue_type_template_id_7fa2c4ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=7fa2c4ca& */ "./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./resources/js/components/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Menu_vue_vue_type_template_id_7fa2c4ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Menu_vue_vue_type_template_id_7fa2c4ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Menu.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Menu.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_7fa2c4ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=template&id=7fa2c4ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_7fa2c4ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_7fa2c4ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/processes/scripts/components/ScriptEditor.vue":
/*!********************************************************************!*\
  !*** ./resources/js/processes/scripts/components/ScriptEditor.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScriptEditor_vue_vue_type_template_id_b07b3d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScriptEditor.vue?vue&type=template&id=b07b3d6c&scoped=true& */ "./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=template&id=b07b3d6c&scoped=true&");
/* harmony import */ var _ScriptEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScriptEditor.vue?vue&type=script&lang=js& */ "./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ScriptEditor_vue_vue_type_style_index_0_id_b07b3d6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScriptEditor.vue?vue&type=style&index=0&id=b07b3d6c&lang=scss&scoped=true& */ "./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=style&index=0&id=b07b3d6c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ScriptEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScriptEditor_vue_vue_type_template_id_b07b3d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ScriptEditor_vue_vue_type_template_id_b07b3d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b07b3d6c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/processes/scripts/components/ScriptEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScriptEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScriptEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScriptEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=style&index=0&id=b07b3d6c&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=style&index=0&id=b07b3d6c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ScriptEditor_vue_vue_type_style_index_0_id_b07b3d6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScriptEditor.vue?vue&type=style&index=0&id=b07b3d6c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=style&index=0&id=b07b3d6c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ScriptEditor_vue_vue_type_style_index_0_id_b07b3d6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ScriptEditor_vue_vue_type_style_index_0_id_b07b3d6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ScriptEditor_vue_vue_type_style_index_0_id_b07b3d6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ScriptEditor_vue_vue_type_style_index_0_id_b07b3d6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=template&id=b07b3d6c&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=template&id=b07b3d6c&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScriptEditor_vue_vue_type_template_id_b07b3d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScriptEditor.vue?vue&type=template&id=b07b3d6c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/processes/scripts/components/ScriptEditor.vue?vue&type=template&id=b07b3d6c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScriptEditor_vue_vue_type_template_id_b07b3d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScriptEditor_vue_vue_type_template_id_b07b3d6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/processes/scripts/customFilters.js":
/*!*********************************************************!*\
  !*** ./resources/js/processes/scripts/customFilters.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// PHP
Vue.filter('php', function (value) {
  value = value.split("\r");
  var format = '';
  var content = [];
  value.forEach(function (line, i) {
    if (i == 0) {
      format = '<?php \r\n/* ' + line;
    } else if (i == value.length - 1) {
      format = line + '*/';
    } else {
      line = line.replace('{accessEnvVar}', "getenv(\"ENV_VAR_NAME\")");
      line = line.replace('{dataVariable}', "$data");
      line = line.replace('{configVariable}', "$config");
      line = line.replace('{apiExample}', "$api->users()->getUserById(1)['email']");
      line = line.replace('{apiDocsUrl}', "https://github.com/ProcessMaker/docker-executor-php/tree/master/docs/sdk");
      format = ' * ' + line;
    }

    content.push(format);
  });
  return content.join("\n") + "\n\n return [];";
}); // JAVASCRIPT

Vue.filter('javascript', function (value) {
  value = value.split("\r");
  var format = '';
  var content = [];
  value.forEach(function (line, i) {
    if (i == 0) {
      format = '/* ' + line;
    } else if (i == value.length - 1) {
      format = line + '*/';
    } else {
      line = line.replace('{accessEnvVar}', "process.env.ENV_VAR_NAME");
      line = line.replace('{dataVariable}', "data");
      line = line.replace('{configVariable}', "config");
      line = line.replace('{apiExample}', "getUserById(id, (error, data, response) => {})");
      line = line.replace('{apiDocsUrl}', "https://github.com/ProcessMaker/docker-executor-node/tree/master/docs/sdk");
      format = ' * ' + line;
    }

    content.push(format);
  });
  return content.join("\n") + "\n\n return {};";
}); // LUA

Vue.filter('lua', function (value) {
  value = value.split("\r");
  var format = '';
  var content = [];
  value.forEach(function (line, i) {
    if (i == 0) {
      format = '--[[ ' + line;
    } else if (i == value.length - 1) {
      format = line + ' --]]';
    } else {
      line = line.replace('{accessEnvVar}', "os.getenv(\"ENV_VAR_NAME\")");
      line = line.replace('{dataVariable}', "data");
      line = line.replace('{configVariable}', "config");
      line = line.replace('{apiExample}', "users_api:get_users(filter, order_by, order_direction, per_page, include)");
      line = line.replace('{apiDocsUrl}', "https://processmaker.gitbook.io/processmaker/designing-processes/scripts/script-editor#processmaker-and-environment-variable-syntax-usage-sdk-and-examples");
      format = '  ' + line;
    }

    content.push(format);
  });
  return content.join("\n") + "\n\n return {};";
}); // C#

Vue.filter('csharp', function (value) {
  value = value.split("\r");
  var format = '';
  var content = [];
  value.forEach(function (line, i) {
    if (i == 0) {
      format = '/* ' + line;
    } else if (i == value.length - 1) {
      format = line + ' */';
    } else {
      line = line.replace('{accessEnvVar}', "System.Environment.GetEnvironmentVariable('ENV_VAR_NAME')");
      line = line.replace('{dataVariable}', "data");
      line = line.replace('{configVariable}', "config");
      line = line.replace('{apiExample}', "apiInstance.GetUserById(id)");
      line = line.replace('{apiDocsUrl}', "https://processmaker.gitbook.io/processmaker/designing-processes/scripts/script-editor#processmaker-and-environment-variable-syntax-usage-sdk-and-examples");
      format = line;
    }

    content.push(format);
  });
  return content.join("\n") + "\n\n return {};";
}); // JAVA

Vue.filter('java', function (value) {
  value = value.split("\r");
  var format = '';
  var content = [];
  value.forEach(function (line, i) {
    if (i == 0) {
      format = '/** ' + line;
    } else if (i == value.length - 1) {
      format = line + '*/';
    } else {
      line = line.replace('{accessEnvVar}', "System.getenv(\"ENV_VAR_NAME\")");
      line = line.replace('{dataVariable}', "data");
      line = line.replace('{configVariable}', "config");
      line = line.replace('{apiExample}', "apiInstance.getUserByID(id);");
      line = line.replace('{apiDocsUrl}', "https://processmaker.gitbook.io/processmaker/designing-processes/scripts/script-editor#processmaker-and-environment-variable-syntax-usage-sdk-and-examples");
      format = ' * ' + line;
    }

    content.push(format);
  });
  return content.join("\n") + "\n\n return {};";
}); // Python

Vue.filter('python', function (value) {
  value = value.split("\r");
  var format = '';
  var content = [];
  value.shift();
  value.forEach(function (line, i) {
    line = line.replace('{accessEnvVar}', "os.environ['ENV_VAR_NAME']");
    line = line.replace('{dataVariable}', "the data variable");
    line = line.replace('{configVariable}', "the config variable");
    line = line.replace('{apiExample}', ':');
    line = line.replace('{apiDocsUrl}', "https://processmaker.gitbook.io/processmaker/designing-processes/scripts/script-editor#processmaker-and-environment-variable-syntax-usage-sdk-and-examples");
    format = '# ' + line;
    content.push(format);
  });
  content.push("#  users_api_instance = pmsdk.UsersApi(pmsdk.ApiClient(configuration))");
  content.push("#  user = users_api_instance.get_user_by_id(1)");
  content.push("#  output = {\"name\": user.fullname}");
  return content.join("\n") + "\n\noutput={};";
});

/***/ }),

/***/ "./resources/js/processes/scripts/edit.js":
/*!************************************************!*\
  !*** ./resources/js/processes/scripts/edit.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ScriptEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ScriptEditor */ "./resources/js/processes/scripts/components/ScriptEditor.vue");


new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#script-container',
  components: {
    ScriptEditor: _components_ScriptEditor__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./resources/js/vue-monaco-amd.js":
/*!****************************************!*\
  !*** ./resources/js/vue-monaco-amd.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_monaco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/vue-monaco */ "./node_modules/vue-monaco/dist/vue-monaco.es.js");
/**
 * Replace the default vue-monaco with one that uses AMD modules
 * so we don't have to edit every instance of vue-monaco and add
 * the amdRequire prop.
 * 
 * See https://github.com/egoist/vue-monaco#use-amd-version
 * 
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _node_modules_vue_monaco__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    amdRequire: {
      "default": function _default() {
        return window.require;
      }
    }
  },
  mounted: function mounted() {
    // Workaround for https://github.com/microsoft/monaco-editor/issues/1855
    var ro = new ResizeObserver(_.debounce(this.resize, 150));
    ro.observe(this.$el);
  },
  methods: {
    resize: function resize() {
      if (this.editor) {
        this.editor.layout();
      }
    }
  }
});

/***/ }),

/***/ 19:
/*!******************************************************!*\
  !*** multi ./resources/js/processes/scripts/edit.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/pianat.ai/resources/js/processes/scripts/edit.js */"./resources/js/processes/scripts/edit.js");


/***/ }),

/***/ "monaco-editor":
/*!********************************!*\
  !*** external "monaco-editor" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = monaco-editor;

/***/ })

},[[19,"/js/manifest","/js/vendor"]]]);