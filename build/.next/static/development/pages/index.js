"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof4 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"], {
  /***/
  "../node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
  /*!*****************************************************************************************!*\
    !*** ../node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
    \*****************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNextNode_modulesBabelRuntimeHelpersAssertThisInitializedJs(module, exports) {
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    module.exports = _assertThisInitialized;
    /***/
  },

  /***/
  "../node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
  /*!**********************************************************************************!*\
    !*** ../node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
    \**********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNextNode_modulesBabelRuntimeHelpersClassCallCheckJs(module, exports) {
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    module.exports = _classCallCheck;
    /***/
  },

  /***/
  "../node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
  /*!*******************************************************************************!*\
    !*** ../node_modules/next/node_modules/@babel/runtime/helpers/createClass.js ***!
    \*******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNextNode_modulesBabelRuntimeHelpersCreateClassJs(module, exports) {
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    module.exports = _createClass;
    /***/
  },

  /***/
  "../node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
  /*!**********************************************************************************!*\
    !*** ../node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
    \**********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNextNode_modulesBabelRuntimeHelpersGetPrototypeOfJs(module, exports) {
    function _getPrototypeOf(o) {
      module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    module.exports = _getPrototypeOf;
    /***/
  },

  /***/
  "../node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
  /*!****************************************************************************!*\
    !*** ../node_modules/next/node_modules/@babel/runtime/helpers/inherits.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNextNode_modulesBabelRuntimeHelpersInheritsJs(module, exports, __webpack_require__) {
    var setPrototypeOf = __webpack_require__(
    /*! ./setPrototypeOf */
    "../node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) setPrototypeOf(subClass, superClass);
    }

    module.exports = _inherits;
    /***/
  },

  /***/
  "../node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
  /*!*********************************************************************************************!*\
    !*** ../node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
    \*********************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNextNode_modulesBabelRuntimeHelpersPossibleConstructorReturnJs(module, exports, __webpack_require__) {
    var _typeof = __webpack_require__(
    /*! ../helpers/typeof */
    "../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

    var assertThisInitialized = __webpack_require__(
    /*! ./assertThisInitialized */
    "../node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }

      return assertThisInitialized(self);
    }

    module.exports = _possibleConstructorReturn;
    /***/
  },

  /***/
  "../node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
  /*!**********************************************************************************!*\
    !*** ../node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
    \**********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNextNode_modulesBabelRuntimeHelpersSetPrototypeOfJs(module, exports) {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    module.exports = _setPrototypeOf;
    /***/
  },

  /***/
  "../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
  /*!**************************************************************************!*\
    !*** ../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
    \**************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNextNode_modulesBabelRuntimeHelpersTypeofJs(module, exports) {
    function _typeof2(obj) {
      if (typeof Symbol === "function" && (0, _typeof4.default)(Symbol.iterator) === "symbol") {
        _typeof2 = function _typeof2(obj) {
          return (0, _typeof4.default)(obj);
        };
      } else {
        _typeof2 = function _typeof2(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : (0, _typeof4.default)(obj);
        };
      }

      return _typeof2(obj);
    }

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        module.exports = _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        module.exports = _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    module.exports = _typeof;
    /***/
  },

  /***/
  "../node_modules/react/index.js":
  /*!********************************************************************************************!*\
    !*** delegated ../node_modules/react/index.js from dll-reference dll_08fa50bc85c03b576e51 ***!
    \********************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesReactIndexJs(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! dll-reference dll_08fa50bc85c03b576e51 */
    "dll-reference dll_08fa50bc85c03b576e51")("../node_modules/react/index.js");
    /***/
  },

  /***/
  "../node_modules/webpack/buildin/harmony-module.js":
  /*!*********************************************************!*\
    !*** ../node_modules/webpack/buildin/harmony-module.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinHarmonyModuleJs(module, exports) {
    module.exports = function (originalModule) {
      if (!originalModule.webpackPolyfill) {
        var module = Object.create(originalModule); // module.parent = undefined by default

        if (!module.children) module.children = [];
        Object.defineProperty(module, "loaded", {
          enumerable: true,
          get: function get() {
            return module.l;
          }
        });
        Object.defineProperty(module, "id", {
          enumerable: true,
          get: function get() {
            return module.i;
          }
        });
        Object.defineProperty(module, "exports", {
          enumerable: true
        });
        module.webpackPolyfill = 1;
      }

      return module;
    };
    /***/

  },

  /***/
  "./pages/index.js":
  /*!************************!*\
    !*** ./pages/index.js ***!
    \************************/

  /*! exports provided: default */

  /***/
  function pagesIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */


    (function (module) {
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "default", function () {
        return App;
      });
      /* harmony import */


      var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @babel/runtime/helpers/classCallCheck */
      "../node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");
      /* harmony import */


      var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/
      __webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @babel/runtime/helpers/createClass */
      "../node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");
      /* harmony import */


      var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/
      __webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @babel/runtime/helpers/possibleConstructorReturn */
      "../node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
      /* harmony import */


      var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/
      __webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @babel/runtime/helpers/getPrototypeOf */
      "../node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
      /* harmony import */


      var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/
      __webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @babel/runtime/helpers/inherits */
      "../node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");
      /* harmony import */


      var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default =
      /*#__PURE__*/
      __webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! react */
      "../node_modules/react/index.js");
      /* harmony import */


      var react__WEBPACK_IMPORTED_MODULE_5___default =
      /*#__PURE__*/
      __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);

      var App =
      /*#__PURE__*/
      function (_React$Component) {
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _React$Component);

        function App() {
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

          return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).apply(this, arguments));
        }

        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
          key: "render",
          value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, "Hello!");
          }
        }]);

        return App;
      }(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

      (function (Component, route) {
        if (!Component) return;

        if (false) {}

        module.hot.accept();
        Component.__route = route;
        if (module.hot.status() === 'idle') return;
        var components = next.router.components;

        for (var r in components) {
          if (!components.hasOwnProperty(r)) continue;

          if (components[r].Component.__route === route) {
            next.router.update(r, Component);
          }
        }
      })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : module.exports.default || module.exports, "/");
      /* WEBPACK VAR INJECTION */

    }).call(this, __webpack_require__(
    /*! ./../../node_modules/webpack/buildin/harmony-module.js */
    "../node_modules/webpack/buildin/harmony-module.js")(module));
    /***/
  },

  /***/
  3:
  /*!******************************!*\
    !*** multi ./pages/index.js ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    __NEXT_REGISTER_PAGE('/', function () {
      module.exports = __webpack_require__(
      /*! ./pages/index.js */
      "./pages/index.js");
      return {
        page: module.exports.default
      };
    });
    /***/

  },

  /***/
  "dll-reference dll_08fa50bc85c03b576e51":
  /*!*******************************************!*\
    !*** external "dll_08fa50bc85c03b576e51" ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function dllReferenceDll_08fa50bc85c03b576e51(module, exports) {
    module.exports = dll_08fa50bc85c03b576e51;
    /***/
  }
}, [[3, "static/runtime/webpack.js"]]]);
;