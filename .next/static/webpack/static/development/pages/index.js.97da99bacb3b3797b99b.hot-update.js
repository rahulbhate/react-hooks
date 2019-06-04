webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.css */ "./src/components/Button.css");
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\rbhate\\projects\\react-hooks\\src\\components\\Button.js";



var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button ".concat(props.buttonType === 'primary' ? 'primary' : 'secondary', " ").concat(props.disabled ? 'disabled' : ''),
    onClick: function onClick() {
      return props.handleClick(props.children);
    },
    disabled: props.disabled,
    type: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.children, " ", console.log(props));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=index.js.97da99bacb3b3797b99b.hot-update.js.map