/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: Cannot find module 'C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\helper-compilation-targets\\lib\\index.js'\n    at createEsmNotFoundErr (node:internal/modules/cjs/loader:960:15)\n    at finalizeEsmResolution (node:internal/modules/cjs/loader:953:15)\n    at resolveExports (node:internal/modules/cjs/loader:482:14)\n    at Function.Module._findPath (node:internal/modules/cjs/loader:522:31)\n    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:919:27)\n    at Function.Module._load (node:internal/modules/cjs/loader:778:27)\n    at Module.require (node:internal/modules/cjs/loader:1005:19)\n    at require (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\v8-compile-cache\\v8-compile-cache.js:159:20)\n    at _helperCompilationTargets (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\config\\validation\\option-assertions.js:28:16)\n    at assertTargets (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\config\\validation\\option-assertions.js:285:11)\n    at C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\config\\validation\\options.js:119:5\n    at Array.forEach (<anonymous>)\n    at validateNested (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\config\\validation\\options.js:95:21)\n    at validate (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\config\\validation\\options.js:86:10)\n    at loadPrivatePartialConfig (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\config\\partial.js:80:50)\n    at loadPrivatePartialConfig.next (<anonymous>)\n    at loadFullConfig (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\config\\full.js:57:46)\n    at loadFullConfig.next (<anonymous>)\n    at Function.transform (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\transform.js:23:45)\n    at transform.next (<anonymous>)\n    at step (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\gensync\\index.js:261:32)\n    at evaluateAsync (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\gensync\\index.js:291:5)\n    at Function.errback (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\gensync\\index.js:113:7)\n    at transform (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\transform.js:40:19)\n    at node:internal/util:360:7\n    at new Promise (<anonymous>)\n    at transform (node:internal/util:346:12)\n    at C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\babel-loader\\lib\\transform.js:22:22\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\babel-loader\\lib\\transform.js:3:103)\n    at _next (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\babel-loader\\lib\\transform.js:5:194)\n    at C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\babel-loader\\lib\\transform.js:5:364\n    at new Promise (<anonymous>)\n    at C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\babel-loader\\lib\\transform.js:5:97\n    at C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\babel-loader\\lib\\transform.js:55:17\n    at C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\babel-loader\\lib\\cache.js:150:26");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Example Component"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm._v(
                "\n                    I'm an example component.\n                "
              ),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\vue-loader\\lib\\runtime\\componentNormalizer.js'");

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\vue\\dist\\vue.common.js'");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: Cannot find module 'C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\helper-compilation-targets\\lib\\index.js'\n    at createEsmNotFoundErr (node:internal/modules/cjs/loader:960:15)\n    at finalizeEsmResolution (node:internal/modules/cjs/loader:953:15)\n    at resolveExports (node:internal/modules/cjs/loader:482:14)\n    at Function.Module._findPath (node:internal/modules/cjs/loader:522:31)\n    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:919:27)\n    at Function.Module._load (node:internal/modules/cjs/loader:778:27)\n    at Module.require (node:internal/modules/cjs/loader:1005:19)\n    at require (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\v8-compile-cache\\v8-compile-cache.js:159:20)\n    at _helperCompilationTargets (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\config\\validation\\option-assertions.js:28:16)\n    at assertTargets (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\config\\validation\\option-assertions.js:285:11)\n    at C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\config\\validation\\options.js:119:5\n    at Array.forEach (<anonymous>)\n    at validateNested (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\config\\validation\\options.js:95:21)\n    at validate (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\config\\validation\\options.js:86:10)\n    at loadPrivatePartialConfig (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\config\\partial.js:80:50)\n    at loadPrivatePartialConfig.next (<anonymous>)\n    at loadFullConfig (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\config\\full.js:57:46)\n    at loadFullConfig.next (<anonymous>)\n    at Function.transform (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\transform.js:23:45)\n    at transform.next (<anonymous>)\n    at step (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\gensync\\index.js:261:32)\n    at evaluateAsync (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\gensync\\index.js:291:5)\n    at Function.errback (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\gensync\\index.js:113:7)\n    at transform (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\@babel\\core\\lib\\transform.js:40:19)\n    at node:internal/util:360:7\n    at new Promise (<anonymous>)\n    at transform (node:internal/util:346:12)\n    at C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\babel-loader\\lib\\transform.js:22:22\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\babel-loader\\lib\\transform.js:3:103)\n    at _next (C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\babel-loader\\lib\\transform.js:5:194)\n    at C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\babel-loader\\lib\\transform.js:5:364\n    at new Promise (<anonymous>)\n    at C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\babel-loader\\lib\\transform.js:5:97\n    at C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\babel-loader\\lib\\transform.js:55:17\n    at C:\\MAMP\\htdocs\\esercizi\\laravel-imdb\\laravel-imdb\\node_modules\\babel-loader\\lib\\cache.js:150:26");

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony import */ var _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ExampleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front.js":
/*!*******************************!*\
  !*** ./resources/js/front.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', __webpack_require__(/*! ./components/ExampleComponent.vue */ "./resources/js/components/ExampleComponent.vue")["default"]);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
  el: '#app'
});

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./resources/js/front.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MAMP\htdocs\esercizi\laravel-imdb\laravel-imdb\resources\js\front.js */"./resources/js/front.js");


/***/ })

/******/ });