webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-wow */ "./node_modules/react-wow/dist/index.js");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_scripts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/scripts */ "./components/scripts.js");







var _jsxFileName = "/Users/Shayan/Desktop/techravity/nextjs/pages/portfolio.js";










var Portfolio =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Portfolio, _Component);

  function Portfolio() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Portfolio);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Portfolio).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Portfolio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          page = _this$props.page,
          projects = _this$props.projects,
          setting = _this$props.setting;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "portfolio-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Techravity - ".concat(page.title),
        setting: setting,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        router: router,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "banner-container",
        style: {
          backgroundImage: "url(\thttp://192.168.1.76:8080".concat(page.coverImage, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "content container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, page.slogan), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, page.description))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "portfolio-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, projects.map(function (item) {
        var icon = JSON.parse(item.icon);
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: item.id,
          className: "items",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_11___default.a, {
          animation: "fadeInUp",
          duration: ".3s",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, item.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, item.slug), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: {
            pathname: "project",
            query: {
              id: item.id
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, "See more "))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "img-holder",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, icon.map(function (el, index) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_11___default.a, {
            key: index,
            animation: "fadeIn",
            duration: "0.5s",
            delay: index === 0 ? "0" : "0.4s",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            className: icon.length === 2 ? "multiple" : null,
            src: "http://192.168.1.76:8080".concat(el.file),
            alt: item.title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }));
        }))));
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        router: router,
        setting: setting,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_scripts__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res1, page, res2, projects, res3, setting;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("http://192.168.1.76:8080/api/menu?menuType=".concat(2));

              case 2:
                res1 = _context.sent;
                _context.next = 5;
                return res1.json();

              case 5:
                page = _context.sent;
                _context.next = 8;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("http://192.168.1.76:8080/api/project");

              case 8:
                res2 = _context.sent;
                _context.next = 11;
                return res2.json();

              case 11:
                projects = _context.sent;
                _context.next = 14;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("http://192.168.1.76:8080/api/setting");

              case 14:
                res3 = _context.sent;
                _context.next = 17;
                return res3.json();

              case 17:
                setting = _context.sent;
                return _context.abrupt("return", {
                  page: page[0],
                  projects: projects,
                  setting: setting
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Portfolio;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Portfolio));

/***/ })

})
//# sourceMappingURL=portfolio.js.a4bf2bcd4a77ca944901.hot-update.js.map