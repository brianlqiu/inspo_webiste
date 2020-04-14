webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/home/brianlqiu/inspo_webiste/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Inspo = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Inspo, _React$Component);

  var _super = _createSuper(Inspo);

  function Inspo(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Inspo);

    _this = _super.call(this, props);
    _this.state = {
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
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Inspo, [{
    key: "onLeave",
    value: function onLeave(origin, destination, direction) {
      console.log("onLeave", {
        origin: origin,
        destination: destination,
        direction: direction
      }); // arguments are mapped in order of fullpage.js callback arguments do something
      // with the event
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var fullpages = this.state.fullpages;

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
      }, __jsx(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8___default.a, {
        navigation: true,
        onLeave: this.onLeave.bind(this),
        licenseKey: 'AA292B57-818B4C7D-BD530DCC-2171D815',
        render: function render(comp) {
          return __jsx(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_8___default.a.Wrapper, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 25
            }
          }, __jsx("div", {
            key: fullpages[0].key,
            id: "intro",
            className: "jsx-1842573144" + " " + "section",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }
          }, __jsx("h1", {
            className: "jsx-1842573144",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 33
            }
          }, fullpages[0].text)), fullpages.slice(1, fullpages.length).map(function (_ref) {
            var key = _ref.key,
                image = _ref.image,
                desc = _ref.desc;
            return __jsx("div", {
              key: key,
              className: "jsx-1842573144" + " " + "section",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 33
              }
            }, __jsx("img", {
              src: image,
              alt: desc,
              className: "jsx-1842573144",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 37
              }
            }));
          }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
            id: "1842573144",
            __self: _this2
          }, "@font-face{font-family:'CormorantGaramond';src:url('/fonts/CormorantGaramond-Medium.ttf');}h1.jsx-1842573144{font-family:'CormorantGaramond';color:white;}#intro.jsx-1842573144{text-align:center;}.section.jsx-1842573144{background-color:black;}img.jsx-1842573144{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyaWFubHFpdS9pbnNwb193ZWJpc3RlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEd0MsQUFHaUUsQUFJSSxBQU1yQyxBQUlBLEFBSUEsWUFBQyxNQVJBLEtBSUEsU0FibUQsQUFLcEQsWUFBQyxtQ0FKSiIsImZpbGUiOiIvaG9tZS9icmlhbmxxaXUvaW5zcG9fd2ViaXN0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmltcG9ydCBSZWFjdEZ1bGxwYWdlIGZyb20gXCJAZnVsbHBhZ2UvcmVhY3QtZnVsbHBhZ2VcIjtcblxuY2xhc3MgSW5zcG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZ1bGxwYWdlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImludHJvXCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTXkgSW5zcG8gQWxidW1cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZG9sbHNcIixcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9kb2xscy5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogXCJEb2xscyAoMjAwMiksIGRpcmVjdGVkIGJ5IFRha2VzaGkgS2l0YW5vLCBjb3N0dW1lcyBieSBZb2hqaSBZYW1hbW90b1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJtdXJha2FtaVwiLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL211cmFrYW1pLmpwZWdcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogXCJBIFRha2VzaGkgTXVyYWthbWkgc2N1bHB0dXJlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxlYXZlKG9yaWdpbiwgZGVzdGluYXRpb24sIGRpcmVjdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uTGVhdmVcIiwgeyBvcmlnaW4sIGRlc3RpbmF0aW9uLCBkaXJlY3Rpb24gfSk7XG4gICAgICAgIC8vIGFyZ3VtZW50cyBhcmUgbWFwcGVkIGluIG9yZGVyIG9mIGZ1bGxwYWdlLmpzIGNhbGxiYWNrIGFyZ3VtZW50cyBkbyBzb21ldGhpbmdcbiAgICAgICAgLy8gd2l0aCB0aGUgZXZlbnRcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZnVsbHBhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghZnVsbHBhZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnNwb1wiPlxuXG4gICAgICAgICAgICAgICAgPFJlYWN0RnVsbHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25MZWF2ZT17dGhpcy5vbkxlYXZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGxpY2Vuc2VLZXk9eydBQTI5MkI1Ny04MThCNEM3RC1CRDUzMERDQy0yMTcxRDgxNSd9XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcj17Y29tcCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RGdWxscGFnZS5XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtmdWxscGFnZXNbMF0ua2V5fSBjbGFzc05hbWU9XCJzZWN0aW9uXCIgaWQ9XCJpbnRyb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2Z1bGxwYWdlc1swXS50ZXh0fTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGxwYWdlcy5zbGljZSgxLCBmdWxscGFnZXMubGVuZ3RoKS5tYXAoKHsga2V5LCBpbWFnZSwgZGVzYyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXtkZXNjfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnRHYXJhbW9uZCc7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9Db3Jtb3JhbnRHYXJhbW9uZC1NZWRpdW0udHRmJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudEdhcmFtb25kJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ludHJvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9IDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0RnVsbHBhZ2UuV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnNwb1xuXG5cbiJdfQ== */\n/*@ sourceURL=/home/brianlqiu/inspo_webiste/pages/index.js */"));
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }
      }));
    }
  }]);

  return Inspo;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Inspo);

/***/ })

})
//# sourceMappingURL=index.js.2fda07df065baece4e1a.hot-update.js.map