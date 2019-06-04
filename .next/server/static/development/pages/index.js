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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/bootstrap.min.css":
/*!*******************************!*\
  !*** ./css/bootstrap.min.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.css":
/*!****************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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

var _jsxFileName = "C:\\Users\\rbhate\\projects\\react-hooks\\pages\\index.js";








var App = function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      properties = _useState2[0],
      setproperties = _useState2[1];

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
    setProperty(properties[newIndex]);
  }

  function goToNextSlide() {
    var newIndex = [property.index + 1];
    setProperty(properties[newIndex]);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsLoading(true);
    var timeOut = setTimeout(function () {
      callback();
    }, 4000);

    function callback() {
      setproperties(_src_PropertiesData__WEBPACK_IMPORTED_MODULE_2__["default"]);
      setProperty(_src_PropertiesData__WEBPACK_IMPORTED_MODULE_2__["default"][0]);
      setIsLoading(false);
    }

    return function () {
      clearTimeout(timeOut);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    handleClick: goToNextSlide,
    disabled: !isLoading && property.index === properties.length - 1 ? true : false,
    type: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    class: "fas fa-chevron-right fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    handleClick: goToPrevSlide,
    disabled: !isLoading && property.index === 0 ? true : false,
    type: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    class: "fas fa-chevron-left fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, isLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Loading...") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "cards-slider-wrapper",
    style: {
      transform: "translateX(-".concat(property.index * (100 / properties.length), "%)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, properties.map(function (property_, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      property: property_,
      statePropertyIndex: property.index,
      key: property_._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/PropertiesData.js":
/*!*******************************!*\
  !*** ./src/PropertiesData.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var data = [{
  _id: '593e9297e17df20c4a237d42',
  index: 0,
  price: 937180,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg',
  city: 'Singer',
  address: '914 Argyle Road',
  latitude: -33.944576,
  longitude: 151.25584,
  bedrooms: 2,
  bathrooms: 2,
  carSpaces: 2
}, {
  _id: '593e9297ec4cca9c56bf61af',
  index: 1,
  price: 703725,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property02.jpg',
  city: 'Machias',
  address: '255 Raleigh Place',
  latitude: -33.944471,
  longitude: 151.2541,
  bedrooms: 2,
  bathrooms: 1,
  carSpaces: 0
}, {
  _id: '593e929773c71925e5d7c11c',
  index: 2,
  price: 837111,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg',
  city: 'Bend',
  address: '580 Amber Street',
  latitude: -33.944644,
  longitude: 151.24834,
  bedrooms: 3,
  bathrooms: 2,
  carSpaces: 0
}, {
  _id: '593e92973d4d15eedb129aee',
  index: 3,
  price: 648223,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property04.jpg',
  city: 'Ivanhoe',
  address: '854 Varanda Place',
  latitude: -33.940396,
  longitude: 151.2469,
  bedrooms: 3,
  bathrooms: 2,
  carSpaces: 0
}, {
  _id: '593e929728b7f8543b7907e1',
  index: 4,
  price: 771826,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg',
  city: 'Lydia',
  address: '857 Rockaway Parkway',
  latitude: -33.944562,
  longitude: 151.2503,
  bedrooms: 2,
  bathrooms: 1,
  carSpaces: 1
}, {
  _id: '593e92975996a6263d146444',
  index: 5,
  price: 686238,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg',
  city: 'Rosedale',
  address: '543 Harman Street',
  latitude: -33.939304,
  longitude: 151.25046,
  bedrooms: 2,
  bathrooms: 1,
  carSpaces: 1
}, {
  _id: '593e9297a13e246da5ba0884',
  index: 6,
  price: 595377,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property02.jpg',
  city: 'Allison',
  address: '787 Gerald Court',
  latitude: -33.937819,
  longitude: 151.25774,
  bedrooms: 2,
  bathrooms: 2,
  carSpaces: 2
}, {
  _id: '593e9297afa51a013fcd07d5',
  index: 7,
  price: 696189,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg',
  city: 'Nicut',
  address: '416 Vandervoort Avenue',
  latitude: -33.943154,
  longitude: 151.24687,
  bedrooms: 4,
  bathrooms: 1,
  carSpaces: 1
}, {
  _id: '593e92972bd8fd05f2ab1a89',
  index: 8,
  price: 716114,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property04.jpg',
  city: 'Canterwood',
  address: '437 Mill Street',
  latitude: -33.943723,
  longitude: 151.25278,
  bedrooms: 3,
  bathrooms: 1,
  carSpaces: 0
}, {
  _id: '593e9297fe2e6d32c859ecf4',
  index: 9,
  price: 739852,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg',
  city: 'Cobbtown',
  address: '553 Friel Place',
  latitude: -33.942459,
  longitude: 151.24941,
  bedrooms: 2,
  bathrooms: 1,
  carSpaces: 1
}, {
  _id: '593e92970481ccf52f948e6d',
  index: 10,
  price: 625917,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg',
  city: 'Blue',
  address: '687 Opal Court',
  latitude: -33.939606,
  longitude: 151.25289,
  bedrooms: 4,
  bathrooms: 1,
  carSpaces: 2
}, {
  _id: '593e9297e09417746b79e1c5',
  index: 11,
  price: 591236,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property02.jpg',
  city: 'Craig',
  address: '183 Canton Court',
  latitude: -33.938557,
  longitude: 151.24773,
  bedrooms: 2,
  bathrooms: 1,
  carSpaces: 0
}, {
  _id: '593e92978e7160fa2b9992d9',
  index: 12,
  price: 995539,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg',
  city: 'Orovada',
  address: '234 Prospect Street',
  latitude: -33.938345,
  longitude: 151.25045,
  bedrooms: 1,
  bathrooms: 2,
  carSpaces: 0
}, {
  _id: '593e92973459fbdfa1f1c041',
  index: 13,
  price: 866924,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property04.jpg',
  city: 'Clay',
  address: '205 Ocean Parkway',
  latitude: -33.937763,
  longitude: 151.24721,
  bedrooms: 1,
  bathrooms: 1,
  carSpaces: 2
}, {
  _id: '593e92970306538830483e14',
  index: 14,
  price: 810745,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg',
  city: 'Windsor',
  address: '324 Degraw Street',
  latitude: -33.938662,
  longitude: 151.2513,
  bedrooms: 2,
  bathrooms: 2,
  carSpaces: 2
}, {
  _id: '593e92976042982766c97ca1',
  index: 15,
  price: 793134,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg',
  city: 'Bluetown',
  address: '644 Ashford Street',
  latitude: -33.940989,
  longitude: 151.25156,
  bedrooms: 2,
  bathrooms: 1,
  carSpaces: 0
}, {
  _id: '593e92971901e888a036a258',
  index: 16,
  price: 984589,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property02.jpg',
  city: 'Wakulla',
  address: '472 Wilson Street',
  latitude: -33.943395,
  longitude: 151.24723,
  bedrooms: 1,
  bathrooms: 1,
  carSpaces: 1
}, {
  _id: '593e929780e6af9c11a10b90',
  index: 17,
  price: 836244,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg',
  city: 'Greer',
  address: '455 Crown Street',
  latitude: -33.941819,
  longitude: 151.25784,
  bedrooms: 1,
  bathrooms: 2,
  carSpaces: 0
}, {
  _id: '593e9297441033e3f818ff6b',
  index: 18,
  price: 962426,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property04.jpg',
  city: 'Wright',
  address: '459 Duffield Street',
  latitude: -33.940486,
  longitude: 151.25562,
  bedrooms: 3,
  bathrooms: 2,
  carSpaces: 1
}, {
  _id: '593e9297964d25b59d94e8aa',
  index: 19,
  price: 768916,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg',
  city: 'Manchester',
  address: '537 Gelston Avenue',
  latitude: -33.942826,
  longitude: 151.24943,
  bedrooms: 3,
  bathrooms: 2,
  carSpaces: 0
}, {
  _id: '593e929737636c879539416d',
  index: 20,
  price: 956974,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg',
  city: 'Ballico',
  address: '689 Orange Street',
  latitude: -33.943478,
  longitude: 151.24779,
  bedrooms: 1,
  bathrooms: 1,
  carSpaces: 1
}, {
  _id: '593e9297b2516c3e5af4601f',
  index: 21,
  price: 875917,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property02.jpg',
  city: 'Tuskahoma',
  address: '874 Rugby Road',
  latitude: -33.93817,
  longitude: 151.25545,
  bedrooms: 2,
  bathrooms: 1,
  carSpaces: 2
}, {
  _id: '593e92972f6034590df04c45',
  index: 22,
  price: 913858,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg',
  city: 'Temperanceville',
  address: '687 Alabama Avenue',
  latitude: -33.938195,
  longitude: 151.25286,
  bedrooms: 3,
  bathrooms: 1,
  carSpaces: 2
}, {
  _id: '593e9297aa0e233a421f1a58',
  index: 23,
  price: 622995,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property04.jpg',
  city: 'Cliffside',
  address: '739 Vermont Street',
  latitude: -33.94209,
  longitude: 151.25645,
  bedrooms: 2,
  bathrooms: 2,
  carSpaces: 0
}, {
  _id: '593e92977526a30b580dcfb2',
  index: 24,
  price: 593777,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg',
  city: 'Sunbury',
  address: '735 Humboldt Street',
  latitude: -33.944276,
  longitude: 151.25442,
  bedrooms: 2,
  bathrooms: 2,
  carSpaces: 1
}, {
  _id: '593e92975141c74b24375bd9',
  index: 25,
  price: 757686,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg',
  city: 'Gracey',
  address: '617 Charles Place',
  latitude: -33.939279,
  longitude: 151.25559,
  bedrooms: 3,
  bathrooms: 1,
  carSpaces: 1
}, {
  _id: '593e9297b3ffeb95bb008453',
  index: 26,
  price: 976878,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property02.jpg',
  city: 'Farmers',
  address: '786 George Street',
  latitude: -33.943311,
  longitude: 151.25781,
  bedrooms: 3,
  bathrooms: 1,
  carSpaces: 0
}, {
  _id: '593e9297e262c91acd91ab81',
  index: 27,
  price: 804859,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg',
  city: 'Mapletown',
  address: '711 Sunnyside Avenue',
  latitude: -33.943475,
  longitude: 151.24929,
  bedrooms: 1,
  bathrooms: 2,
  carSpaces: 0
}, {
  _id: '593e9297df21e62e0465f91f',
  index: 28,
  price: 611018,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property04.jpg',
  city: 'Snyderville',
  address: '403 Lawrence Avenue',
  latitude: -33.943007,
  longitude: 151.25262,
  bedrooms: 2,
  bathrooms: 1,
  carSpaces: 2
}, {
  _id: '593e929787f567dccda86910',
  index: 29,
  price: 707939,
  picture: 'https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg',
  city: 'Inkerman',
  address: '265 Ocean Court',
  latitude: -33.943142,
  longitude: 151.25074,
  bedrooms: 1,
  bathrooms: 1,
  carSpaces: 1
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./src/components/Button.css":
/*!***********************************!*\
  !*** ./src/components/Button.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.css */ "./src/components/Button.css");
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\rbhate\\projects\\react-hooks\\src\\components\\Button.js";



var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button ".concat(props.type === 'primary' ? 'primary' : 'secondary', " ").concat(props.disabled ? 'disabled' : ''),
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
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\rbhate\\projects\\react-hooks\\src\\components\\Card.js";


var Card = function Card(_ref) {
  var property = _ref.property,
      statePropertyIndex = _ref.statePropertyIndex;
  var index = property.index,
      picture = property.picture,
      city = property.city,
      address = property.address,
      bedrooms = property.bedrooms,
      bathrooms = property.bathrooms,
      carSpaces = property.carSpaces,
      price = property.price;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cards ".concat(statePropertyIndex === index ? 'active' : 'deactive'),
    id: "card-".concat(index),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: picture,
    alt: city,
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fas fa-bed fa-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), bedrooms), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fas fa-home fa-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), address), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fas fa-restroom fa-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), bathrooms), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fas fa-car fa-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), carSpaces))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rbhate\projects\react-hooks\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map