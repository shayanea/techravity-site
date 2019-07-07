webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-owl-carousel2 */ "./node_modules/react-owl-carousel2/lib/OwlCarousel.js");
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scrollmagic */ "./node_modules/react-scrollmagic/dist/index.es.js");
/* harmony import */ var react_vivus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-vivus */ "./node_modules/react-vivus/lib/index.js");
/* harmony import */ var react_vivus__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_vivus__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_scripts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/scripts */ "./components/scripts.js");





var _jsxFileName = "/Users/Shayan/Desktop/techravity/nextjs/pages/about.js";









var options1 = {
  margin: 10,
  nav: false,
  navText: ["", ""],
  autoHeight: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 1,
      nav: true,
      loop: false
    }
  }
};
var events = {
  onChanged: function onChanged(e) {
    $(".about-page .introduction-2 .steps-container li").removeClass("active");
    $(".about-page .introduction-2 .steps-container li:nth-child(" + (e.item.index + 1) + ")").addClass("active");
  }
};

var About =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(About, _Component);

  function About() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, About);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(About).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var slider = this.refs.slider;
      $(document).on("click", ".about-page .introduction-2 .steps-container li", function () {
        $(".about-page .introduction-2 .steps-container li").removeClass("active");
        $(this).addClass("active");
        slider.goTo($(this).attr("data-index") - 1);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var router = this.props.router;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "about-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Techravity - About",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        router: router,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "banner-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Welcome to Techravity"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Everything That Now Exists Was Once Imagined"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "introduction-1 container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "img-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_scrollmagic__WEBPACK_IMPORTED_MODULE_8__["Controller"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_scrollmagic__WEBPACK_IMPORTED_MODULE_8__["Scene"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_vivus__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "icon1",
        option: {
          file: "../static/images/about/animated/icon1.svg",
          animTimingFunction: "EASE",
          type: "sync",
          duration: 40
        },
        style: {
          height: "100%",
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "About Us"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Complexity motivates us"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "We love to solve complex problems. Our clients never worry because of our careful engineering who turn your dreams on design and high functionality into digital reality."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "introduction-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Our Process"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "steps-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "active",
        "data-index": "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Request Quote"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        "data-index": "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Design"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        "data-index": "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Development Process"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        "data-index": "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Support")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_7___default.a, {
        ref: "slider",
        className: "owl-carousel",
        options: options1,
        events: events,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/icon/1-01.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Your Idea")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/icon/1-02.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Gathering Data")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/icon/1-03.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Build a structure base on your needs")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/icon/1-04.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "project estimation cost with our suggestion")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "It's always the most important step.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), "We make your vision tangible. We ensure that every bit of your vision would be digitized and born in Digital dimension. Clarity is the key, our technicians grasp your vision through the clarity of the details you have in mind and do the planning for it throughout the technical point of view. We want to understand, feel and be a part of your business realm.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/icon/2-01.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "UX specifications")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/icon/2-02.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Prepare mockups")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/icon/2-03.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Mockups test")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/icon/2-04.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Design preparation")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/icon/2-05.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Design confirmed")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "We believe Eye Catching design result in stunning product. It does not matter how many iterations your Design needed, The out come is what have value for us. At the end of this step our designs and documents would be ready for your approval, after that the real development work will begin.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/icon/3-01.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "Sprint planning")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/icon/3-02.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "Development")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/icon/3-03.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "Code review")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/icon/3-04.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "Q.A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/icon/3-05.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "Client Acceptance")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "Here\u2019s where the dream comes true!", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }), " Expert developers work on your project with the most advanced tools. A dedicated product manager focuses on your production process, while the rest of the team ensure your code is the best possible quality. You are a part of the process at every step. Clear communication every day and weekly meetings according to the project timeline already established. We will make sure everything goes according to plan and just how you want it. We deliver your product as you desirable, smooth, safe and fast.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/icon/4-01.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "No chat bots")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/icon/4-02.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "No tickets")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/icon/4-03.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "Contact with a real tech support person via email, phone calls and etc.")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "All the prior steps were just the beginning. A fast, safe and smooth product with stunning design is nothing without technical support 24/7. Regardless of time and day, we oversee the product with our dedicated support team. If you need additional features or fixing functionalities, just contact us at", " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, "Techravity.")))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "introduction-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "Who we Are"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "We're a Stockholm, Sweden-based team of passionate developers with offices globally. We develop customized software for web and mobile. We also build workflows and systems aiming to digitalize the traditional workflow processes. We offer a suite of white-label digital solutions and aim to get our clients to the market faster.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        style: {
          marginTop: "50px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "Our mentality"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, "First work then reward ! Customer satisfaction is at the center of all our activities. We are confident of our performance to a level that we are willing to provide you with a trial round of sample work to prove our punctuality and quality of work before we expect any compensation.")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "introduction-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "OUR TEAM"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items-container container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "Saeid", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }), "Esmailzadeh"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "Founder & Director"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "socials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "twitter",
        href: "https://twitter.com/drsaeid",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "linkedin",
        href: "https://www.linkedin.com/in/saeid-esmaeilzadeh/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "mail",
        href: "mailto:saeid@techravity.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/team/1.jpg",
        alt: "Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "Pooya", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }), "Jahan"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, "Co-Founder & CEO"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "socials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "linkedin",
        href: "https://www.linkedin.com/in/pooyajahan",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "mail",
        href: "mailto:pooya@techravity.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/team/4.jpg",
        alt: "Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, "David", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }), "Ramazani"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, "Project Manager"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "socials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "linkedin",
        href: "https://www.linkedin.com/in/davidram/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "mail",
        href: "mailto:david@techravity.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/team/15.jpg",
        alt: "Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, "Pourya"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, "CTO"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "socials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "twitter",
        href: "https://twitter.com/alaki_",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "linkedin",
        href: "https://www.linkedin.com/in/sharifi-",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "mail",
        href: "mailto:pourya@techravity.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/team/3.jpg",
        alt: "Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, "Annika"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, "Branding"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "socials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "linkedin",
        href: "https://www.linkedin.com/in/annika-ottosson-398a24161/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "mail",
        href: "mailto:annika@techravity.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/team/2.jpg",
        alt: "Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, "Anna"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, "Marketing Manager"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "socials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "twitter",
        href: "https://twitter.com/annaalikhani",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "skype",
        href: "skype:anna_a64a?call",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "linkedin",
        href: "https://www.linkedin.com/in/anna-alikhani-07abb85a",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "mail",
        href: "mailto:anna@techravity.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/team/6.jpg",
        alt: "Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, "Oscar"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, "Marketing"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "socials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "linkedin",
        href: "https://www.linkedin.com/in/oscarwiberg/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "mail",
        href: "mailto:oscar@techravity.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/team/13.jpg",
        alt: "Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, "Behrouz"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, "Business Developer"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "socials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "linkedin",
        href: "https://www.linkedin.com/in/behrouz-omran-3aaa2086",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "mail",
        href: "mailto:behrouz@techravity.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/team/5.jpg",
        alt: "Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, "Alexander"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, "Digital production"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "socials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "linkedin",
        href: "https://www.linkedin.com/in/alexander-nordfors-b33067b9/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "mail",
        href: "mailto:alexander@techravity.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/team/14.jpg",
        alt: "Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, "Shayan"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, "Front-End Developer"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "socials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "twitter",
        href: "https://twitter.com/shayanaraghi",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "linkedin",
        href: "https://www.linkedin.com/in/abbas-edris-araghi/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "mail",
        href: "mailto:shayan@techravity.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/team/8.jpg",
        alt: "Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }, "Nima"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }, "Back-End Developer"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "socials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "linkedin",
        href: "https://www.linkedin.com/in/nima-nosrati-71220189/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "mail",
        href: "mailto:nima@techravity.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/team/9.jpg",
        alt: "Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }, "Hassan"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        __self: this
      }, "Full-Stack Developer"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "socials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "twitter",
        href: "https://twitter.com/hasangilak",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "linkedin",
        href: "https://www.linkedin.com/in/mohammad-hassan-gilak-9248268a",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "mail",
        href: "mailto:hassan@techravity.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/team/10.jpg",
        alt: "Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      }, "Hiva"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        },
        __self: this
      }, "UI/UX Designer"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "socials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "linkedin",
        href: "https://www.linkedin.com/in/hiva-sharifi-4aa66374",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "mail",
        href: "mailto:hiva@techravity.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/team/11.jpg",
        alt: "Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }, "Samane"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        },
        __self: this
      }, "Graphic Designer"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "socials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "twitter",
        href: "https://twitter.com/samanerabiee",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "linkedin",
        href: "https://www.linkedin.com/in/samane-rabiee-297167152",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "mail",
        href: "mailto:samane@techravity.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/team/12.jpg",
        alt: "Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }, "Kankash"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        __self: this
      }, "Back-End Developer"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "socials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "linkedin",
        href: "https://www.linkedin.com/in/mohammad-kankash-8345795b/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "mail",
        href: "mailto:mohammad@techravity.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/team/7.jpg",
        alt: "Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "items hide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "introduction-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        },
        __self: this
      }, "Technologies we use"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/python.svg",
        alt: "python",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/node.svg",
        alt: "nodejs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/php.svg",
        alt: "js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/java.svg",
        alt: "java",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/webpack.svg",
        alt: "webpack",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/javascript.svg",
        alt: "javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/react.svg",
        alt: "react",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/vue.svg",
        alt: "vue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 537
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/angular.svg",
        alt: "angular",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 538
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 540
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/css3.svg",
        alt: "css3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/html5.svg",
        alt: "html5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/mysql.svg",
        alt: "mysql",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/mongodb.svg",
        alt: "mongodb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/postgresql.svg",
        alt: "postgresql",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/vscode.svg",
        alt: "vscode",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/atom.svg",
        alt: "atom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/visualstudio.svg",
        alt: "visualstudio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/about/technology/android.svg",
        alt: "android",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "introduction-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574
        },
        __self: this
      }, "Work with us"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575
        },
        __self: this
      }, "Looking for a highly motivated work area? Work with full potential?", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        },
        __self: this
      }), "Have a sit among us. We always looking forward to hire a highly experienced and motivated", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        },
        __self: this
      }), "developer in order to expand our business around the globe. Make sure to contact us."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "contactus.html",
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      }, "Contact us"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        router: router,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_scripts__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588
        },
        __self: this
      }));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(About));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

})
//# sourceMappingURL=about.js.77f16c6300b16f8f0219.hot-update.js.map