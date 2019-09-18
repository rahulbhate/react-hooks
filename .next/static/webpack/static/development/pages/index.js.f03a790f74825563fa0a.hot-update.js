webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ImageSlider.js":
/*!***************************************!*\
  !*** ./src/components/ImageSlider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");

var _jsxFileName = "/Users/rahulbhate/projects/react-hooks/src/components/ImageSlider.js";



var ImageSlider = function ImageSlider(props) {
  console.log(props.options);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.options),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      photos = _useState2[0],
      setPhotos = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      slideCount = _useState4[0],
      setSlideCount = _useState4[1];

  function goToPrevSlide() {
    setSlideCount(slideCount - 1);
  }

  function goToNextSlide() {
    console.log('called');
    setSlideCount(slideCount + 1);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sn-12",
    style: {
      transform: "translateX(-".concat(photos.index * (100 / photos.length), "%)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, slideCount !== 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: goToPrevSlide,
    type: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Prev") : '', photos.map(function (option, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, photos.indexOf(option) === slideCount ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-sm-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: option.imageSrc,
      alt: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })) : '');
  }), slideCount !== photos.length - 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClick: goToNextSlide,
    type: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Next") : ''))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageSlider);

/***/ })

})
//# sourceMappingURL=index.js.f03a790f74825563fa0a.hot-update.js.map