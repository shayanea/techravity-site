webpackHotUpdate("static/development/pages/about.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cogo-toast */ "./node_modules/cogo-toast/dist/index.es.js");








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
          cogo_toast__WEBPACK_IMPORTED_MODULE_9__["default"].success("Thank you! Your message has been sent successfully.");
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
          cogo_toast__WEBPACK_IMPORTED_MODULE_9__["default"].error("Something went wrong");
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

/***/ })

})
//# sourceMappingURL=about.js.99edc6a2a291e4765cfc.hot-update.js.map