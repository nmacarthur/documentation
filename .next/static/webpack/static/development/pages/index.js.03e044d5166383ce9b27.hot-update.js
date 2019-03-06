webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_IndexLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/IndexLayout */ "./components/IndexLayout.js");
/* harmony import */ var _components_atoms_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/atoms/Button */ "./components/atoms/Button/index.js");
/* harmony import */ var _components_atoms_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/atoms/Container */ "./components/atoms/Container/index.js");
/* harmony import */ var _util_dataFetching__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/dataFetching */ "./util/dataFetching.js");
/* harmony import */ var _components_atoms_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/atoms/Title */ "./components/atoms/Title/index.js");



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var Index = function Index(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_IndexLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_atoms_Container__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "New Word Order Writing Guide"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_atoms_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "./introduction"
  }, "Click Here")));
};

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_util_dataFetching__WEBPACK_IMPORTED_MODULE_6__["getAllPosts"])();

        case 2:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.03e044d5166383ce9b27.hot-update.js.map