webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_PropertiesData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/PropertiesData */ "./src/PropertiesData.js");
/* harmony import */ var _css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/bootstrap.min.css */ "./css/bootstrap.min.css");
/* harmony import */ var _css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Card */ "./src/components/Card.js");
/* harmony import */ var _src_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Button */ "./src/components/Button.js");
/* harmony import */ var _dist_css_style_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dist/css/style.min.css */ "./dist/css/style.min.css");
/* harmony import */ var _dist_css_style_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_dist_css_style_min_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\rbhate\\projects\\react-hooks\\pages\\index.js";









var App = function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      property = _useState4[0],
      setProperty = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  function goToPrevSlide() {
    var newIndex = [property.index - 1];
    setProperty(data[newIndex]);
    console.log(data, property);
  }

  function goToNextSlide() {
    var newIndex = [property.index + 1];
    setProperty(data[newIndex]);
    console.log(data, property, isLoading, property.index, data.length);
  }

  function addToInput() {
    alert('Add to input function called');
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsLoading(true);
    var timeOut = setTimeout(function () {
      callback();
    }, 4000);

    function callback() {
      setData(_src_PropertiesData__WEBPACK_IMPORTED_MODULE_2__["default"]);
      setProperty(_src_PropertiesData__WEBPACK_IMPORTED_MODULE_2__["default"][0]);
      setIsLoading(false);
      console.log(isLoading);
    }

    return function () {
      clearTimeout(timeOut);
      console.log('cleanup');
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    handleClick: goToNextSlide,
    disabled: !isLoading && property.index === data.length - 1 ? true : false,
    type: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    class: "fas fa-chevron-right fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    handleClick: goToPrevSlide,
    disabled: !isLoading && property.index === 0 ? true : false,
    type: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    class: "fas fa-chevron-left fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, isLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Loading...") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(property.index === data.index, " ? active: : deactive"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "cards-slider-wrapper",
    style: {
      transform: "translateX(-".concat(property.index * (100 / data.length), "%)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, console.log(data, property), data.map(function (property, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      property: property,
      key: property._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.762efd1ed158b3e01f7d.hot-update.js.map