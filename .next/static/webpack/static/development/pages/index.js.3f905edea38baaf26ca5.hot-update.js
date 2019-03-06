webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/IndexLayout.js":
/*!***********************************!*\
  !*** ./components/IndexLayout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var _organisms_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organisms/Header */ "./components/organisms/Header/index.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");





var LayoutInner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "IndexLayout__LayoutInner",
  componentId: "sc-7trqoj-0"
})(["display:flex;padding:0px 0px 0px 0px;max-width:1024px;margin:auto;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main.withConfig({
  displayName: "IndexLayout__Content",
  componentId: "sc-7trqoj-1"
})(["flex:1;margin:40px 0 0;padding:0px 40px;max-width:700px;overflow:hidden;"]);
var BaseStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "IndexLayout__BaseStyles",
  componentId: "sc-7trqoj-2"
})(["font-family:'Roboto';color:", ";line-height:", ";"], Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.black'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('lineHeights.l'));

var IndexLayout = function IndexLayout(_ref) {
  var sidebar = _ref.sidebar,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseStyles, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LayoutInner, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexLayout);

/***/ })

})
//# sourceMappingURL=index.js.3f905edea38baaf26ca5.hot-update.js.map