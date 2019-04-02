webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/atoms/Title/Title.js":
/*!*****************************************!*\
  !*** ./components/atoms/Title/Title.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Box */ "./components/atoms/Box/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var StyledTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_Box__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "Title__StyledTitle",
  componentId: "sc-1dnr8hi-0"
})(["line-height:", ";font-size:", "px;font-family:'adelle-sans';font-weight:300;"], function (_ref) {
  var size = _ref.size;
  return Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])("lineHeights.heading.".concat(size));
}, function (_ref2) {
  var size = _ref2.size;
  return Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])("fontSizes.heading.".concat(size));
});

var Title = function Title(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTitle, props);
};

Title.propTypes = _objectSpread({}, _Box__WEBPACK_IMPORTED_MODULE_4__["default"].propTypes, {
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  is: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div']),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  m: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});
Title.defaultProps = {
  is: 'h2',
  size: 'h2',
  fontWeight: 'bold',
  m: '0 0 30px'
};
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ })

})
//# sourceMappingURL=post.js.b50b502b90ee2974094b.hot-update.js.map