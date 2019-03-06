module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "clean-tag"
var external_clean_tag_ = __webpack_require__(6);
var external_clean_tag_default = /*#__PURE__*/__webpack_require__.n(external_clean_tag_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(0);

// CONCATENATED MODULE: ./components/atoms/Box/Box.js




var StyledBox = external_styled_components_default()(external_clean_tag_default.a).withConfig({
  displayName: "Box__StyledBox",
  componentId: "sc-1jffehg-0"
})(["", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";"], external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["color"], external_styled_system_["fontFamily"], external_styled_system_["textAlign"], external_styled_system_["lineHeight"], external_styled_system_["fontWeight"], external_styled_system_["fontStyle"], external_styled_system_["letterSpacing"], external_styled_system_["display"], external_styled_system_["maxWidth"], external_styled_system_["minWidth"], external_styled_system_["height"], external_styled_system_["maxHeight"], external_styled_system_["minHeight"], external_styled_system_["verticalAlign"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["flexWrap"], external_styled_system_["flexDirection"], external_styled_system_["flex"], external_styled_system_["alignContent"], external_styled_system_["justifyItems"], external_styled_system_["justifySelf"], external_styled_system_["alignSelf"], external_styled_system_["order"], external_styled_system_["flexBasis"], external_styled_system_["gridGap"], external_styled_system_["gridRowGap"], external_styled_system_["gridColumnGap"], external_styled_system_["gridColumn"], external_styled_system_["gridRow"], external_styled_system_["gridArea"], external_styled_system_["gridAutoFlow"], external_styled_system_["gridAutoRows"], external_styled_system_["gridAutoColumns"], external_styled_system_["gridTemplateRows"], external_styled_system_["gridTemplateColumns"], external_styled_system_["gridTemplateAreas"], external_styled_system_["background"], external_styled_system_["backgroundImage"], external_styled_system_["backgroundSize"], external_styled_system_["backgroundPosition"], external_styled_system_["backgroundRepeat"], external_styled_system_["borderRadius"], external_styled_system_["borderColor"], external_styled_system_["borders"], external_styled_system_["boxShadow"], external_styled_system_["opacity"], external_styled_system_["overflow"], external_styled_system_["position"], external_styled_system_["zIndex"], external_styled_system_["top"], external_styled_system_["right"], external_styled_system_["bottom"], external_styled_system_["left"], external_styled_system_["textStyle"], external_styled_system_["colorStyle"], external_styled_system_["buttonStyle"]);

var Box_Box = function Box(props) {
  return external_react_default.a.createElement(StyledBox, props);
};

/* harmony default export */ var atoms_Box_Box = (Box_Box);
// CONCATENATED MODULE: ./components/atoms/Box/index.js

/* harmony default export */ var atoms_Box = __webpack_exports__["a"] = (atoms_Box_Box);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("clean-tag");

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSinglePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAssets; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var getSinglePost =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
    var res, json, assets;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("https://cdn.contentful.com/spaces/g0l9uemxdyxt/environments/master/entries?access_token=7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3&content_type=guide&fields.slug=".concat(props.query.slug, "&include=1"));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            json = _context.sent;

            if (!json.includes) {
              _context.next = 9;
              break;
            }

            assets = json.includes.Asset;
            return _context.abrupt("return", {
              data: json.items[0].fields,
              assets: assets
            });

          case 9:
            return _context.abrupt("return", {
              data: json.items[0].fields
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSinglePost(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getAllPosts =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()('https://cdn.contentful.com/spaces/g0l9uemxdyxt/environments/master/entries?access_token=7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3');

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            json = _context2.sent;
            return _context2.abrupt("return", {
              data: json.items
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAllPosts() {
    return _ref2.apply(this, arguments);
  };
}();

var getAssets =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(slug) {
    var res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("https://cdn.contentful.com/spaces/g0l9uemxdyxt/environments/master/entries?access_token=7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3&content_type=guide&fields.slug=".concat(slug, "&include=1"));

          case 2:
            res = _context3.sent;
            _context3.next = 5;
            return res.json();

          case 5:
            json = _context3.sent;
            return _context3.abrupt("return", json.includes.Asset);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getAssets(_x2) {
    return _ref3.apply(this, arguments);
  };
}();



/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(9);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(0);

// EXTERNAL MODULE: ./components/atoms/Box/index.js + 1 modules
var Box = __webpack_require__(4);

// CONCATENATED MODULE: ./components/atoms/Title/Title.js





var StyledTitle = external_styled_components_default()(Box["a" /* default */]).withConfig({
  displayName: "Title__StyledTitle",
  componentId: "sc-1dnr8hi-0"
})(["line-height:", ";font-size:", "px;"], function (_ref) {
  var size = _ref.size;
  return Object(external_styled_system_["themeGet"])("lineHeights.heading.".concat(size));
}, function (_ref2) {
  var size = _ref2.size;
  return Object(external_styled_system_["themeGet"])("fontSizes.heading.".concat(size));
});

var Title_Title = function Title(props) {
  return external_react_default.a.createElement(StyledTitle, props);
};

Title_Title.defaultProps = {
  is: 'h2',
  size: 'h2',
  fontWeight: 'bold',
  m: '0 0 30px'
};
/* harmony default export */ var atoms_Title_Title = (Title_Title);
// CONCATENATED MODULE: ./components/atoms/Title/index.js

/* harmony default export */ var atoms_Title = __webpack_exports__["a"] = (atoms_Title_Title);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDcycHgiIGhlaWdodD0iMjc2cHgiIHZpZXdCb3g9IjAgMCA0NzIgMjc2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+bndvLXN0YWNrZWQtY215azwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMC4wNiAwLjk2IDY2LjkzOSAwLjk2IDY2LjkzOSA4MC45ODIgMC4wNiA4MC45ODIiPjwvcG9seWdvbj4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0zIiBwb2ludHM9IjAuMDYgMC45NjUgMjQ0Ljk4NDgwOCAwLjk2NSAyNDQuOTg0ODA4IDE3Ni42MDUgMC4wNiAxNzYuNjA1Ij48L3BvbHlnb24+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtNSIgcG9pbnRzPSIwLjYwNDUwMDYzOSAwLjA5MSAzNTAuMjg0OTQ0IDAuMDkxIDM1MC4yODQ5NDQgODEuOTQgMC42MDQ1MDA2MzkgODEuOTQiPjwvcG9seWdvbj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJud28tc3RhY2tlZC1jbXlrIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAtMyI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICA8cGF0aCBkPSJNNjYuOTM5LDc4LjI5MSBMNjYuOTM5LDMuNjU4IEM2Ni45MzksMi4xNjkgNjUuNzMsMC45NiA2NC4yNDcsMC45NiBMNTcuMzAyLDAuOTYgQzU1LjgxMiwwLjk2IDU0LjYwNCwyLjE2OSA1NC42MDQsMy42NTggTDU0LjYwNCw2MC43MjYgTDEzLjg2NSwyLjExNSBDMTMuMzY0LDEuMzk0IDEyLjUzNiwwLjk2IDExLjY1NCwwLjk2IEwyLjY5MSwwLjk2IEMxLjIwOSwwLjk2IDAsMi4xNjkgMCwzLjY1OCBMMCw3OC4yOTEgQzAsNzkuNzc0IDEuMjA5LDgwLjk4MiAyLjY5MSw4MC45ODIgTDkuNjQ0LDgwLjk4MiBDMTEuMTMzLDgwLjk4MiAxMi4zNDIsNzkuNzc0IDEyLjM0Miw3OC4yOTEgTDEyLjM0MiwyMS4yMjMgTDUzLjA4MSw3OS44MzQgQzUzLjU4Miw4MC41NTUgNTQuNDEsODAuOTgyIDU1LjI5Miw4MC45ODIgTDY0LjI0Nyw4MC45ODIgQzY1LjczLDgwLjk4MiA2Ni45MzksNzkuNzc0IDY2LjkzOSw3OC4yOTEiIGlkPSJGaWxsLTEiIGZpbGw9IiMyNzJGMzIiIG1hc2s9InVybCgjbWFzay0yKSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aCBkPSJNMTM0LjcyLDc4LjI5MSBMMTM0LjcyLDcxLjk2IEMxMzQuNzIsNzAuNDc3IDEzMy41MTEsNjkuMjY4IDEzMi4wMjgsNjkuMjY4IEw5NC4zNTQsNjkuMjY4IEw5NC4zNTQsNDUuNTY2IEwxMjcuOTIxLDQ1LjU2NiBDMTI5LjQxLDQ1LjU2NiAxMzAuNjE5LDQ0LjM1NyAxMzAuNjE5LDQyLjg2OCBMMTMwLjYxOSwzNi41NSBDMTMwLjYxOSwzNS4wNjEgMTI5LjQxLDMzLjg1MiAxMjcuOTIxLDMzLjg1MiBMOTQuMzU0LDMzLjg1MiBMOTQuMzU0LDEyLjY4MSBMMTMwLjM0NSwxMi42ODEgQzEzMS44MjgsMTIuNjgxIDEzMy4wMzcsMTEuNDcyIDEzMy4wMzcsOS45ODMgTDEzMy4wMzcsMy42NTggQzEzMy4wMzcsMi4xNjkgMTMxLjgyOCwwLjk2IDEzMC4zNDUsMC45NiBMODQuNzA0LDAuOTYgQzgzLjIyMiwwLjk2IDgyLjAxMywyLjE2OSA4Mi4wMTMsMy42NTggTDgyLjAxMyw3OC4yOTEgQzgyLjAxMyw3OS43NzQgODMuMjIyLDgwLjk4MiA4NC43MDQsODAuOTgyIEwxMzIuMDI4LDgwLjk4MiBDMTMzLjUxMSw4MC45ODIgMTM0LjcyLDc5Ljc3NCAxMzQuNzIsNzguMjkxIiBpZD0iRmlsbC00IiBmaWxsPSIjMjcyRjMyIj48L3BhdGg+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTgiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay00IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTMiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTYiPjwvZz4KICAgICAgICAgICAgPHBhdGggZD0iTTI0NC44OCw0LjQxMSBDMjQ1LjExMywzLjU5NiAyNDQuOTUzLDIuNzE1IDI0NC40NDUsMi4wNCBDMjQzLjkzMSwxLjM1OSAyNDMuMTM3LDAuOTY1IDI0Mi4yODgsMC45NjUgTDIzNS4xMjIsMC45NjUgQzIzMy45MTMsMC45NjUgMjMyLjg1MSwxLjc2NiAyMzIuNTI0LDIuOTI4IEwyMTYuNDQyLDYwLjI0MyBMMjAwLjA4NiwyLjkyMiBDMTk5Ljc1OSwxLjc2IDE5OC42OTcsMC45NjUgMTk3LjQ5NiwwLjk2NSBMMTg4LjY0LDAuOTY1IEMxODcuNDM3LDAuOTY1IDE4Ni4zNzUsMS43NiAxODYuMDQ4LDIuOTIyIEwxNjkuNjg2LDYwLjIyMyBMMTUzLjU5NywyLjkyOCBDMTUzLjI3LDEuNzY2IDE1Mi4yMDgsMC45NjUgMTUwLjk5OSwwLjk2NSBMMTQzLjgzMywwLjk2NSBDMTQyLjk5MiwwLjk2NSAxNDIuMTksMS4zNTkgMTQxLjY3NiwyLjA0IEMxNDEuMTY4LDIuNzE1IDE0MS4wMDgsMy41OTYgMTQxLjI0Miw0LjQxMSBMMTYyLjk2Nyw3OS4wNDQgQzE2My4zMDgsODAuMTkyIDE2NC4zNTYsODAuOTg3IDE2NS41NTksODAuOTg3IEwxNzQuMDk0LDgwLjk4NyBDMTc1LjMwMyw4MC45ODcgMTc2LjM1MSw4MC4xODYgMTc2LjY5Miw3OS4wMyBMMTkzLjA2NywyMS4zODEgTDIwOS40NDMsNzkuMDMgQzIwOS43ODQsODAuMTg2IDIxMC44MzIsODAuOTg3IDIxMi4wNDEsODAuOTg3IEwyMjAuNTc3LDgwLjk4NyBDMjIxLjc3OCw4MC45ODcgMjIyLjgyNyw4MC4xOTIgMjIzLjE2Nyw3OS4wNDQgTDI0NC44OCw0LjQxMSIgaWQ9IkZpbGwtNSIgZmlsbD0iIzI3MkYzMiIgbWFzaz0idXJsKCNtYXNrLTQpIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDMuNzQ2LDEwMC4wMjkgQzEwMy45OCw5OS4yMTQgMTAzLjgyNyw5OC4zMzMgMTAzLjMxOSw5Ny42NTggQzEwMi43OTgsOTYuOTc3IDEwMi4wMDMsOTYuNTgzIDEwMS4xNTUsOTYuNTgzIEw5My45ODksOTYuNTgzIEM5Mi43OCw5Ni41ODMgOTEuNzE5LDk3LjM4NCA5MS4zOTEsOTguNTQ3IEw3NS4zMDksMTU1Ljg2MiBMNTguOTU0LDk4LjU0IEM1OC42MjYsOTcuMzc4IDU3LjU2NCw5Ni41ODMgNTYuMzYyLDk2LjU4MyBMNDcuNSw5Ni41ODMgQzQ2LjI5OCw5Ni41ODMgNDUuMjQzLDk3LjM3OCA0NC45MDksOTguNTQgTDI4LjU1MywxNTUuODQyIEwxMi40NjQsOTguNTQ3IEMxMi4xMzcsOTcuMzg0IDExLjA3NSw5Ni41ODMgOS44NjYsOTYuNTgzIEwyLjcsOTYuNTgzIEMxLjg1Miw5Ni41ODMgMS4wNTcsOTYuOTc3IDAuNTM3LDk3LjY1OCBDMC4wMzYsOTguMzMzIC0wLjEyNSw5OS4yMTQgMC4xMDksMTAwLjAyOSBMMjEuODI4LDE3NC42NjIgQzIyLjE2OCwxNzUuODEgMjMuMjI0LDE3Ni42MDUgMjQuNDE5LDE3Ni42MDUgTDMyLjk2MSwxNzYuNjA1IEMzNC4xNjksMTc2LjYwNSAzNS4yMjUsMTc1LjgwNCAzNS41NTksMTc0LjY0OCBMNTEuOTM0LDExNi45OTkgTDY4LjMxLDE3NC42NDggQzY4LjY0NCwxNzUuODA0IDY5LjY5OSwxNzYuNjA1IDcwLjkwOCwxNzYuNjA1IEw3OS40NDMsMTc2LjYwNSBDODAuNjM5LDE3Ni42MDUgODEuNjk0LDE3NS44MSA4Mi4wMzUsMTc0LjY2MiBMMTAzLjc0NiwxMDAuMDI5IiBpZD0iRmlsbC03IiBmaWxsPSIjMjcyRjMyIiBtYXNrPSJ1cmwoI21hc2stNCkiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZD0iTTI1OS4xNDksMTcyLjUxMSBMMjM5LjQzNCwxMzkuOTggQzI0MC4zODIsMTM5Ljc1MyAyNDEuMzU3LDEzOS40NzkgMjQyLjM2NiwxMzkuMTY1IEMyNDQuOTEsMTM4LjM3IDI0Ny4yNzQsMTM3LjE0MiAyNDkuMzcxLDEzNS41MTIgQzI1MS41MzUsMTMzLjgyOSAyNTMuMzQ1LDEzMS42MzggMjU0LjczNCwxMjkuMDAxIEMyNTYuMTcsMTI2LjMxNiAyNTYuODkyLDEyMi45MSAyNTYuODkyLDExOC44ODMgQzI1Ni44OTIsMTE1LjI1NiAyNTYuMjg0LDExMi4xMDQgMjU1LjA2OCwxMDkuNTE5IEMyNTMuODY2LDEwNi45NjEgMjUyLjMxLDEwNC43OTggMjUwLjQzMywxMDMuMDgxIEMyNDguNTcsMTAxLjM3OCAyNDYuNDM5LDEwMC4wNjkgMjQ0LjA4OSw5OS4xODEgQzI0MS44OTgsOTguMzUzIDIzOS43MjEsOTcuNzM4IDIzNy42MSw5Ny4zNzEgQzIzNS41NTQsOTYuOTk3IDIzMy41OSw5Ni43NyAyMzEuNzUzLDk2LjY5IEMyMzAuMDI0LDk2LjYyMyAyMjguNjYxLDk2LjU4MyAyMjcuNjQsOTYuNTgzIEwyMDguMDQ0LDk2LjU4MyBDMjA2LjU1NSw5Ni41ODMgMjA1LjM0Nyw5Ny43OTIgMjA1LjM0Nyw5OS4yNzQgTDIwNS4zNDcsMTczLjkwNyBDMjA1LjM0NywxNzUuMzk2IDIwNi41NTUsMTc2LjYwNSAyMDguMDQ0LDE3Ni42MDUgTDIxNC45OSwxNzYuNjA1IEMyMTYuNDczLDE3Ni42MDUgMjE3LjY4MiwxNzUuMzk2IDIxNy42ODIsMTczLjkwNyBMMjE3LjY4MiwxNDEuMTgyIEwyMjYuNDE3LDE0MS4xODIgTDI0Ni42MiwxNzUuMjgzIEMyNDcuMSwxNzYuMDk3IDI0Ny45ODksMTc2LjYwNSAyNDguOTM3LDE3Ni42MDUgTDI1Ni44NDUsMTc2LjYwNSBDMjU3LjgyLDE3Ni42MDUgMjU4LjcxNSwxNzYuMDc3IDI1OS4xOTYsMTc1LjIyOSBDMjU5LjY3LDE3NC4zODggMjU5LjY1NiwxNzMuMzQ2IDI1OS4xNDksMTcyLjUxMSBNMjI5Ljc1LDEyOS40NzUgTDIxNy42ODIsMTI5LjQ3NSBMMjE3LjY4MiwxMDguMjk3IEwyMjkuNzUsMTA4LjI5NyBDMjMzLjA0OSwxMDguMjk3IDIzNS43MTQsMTA4LjY5OCAyMzcuNjUsMTA5LjQ3MiBDMjM5LjU2NywxMTAuMjQ3IDI0MS4wNDMsMTExLjE2MiAyNDIuMDI1LDExMi4yMDQgQzI0MywxMTMuMjE5IDI0My42MzUsMTE0LjI3NCAyNDMuOTc1LDExNS40MTYgQzI0NC4zNjIsMTE2Ljc1MiAyNDQuNTU2LDExNy45MTQgMjQ0LjU1NiwxMTguODgzIEMyNDQuNTU2LDExOS44NTggMjQ0LjM2MiwxMjEuMDI2IDI0My45NzUsMTIyLjMzNSBDMjQzLjYzNSwxMjMuNDkxIDI0MywxMjQuNTQ2IDI0Mi4wMjUsMTI1LjU2OCBDMjQxLjAzLDEyNi42MjMgMjM5LjU2LDEyNy41MzggMjM3LjY1LDEyOC4yOTMgQzIzNS43MTQsMTI5LjA3NCAyMzMuMDU2LDEyOS40NzUgMjI5Ljc1LDEyOS40NzUiIGlkPSJGaWxsLTkiIGZpbGw9IiMyNzJGMzIiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMzQxLjA2MiwxMzYuNTk0IEMzNDEuMDYyLDEzNS42MzMgMzQwLjk1NiwxMzMuOTgzIDM0MC43MzUsMTMxLjY1MiBDMzQwLjUxNiwxMjkuMjg4IDMzOS45NjEsMTI2LjYxNiAzMzkuMTA2LDEyMy43MTggQzMzOC4yNTEsMTIwLjc5OSAzMzYuODg5LDExNy43MDcgMzM1LjA2NSwxMTQuNTI4IEMzMzMuMTg4LDExMS4yODIgMzMwLjYxMSwxMDguMjkgMzI3LjM4NSwxMDUuNjMyIEMzMjQuMTgsMTAyLjk4OCAzMjAuMTI1LDEwMC43OSAzMTUuMzMsOTkuMTA3IEMzMTAuNTY5LDk3LjQzMSAzMDQuNzMxLDk2LjU4MyAyOTcuOTk5LDk2LjU4MyBMMjc0LjkxOCw5Ni41ODMgQzI3My40MjksOTYuNTgzIDI3Mi4yMiw5Ny43OTIgMjcyLjIyLDk5LjI4MSBMMjcyLjIyLDE3My45MTQgQzI3Mi4yMiwxNzUuMzk2IDI3My40MjksMTc2LjYwNSAyNzQuOTE4LDE3Ni42MDUgTDI5Ny45OTksMTc2LjYwNSBDMzA0LjczMSwxNzYuNjA1IDMxMC41NjksMTc1Ljc1NyAzMTUuMzM3LDE3NC4wODEgQzMyMC4xMTksMTcyLjM5OCAzMjQuMTczLDE3MC4yIDMyNy4zODUsMTY3LjU1NiBDMzMwLjYxNywxNjQuODkxIDMzMy4xOTUsMTYxLjg5MiAzMzUuMDY1LDE1OC42NTMgQzMzNi44ODksMTU1LjQ4OCAzMzguMjUxLDE1Mi4zOTUgMzM5LjEwNiwxNDkuNDg0IEMzMzkuOTgxLDE0Ni41MjUgMzQwLjUwOSwxNDMuOTIxIDM0MC43MzUsMTQxLjUzNiBDMzQwLjk1NiwxMzkuMjA1IDM0MS4wNjIsMTM3LjU2MiAzNDEuMDYyLDEzNi41OTQgTTMyNi4yMjMsMTQ5LjMxNyBDMzI0LjU4NywxNTIuODE2IDMyMi4zMjMsMTU1LjczNSAzMTkuNTA0LDE1Ny45OTkgQzMxNi42MzMsMTYwLjI4OSAzMTMuMTkzLDE2Mi4wMjYgMzA5LjI3MywxNjMuMTU1IEMzMDUuMjQ2LDE2NC4zMDMgMzAwLjg1MSwxNjQuODkxIDI5Ni4yMSwxNjQuODkxIEwyODQuNTY5LDE2NC44OTEgTDI4NC41NjksMTA4LjI5NyBMMjk2LjIxLDEwOC4yOTcgQzMwMC44MzgsMTA4LjI5NyAzMDUuMjMyLDEwOC44ODUgMzA5LjI3MywxMTAuMDMzIEMzMTMuMTkzLDExMS4xNjIgMzE2LjYzMywxMTIuODk5IDMxOS41MDQsMTE1LjE5NiBDMzIyLjMyOSwxMTcuNDUzIDMyNC41OTQsMTIwLjM3OSAzMjYuMjIzLDEyMy44NzggQzMyNy44NzIsMTI3LjM5OCAzMjguNzE0LDEzMS42NzggMzI4LjcxNCwxMzYuNTk0IEMzMjguNzE0LDE0MS41MSAzMjcuODcyLDE0NS43OSAzMjYuMjIzLDE0OS4zMTciIGlkPSJGaWxsLTEwIiBmaWxsPSIjMjcyRjMyIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTE4Mi4wNDMsMTY0LjgyNyBDMTgxLjk3NiwxNjQuMDMzIDE4MS41NjIsMTYzLjMxOCAxODAuOTE0LDE2Mi44NjQgTDE3NS4zMTgsMTU4LjkwNCBDMTc0LjI1NiwxNTguMTU2IDE3Mi44MjcsMTU4LjI2OSAxNzEuODkyLDE1OS4xNjQgQzE2OS41NzQsMTYxLjM4OCAxNjYuODgzLDE2My4xNzggMTYzLjg3NywxNjQuNDc0IEMxNTYuNzkxLDE2Ny41MzkgMTQ2Ljg4MSwxNjcuNTM5IDEzOS43NzUsMTY0LjQ3NCBDMTM2LjIzNSwxNjIuOTQ0IDEzMy4xODksMTYwLjgxNCAxMzAuNzE5LDE1OC4xNTYgQzEyOC4yMjcsMTU1LjQ3MSAxMjYuMjksMTUyLjI3MiAxMjQuOTQ4LDE0OC42MTkgQzEyMy41OTMsMTQ0LjkyNiAxMjIuODk4LDE0MC44NzggMTIyLjg5OCwxMzYuNTg0IEMxMjIuODk4LDEzMi43MTEgMTIzLjQ4NiwxMjguOTY0IDEyNC42NjgsMTI1LjQ1MSBDMTI1LjA0MiwxMjQuMzI5IDEyNC42MzQsMTIzLjA4NyAxMjMuNjY2LDEyMi4zOTkgTDExNy44MzUsMTE4LjI3OCBDMTE3LjE1NCwxMTcuNzk3IDExNi4yMDYsMTE3Ljg1MSAxMTUuNDE4LDExOC4wOTggQzExNC42MywxMTguMzMyIDExMy45MDIsMTE5LjEyIDExMy41OTUsMTE5Ljg4NyBDMTExLjU3OCwxMjQuOTM3IDExMC41NjIsMTMwLjU2IDExMC41NjIsMTM2LjU4NCBDMTEwLjU2MiwxNDIuNjA4IDExMS41NzgsMTQ4LjI1MiAxMTMuNTg4LDE1My4zMzQgQzExNS42MTgsMTU4LjQ2MyAxMTguNDcsMTYyLjk1MSAxMjIuMDcsMTY2LjY2NCBDMTI1LjY4MywxNzAuMzk4IDEzMC4wODQsMTczLjMyOSAxMzUuMTUzLDE3NS40IEMxNDAuMjAyLDE3Ny40NSAxNDUuODEyLDE3OC40OTIgMTUxLjgyOSwxNzguNDkyIEMxNTcuODQ3LDE3OC40OTIgMTYzLjQ1NywxNzcuNDUgMTY4LjQ5OSwxNzUuNCBDMTczLjQwOCwxNzMuNDAzIDE3Ny43MDksMTcwLjU1OCAxODEuMjc1LDE2Ni45NTggQzE4MS44MzYsMTY2LjM5NyAxODIuMTEsMTY1LjYxNiAxODIuMDQzLDE2NC44MjciIGlkPSJGaWxsLTExIiBmaWxsPSIjNzlDNkJGIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTE5My4xMDEsMTM2LjU4NyBDMTkzLjEwMSwxMzAuNTYzIDE5Mi4wNzksMTI0Ljk0NyAxOTAuMDYzLDExOS44OTEgQzE4OC4wMzksMTE0Ljc4MiAxODUuMTgxLDExMC4zMjcgMTgxLjU4OCwxMDYuNjIxIEMxNzcuOTc1LDEwMi44ODcgMTczLjU4LDk5LjkzNSAxNjguNTE4LDk3LjgzMiBDMTU4LjM4Nyw5My42NTEgMTQ1LjI3LDkzLjY1MSAxMzUuMTM5LDk3LjgzMiBDMTMwLjI5LDk5Ljg0OSAxMjYuMDIyLDEwMi42OCAxMjIuNDU2LDEwNi4yNiBDMTIxLjg5NSwxMDYuODIxIDEyMS42MDgsMTA3LjYwMiAxMjEuNjc0LDEwOC4zOSBDMTIxLjc0OCwxMDkuMTg1IDEyMi4xNjIsMTA5LjkwNyAxMjIuODEsMTEwLjM2MSBMMTI4LjM0NiwxMTQuMjc0IEMxMjkuNDAxLDExNS4wMjIgMTMwLjgzNywxMTQuOTE1IDEzMS43NjYsMTE0LjAxNCBDMTM0LjA5LDExMS43ODMgMTM2Ljc4MSwxMTAgMTM5Ljc2NywxMDguNzA0IEMxNDYuODc5LDEwNS42NDYgMTU2LjgxLDEwNS42NDYgMTYzLjg3NiwxMDguNzA0IEMxNjcuNDE2LDExMC4yMjcgMTcwLjQ2MSwxMTIuMzU4IDE3Mi45MzksMTE1LjAyMiBDMTc1LjQxLDExNy42NzQgMTc3LjM1MywxMjAuODggMTc4LjcxNiwxMjQuNTUzIEMxODAuMDcyLDEyOC4yNTMgMTgwLjc2LDEzMi4zMDYgMTgwLjc2LDEzNi41ODcgQzE4MC43NiwxNDAuNDgxIDE4MC4xNjUsMTQ0LjIyMSAxNzguOTksMTQ3LjcyIEMxNzguNjE2LDE0OC44NDkgMTc5LjAyMywxNTAuMDkyIDE3OS45OTIsMTUwLjc3OSBMMTg1Ljg0OSwxNTQuOTEzIEMxODYuMjIzLDE1NS4xOCAxODYuNjg0LDE1NS4yODcgMTg3LjE0NCwxNTUuMjg3IEMxODcuNTE4LDE1NS4yODcgMTg3Ljg5OSwxNTUuMjE0IDE4OC4yNDYsMTU1LjExNCBDMTg5LjA0MSwxNTQuODggMTg5Ljc2MiwxNTQuMTA1IDE5MC4wNjksMTUzLjMzNyBDMTkyLjA3OSwxNDguMjM1IDE5My4xMDEsMTQyLjYwNSAxOTMuMTAxLDEzNi41ODciIGlkPSJGaWxsLTEyIiBmaWxsPSIjMjcyRjMyIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTI1OS4xNDksMjcwLjAxOSBMMjM5LjQzNCwyMzcuNDg4IEMyNDAuMzgyLDIzNy4yNjEgMjQxLjM1NywyMzYuOTg3IDI0Mi4zNjYsMjM2LjY3MyBDMjQ0LjkxLDIzNS44NzggMjQ3LjI3NCwyMzQuNjUgMjQ5LjM3MSwyMzMuMDIgQzI1MS41MzUsMjMxLjM0NCAyNTMuMzM4LDIyOS4xNTMgMjU0LjczNCwyMjYuNTA4IEMyNTYuMTcsMjIzLjgyNCAyNTYuODk4LDIyMC40MTcgMjU2Ljg5OCwyMTYuMzkgQzI1Ni44OTgsMjEyLjc2NCAyNTYuMjg0LDIwOS42MTIgMjU1LjA2MSwyMDcuMDIgQzI1My44NTksMjA0LjQ1NiAyNTIuMjk3LDIwMi4yOTIgMjUwLjQzMywyMDAuNTg5IEMyNDguNTYzLDE5OC44ODYgMjQ2LjQyNiwxOTcuNTcgMjQ0LjA4OSwxOTYuNjk1IEMyNDEuOTA1LDE5NS44NjEgMjM5LjcyMSwxOTUuMjQ2IDIzNy42MSwxOTQuODc5IEMyMzUuNTU0LDE5NC41MDUgMjMzLjU5LDE5NC4yNzggMjMxLjc1MywxOTQuMTk4IEMyMzAuMDI0LDE5NC4xMzEgMjI4LjY2MSwxOTQuMDkxIDIyNy42NDYsMTk0LjA5MSBMMjA4LjA0NCwxOTQuMDkxIEMyMDYuNTU1LDE5NC4wOTEgMjA1LjM0NywxOTUuMyAyMDUuMzQ3LDE5Ni43ODIgTDIwNS4zNDcsMjcxLjQxNCBDMjA1LjM0NywyNzIuOTA1IDIwNi41NTUsMjc0LjExMyAyMDguMDQ0LDI3NC4xMTMgTDIxNC45OSwyNzQuMTEzIEMyMTYuNDczLDI3NC4xMTMgMjE3LjY4MiwyNzIuOTA1IDIxNy42ODIsMjcxLjQxNCBMMjE3LjY4MiwyMzguNjkgTDIyNi40MTcsMjM4LjY5IEwyNDYuNjIsMjcyLjc5IEMyNDcuMSwyNzMuNjEyIDI0Ny45ODksMjc0LjExMyAyNDguOTM3LDI3NC4xMTMgTDI1Ni44NDUsMjc0LjExMyBDMjU3LjgyLDI3NC4xMTMgMjU4LjcxNSwyNzMuNTg1IDI1OS4xOTYsMjcyLjczOCBDMjU5LjY3LDI3MS44OTYgMjU5LjY1NiwyNzAuODU0IDI1OS4xNDksMjcwLjAxOSBNMjI5Ljc1LDIyNi45ODIgTDIxNy42ODIsMjI2Ljk4MiBMMjE3LjY4MiwyMDUuODA1IEwyMjkuNzUsMjA1LjgwNSBDMjMzLjA0OSwyMDUuODA1IDIzNS43MDcsMjA2LjIwNSAyMzcuNjUsMjA2Ljk4IEMyMzkuNTc0LDIwNy43NTUgMjQxLjA0MywyMDguNjcgMjQyLjAyNSwyMDkuNzEyIEMyNDMsMjEwLjczNCAyNDMuNjM1LDIxMS43ODIgMjQzLjk3NSwyMTIuOTI0IEMyNDQuMzYyLDIxNC4yNiAyNDQuNTYzLDIxNS40MjIgMjQ0LjU2MywyMTYuMzkgQzI0NC41NjMsMjE3LjM3MiAyNDQuMzYyLDIxOC41MzQgMjQzLjk3NSwyMTkuODQzIEMyNDMuNjM1LDIyMC45OTggMjQzLDIyMi4wNiAyNDIuMDI1LDIyMy4wODIgQzI0MS4wMywyMjQuMTMxIDIzOS41NiwyMjUuMDQ2IDIzNy42NSwyMjUuODAxIEMyMzUuNzA3LDIyNi41ODIgMjMzLjA0OSwyMjYuOTgyIDIyOS43NSwyMjYuOTgyIiBpZD0iRmlsbC0xMyIgZmlsbD0iIzI3MkYzMiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0zNDEuMDYyLDIzNC4xMDEgQzM0MS4wNjIsMjMzLjEzOSAzNDAuOTU2LDIzMS40OTYgMzQwLjc0MiwyMjkuMTU4IEMzNDAuNTIxLDIyNi43OTQgMzM5Ljk2OCwyMjQuMTIzIDMzOS4xMTIsMjIxLjIxOCBDMzM4LjI1MSwyMTguMjc5IDMzNi44ODksMjE1LjE5NCAzMzUuMDcyLDIxMi4wMzQgQzMzMy4xOTUsMjA4Ljc4OSAzMzAuNjExLDIwNS43OTcgMzI3LjM4NSwyMDMuMTQ1IEMzMjQuMTg2LDIwMC41MDEgMzIwLjEzOSwxOTguMzAzIDMxNS4zMzcsMTk2LjYxNCBDMzEwLjU3NSwxOTQuOTM3IDMwNC43MzgsMTk0LjA4OSAyOTcuOTk5LDE5NC4wODkgTDI3NC45MTgsMTk0LjA4OSBDMjczLjQzNiwxOTQuMDg5IDI3Mi4yMiwxOTUuMjk4IDI3Mi4yMiwxOTYuNzg3IEwyNzIuMjIsMjcxLjQyIEMyNzIuMjIsMjcyLjkwMyAyNzMuNDM2LDI3NC4xMTIgMjc0LjkxOCwyNzQuMTEyIEwyOTcuOTk5LDI3NC4xMTIgQzMwNC43MzgsMjc0LjExMiAzMTAuNTc1LDI3My4yNjMgMzE1LjM0NCwyNzEuNTg3IEMzMjAuMTMyLDI2OS45MDUgMzI0LjE4LDI2Ny43MDcgMzI3LjM4NSwyNjUuMDY5IEMzMzAuNjI0LDI2Mi40MDUgMzMzLjIwOSwyNTkuNDA2IDMzNS4wNzksMjU2LjE1OSBDMzM2Ljg4OSwyNTMuMDA3IDMzOC4yNDQsMjQ5LjkyOSAzMzkuMTEyLDI0Ni45OTEgQzMzOS45ODcsMjQ0LjAzMiAzNDAuNTE2LDI0MS40MjcgMzQwLjc0MiwyMzkuMDQyIEMzNDAuOTU2LDIzNi43MDUgMzQxLjA2MiwyMzUuMDY5IDM0MS4wNjIsMjM0LjEwMSBNMjg0LjU3NiwyMDUuODAzIEwyOTYuMjEsMjA1LjgwMyBDMzAwLjg0NSwyMDUuODAzIDMwNS4yMzksMjA2LjM5MSAzMDkuMjczLDIwNy41NDcgQzMxMy4yLDIwOC42NjkgMzE2LjY0NiwyMTAuNDA1IDMxOS41MTEsMjEyLjcwMiBDMzIyLjMzNiwyMTQuOTYgMzI0LjYsMjE3Ljg4NSAzMjYuMjM2LDIyMS4zODUgQzMyNy44ODYsMjI0LjkwNCAzMjguNzIxLDIyOS4xODUgMzI4LjcyMSwyMzQuMTAxIEMzMjguNzIxLDIzOS4wMTYgMzI3Ljg4NiwyNDMuMjk3IDMyNi4yMzYsMjQ2LjgyNCBDMzI0LjU5NCwyNTAuMzIzIDMyMi4zMjksMjUzLjI0MSAzMTkuNTExLDI1NS41MDUgQzMxNi42NDYsMjU3LjgwMyAzMTMuMiwyNTkuNTMyIDMwOS4yNzMsMjYwLjY2MSBDMzA1LjI1OSwyNjEuODEgMzAwLjg2NSwyNjIuMzk4IDI5Ni4yMSwyNjIuMzk4IEwyODQuNTc2LDI2Mi4zOTggTDI4NC41NzYsMjA1LjgwMyIgaWQ9IkZpbGwtMTQiIGZpbGw9IiMyNzJGMzIiPjwvcGF0aD4KICAgICAgICA8ZyBpZD0iR3JvdXAtMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMS4wMDAwMDAsIDE5NC4wMDAwMDApIj4KICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stNiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC01Ij48L3VzZT4KICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICA8ZyBpZD0iQ2xpcC0xNiI+PC9nPgogICAgICAgICAgICA8cGF0aCBkPSJNMjg1LjE3Nyw3Ny40MTcgTDI4NS4xNzcsNzEuMDg2IEMyODUuMTc3LDY5LjYwNCAyODMuOTY4LDY4LjM5NSAyODIuNDc4LDY4LjM5NSBMMjQ0LjgwNSw2OC4zOTUgTDI0NC44MDUsNDQuNjkzIEwyNzguMzc4LDQ0LjY5MyBDMjc5Ljg2Nyw0NC42OTMgMjgxLjA2OSw0My40ODQgMjgxLjA2OSw0MS45OTQgTDI4MS4wNjksMzUuNjc3IEMyODEuMDY5LDM0LjE4NyAyNzkuODY3LDMyLjk3OCAyNzguMzc4LDMyLjk3OCBMMjQ0LjgwNSwzMi45NzggTDI0NC44MDUsMTEuODA3IEwyODAuNzk2LDExLjgwNyBDMjgyLjI4NSwxMS44MDcgMjgzLjQ5NCwxMC41OTggMjgzLjQ5NCw5LjEwOSBMMjgzLjQ5NCwyLjc4NSBDMjgzLjQ5NCwxLjI5NSAyODIuMjg1LDAuMDkzIDI4MC43OTYsMC4wOTMgTDIzNS4xNjEsMC4wOTMgQzIzMy42NzIsMC4wOTMgMjMyLjQ2MywxLjI5NSAyMzIuNDYzLDIuNzg1IEwyMzIuNDYzLDc3LjQxNyBDMjMyLjQ2Myw3OC45MDcgMjMzLjY3Miw4MC4xMDkgMjM1LjE2MSw4MC4xMDkgTDI4Mi40NzgsODAuMTA5IEMyODMuOTY4LDgwLjEwOSAyODUuMTc3LDc4LjkwNyAyODUuMTc3LDc3LjQxNyIgaWQ9IkZpbGwtMTUiIGZpbGw9IiMyNzJGMzIiIG1hc2s9InVybCgjbWFzay02KSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzQ5Ljg5NSw3Ni4wMTkgTDMzMC4xODEsNDMuNDg4IEMzMzEuMTM2LDQzLjI1NCAzMzIuMTEsNDIuOTg3IDMzMy4xMDUsNDIuNjczIEMzMzUuNjQzLDQxLjg4NSAzMzguMDAxLDQwLjY1NyAzNDAuMTE4LDM5LjAyIEMzNDIuMjc1LDM3LjM0NCAzNDQuMDc5LDM1LjE1MyAzNDUuNDgxLDMyLjUwOCBDMzQ2LjkxLDI5LjgyNCAzNDcuNjM5LDI2LjQxNyAzNDcuNjM5LDIyLjM5IEMzNDcuNjM5LDE4Ljc3IDM0Ny4wMjQsMTUuNjE4IDM0NS44MDksMTMuMDI3IEMzNDQuNiwxMC40NjIgMzQzLjA1LDguMjk5IDM0MS4xODEsNi41ODkgQzMzOS4zMSw0Ljg4NiAzMzcuMTczLDMuNTc3IDMzNC44MzYsMi42OTUgQzMzMi42NTEsMS44NjEgMzMwLjQ2MSwxLjI0NiAzMjguMzU3LDAuODc5IEMzMjYuMzAxLDAuNTA1IDMyNC4zMywwLjI3OCAzMjIuNSwwLjE5OCBDMzIwLjc3LDAuMTMxIDMxOS40MDgsMC4wOTEgMzE4LjM4NywwLjA5MSBMMjk4Ljc4NSwwLjA5MSBDMjk3LjI5NiwwLjA5MSAyOTYuMDg3LDEuMyAyOTYuMDg3LDIuNzgyIEwyOTYuMDg3LDc3LjQxNCBDMjk2LjA4Nyw3OC45MDUgMjk3LjI5Niw4MC4xMTMgMjk4Ljc4NSw4MC4xMTMgTDMwNS43Myw4MC4xMTMgQzMwNy4yMiw4MC4xMTMgMzA4LjQyOSw3OC45MDUgMzA4LjQyOSw3Ny40MTQgTDMwOC40MjksNDQuNjkgTDMxNy4xNjQsNDQuNjkgTDMzNy4zNiw3OC43OSBDMzM3Ljg0MSw3OS42MTIgMzM4LjcyOSw4MC4xMTMgMzM5LjY3OCw4MC4xMTMgTDM0Ny41OTIsODAuMTEzIEMzNDguNTU5LDgwLjExMyAzNDkuNDYyLDc5LjU4NSAzNDkuOTQyLDc4LjczOCBDMzUwLjQxNyw3Ny44OTYgMzUwLjM5Niw3Ni44NTQgMzQ5Ljg5NSw3Ni4wMTkgTTMyMC40OTcsMzIuOTgyIEwzMDguNDI5LDMyLjk4MiBMMzA4LjQyOSwxMS44MDUgTDMyMC40OTcsMTEuODA1IEMzMjMuNzg5LDExLjgwNSAzMjYuNDU0LDEyLjIwNSAzMjguMzk3LDEyLjk4IEMzMzAuMzIxLDEzLjc1NSAzMzEuNzk3LDE0LjY3IDMzMi43NzEsMTUuNzA1IEMzMzMuNzI2LDE2LjcyNyAzMzQuMzgyLDE3LjgwOSAzMzQuNzE2LDE4LjkzNyBDMzM1LjEwMiwyMC4yNCAzMzUuMjk3LDIxLjQwOCAzMzUuMjk3LDIyLjM5IEMzMzUuMjk3LDIzLjM4NiAzMzUuMTAyLDI0LjU0MSAzMzQuNzE2LDI1Ljg1IEMzMzQuMzgyLDI2Ljk3OCAzMzMuNzI2LDI4LjA2IDMzMi43NzEsMjkuMDgyIEMzMzEuNzc2LDMwLjEzMSAzMzAuMzE0LDMxLjAzOSAzMjguMzk3LDMxLjgwMSBDMzI2LjQ1NCwzMi41ODIgMzIzLjc5NiwzMi45ODIgMzIwLjQ5NywzMi45ODIiIGlkPSJGaWxsLTE3IiBmaWxsPSIjMjcyRjMyIiBtYXNrPSJ1cmwoI21hc2stNikiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTcyLjEwMSw0MC4wOTIgQzcyLjEwMSwzNC4wNzQgNzEuMDg2LDI4LjQ1OCA2OC44ODIsMjIuOTgyIEM2OC41NzUsMjIuMjIgNjcuOTM0LDIxLjYzMyA2Ny4xNDYsMjEuMzk5IEM2Ni4zNjUsMjEuMTY1IDY1LjUwMywyMS4zMTIgNjQuODIyLDIxLjc4IEw1OC45OTIsMjUuOSBDNTguMDIzLDI2LjU4OCA1Ny42MTYsMjcuODMgNTcuOTksMjguOTU5IEM1OS4xNjUsMzIuNDU4IDU5Ljc2LDM2LjE5OSA1OS43Niw0MC4wOTIgQzU5Ljc2LDQ0LjM3OSA1OS4wNzIsNDguNDI3IDU3LjcxNiw1Mi4xMjYgQzU2LjM3Myw1NS43OCA1NC40MjMsNTguOTkyIDUxLjkzMiw2MS42NTcgQzQ5LjQ2OCw2NC4zMjIgNDYuNDIyLDY2LjQ0NiA0Mi44OSw2Ny45NzUgQzM1Ljc4NCw3MS4wNCAyNS44NzIsNzEuMDQgMTguNzgsNjcuOTc1IEMxNS43ODEsNjYuNjc5IDEzLjA5LDY0Ljg5NiAxMC43NjYsNjIuNjY1IEM5LjgzNyw2MS43NzggOC4zOTUsNjEuNjU3IDcuMzQsNjIuNDExIEwxLjc0Myw2Ni4zNjUgQzEuMDk1LDY2LjgyNiAwLjY4MSw2Ny41NDEgMC42MTQsNjguMzM1IEMwLjU0OCw2OS4xMjMgMC44MjgsNjkuODk5IDEuMzg5LDcwLjQ2NiBDNC45NjIsNzQuMDczIDkuMjYzLDc2LjkxIDE0LjE1OSw3OC45MDEgQzE5LjIwMSw4MC45NTggMjQuODEsODIgMzAuODI4LDgyIEMzNi44NDYsODIgNDIuNDU1LDgwLjk1OCA0Ny40OTcsNzguOTAxIEM1Mi41NjcsNzYuODM3IDU2Ljk2OCw3My45MDYgNjAuNTg4LDcwLjE3MiBDNjQuMTk0LDY2LjQ1OSA2Ny4wNDYsNjEuOTcxIDY5LjA3Niw1Ni44NDIgQzcxLjA4Niw1MS43NCA3Mi4xMDEsNDYuMTAzIDcyLjEwMSw0MC4wOTIiIGlkPSJGaWxsLTE4IiBmaWxsPSIjMjcyRjMyIiBtYXNrPSJ1cmwoI21hc2stNikiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZD0iTTE4MS45NzUsMjA1LjkwMSBDMTgyLjA0OCwyMDUuMTA2IDE4MS43NjEsMjA0LjMyNCAxODEuMjA3LDIwMy43NjMgQzE3Ny42NDcsMjAwLjE5IDE3My4zOCwxOTcuMzUyIDE2OC41MTgsMTk1LjM0MiBDMTU4LjM4NiwxOTEuMTU0IDE0NS4yNywxOTEuMTU0IDEzNS4xMzksMTk1LjM0MiBDMTMwLjA3NiwxOTcuNDQ2IDEyNS42ODIsMjAwLjM5MSAxMjIuMDY4LDIwNC4xMjQgQzExOC40NjksMjA3LjgzNyAxMTUuNjE3LDIxMi4yOTkgMTEzLjU5MywyMTcuMzk0IEMxMTEuNTc3LDIyMi40NDMgMTEwLjU2MSwyMjguMDY3IDExMC41NjEsMjM0LjA5MSBDMTEwLjU2MSwyNDAuMTE1IDExMS41NzcsMjQ1Ljc1MSAxMTMuNzU0LDI1MS4yMDEgQzExNC4wNTQsMjUxLjk2OSAxMTQuNjk1LDI1Mi41NjQgMTE1LjQ4MywyNTIuODA0IEMxMTUuNzQ0LDI1Mi44NyAxMTYuMDA0LDI1Mi45MSAxMTYuMjY1LDI1Mi45MSBDMTE2LjgxMiwyNTIuOTEgMTE3LjM2LDI1Mi43NDMgMTE3LjgyMSwyNTIuNDIzIEwxMjMuNjY0LDI0OC4yODIgQzEyNC42MzMsMjQ3LjU5NSAxMjUuMDQsMjQ2LjM1MyAxMjQuNjY2LDI0NS4yMzEgQzEyMy40OTEsMjQxLjcxNyAxMjIuODk2LDIzNy45NjQgMTIyLjg5NiwyMzQuMDkxIEMxMjIuODk2LDIyOS44MDMgMTIzLjU5MSwyMjUuNzU2IDEyNC45NDcsMjIyLjA2MyBDMTI2LjMwOSwyMTguMzk2IDEyOC4yNDYsMjE1LjE5IDEzMC43MjQsMjEyLjUzMiBDMTMzLjE5NSwyMDkuODYxIDEzNi4yNDcsMjA3LjczNyAxMzkuNzg3LDIwNi4yMDggQzE0Ni44NTksMjAzLjE0OSAxNTYuNzk3LDIwMy4xNDkgMTYzLjg5LDIwNi4yMDggQzE2Ni44ODgsMjA3LjUxIDE2OS41ODYsMjA5LjI5MyAxNzEuODg0LDIxMS41MTcgQzE3Mi44MTksMjEyLjQxOSAxNzQuMjYxLDIxMi41MzIgMTc1LjMxNiwyMTEuNzg0IEwxODAuODUzLDIwNy44NzEgQzE4MS40OTQsMjA3LjQxIDE4MS45MDgsMjA2LjY4OSAxODEuOTc1LDIwNS45MDEiIGlkPSJGaWxsLTIwIiBmaWxsPSIjRUE4RDVBIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = require("nanoid");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(10);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(0);

// EXTERNAL MODULE: ./assets/logo.svg
var logo = __webpack_require__(12);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// CONCATENATED MODULE: ./components/atoms/Logo/Logo.js



var StyledSVG = external_styled_components_default.a.img.withConfig({
  displayName: "Logo__StyledSVG",
  componentId: "sc-1sriu0r-0"
})(["max-width:200px;margin:60px 20px 0px 20px;"]);
/* harmony default export */ var Logo = (function () {
  return external_react_default.a.createElement(StyledSVG, {
    className: "logo",
    src: logo_default.a,
    alt: "logo"
  });
});
// CONCATENATED MODULE: ./components/atoms/Logo/index.js

/* harmony default export */ var atoms_Logo = (Logo);
// CONCATENATED MODULE: ./components/Sidebar.js






var nanoid = __webpack_require__(14);

var SidebarStyles = external_styled_components_default.a.aside.withConfig({
  displayName: "Sidebar__SidebarStyles",
  componentId: "sc-9qm6jw-0"
})(["flex-shrink:0;min-height:calc(100vh - 80px);padding-right:0px;box-sizing:content-box;border-right:1px solid rgb(210,210,210);min-width:200px;"]);
var SubMenu = external_styled_components_default.a.ul.withConfig({
  displayName: "Sidebar__SubMenu",
  componentId: "sc-9qm6jw-1"
})(["list-style:none;padding:0;padding-left:20px;padding-right:20px;margin:40px 0 0;font-size:20px;position:sticky;top:40px;"]);
var SubMenuItem = external_styled_components_default.a.li.withConfig({
  displayName: "Sidebar__SubMenuItem",
  componentId: "sc-9qm6jw-2"
})(["margin-bottom:23px;a{padding-left:0;background-color:transparent;color:inherit;text-decoration:none;}a.active{font-weight:700;}"]);
var StyledLogo = external_styled_components_default()(atoms_Logo).withConfig({
  displayName: "Sidebar__StyledLogo",
  componentId: "sc-9qm6jw-3"
})(["margin-left:10px;"]);

var Sidebar_PostLink = function PostLink(_ref) {
  var id = _ref.id,
      slug = _ref.slug,
      title = _ref.title;
  return external_react_default.a.createElement(SubMenuItem, null, external_react_default.a.createElement(link_default.a, {
    as: "/".concat(slug),
    href: "/post?id=".concat(id, "&title=").concat(title, "&slug=").concat(slug)
  }, external_react_default.a.createElement("a", null, title)));
};

var Sidebar_Sidebar = function Sidebar(_ref2) {
  var data = _ref2.data;
  return external_react_default.a.createElement(SidebarStyles, null, external_react_default.a.createElement(StyledLogo, null), external_react_default.a.createElement(SubMenu, null, data.map(function (article) {
    return external_react_default.a.createElement(Sidebar_PostLink, {
      key: nanoid(),
      id: article.sys.id,
      slug: article.fields.slug,
      title: article.fields.title
    });
  })));
};

/* harmony default export */ var components_Sidebar = __webpack_exports__["a"] = (Sidebar_Sidebar);

/***/ }),
/* 16 */
/***/ (function(module, exports) {



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/organisms/Header/Header.js


var Header_Header = function Header() {
  return external_react_default.a.createElement("header", null, "Header");
};

/* harmony default export */ var organisms_Header_Header = (Header_Header);
// CONCATENATED MODULE: ./components/organisms/Header/index.js

/* harmony default export */ var organisms_Header = (organisms_Header_Header);

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@contentful/rich-text-html-renderer");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@contentful/rich-text-types");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(32);


/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@contentful/rich-text-html-renderer"
var rich_text_html_renderer_ = __webpack_require__(19);

// EXTERNAL MODULE: external "@contentful/rich-text-types"
var rich_text_types_ = __webpack_require__(20);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__(21);
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_);

// EXTERNAL MODULE: external "nanoid"
var external_nanoid_ = __webpack_require__(14);

// EXTERNAL MODULE: ./util/dataFetching.js
var dataFetching = __webpack_require__(8);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(0);

// EXTERNAL MODULE: ./components/organisms/Header/index.js + 1 modules
var Header = __webpack_require__(17);

// EXTERNAL MODULE: ./components/Sidebar.js + 2 modules
var Sidebar = __webpack_require__(15);

// CONCATENATED MODULE: ./components/MyLayout.js





var LayoutInner = external_styled_components_default.a.div.withConfig({
  displayName: "MyLayout__LayoutInner",
  componentId: "sc-1d2bbzs-0"
})(["display:flex;padding:0px 0 0px 0px;max-width:1024px;margin:auto;"]);
var MyLayout_Content = external_styled_components_default.a.main.withConfig({
  displayName: "MyLayout__Content",
  componentId: "sc-1d2bbzs-1"
})(["flex:1;margin:40px 0 0;padding:0px 40px;max-width:700px;overflow:hidden;"]);
var BaseStyles = external_styled_components_default.a.div.withConfig({
  displayName: "MyLayout__BaseStyles",
  componentId: "sc-1d2bbzs-2"
})(["font-family:'Roboto';color:", ";line-height:", ";"], Object(external_styled_system_["themeGet"])('colors.black'), Object(external_styled_system_["themeGet"])('lineHeights.l'));

var MyLayout_Layout = function Layout(_ref) {
  var sidebar = _ref.sidebar,
      children = _ref.children;
  return external_react_default.a.createElement(BaseStyles, null, external_react_default.a.createElement(LayoutInner, null, external_react_default.a.createElement(Sidebar["a" /* default */], {
    data: sidebar
  }), external_react_default.a.createElement(MyLayout_Content, null, children)));
};

/* harmony default export */ var MyLayout = (MyLayout_Layout);
// EXTERNAL MODULE: ./components/atoms/Title/index.js + 1 modules
var Title = __webpack_require__(11);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(9);

// EXTERNAL MODULE: ./components/atoms/Box/index.js + 1 modules
var Box = __webpack_require__(4);

// CONCATENATED MODULE: ./components/atoms/Text/Text.js




var StyledText = external_styled_components_default()(Box["a" /* default */]).withConfig({
  displayName: "Text__StyledText",
  componentId: "nhi132-0"
})([""]);

var Text_Text = function Text(props) {
  return external_react_default.a.createElement(StyledText, props);
};

Text_Text.defaultProps = {
  is: 'div',
  fontSize: 'm',
  m: '0 0 1.1em'
};
/* harmony default export */ var atoms_Text_Text = (Text_Text);
// CONCATENATED MODULE: ./components/atoms/Text/index.js

/* harmony default export */ var atoms_Text = (atoms_Text_Text);
// EXTERNAL MODULE: ./style.scss
var style = __webpack_require__(16);

// CONCATENATED MODULE: ./pages/post.js



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var options = {
  renderNode: _defineProperty({}, rich_text_types_["BLOCKS"].EMBEDDED_ASSET, function (node) {
    return "<img class=\"img\" src=\"".concat(node.data.target.sys.id, "\" id=\"\" alt='oi' />");
  })
};
var StyledTitle = external_styled_components_default()(Title["a" /* default */]).withConfig({
  displayName: "post__StyledTitle",
  componentId: "fmjhvh-0"
})(["font-family:'avenir-next-bold';"]);

var swapUrlForID =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(string, slug) {
    var newString, assetArray;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newString = string;
            assetArray = Object(dataFetching["b" /* getAssets */])(slug).then(function (assets) {
              return assets.map(function (a) {
                var obj = {};
                obj.id = a.sys.id;
                obj.url = a.fields.file.url;
                return obj;
              });
            }).then(function (a) {
              return a.map(function (object) {
                return newString.replace(object.id, object.url);
              });
            });
            return _context.abrupt("return", assetArray);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function swapUrlForID(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var post_Content = function Content(_ref2) {
  var content = _ref2.content,
      title = _ref2.title,
      slug = _ref2.slug;

  if (Array.isArray(content)) {
    content = content.toString();
  }

  var parsed = external_html_react_parser_default()(content);
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Title["a" /* default */], {
    is: "h2",
    size: "h2"
  }, title), external_react_default.a.createElement(Box["a" /* default */], null, parsed));
};

var post_Page = function Page(_ref3) {
  var sidebar = _ref3.sidebar,
      data = _ref3.data,
      title = _ref3.title,
      slug = _ref3.slug;
  return external_react_default.a.createElement(MyLayout, {
    sidebar: sidebar
  }, external_react_default.a.createElement(post_Content, {
    title: title,
    content: data,
    slug: slug
  }));
};

post_Page.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2(props) {
    var sidebar, data, htmlString, newdata;
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(dataFetching["a" /* getAllPosts */])();

          case 2:
            sidebar = _context2.sent;
            _context2.next = 5;
            return Object(dataFetching["c" /* getSinglePost */])(props);

          case 5:
            data = _context2.sent;
            htmlString = Object(rich_text_html_renderer_["documentToHtmlString"])(data.data.content, options);

            if (!data.assets) {
              _context2.next = 12;
              break;
            }

            _context2.next = 10;
            return swapUrlForID(htmlString, props.query.slug);

          case 10:
            newdata = _context2.sent;
            return _context2.abrupt("return", {
              sidebar: sidebar.data,
              data: newdata,
              title: data.data.title,
              slug: props.query.slug
            });

          case 12:
            return _context2.abrupt("return", {
              sidebar: sidebar.data,
              data: htmlString,
              title: data.data.title,
              slug: props.query.slug
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ var post = __webpack_exports__["default"] = (post_Page);

/***/ })
/******/ ]);