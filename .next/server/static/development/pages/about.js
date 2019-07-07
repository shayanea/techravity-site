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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navbar_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar/logo */ "./components/navbar/logo.js");
var _jsxFileName = "/Users/Shayan/Desktop/techravity/nextjs/components/footer.js";




function Footer(_ref) {
  var router = _ref.router;
  var year = new Date().getFullYear();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Our Services"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Dedicated Developers"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Mobile Development"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Web Development"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Product Design"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Join Our Social Community"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "socials",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://twitter.com/techravity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://www.facebook.com/techravity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://www.linkedin.com/company/techravity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://www.instagram.com/techravity/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_navbar_logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Techravity is a dedicated group of professionals who strive to deliver your tailor-made software solutions based on the best technological practices."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Tel:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:+46735859836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "+46 735 859 836")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Email:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:Info@techravity.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Info@techravity.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Address 1: "), "Stureplan 15, 111 45 Stockholm, Sweden"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Address 2: "), "Bilkent Cyberpark, Cyberplaza A Blok, Ankara, Turkey"), router.pathname !== "/contact" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contactus.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Contact Us")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "@ ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, year), " Techravity - IT Solution Company"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Shayan/Desktop/techravity/nextjs/components/head.js";



function GlobarHeader(_ref) {
  var title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "ie=edge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "google",
    value: "notranslate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "referrer",
    content: "no-referrer-when-downgrade",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "HandheldFriendly",
    content: "True",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "MobileOptimized",
    content: "320",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "google-site-verification",
    content: "ondKXwN1V4cD1XRX46GXhnTHzbqTvvl6w59XgyCBmhM",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/static/images/favicon/apple-icon-57x57.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/static/images/favicon/apple-icon-60x60.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/static/images/favicon/apple-icon-72x72.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/static/images/favicon/apple-icon-76x76.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/static/images/favicon/apple-icon-114x114.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/static/images/favicon/apple-icon-120x120.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/static/images/favicon/apple-icon-144x144.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/static/images/favicon/apple-icon-152x152.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/images/favicon/apple-icon-180x180.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/static/images/favicon/android-icon-192x192.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/static/images/favicon/favicon-32x32.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/static/images/favicon/favicon-96x96.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/static/images/favicon/favicon-16x16.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "manifest",
    href: "/manifest.json",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "msapplication-TileImage",
    content: "/ms-icon-144x144.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#ffffff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/owl.carousel.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/styles.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/responsive.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://code.jquery.com/jquery-3.2.1.slim.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (GlobarHeader);

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_navbar_logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/navbar/logo */ "./components/navbar/logo.js");
/* harmony import */ var _components_navbar_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/navbar/form */ "./components/navbar/form.js");







var _jsxFileName = "/Users/Shayan/Desktop/techravity/nextjs/components/navbar.js";





