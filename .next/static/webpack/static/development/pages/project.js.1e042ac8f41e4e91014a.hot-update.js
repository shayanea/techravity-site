webpackHotUpdate("static/development/pages/project.js",{

/***/ "./pages/project.js":
/*!**************************!*\
  !*** ./pages/project.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-owl-carousel2 */ "./node_modules/react-owl-carousel2/lib/OwlCarousel.js");
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_scripts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/scripts */ "./components/scripts.js");









var _jsxFileName = "/Users/Shayan/Desktop/techravity/nextjs/pages/project.js";








var options = {
  loop: true,
  nav: false,
  navText: ["", ""],
  autoplay: false,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 1,
      nav: true
    }
  }
};
var events = {
  onInitialized: function onInitialized(event) {
    var stageW = $(".project-thumbnails .owl-carousel").width(),
        containerH = $(".project-thumbnails").height(),
        $el = $(".project-thumbnails .owl-item");
    $el.each(function () {
      $(this).css("width", stageW);
    });
    setTimeout(function () {
      var stageH = $(".project-thumbnails .owl-carousel").height();
      $(".project-thumbnails .gallery-container").css("height", stageH);

      if (stageH > containerH) {
        $(".project-thumbnails").css("height", stageH + 40);
      }
    }, 500);
  },
  onResize: function onResize(event) {
    var stageW = $(".project-thumbnails .owl-carousel").width(),
        containerH = $(".project-thumbnails").height(),
        $el = $(".project-thumbnails .owl-item");
    $el.each(function () {
      $(this).css("width", stageW);
    });
    setTimeout(function () {
      var stageH = $(".project-thumbnails .owl-carousel").height();
      $(".project-thumbnails .gallery-container").css("height", stageH);

      if (stageH > containerH) {
        $(".project-thumbnails").css("height", stageH + 40);
      }
    }, 500);
  }
};

var InnerProject =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(InnerProject, _Component);

  function InnerProject(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, InnerProject);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(InnerProject).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "uniqueNumber", function (maxVal) {
      var number = Math.floor(Math.random() * maxVal + 1);

      if (!_this.state.numbers.includes(number)) {
        var result = _this.state.numbers;
        result.push(number);

        _this.setState({
          numbers: result
        });

        return true;
      } else if (_this.state.numbers.length - 1 !== maxVal) {
        _this.uniqueNumber(maxVal);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "randomItem", function () {
      for (var i = 0; i < 3; i++) {
        _this.uniqueNumber(6);
      }
    });

    _this.state = {
      numbers: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(InnerProject, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.randomItem();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          setting = _this$props.setting,
          project = _this$props.project,
          items = _this$props.items;
      var numbers = this.state.numbers;
      var slideShow = JSON.parse(project.slideShow);
      var icon = slideShow.filter(function (item) {
        return item.type === 0;
      });
      var cover = slideShow.filter(function (item) {
        return item.type === 1;
      });
      var gallery = slideShow.filter(function (item) {
        return item.type === 2;
      });
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "inner-portfolio-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "Techravity - ".concat(project.title),
        setting: setting,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        router: router,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "banner-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "project-bg",
        style: {
          backgroundColor: project.color ? project.color : "#000"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, project.logo && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        className: "wow fadeIn logo",
        src: "http://192.168.1.76:8080".concat(project.logo),
        alt: "".concat(project.title),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, project.title), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, project.slug), project.url && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: project.url,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "website")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, cover && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        className: "wow fadeIn mockup",
        src: "http://192.168.1.76:8080".concat(cover[0].file),
        alt: "".concat(project.title),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "technology-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "../../static/images/technology/microsoft.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "../../static/images/technology/html-5.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "../../static/images/technology/css3.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "../../static/images/technology/javascript.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "porject-overview-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Overview"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, project.content), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "overview-tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Project name:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "beliive")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Services:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Web application Development, DevOps, UI/UX Design")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Industry:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "Social media"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "Website:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "https://beliive.com/")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "Technologies:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "ASP.NET core, HTML, CSS, JS")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Region:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "South America & UK")))))), gallery && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "project-thumbnails",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "integrated design"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality."))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "gallery-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: "items-container owl-carousel",
        events: events,
        options: options,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, gallery.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          key: item.id,
          className: "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
          src: "http://192.168.1.76:8080".concat(item.file),
          alt: "".concat(project.title),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }));
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "more-projects container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "more case studies"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, numbers.map(function (item) {
        var slide = JSON.parse(items[item].slideShow),
            gallery = slide.filter(function (item) {
          return item.type === 2;
        });
        console.log(items[item]); // return (
        //   <a key={item} href={items[item].url} className="items">
        //     <img src={`http://192.168.1.76:8080${gallery[0].file}`} alt={items[item].title} />
        //     <div className="content">
        //       <h2>{items[item].title}</h2>
        //       <p>{items[item].slug}</p>
        //     </div>
        //   </a>
        // );
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_15__["default"], {
        router: router,
        setting: setting,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_scripts__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, res1, setting, res2, project, res3, items;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                _context.next = 3;
                return fetch("http://192.168.1.76:8080/api/setting");

              case 3:
                res1 = _context.sent;
                _context.next = 6;
                return res1.json();

              case 6:
                setting = _context.sent;
                _context.next = 9;
                return fetch("http://192.168.1.76:8080/api/project/".concat(query.id));

              case 9:
                res2 = _context.sent;
                _context.next = 12;
                return res2.json();

              case 12:
                project = _context.sent;
                _context.next = 15;
                return fetch("http://192.168.1.76:8080/api/project");

              case 15:
                res3 = _context.sent;
                _context.next = 18;
                return res3.json();

              case 18:
                items = _context.sent;
                return _context.abrupt("return", {
                  setting: setting,
                  project: project,
                  items: items
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return InnerProject;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(InnerProject));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

})
//# sourceMappingURL=project.js.1e042ac8f41e4e91014a.hot-update.js.map