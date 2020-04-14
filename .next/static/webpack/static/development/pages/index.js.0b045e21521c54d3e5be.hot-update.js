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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/brianlqiu/inspo_webiste/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

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
          lineNumber: 38,
          columnNumber: 13
        }
      }, __jsx(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7___default.a, {
        navigation: true,
        onLeave: this.onLeave.bind(this),
        licenseKey: 'AA292B57-818B4C7D-BD530DCC-2171D815',
        render: function render(comp) {
          return __jsx(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_7___default.a.Wrapper, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 25
            }
          }, fullpages.map(function (_ref) {
            var key = _ref.key,
                desc = _ref.desc;
            return __jsx("div", {
              key: key,
              className: "section",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 33
              }
            }, __jsx("img", {
              src: image,
              alt: desc,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 37
              }
            }));
          }));
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }
      }));
    }
  }]);

  return Inspo;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Inspo);

/***/ })

})
//# sourceMappingURL=index.js.0b045e21521c54d3e5be.hot-update.js.map