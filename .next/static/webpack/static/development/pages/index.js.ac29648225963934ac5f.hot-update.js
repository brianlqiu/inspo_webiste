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
            className: "jsx-2701697774" + " " + "section",
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
            className: "jsx-2701697774",
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
              className: "jsx-2701697774" + " " + "section",
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
              className: "jsx-2701697774",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 37
              }
            }));
          }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
            id: "2701697774",
            __self: _this2
          }, "@font-face{font-family:'CormorantGaramond';src:url('/fonts/CormorantGaramond-Medium.ttf');}h1.jsx-2701697774{font-family:'CormorantGaramond';}#intro.jsx-2701697774{text-align:center;}.section.jsx-2701697774{background-color:black;}img.jsx-2701697774{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyaWFubHFpdS9pbnNwb193ZWJpc3RlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEd0MsQUFHaUUsQUFJSSxBQUtyQyxBQUlBLEFBSUEsWUFBQyxNQVJBLEtBSUEsU0FabUQsQUFJbkQsK0NBSEoiLCJmaWxlIjoiL2hvbWUvYnJpYW5scWl1L2luc3BvX3dlYmlzdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5pbXBvcnQgUmVhY3RGdWxscGFnZSBmcm9tIFwiQGZ1bGxwYWdlL3JlYWN0LWZ1bGxwYWdlXCI7XG5cbmNsYXNzIEluc3BvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmdWxscGFnZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJpbnRyb1wiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIk15IEluc3BvIEFsYnVtXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRvbGxzXCIsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvZG9sbHMuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6IFwiRG9sbHMgKDIwMDIpLCBkaXJlY3RlZCBieSBUYWtlc2hpIEtpdGFubywgY29zdHVtZXMgYnkgWW9oamkgWWFtYW1vdG9cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwibXVyYWthbWlcIixcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9tdXJha2FtaS5qcGVnXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6IFwiQSBUYWtlc2hpIE11cmFrYW1pIHNjdWxwdHVyZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25MZWF2ZShvcmlnaW4sIGRlc3RpbmF0aW9uLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkxlYXZlXCIsIHsgb3JpZ2luLCBkZXN0aW5hdGlvbiwgZGlyZWN0aW9uIH0pO1xuICAgICAgICAvLyBhcmd1bWVudHMgYXJlIG1hcHBlZCBpbiBvcmRlciBvZiBmdWxscGFnZS5qcyBjYWxsYmFjayBhcmd1bWVudHMgZG8gc29tZXRoaW5nXG4gICAgICAgIC8vIHdpdGggdGhlIGV2ZW50XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGZ1bGxwYWdlcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIWZ1bGxwYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW5zcG9cIj5cblxuICAgICAgICAgICAgICAgIDxSZWFjdEZ1bGxwYWdlXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb249e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9uTGVhdmU9e3RoaXMub25MZWF2ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBsaWNlbnNlS2V5PXsnQUEyOTJCNTctODE4QjRDN0QtQkQ1MzBEQ0MtMjE3MUQ4MTUnfVxuICAgICAgICAgICAgICAgICAgICByZW5kZXI9e2NvbXAgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0RnVsbHBhZ2UuV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZnVsbHBhZ2VzWzBdLmtleX0gY2xhc3NOYW1lPVwic2VjdGlvblwiIGlkPVwiaW50cm9cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+e2Z1bGxwYWdlc1swXS50ZXh0fTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGxwYWdlcy5zbGljZSgxLCBmdWxscGFnZXMubGVuZ3RoKS5tYXAoKHsga2V5LCBpbWFnZSwgZGVzYyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cInNlY3Rpb25cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXtkZXNjfSBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnRHYXJhbW9uZCc7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9Db3Jtb3JhbnRHYXJhbW9uZC1NZWRpdW0udHRmJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudEdhcmFtb25kJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNpbnRybyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfSA8L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdEZ1bGxwYWdlLldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zcG9cblxuXG4iXX0= */\n/*@ sourceURL=/home/brianlqiu/inspo_webiste/pages/index.js */"));
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
//# sourceMappingURL=index.js.ac29648225963934ac5f.hot-update.js.map