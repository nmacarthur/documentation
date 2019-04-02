webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @contentful/rich-text-html-renderer */ "./node_modules/@contentful/rich-text-html-renderer/dist/rich-text-html-renderer.es5.js");
/* harmony import */ var _contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @contentful/rich-text-types */ "./node_modules/@contentful/rich-text-types/dist/rich-text-types.es5.js");
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nanoid */ "./node_modules/next/node_modules/nanoid/index.browser.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_dataFetching__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/dataFetching */ "./util/dataFetching.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_atoms_Title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/atoms/Title */ "./components/atoms/Title/index.js");
/* harmony import */ var _components_atoms_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/atoms/Text */ "./components/atoms/Text/index.js");
/* harmony import */ var _components_atoms_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/atoms/Box */ "./components/atoms/Box/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../style.scss */ "./style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_12__);



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var options = {
  renderNode: _defineProperty({}, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_3__["BLOCKS"].EMBEDDED_ASSET, function (node) {
    return "<img class=\"img\" src=\"".concat(node.data.target.sys.id, "\" id=\"\" alt='oi' />");
  })
};
var StyledTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(_components_atoms_Title__WEBPACK_IMPORTED_MODULE_9__["default"]).withConfig({
  displayName: "post__StyledTitle",
  componentId: "fmjhvh-0"
})(["font-family:'adelle-sans';"]);

var swapUrlForID =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(string, slug) {
    var newString, assetArray;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newString = string;
            assetArray = Object(_util_dataFetching__WEBPACK_IMPORTED_MODULE_7__["getAssets"])(slug).then(function (assets) {
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

var Content = function Content(_ref2) {
  var content = _ref2.content,
      title = _ref2.title,
      slug = _ref2.slug;

  if (Array.isArray(content)) {
    content = content.toString();
  }

  var parsed = html_react_parser__WEBPACK_IMPORTED_MODULE_5___default()(content);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_atoms_Title__WEBPACK_IMPORTED_MODULE_9__["default"], {
    is: "h2",
    size: "h2"
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_atoms_Box__WEBPACK_IMPORTED_MODULE_11__["default"], null, parsed));
};

var Page = function Page(_ref3) {
  var sidebar = _ref3.sidebar,
      data = _ref3.data,
      title = _ref3.title,
      slug = _ref3.slug;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sidebar: sidebar
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
    title: title,
    content: data,
    slug: slug
  }));
};

Page.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(props) {
    var sidebar, data, htmlString, newdata;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_util_dataFetching__WEBPACK_IMPORTED_MODULE_7__["getAllPosts"])();

          case 2:
            sidebar = _context2.sent;
            _context2.next = 5;
            return Object(_util_dataFetching__WEBPACK_IMPORTED_MODULE_7__["getSinglePost"])(props);

          case 5:
            data = _context2.sent;
            htmlString = Object(_contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_2__["documentToHtmlString"])(data.data.content, options);

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

/* harmony default export */ __webpack_exports__["default"] = (Page);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=post.js.00464824659fcd1dd8d2.hot-update.js.map