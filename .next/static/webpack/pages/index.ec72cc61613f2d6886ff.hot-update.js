webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _Home_CategoryProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home/CategoryProductList */ \"./components/Home/CategoryProductList.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/akshay/Documents/bookstore-next/components/Home.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar list = [{\n  name: 'cadac-preparation guide',\n  id: 1,\n  price: 20\n}, {\n  name: 'novel',\n  id: 2,\n  price: 30\n}, {\n  name: 'novel',\n  id: 2,\n  price: 30\n}, {\n  name: 'novel',\n  id: 2,\n  price: 30\n}];\nvar list2 = {\n  education: [{\n    \"id\": 22,\n    \"title\": \"cdac notes\",\n    \"writer\": \"me\",\n    \"language\": \"english\",\n    \"category\": \"education\",\n    \"price\": 0.0,\n    \"createdAt\": 1596342530000,\n    \"updatedAt\": 1596342589000,\n    \"deleted\": false\n  }, {\n    \"id\": 23,\n    \"title\": \"cdac notes\",\n    \"writer\": \"me\",\n    \"language\": \"english\",\n    \"category\": \"education\",\n    \"price\": 0.0,\n    \"createdAt\": 1596342530000,\n    \"updatedAt\": 1596342589000,\n    \"deleted\": false\n  }],\n  novel: [{\n    \"id\": 22,\n    \"title\": \"cdac notes\",\n    \"writer\": \"me\",\n    \"language\": \"english\",\n    \"category\": \"education\",\n    \"price\": 0.0,\n    \"createdAt\": 1596342530000,\n    \"updatedAt\": 1596342589000,\n    \"deleted\": false\n  }, {\n    \"id\": 22,\n    \"title\": \"cdac notes\",\n    \"writer\": \"me\",\n    \"language\": \"english\",\n    \"category\": \"education\",\n    \"price\": 0.0,\n    \"createdAt\": 1596342530000,\n    \"updatedAt\": 1596342589000,\n    \"deleted\": false\n  }]\n}; // const Home = ()=>{\n//   return (<div className=\"container-div\">\n//     <div className='trending-home'><b>Trending Currently</b>\n//     <div>dsahsgdgsdjfdidfyuififwgfkfgffwufiwffwjwfjwfgfrg</div>\n//     <div className='product-list-category'><b>Novels</b></div>\n//     <CategoryProductList list={list}/></div>\n//   </div>)\n// }\n\nvar Home = function Home() {\n  var keys = Object.keys(list2);\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 10\n    }\n  }, keys.map(function (ele) {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"].Row, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 14\n      }\n    }, __jsx(\"div\", {\n      className: \"category-name-home\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }\n    }, __jsx(\"b\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 45\n      }\n    }, ele)), __jsx(_Home_CategoryProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      list: list2[ele],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 7\n      }\n    }));\n  })); // return(<Grid container>\n  //   <Grid.Row>\n  //   <CategoryProductList list={list}/>\n  //   </Grid.Row>\n  //   </Grid>)\n};\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lLmpzPzFiZGYiXSwibmFtZXMiOlsibGlzdCIsIm5hbWUiLCJpZCIsInByaWNlIiwibGlzdDIiLCJlZHVjYXRpb24iLCJub3ZlbCIsIkhvbWUiLCJrZXlzIiwiT2JqZWN0IiwibWFwIiwiZWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUFDO0FBQUNDLE1BQUksRUFBQyx5QkFBTjtBQUFpQ0MsSUFBRSxFQUFDLENBQXBDO0FBQXVDQyxPQUFLLEVBQUM7QUFBN0MsQ0FBRCxFQUFtRDtBQUFDRixNQUFJLEVBQUMsT0FBTjtBQUFlQyxJQUFFLEVBQUMsQ0FBbEI7QUFBcUJDLE9BQUssRUFBQztBQUEzQixDQUFuRCxFQUNiO0FBQUNGLE1BQUksRUFBQyxPQUFOO0FBQWVDLElBQUUsRUFBQyxDQUFsQjtBQUFxQkMsT0FBSyxFQUFDO0FBQTNCLENBRGEsRUFDa0I7QUFBQ0YsTUFBSSxFQUFDLE9BQU47QUFBZUMsSUFBRSxFQUFDLENBQWxCO0FBQXFCQyxPQUFLLEVBQUM7QUFBM0IsQ0FEbEIsQ0FBYjtBQUdBLElBQU1DLEtBQUssR0FBRztBQUNaQyxXQUFTLEVBQUMsQ0FDUjtBQUNFLFVBQU0sRUFEUjtBQUVFLGFBQVMsWUFGWDtBQUdFLGNBQVUsSUFIWjtBQUlFLGdCQUFZLFNBSmQ7QUFLRSxnQkFBWSxXQUxkO0FBTUUsYUFBUyxHQU5YO0FBT0UsaUJBQWEsYUFQZjtBQVFFLGlCQUFhLGFBUmY7QUFTRSxlQUFXO0FBVGIsR0FEUSxFQWFaO0FBQ0UsVUFBTSxFQURSO0FBRUUsYUFBUyxZQUZYO0FBR0UsY0FBVSxJQUhaO0FBSUUsZ0JBQVksU0FKZDtBQUtFLGdCQUFZLFdBTGQ7QUFNRSxhQUFTLEdBTlg7QUFPRSxpQkFBYSxhQVBmO0FBUUUsaUJBQWEsYUFSZjtBQVNFLGVBQVc7QUFUYixHQWJZLENBREU7QUEwQmRDLE9BQUssRUFBQyxDQUNKO0FBQ0UsVUFBTSxFQURSO0FBRUUsYUFBUyxZQUZYO0FBR0UsY0FBVSxJQUhaO0FBSUUsZ0JBQVksU0FKZDtBQUtFLGdCQUFZLFdBTGQ7QUFNRSxhQUFTLEdBTlg7QUFPRSxpQkFBYSxhQVBmO0FBUUUsaUJBQWEsYUFSZjtBQVNFLGVBQVc7QUFUYixHQURJLEVBYU47QUFDRSxVQUFNLEVBRFI7QUFFRSxhQUFTLFlBRlg7QUFHRSxjQUFVLElBSFo7QUFJRSxnQkFBWSxTQUpkO0FBS0UsZ0JBQVksV0FMZDtBQU1FLGFBQVMsR0FOWDtBQU9FLGlCQUFhLGFBUGY7QUFRRSxpQkFBYSxhQVJmO0FBU0UsZUFBVztBQVRiLEdBYk07QUExQlEsQ0FBZCxDLENBd0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBSTtBQUVmLE1BQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlKLEtBQVosQ0FBYjtBQUVBLFNBQU8sTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0pJLElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUFDLEdBQUcsRUFBRTtBQUViLFdBQU8sTUFBQyxzREFBRCxDQUFNLEdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNMO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJQSxHQUFKLENBQXBDLENBREssRUFFUCxNQUFDLGlFQUFEO0FBQXFCLFVBQUksRUFBRVAsS0FBSyxDQUFDTyxHQUFELENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGTyxDQUFQO0FBSUQsR0FOQSxDQURJLENBQVAsQ0FKZSxDQWdCZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0FyQkQ7O0tBQU1KLEk7QUF1QlNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ib21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge0dyaWQsIFNlZ21lbnR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBDYXRlZ29yeVByb2R1Y3RMaXN0IGZyb20gJy4vSG9tZS9DYXRlZ29yeVByb2R1Y3RMaXN0JztcblxuY29uc3QgbGlzdCA9IFt7bmFtZTonY2FkYWMtcHJlcGFyYXRpb24gZ3VpZGUnLCBpZDoxLCBwcmljZToyMH0sIHtuYW1lOidub3ZlbCcsIGlkOjIsIHByaWNlOjMwfSxcbntuYW1lOidub3ZlbCcsIGlkOjIsIHByaWNlOjMwfSx7bmFtZTonbm92ZWwnLCBpZDoyLCBwcmljZTozMH1dO1xuXG5jb25zdCBsaXN0MiA9IHtcbiAgZWR1Y2F0aW9uOltcbiAgICB7XG4gICAgICBcImlkXCI6IDIyLFxuICAgICAgXCJ0aXRsZVwiOiBcImNkYWMgbm90ZXNcIixcbiAgICAgIFwid3JpdGVyXCI6IFwibWVcIixcbiAgICAgIFwibGFuZ3VhZ2VcIjogXCJlbmdsaXNoXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiZWR1Y2F0aW9uXCIsXG4gICAgICBcInByaWNlXCI6IDAuMCxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IDE1OTYzNDI1MzAwMDAsXG4gICAgICBcInVwZGF0ZWRBdFwiOiAxNTk2MzQyNTg5MDAwLFxuICAgICAgXCJkZWxldGVkXCI6IGZhbHNlXG5cbiAgfSxcbntcbiAgXCJpZFwiOiAyMyxcbiAgXCJ0aXRsZVwiOiBcImNkYWMgbm90ZXNcIixcbiAgXCJ3cml0ZXJcIjogXCJtZVwiLFxuICBcImxhbmd1YWdlXCI6IFwiZW5nbGlzaFwiLFxuICBcImNhdGVnb3J5XCI6IFwiZWR1Y2F0aW9uXCIsXG4gIFwicHJpY2VcIjogMC4wLFxuICBcImNyZWF0ZWRBdFwiOiAxNTk2MzQyNTMwMDAwLFxuICBcInVwZGF0ZWRBdFwiOiAxNTk2MzQyNTg5MDAwLFxuICBcImRlbGV0ZWRcIjogZmFsc2VcblxufV0sXG5ub3ZlbDpbXG4gIHtcbiAgICBcImlkXCI6IDIyLFxuICAgIFwidGl0bGVcIjogXCJjZGFjIG5vdGVzXCIsXG4gICAgXCJ3cml0ZXJcIjogXCJtZVwiLFxuICAgIFwibGFuZ3VhZ2VcIjogXCJlbmdsaXNoXCIsXG4gICAgXCJjYXRlZ29yeVwiOiBcImVkdWNhdGlvblwiLFxuICAgIFwicHJpY2VcIjogMC4wLFxuICAgIFwiY3JlYXRlZEF0XCI6IDE1OTYzNDI1MzAwMDAsXG4gICAgXCJ1cGRhdGVkQXRcIjogMTU5NjM0MjU4OTAwMCxcbiAgICBcImRlbGV0ZWRcIjogZmFsc2VcblxufSxcbntcbiAgXCJpZFwiOiAyMixcbiAgXCJ0aXRsZVwiOiBcImNkYWMgbm90ZXNcIixcbiAgXCJ3cml0ZXJcIjogXCJtZVwiLFxuICBcImxhbmd1YWdlXCI6IFwiZW5nbGlzaFwiLFxuICBcImNhdGVnb3J5XCI6IFwiZWR1Y2F0aW9uXCIsXG4gIFwicHJpY2VcIjogMC4wLFxuICBcImNyZWF0ZWRBdFwiOiAxNTk2MzQyNTMwMDAwLFxuICBcInVwZGF0ZWRBdFwiOiAxNTk2MzQyNTg5MDAwLFxuICBcImRlbGV0ZWRcIjogZmFsc2VcblxufSxcblxuXVxufTtcblxuXG4vLyBjb25zdCBIb21lID0gKCk9Pntcbi8vICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1kaXZcIj5cbi8vICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJlbmRpbmctaG9tZSc+PGI+VHJlbmRpbmcgQ3VycmVudGx5PC9iPlxuLy8gICAgIDxkaXY+ZHNhaHNnZGdzZGpmZGlkZnl1aWZpZndnZmtmZ2Zmd3VmaXdmZndqd2Zqd2ZnZnJnPC9kaXY+XG4vLyAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtbGlzdC1jYXRlZ29yeSc+PGI+Tm92ZWxzPC9iPjwvZGl2PlxuLy8gICAgIDxDYXRlZ29yeVByb2R1Y3RMaXN0IGxpc3Q9e2xpc3R9Lz48L2Rpdj5cbi8vICAgPC9kaXY+KVxuLy8gfVxuXG5jb25zdCBIb21lID0gKCk9PntcblxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobGlzdDIpO1xuXG4gIHJldHVybig8R3JpZCBjb250YWluZXI+XG4gICAge2tleXMubWFwKGVsZT0+e1xuXG4gICAgICByZXR1cm4gPEdyaWQuUm93PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnktbmFtZS1ob21lJz48Yj57ZWxlfTwvYj48L2Rpdj5cbiAgICAgIDxDYXRlZ29yeVByb2R1Y3RMaXN0IGxpc3Q9e2xpc3QyW2VsZV19Lz5cbiAgICAgIDwvR3JpZC5Sb3c+XG4gICAgfSl9XG4gIDwvR3JpZD5cblxuICApO1xuXG4gIC8vIHJldHVybig8R3JpZCBjb250YWluZXI+XG4gIC8vICAgPEdyaWQuUm93PlxuICAvLyAgIDxDYXRlZ29yeVByb2R1Y3RMaXN0IGxpc3Q9e2xpc3R9Lz5cbiAgLy8gICA8L0dyaWQuUm93PlxuICAvLyAgIDwvR3JpZD4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Home.js\n");

/***/ })

})