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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullpage/react-fullpage */ "@fullpage/react-fullpage");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/brianlqiu/inspo_webiste/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Inspo extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullpages: [{
        key: "intro",
        text: "My Inspo Album"
      }, {
        key: "dolls",
        image: "/images/dolls.jpg",
        desc: "Dolls (2002), directed by Takeshi Kitano, costumes by Yohji Yamamoto"
      }, {
        key: "murakami",
        image: "/images/murakami.jpeg",
        desc: "A Takeshi Murakami sculpture"
      }]
    };
  }

  onLeave(origin, destination, direction) {
    console.log("onLeave", {
      origin,
      destination,
      direction
    }); // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  render() {
    const {
      fullpages
    } = this.state;

    if (!fullpages.length) {
      return null;
    }

    return __jsx("div", {
      className: "Inspo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, __jsx(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3___default.a, {
      navigation: true,
      onLeave: this.onLeave.bind(this),
      licenseKey: 'AA292B57-818B4C7D-BD530DCC-2171D815',
      render: comp => __jsx(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_3___default.a.Wrapper, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }
      }, __jsx("div", {
        key: fullpages[0].key,
        id: "intro",
        className: "jsx-1842573144" + " " + "section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 29
        }
      }, __jsx("h1", {
        className: "jsx-1842573144",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 33
        }
      }, fullpages[0].text)), fullpages.slice(1, fullpages.length).map(({
        key,
        image,
        desc
      }) => __jsx("div", {
        key: key,
        className: "jsx-1842573144" + " " + "section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 33
        }
      }, __jsx("img", {
        src: image,
        alt: desc,
        className: "jsx-1842573144",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 37
        }
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "1842573144",
        __self: this
      }, "@font-face{font-family:'CormorantGaramond';src:url('/fonts/CormorantGaramond-Medium.ttf');}h1.jsx-1842573144{font-family:'CormorantGaramond';color:white;}#intro.jsx-1842573144{text-align:center;}.section.jsx-1842573144{background-color:black;}img.jsx-1842573144{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyaWFubHFpdS9pbnNwb193ZWJpc3RlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEd0MsQUFHaUUsQUFJSSxBQU1yQyxBQUlBLEFBSUEsWUFBQyxNQVJBLEtBSUEsU0FibUQsQUFLcEQsWUFBQyxtQ0FKSiIsImZpbGUiOiIvaG9tZS9icmlhbmxxaXUvaW5zcG9fd2ViaXN0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmltcG9ydCBSZWFjdEZ1bGxwYWdlIGZyb20gXCJAZnVsbHBhZ2UvcmVhY3QtZnVsbHBhZ2VcIjtcblxuY2xhc3MgSW5zcG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZ1bGxwYWdlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImludHJvXCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTXkgSW5zcG8gQWxidW1cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZG9sbHNcIixcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9kb2xscy5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogXCJEb2xscyAoMjAwMiksIGRpcmVjdGVkIGJ5IFRha2VzaGkgS2l0YW5vLCBjb3N0dW1lcyBieSBZb2hqaSBZYW1hbW90b1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJtdXJha2FtaVwiLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL211cmFrYW1pLmpwZWdcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogXCJBIFRha2VzaGkgTXVyYWthbWkgc2N1bHB0dXJlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxlYXZlKG9yaWdpbiwgZGVzdGluYXRpb24sIGRpcmVjdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uTGVhdmVcIiwgeyBvcmlnaW4sIGRlc3RpbmF0aW9uLCBkaXJlY3Rpb24gfSk7XG4gICAgICAgIC8vIGFyZ3VtZW50cyBhcmUgbWFwcGVkIGluIG9yZGVyIG9mIGZ1bGxwYWdlLmpzIGNhbGxiYWNrIGFyZ3VtZW50cyBkbyBzb21ldGhpbmdcbiAgICAgICAgLy8gd2l0aCB0aGUgZXZlbnRcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZnVsbHBhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghZnVsbHBhZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnNwb1wiPlxuXG4gICAgICAgICAgICAgICAgPFJlYWN0RnVsbHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25MZWF2ZT17dGhpcy5vbkxlYXZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGxpY2Vuc2VLZXk9eydBQTI5MkI1Ny04MThCNEM3RC1CRDUzMERDQy0yMTcxRDgxNSd9XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcj17Y29tcCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RGdWxscGFnZS5XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtmdWxscGFnZXNbMF0ua2V5fSBjbGFzc05hbWU9XCJzZWN0aW9uXCIgaWQ9XCJpbnRyb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2Z1bGxwYWdlc1swXS50ZXh0fTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGxwYWdlcy5zbGljZSgxLCBmdWxscGFnZXMubGVuZ3RoKS5tYXAoKHsga2V5LCBpbWFnZSwgZGVzYyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXtkZXNjfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnRHYXJhbW9uZCc7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9Db3Jtb3JhbnRHYXJhbW9uZC1NZWRpdW0udHRmJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudEdhcmFtb25kJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ludHJvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9IDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0RnVsbHBhZ2UuV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnNwb1xuXG5cbiJdfQ== */\n/*@ sourceURL=/home/brianlqiu/inspo_webiste/pages/index.js */")),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Inspo);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/brianlqiu/inspo_webiste/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@fullpage/react-fullpage":
/*!*******************************************!*\
  !*** external "@fullpage/react-fullpage" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fullpage/react-fullpage");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map