var Navbar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navbar, _Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      formStatus: false,
      menuStatus: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ($(window).width() < 736) {
        $("header").addClass("sticky");
      } else {
        $(window).scroll(function (e) {
          if ($(this).scrollTop() > 550) {
            $("header").removeClass("fixed");
            $("header").addClass("sticky");
          } else {
            $("header").removeClass("sticky");
            $("header").addClass("fixed");
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          formStatus = _this$state.formStatus,
          menuStatus = _this$state.menuStatus;
      var router = this.props.router;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_navbar_logo__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "menu-btn",
        onClick: function onClick() {
          return _this2.setState({
            menuStatus: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: menuStatus ? "menu-container active" : "menu-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "close-menu-btn",
        onClick: function onClick() {
          return _this2.setState({
            menuStatus: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: router.pathname === "/services" ? "active" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/services",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Services"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: router.pathname === "/portfolio" ? "active" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Portfolio"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: router.pathname === "/about" ? "active" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "About"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: router.pathname === "/contact" ? "active" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Contact Us"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "btn",
        onClick: function onClick() {
          return _this2.setState({
            formStatus: !_this2.state.formStatus
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "FREE QUOTE")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_navbar_form__WEBPACK_IMPORTED_MODULE_10__["default"], {
        status: formStatus,
        onHideForm: function onHideForm() {
          return _this2.setState({
            formStatus: false
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./components/navbar/form.js":
/*!***********************************!*\
  !*** ./components/navbar/form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cogo-toast */ "cogo-toast");
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(cogo_toast__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "/Users/Shayan/Desktop/techravity/nextjs/components/navbar/form.js";



var Form =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Form, _Component);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Form)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      name: "",
      email: "",
      tel: "",
      staff: "",
      role: "",
      description: "",
      hasSubmited: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "validateEmail", function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "validateTel", function (tel) {
      var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      return re.test(String(tel).toLowerCase());
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "submit", function (e) {
      var self = Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this);

      e.preventDefault();

      _this.setState({
        hasSubmited: true
      });

      if (_this.state.name.trim() !== "" && _this.state.role.trim() !== "", _this.state.description.trim() !== "", _this.state.staff.trim() !== "" && _this.validateEmail(_this.state.email) && _this.validateTel(_this.state.tel)) {
        fetch("https://techravity.herokuapp.com/api/Site/SendQuote", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/problem+json; charset=utf-8"
          },
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
            name: _this.state.name,
            email: _this.state.email,
            phone: _this.state.tel,
            role: _this.state.role,
            size: Number(_this.state.staff),
            description: _this.state.description
          })
        }).then(function (res) {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Something went wrong");
          }
        }).then(function (data) {
          cogo_toast__WEBPACK_IMPORTED_MODULE_9___default.a.success("Thank you! Your message has been sent successfully.");
          self.setState({
            hasSubmited: false,
            name: "",
            email: "",
            role: "",
            staff: "",
            tel: "",
            description: ""
          });
        }).catch(function (err) {
          cogo_toast__WEBPACK_IMPORTED_MODULE_9___default.a.error("Something went wrong");
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Form, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var status = this.props.status;
      var _this$state = this.state,
          hasSubmited = _this$state.hasSubmited,
          name = _this$state.name,
          email = _this$state.email,
          role = _this$state.role,
          staff = _this$state.staff,
          description = _this$state.description,
          tel = _this$state.tel;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "freeQuote",
        className: status ? "active" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "tell us about your project"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "close-btn",
        onClick: this.props.onHideForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        noValidate: true,
        onSubmit: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "Name",
        onChange: function onChange(e) {
          return _this2.setState({
            name: e.target.value
          });
        },
        style: {
          border: hasSubmited && name.trim() === "" ? "1px solid red" : "1px solid #eee"
        },
        maxLength: 200,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        placeholder: "Compnay Email",
        onChange: function onChange(e) {
          return _this2.setState({
            email: e.target.value
          });
        },
        style: {
          border: hasSubmited && !this.validateEmail(email) ? "1px solid red" : "1px solid #eee"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "tel",
        className: "form-control",
        placeholder: "Phone",
        onChange: function onChange(e) {
          return _this2.setState({
            tel: e.target.value
          });
        },
        style: {
          border: hasSubmited && !this.validateTel(tel) ? "1px solid red" : "1px solid #eee"
        },
        maxLength: 11,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
        defaultValue: "",
        className: "form-control",
        placeholder: "Size of the company",
        onChange: function onChange(e) {
          return _this2.setState({
            staff: e.target.value
          });
        },
        style: {
          border: hasSubmited && staff.trim() === "" ? "1px solid red" : "1px solid #eee"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Size of the company"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "1-9 employees"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "10-24 employees"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "25-49 employees"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "50-100 employees"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        placeholder: "What is your role",
        onChange: function onChange(e) {
          return _this2.setState({
            role: e.target.value
          });
        },
        style: {
          border: hasSubmited && role.trim() === "" ? "1px solid red" : "1px solid #eee"
        },
        maxLength: 200,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("textarea", {
        rows: "4",
        className: "form-control",
        placeholder: "Project details",
        onChange: function onChange(e) {
          return _this2.setState({
            description: e.target.value
          });
        },
        style: {
          border: hasSubmited && description.trim() === "" ? "1px solid red" : "1px solid #eee"
        },
        maxLength: 5000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Send Request"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Our representatives will contact you within 2 working days"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "Our Analysts & Developers Team prepare the estimation"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "By sending you accept the confidentiality and personal information policies"))))));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/navbar/logo.js":
/*!***********************************!*\
  !*** ./components/navbar/logo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Shayan/Desktop/techravity/nextjs/components/navbar/logo.js";


function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "dot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "4.663in",
    height: "0.916in",
    viewBox: "0 0 4663 916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Layer_x0020_1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "_2502312118864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "fil1",
    d: "M1196.33 287.41l148.87 0c21.24,12.6 40.64,30.4 56.2,52.32 5.4,7.64 13.97,11.71 22.67,11.71 5.57,0 11.17,-1.67 16.06,-5.13 12.52,-8.87 15.46,-26.21 6.57,-38.72 -21.15,-29.83 -48.09,-54.17 -77.88,-70.82 -0.25,-0.17 -0.5,-0.31 -0.76,-0.47 -0.61,-0.33 -1.17,-0.76 -1.78,-1.1 -0.36,-0.19 -0.75,-0.29 -1.13,-0.47 -0.9,-0.44 -1.83,-0.82 -2.79,-1.17 -0.81,-0.29 -1.63,-0.56 -2.46,-0.76 -0.89,-0.22 -1.8,-0.39 -2.7,-0.53 -0.94,-0.14 -1.9,-0.24 -2.85,-0.29 -0.43,-0.02 -0.86,-0.13 -1.29,-0.13l-164.31 0c-0.36,0 -0.72,0.1 -1.08,0.11 -1.07,0.04 -2.14,0.15 -3.21,0.32 -0.8,0.14 -1.6,0.28 -2.36,0.46 -0.91,0.24 -1.82,0.53 -2.72,0.85 -0.9,0.32 -1.78,0.68 -2.61,1.1 -0.39,0.18 -0.79,0.28 -1.15,0.47 -80.19,43.06 -132,137.77 -132,241.28 0,146.5 101.87,265.69 227.08,265.69 68.07,0 132.21,-35.29 175.97,-96.82 8.89,-12.5 5.97,-29.85 -6.53,-38.74 -12.53,-8.9 -29.85,-5.96 -38.74,6.54 -33.21,46.68 -80.85,73.46 -130.71,73.46 -94.58,0 -171.53,-94.26 -171.53,-210.14 0,-80.79 37.96,-154.08 97.15,-189.03z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "fil1",
    d: "M643.26 287.41l149.06 0c52.38,30.92 88.1,91.79 95.7,161.33l-340.44 0c7.6,-69.53 43.32,-130.41 95.69,-161.33zm301.89 189.1c-0.03,-103.53 -51.87,-198.25 -132.13,-241.35 -0.37,-0.19 -0.76,-0.29 -1.14,-0.47 -0.87,-0.42 -1.75,-0.78 -2.67,-1.1 -0.88,-0.32 -1.76,-0.61 -2.65,-0.83 -0.81,-0.19 -1.6,-0.35 -2.43,-0.47 -1.06,-0.17 -2.11,-0.28 -3.18,-0.32 -0.36,-0.01 -0.71,-0.11 -1.09,-0.11l-164.17 0c-0.37,0 -0.74,0.1 -1.11,0.11 -1.04,0.04 -2.08,0.15 -3.14,0.32 -0.82,0.13 -1.65,0.28 -2.44,0.47 -0.89,0.24 -1.75,0.52 -2.63,0.82 -0.93,0.33 -1.85,0.71 -2.72,1.14 -0.36,0.17 -0.75,0.26 -1.1,0.44 -80.06,43 -131.82,137.35 -132.11,240.57 -0.02,0.26 -0.09,0.53 -0.09,0.79 0,146.53 101.93,265.74 227.22,265.74 68.01,0 132.11,-35.29 175.86,-96.82 8.89,-12.5 5.96,-29.85 -6.54,-38.74 -12.52,-8.9 -29.86,-5.94 -38.74,6.54 -33.19,46.68 -80.78,73.46 -130.58,73.46 -86.96,0 -158.82,-79.63 -169.99,-182.4l369.29 0c0.17,0.01 0.32,0.06 0.47,0.06 15.35,0 27.78,-12.44 27.78,-27.78l0 -0.04 0 -0.02 0 -0.01z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "fil1",
    d: "M1913.96 236.67c-0.07,-0.04 -0.15,-0.1 -0.22,-0.14 -0.36,-0.22 -0.71,-0.49 -1.08,-0.71 -0.52,-0.31 -1.07,-0.49 -1.6,-0.75 -0.89,-0.47 -1.79,-0.93 -2.74,-1.29 -0.86,-0.33 -1.71,-0.57 -2.58,-0.8 -0.86,-0.24 -1.72,-0.49 -2.61,-0.64 -1.02,-0.18 -2.03,-0.25 -3.04,-0.3 -0.58,-0.03 -1.14,-0.18 -1.74,-0.18l-157.64 0c-0.36,0 -0.71,0.1 -1.08,0.11 -1.07,0.04 -2.13,0.15 -3.2,0.33 -0.8,0.11 -1.59,0.26 -2.39,0.46 -0.91,0.22 -1.79,0.52 -2.68,0.83 -0.92,0.33 -1.79,0.68 -2.65,1.09 -0.36,0.18 -0.78,0.28 -1.14,0.47 -29.83,16.03 -55.74,39.21 -76.53,67.3l0 -260.28c0,-15.33 -12.43,-27.78 -27.78,-27.78 -15.33,0 -27.78,12.44 -27.78,27.78l0 432.53c0,0.58 -0.06,1.15 -0.06,1.74 0,0.18 0.06,0.36 0.06,0.54l0 237.53c0,15.35 12.44,27.78 27.78,27.78 15.35,0 27.78,-12.43 27.78,-27.78l0 -239.86c0.56,-80.03 38.42,-152.52 97.22,-187.24l141.46 0c36.13,24.53 58.49,66.64 58.49,111.94l0 315c0,15.35 12.43,27.78 27.78,27.78 15.33,0 27.78,-12.43 27.78,-27.78l0 -315c0,-66.56 -34.4,-128.71 -89.81,-162.68z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "fil1",
    d: "M3411.04 234.08c-14.13,-6.02 -30.42,0.56 -36.44,14.65l-168.35 394.82 -168.46 -394.82c-6.03,-14.11 -22.32,-20.67 -36.44,-14.65 -14.12,6.03 -20.68,22.33 -14.67,36.46l193.79 454.15c0.02,0.03 0.02,0.04 0.03,0.07l0.22 0.5c0.07,0.18 0.22,0.3 0.29,0.47 0.93,2.09 2.15,4.02 3.57,5.81 0.35,0.42 0.64,0.83 0.99,1.24 1.56,1.75 3.3,3.33 5.32,4.67 0.37,0.25 0.78,0.41 1.15,0.64 1.08,0.64 2.14,1.32 3.33,1.82 0.67,0.28 1.33,0.4 1.99,0.63 0.64,0.22 1.25,0.41 1.89,0.58 2.33,0.61 4.67,1.03 7,1.03l0.01 0 0.02 0c2.33,0 4.68,-0.42 7.01,-1.03 0.63,-0.17 1.24,-0.36 1.85,-0.57 0.67,-0.24 1.36,-0.36 2.04,-0.64 1.21,-0.52 2.29,-1.21 3.37,-1.86 0.36,-0.21 0.72,-0.36 1.06,-0.58 2.04,-1.35 3.81,-2.94 5.36,-4.71 0.33,-0.39 0.64,-0.81 0.96,-1.22 1.41,-1.78 2.62,-3.7 3.56,-5.75 0.08,-0.19 0.25,-0.33 0.33,-0.53l193.89 -454.71c6.02,-14.13 -0.54,-30.43 -14.67,-36.46z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "fil1",
    d: "M3573.63 231.85c-15.33,0 -27.78,12.44 -27.78,27.78l0 454.72c0,15.33 12.44,27.78 27.78,27.78 15.33,0 27.78,-12.44 27.78,-27.78l0 -454.72c0,-15.33 -12.44,-27.78 -27.78,-27.78z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "fil1",
    d: "M4053.81 686.59l-1.56 0c-68.31,-0.75 -123.89,-60.43 -123.89,-133.06l0 -266.12 117.52 0c15.33,0 27.78,-12.44 27.78,-27.78 0,-15.35 -12.44,-27.78 -27.78,-27.78l-117.52 0 0 -189.68c0,-15.35 -12.44,-27.78 -27.78,-27.78 -15.35,0 -27.78,12.43 -27.78,27.78l0 189.68 -133.39 0c-15.33,0 -27.78,12.43 -27.78,27.78 0,15.33 12.44,27.78 27.78,27.78l133.39 0 0 266.12c0,102.93 80.22,187.53 178.85,188.61l2.15 0c15.33,0 27.78,-12.44 27.78,-27.78 0,-15.33 -12.44,-27.78 -27.78,-27.78z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "fil1",
    d: "M356.18 686.59l-1.54 0c-68.31,-0.75 -123.89,-60.43 -123.89,-133.06l0 -266.12 117.52 0c15.33,0 27.78,-12.44 27.78,-27.78 0,-15.35 -12.44,-27.78 -27.78,-27.78l-117.52 0 0 -189.68c0,-15.35 -12.44,-27.78 -27.78,-27.78 -15.35,0 -27.78,12.43 -27.78,27.78l0 189.68 -133.39 0c-15.33,0 -27.78,12.43 -27.78,27.78 0,15.33 12.44,27.78 27.78,27.78l133.39 0 0 266.12c0,102.93 80.22,187.53 178.85,188.61l2.14 0c15.33,0 27.78,-12.44 27.78,-27.78 0,-15.33 -12.44,-27.78 -27.78,-27.78z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "fil1",
    d: "M4628.67 234.19c-14,-6.14 -30.42,0.24 -36.59,14.29l-173.94 396.86 -181.46 -397.26c-6.37,-13.94 -22.86,-20.1 -36.8,-13.72 -13.96,6.38 -20.1,22.86 -13.72,36.82l201.67 441.53 -66.15 152.74 -0.56 1.24c-0.02,0.02 -0.02,0.04 -0.02,0.06l-0.01 0.04c-0.18,0.43 -0.25,0.86 -0.42,1.28 -0.5,1.35 -1,2.69 -1.29,4.06 -0.11,0.56 -0.1,1.11 -0.18,1.65 -0.2,1.26 -0.41,2.51 -0.41,3.76 -0.01,0.74 0.13,1.43 0.17,2.15 0.08,1.07 0.09,2.14 0.29,3.2 0.14,0.82 0.46,1.61 0.69,2.42 0.25,0.9 0.43,1.82 0.76,2.69 0.35,0.83 0.82,1.61 1.24,2.42 0.39,0.78 0.71,1.58 1.18,2.33 0.54,0.85 1.24,1.61 1.87,2.4 0.49,0.6 0.89,1.25 1.42,1.82 0.81,0.85 1.75,1.56 2.67,2.31 0.5,0.4 0.93,0.87 1.46,1.26 1.13,0.78 2.37,1.41 3.64,2.04 0.43,0.21 0.79,0.5 1.24,0.7 0.02,0 0.02,0 0.03,0 0.03,0.01 0.06,0.04 0.08,0.06 1.31,0.57 2.65,0.92 4,1.26 0.49,0.12 0.96,0.35 1.44,0.46 1.86,0.37 3.72,0.57 5.58,0.57 2.67,0 5.31,-0.41 7.85,-1.14 1.15,-0.35 2.18,-1.01 3.28,-1.5 1.32,-0.58 2.71,-1.01 3.92,-1.79 1.04,-0.67 1.85,-1.62 2.81,-2.43 1.08,-0.93 2.28,-1.71 3.22,-2.82 0.67,-0.76 1.07,-1.76 1.65,-2.63 0.97,-1.4 2.03,-2.72 2.74,-4.33l270.96 -618.19c6.17,-14.04 -0.24,-30.43 -14.29,-36.58z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "fil1",
    d: "M2679.04 686.57c-93.5,0 -169.58,-94.21 -169.58,-210 0,-80.93 37.6,-154.26 96.21,-189.17l146.75 0c58.61,34.89 96.21,108.24 96.21,189.17 0,115.79 -76.09,210 -169.59,210zm256.61 0.15c-17.32,0 -31.41,-14.08 -31.41,-31.4l0 -178.81c0,-0.33 -0.09,-0.64 -0.09,-0.98 -0.35,-103.22 -51.65,-197.49 -130.93,-240.33 -0.36,-0.19 -0.74,-0.29 -1.12,-0.47 -0.91,-0.43 -1.85,-0.82 -2.81,-1.17 -0.82,-0.29 -1.61,-0.54 -2.44,-0.75 -0.87,-0.24 -1.79,-0.4 -2.71,-0.53 -0.94,-0.15 -1.89,-0.25 -2.83,-0.29 -0.43,-0.03 -0.85,-0.14 -1.3,-0.14l-161.94 0c-0.39,0 -0.78,0.11 -1.17,0.13 -1.03,0.04 -2.06,0.15 -3.07,0.3 -0.86,0.14 -1.71,0.29 -2.53,0.5 -0.88,0.22 -1.71,0.49 -2.57,0.79 -0.93,0.35 -1.86,0.72 -2.75,1.15 -0.37,0.18 -0.76,0.28 -1.12,0.47 -79.56,43 -130.96,137.74 -130.96,241.37 0,146.43 101,265.56 225.14,265.56 67.7,0 128.35,-35.58 169.65,-91.53l0 4.72c0,47.96 39,86.96 86.96,86.96 15.33,0 27.78,-12.43 27.78,-27.78 0,-15.33 -12.44,-27.78 -27.78,-27.78z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "fil1",
    d: "M3573.63 14.39c-15.33,0 -27.78,12.44 -27.78,27.78l0 22.25c0,15.33 12.44,27.78 27.78,27.78 15.33,0 27.78,-12.44 27.78,-27.78l0 -22.25c0,-15.33 -12.44,-27.78 -27.78,-27.78z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "fil1",
    d: "M2359.68 231.85l-58.97 0c-0.37,0 -0.74,0.1 -1.11,0.11 -1.04,0.04 -2.1,0.15 -3.14,0.32 -0.83,0.13 -1.65,0.28 -2.46,0.47 -0.87,0.24 -1.74,0.52 -2.61,0.82 -0.93,0.33 -1.85,0.71 -2.72,1.14 -0.38,0.17 -0.75,0.26 -1.1,0.44 -29.82,16.02 -55.67,39.18 -76.43,67.27l0 -42.8c0,-15.33 -12.44,-27.78 -27.78,-27.78 -15.35,0 -27.78,12.44 -27.78,27.78l0 454.86c0,15.33 12.43,27.78 27.78,27.78 15.33,0 27.78,-12.44 27.78,-27.78l0 -238.06c0,-80.78 37.96,-154.08 97.13,-189.03l51.42 0c15.33,0 27.78,-12.44 27.78,-27.78 0,-15.33 -12.44,-27.78 -27.78,-27.78z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/scripts.js":
/*!*******************************!*\
  !*** ./components/scripts.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Shayan/Desktop/techravity/nextjs/components/scripts.js";


function ScriptLoader() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=UA-142594264-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.dataLayer = window.dataLayer || [];\n\t\t\t\tfunction gtag() {\n\t\t\t\t\tdataLayer.push(arguments);\n\t\t\t\t}\n\t\t\t\tgtag(\"js\", new Date());\n\t\n\t\t\t\tgtag(\"config\", \"UA-142594264-1\");"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.$crisp = [];\n\t\t\t\t\twindow.CRISP_WEBSITE_ID = \"5ac5d8ad-db1a-47b1-84dc-3c90f77db42b\";\n\t\t\t\t\t(function() {\n\t\t\t\t\t\td = document;\n\t\t\t\t\t\ts = d.createElement(\"script\");\n\t\t\t\t\t\ts.src = \"https://client.crisp.chat/l.js\";\n\t\t\t\t\t\ts.async = 1;\n\t\t\t\t\t\td.getElementsByTagName(\"head\")[0].appendChild(s);\n\t\t\t\t\t})();"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ScriptLoader);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-owl-carousel2 */ "react-owl-carousel2");
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scrollmagic */ "react-scrollmagic");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scrollmagic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_vivus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-vivus */ "react-vivus");
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ 6:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Shayan/Desktop/techravity/nextjs/pages/about.js */"./pages/about.js");


/***/ }),

/***/ "cogo-toast":
/*!*****************************!*\
  !*** external "cogo-toast" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cogo-toast");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-owl-carousel2":
/*!**************************************!*\
  !*** external "react-owl-carousel2" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel2");

/***/ }),

/***/ "react-scrollmagic":
/*!************************************!*\
  !*** external "react-scrollmagic" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollmagic");

/***/ }),

/***/ "react-vivus":
/*!******************************!*\
  !*** external "react-vivus" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-vivus");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map