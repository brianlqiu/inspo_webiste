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
            style: {
              backgroundColor: "black"
            },
            className: "jsx-1660787670" + " " + "section",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }
          }, __jsx("h1", {
            style: {
              color: "white"
            },
            className: "jsx-1660787670",
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
              style: {
                backgroundColor: "black"
              },
              className: "jsx-1660787670" + " " + "section",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 33
              }
            }, __jsx("img", {
              src: image,
              alt: desc,
              style: {
                height: "100%"
              },
              className: "jsx-1660787670",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 37
              }
            }));
          }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
            id: "1660787670",
            __self: _this2
          }, "@font-face{font-family:'CormorantGaramond';src:url('/fonts/CormorantGaramond-Medium.ttf');}h1.jsx-1660787670{font-family:'CormorantGaramond';}#intro.jsx-1660787670{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyaWFubHFpdS9pbnNwb193ZWJpc3RlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEd0MsQUFHaUUsQUFJSSxBQUtyQyxrQkFBQyxjQVJtRCxBQUluRCwrQ0FISiIsImZpbGUiOiIvaG9tZS9icmlhbmxxaXUvaW5zcG9fd2ViaXN0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmltcG9ydCBSZWFjdEZ1bGxwYWdlIGZyb20gXCJAZnVsbHBhZ2UvcmVhY3QtZnVsbHBhZ2VcIjtcblxuY2xhc3MgSW5zcG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZ1bGxwYWdlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImludHJvXCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTXkgSW5zcG8gQWxidW1cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZG9sbHNcIixcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9kb2xscy5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogXCJEb2xscyAoMjAwMiksIGRpcmVjdGVkIGJ5IFRha2VzaGkgS2l0YW5vLCBjb3N0dW1lcyBieSBZb2hqaSBZYW1hbW90b1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJtdXJha2FtaVwiLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL211cmFrYW1pLmpwZWdcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogXCJBIFRha2VzaGkgTXVyYWthbWkgc2N1bHB0dXJlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxlYXZlKG9yaWdpbiwgZGVzdGluYXRpb24sIGRpcmVjdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uTGVhdmVcIiwgeyBvcmlnaW4sIGRlc3RpbmF0aW9uLCBkaXJlY3Rpb24gfSk7XG4gICAgICAgIC8vIGFyZ3VtZW50cyBhcmUgbWFwcGVkIGluIG9yZGVyIG9mIGZ1bGxwYWdlLmpzIGNhbGxiYWNrIGFyZ3VtZW50cyBkbyBzb21ldGhpbmdcbiAgICAgICAgLy8gd2l0aCB0aGUgZXZlbnRcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZnVsbHBhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghZnVsbHBhZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnNwb1wiPlxuXG4gICAgICAgICAgICAgICAgPFJlYWN0RnVsbHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25MZWF2ZT17dGhpcy5vbkxlYXZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGxpY2Vuc2VLZXk9eydBQTI5MkI1Ny04MThCNEM3RC1CRDUzMERDQy0yMTcxRDgxNSd9XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcj17Y29tcCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RGdWxscGFnZS5XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtmdWxscGFnZXNbMF0ua2V5fSBjbGFzc05hbWU9XCJzZWN0aW9uXCIgaWQ9XCJpbnRyb1wiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT57ZnVsbHBhZ2VzWzBdLnRleHR9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZnVsbHBhZ2VzLnNsaWNlKDEsIGZ1bGxwYWdlcy5sZW5ndGgpLm1hcCgoeyBrZXksIGltYWdlLCBkZXNjIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwic2VjdGlvblwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9e2Rlc2N9IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudEdhcmFtb25kJzsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0Nvcm1vcmFudEdhcmFtb25kLU1lZGl1bS50dGYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50R2FyYW1vbmQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ludHJvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYH0gPC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3RGdWxscGFnZS5XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3BvXG5cblxuIl19 */\n/*@ sourceURL=/home/brianlqiu/inspo_webiste/pages/index.js */"));
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
//# sourceMappingURL=index.js.61eb3af13719f24ee91a.hot-update.js.map