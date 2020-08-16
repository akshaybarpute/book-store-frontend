module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home_CategoryProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home/CategoryProductList */ \"./components/Home/CategoryProductList.js\");\nvar _jsxFileName = \"/home/akshay/Documents/bookstore-next/components/Home.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst list = {\n  education: [{\n    \"id\": 22,\n    \"title\": \"C programming\",\n    \"writer\": \"me\",\n    \"language\": \"english\",\n    \"category\": \"education\",\n    \"price\": 0.0,\n    \"createdAt\": 1596342530000,\n    \"updatedAt\": 1596342589000,\n    \"deleted\": false\n  }, {\n    \"id\": 23,\n    \"title\": \"C programming\",\n    \"writer\": \"me\",\n    \"language\": \"english\",\n    \"category\": \"education\",\n    \"price\": 0.0,\n    \"createdAt\": 1596342530000,\n    \"updatedAt\": 1596342589000,\n    \"deleted\": false\n  }, {\n    \"id\": 22,\n    \"title\": \"C programming\",\n    \"writer\": \"me\",\n    \"language\": \"english\",\n    \"category\": \"education\",\n    \"price\": 0.0,\n    \"createdAt\": 1596342530000,\n    \"updatedAt\": 1596342589000,\n    \"deleted\": false\n  }],\n  novel: [{\n    \"id\": 22,\n    \"title\": \"C programming\",\n    \"writer\": \"me\",\n    \"language\": \"english\",\n    \"category\": \"education\",\n    \"price\": 0.0,\n    \"createdAt\": 1596342530000,\n    \"updatedAt\": 1596342589000,\n    \"deleted\": false\n  }, {\n    \"id\": 22,\n    \"title\": \"C programming\",\n    \"writer\": \"me\",\n    \"language\": \"english\",\n    \"category\": \"education\",\n    \"price\": 0.0,\n    \"createdAt\": 1596342530000,\n    \"updatedAt\": 1596342589000,\n    \"deleted\": false\n  }, {\n    \"id\": 22,\n    \"title\": \"C programming\",\n    \"writer\": \"me\",\n    \"language\": \"english\",\n    \"category\": \"education\",\n    \"price\": 0.0,\n    \"createdAt\": 1596342530000,\n    \"updatedAt\": 1596342589000,\n    \"deleted\": false\n  }, {\n    \"id\": 22,\n    \"title\": \"C programming\",\n    \"writer\": \"me\",\n    \"language\": \"english\",\n    \"category\": \"education\",\n    \"price\": 0.0,\n    \"createdAt\": 1596342530000,\n    \"updatedAt\": 1596342589000,\n    \"deleted\": false\n  }]\n}; // const Home = ()=>{\n//   return (<div className=\"container-div\">\n//     <div className='trending-home'><b>Trending Currently</b>\n//     <div>dsahsgdgsdjfdidfyuififwgfkfgffwufiwffwjwfjwfgfrg</div>\n//     <div className='product-list-category'><b>Novels</b></div>\n//     <CategoryProductList list={list}/></div>\n//   </div>)\n// }\n\nconst Home = () => {\n  const keys = Object.keys(list);\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 10\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"].Row, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 5\n    }\n  }), keys.map(ele => {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"].Row, {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 14\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Segment\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }\n    }, __jsx(\"div\", {\n      className: \"category-name-home\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }\n    }, __jsx(\"b\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 45\n      }\n    }, ele)), __jsx(_Home_CategoryProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      list: list[ele],\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 7\n      }\n    })));\n  })); // return(<Grid container>\n  //   <Grid.Row>\n  //   <CategoryProductList list={list}/>\n  //   </Grid.Row>\n  //   </Grid>)\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUuanM/MWJkZiJdLCJuYW1lcyI6WyJsaXN0IiwiZWR1Y2F0aW9uIiwibm92ZWwiLCJIb21lIiwia2V5cyIsIk9iamVjdCIsIm1hcCIsImVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLE1BQU1BLElBQUksR0FBRztBQUNYQyxXQUFTLEVBQUMsQ0FDUjtBQUNFLFVBQU0sRUFEUjtBQUVFLGFBQVMsZUFGWDtBQUdFLGNBQVUsSUFIWjtBQUlFLGdCQUFZLFNBSmQ7QUFLRSxnQkFBWSxXQUxkO0FBTUUsYUFBUyxHQU5YO0FBT0UsaUJBQWEsYUFQZjtBQVFFLGlCQUFhLGFBUmY7QUFTRSxlQUFXO0FBVGIsR0FEUSxFQWFaO0FBQ0UsVUFBTSxFQURSO0FBRUUsYUFBUyxlQUZYO0FBR0UsY0FBVSxJQUhaO0FBSUUsZ0JBQVksU0FKZDtBQUtFLGdCQUFZLFdBTGQ7QUFNRSxhQUFTLEdBTlg7QUFPRSxpQkFBYSxhQVBmO0FBUUUsaUJBQWEsYUFSZjtBQVNFLGVBQVc7QUFUYixHQWJZLEVBMEJaO0FBQ0UsVUFBTSxFQURSO0FBRUUsYUFBUyxlQUZYO0FBR0UsY0FBVSxJQUhaO0FBSUUsZ0JBQVksU0FKZDtBQUtFLGdCQUFZLFdBTGQ7QUFNRSxhQUFTLEdBTlg7QUFPRSxpQkFBYSxhQVBmO0FBUUUsaUJBQWEsYUFSZjtBQVNFLGVBQVc7QUFUYixHQTFCWSxDQURDO0FBd0NiQyxPQUFLLEVBQUMsQ0FDSjtBQUNFLFVBQU0sRUFEUjtBQUVFLGFBQVMsZUFGWDtBQUdFLGNBQVUsSUFIWjtBQUlFLGdCQUFZLFNBSmQ7QUFLRSxnQkFBWSxXQUxkO0FBTUUsYUFBUyxHQU5YO0FBT0UsaUJBQWEsYUFQZjtBQVFFLGlCQUFhLGFBUmY7QUFTRSxlQUFXO0FBVGIsR0FESSxFQWFOO0FBQ0UsVUFBTSxFQURSO0FBRUUsYUFBUyxlQUZYO0FBR0UsY0FBVSxJQUhaO0FBSUUsZ0JBQVksU0FKZDtBQUtFLGdCQUFZLFdBTGQ7QUFNRSxhQUFTLEdBTlg7QUFPRSxpQkFBYSxhQVBmO0FBUUUsaUJBQWEsYUFSZjtBQVNFLGVBQVc7QUFUYixHQWJNLEVBMEJOO0FBQ0UsVUFBTSxFQURSO0FBRUUsYUFBUyxlQUZYO0FBR0UsY0FBVSxJQUhaO0FBSUUsZ0JBQVksU0FKZDtBQUtFLGdCQUFZLFdBTGQ7QUFNRSxhQUFTLEdBTlg7QUFPRSxpQkFBYSxhQVBmO0FBUUUsaUJBQWEsYUFSZjtBQVNFLGVBQVc7QUFUYixHQTFCTSxFQXNDTjtBQUNBLFVBQU0sRUFETjtBQUVBLGFBQVMsZUFGVDtBQUdBLGNBQVUsSUFIVjtBQUlBLGdCQUFZLFNBSlo7QUFLQSxnQkFBWSxXQUxaO0FBTUEsYUFBUyxHQU5UO0FBT0EsaUJBQWEsYUFQYjtBQVFBLGlCQUFhLGFBUmI7QUFTQSxlQUFXO0FBVFgsR0F0Q007QUF4Q08sQ0FBYixDLENBOEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsSUFBSSxHQUFHLE1BQUk7QUFFZixRQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZSixJQUFaLENBQWI7QUFFQSxTQUFPLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMLE1BQUMsc0RBQUQsQ0FBTSxHQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESyxFQUVKSSxJQUFJLENBQUNFLEdBQUwsQ0FBU0MsR0FBRyxJQUFFO0FBRWIsV0FBTyxNQUFDLHNEQUFELENBQU0sR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0wsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlBLEdBQUosQ0FBcEMsQ0FEQSxFQUVGLE1BQUMsaUVBQUQ7QUFBcUIsVUFBSSxFQUFFUCxJQUFJLENBQUNPLEdBQUQsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZFLENBREssQ0FBUDtBQU1ELEdBUkEsQ0FGSSxDQUFQLENBSmUsQ0FtQmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELENBeEJEOztBQTBCZUosbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7R3JpZCwgU2VnbWVudH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IENhdGVnb3J5UHJvZHVjdExpc3QgZnJvbSAnLi9Ib21lL0NhdGVnb3J5UHJvZHVjdExpc3QnO1xuXG5jb25zdCBsaXN0ID0ge1xuICBlZHVjYXRpb246W1xuICAgIHtcbiAgICAgIFwiaWRcIjogMjIsXG4gICAgICBcInRpdGxlXCI6IFwiQyBwcm9ncmFtbWluZ1wiLFxuICAgICAgXCJ3cml0ZXJcIjogXCJtZVwiLFxuICAgICAgXCJsYW5ndWFnZVwiOiBcImVuZ2xpc2hcIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJlZHVjYXRpb25cIixcbiAgICAgIFwicHJpY2VcIjogMC4wLFxuICAgICAgXCJjcmVhdGVkQXRcIjogMTU5NjM0MjUzMDAwMCxcbiAgICAgIFwidXBkYXRlZEF0XCI6IDE1OTYzNDI1ODkwMDAsXG4gICAgICBcImRlbGV0ZWRcIjogZmFsc2VcblxuICB9LFxue1xuICBcImlkXCI6IDIzLFxuICBcInRpdGxlXCI6IFwiQyBwcm9ncmFtbWluZ1wiLFxuICBcIndyaXRlclwiOiBcIm1lXCIsXG4gIFwibGFuZ3VhZ2VcIjogXCJlbmdsaXNoXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJlZHVjYXRpb25cIixcbiAgXCJwcmljZVwiOiAwLjAsXG4gIFwiY3JlYXRlZEF0XCI6IDE1OTYzNDI1MzAwMDAsXG4gIFwidXBkYXRlZEF0XCI6IDE1OTYzNDI1ODkwMDAsXG4gIFwiZGVsZXRlZFwiOiBmYWxzZVxuXG59LFxuXG57XG4gIFwiaWRcIjogMjIsXG4gIFwidGl0bGVcIjogXCJDIHByb2dyYW1taW5nXCIsXG4gIFwid3JpdGVyXCI6IFwibWVcIixcbiAgXCJsYW5ndWFnZVwiOiBcImVuZ2xpc2hcIixcbiAgXCJjYXRlZ29yeVwiOiBcImVkdWNhdGlvblwiLFxuICBcInByaWNlXCI6IDAuMCxcbiAgXCJjcmVhdGVkQXRcIjogMTU5NjM0MjUzMDAwMCxcbiAgXCJ1cGRhdGVkQXRcIjogMTU5NjM0MjU4OTAwMCxcbiAgXCJkZWxldGVkXCI6IGZhbHNlXG5cbn1cbl0sXG5ub3ZlbDpbXG4gIHtcbiAgICBcImlkXCI6IDIyLFxuICAgIFwidGl0bGVcIjogXCJDIHByb2dyYW1taW5nXCIsXG4gICAgXCJ3cml0ZXJcIjogXCJtZVwiLFxuICAgIFwibGFuZ3VhZ2VcIjogXCJlbmdsaXNoXCIsXG4gICAgXCJjYXRlZ29yeVwiOiBcImVkdWNhdGlvblwiLFxuICAgIFwicHJpY2VcIjogMC4wLFxuICAgIFwiY3JlYXRlZEF0XCI6IDE1OTYzNDI1MzAwMDAsXG4gICAgXCJ1cGRhdGVkQXRcIjogMTU5NjM0MjU4OTAwMCxcbiAgICBcImRlbGV0ZWRcIjogZmFsc2VcblxufSxcbntcbiAgXCJpZFwiOiAyMixcbiAgXCJ0aXRsZVwiOiBcIkMgcHJvZ3JhbW1pbmdcIixcbiAgXCJ3cml0ZXJcIjogXCJtZVwiLFxuICBcImxhbmd1YWdlXCI6IFwiZW5nbGlzaFwiLFxuICBcImNhdGVnb3J5XCI6IFwiZWR1Y2F0aW9uXCIsXG4gIFwicHJpY2VcIjogMC4wLFxuICBcImNyZWF0ZWRBdFwiOiAxNTk2MzQyNTMwMDAwLFxuICBcInVwZGF0ZWRBdFwiOiAxNTk2MzQyNTg5MDAwLFxuICBcImRlbGV0ZWRcIjogZmFsc2VcblxufSxcblxue1xuICBcImlkXCI6IDIyLFxuICBcInRpdGxlXCI6IFwiQyBwcm9ncmFtbWluZ1wiLFxuICBcIndyaXRlclwiOiBcIm1lXCIsXG4gIFwibGFuZ3VhZ2VcIjogXCJlbmdsaXNoXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJlZHVjYXRpb25cIixcbiAgXCJwcmljZVwiOiAwLjAsXG4gIFwiY3JlYXRlZEF0XCI6IDE1OTYzNDI1MzAwMDAsXG4gIFwidXBkYXRlZEF0XCI6IDE1OTYzNDI1ODkwMDAsXG4gIFwiZGVsZXRlZFwiOiBmYWxzZVxuXG59LFxue1xuXCJpZFwiOiAyMixcblwidGl0bGVcIjogXCJDIHByb2dyYW1taW5nXCIsXG5cIndyaXRlclwiOiBcIm1lXCIsXG5cImxhbmd1YWdlXCI6IFwiZW5nbGlzaFwiLFxuXCJjYXRlZ29yeVwiOiBcImVkdWNhdGlvblwiLFxuXCJwcmljZVwiOiAwLjAsXG5cImNyZWF0ZWRBdFwiOiAxNTk2MzQyNTMwMDAwLFxuXCJ1cGRhdGVkQXRcIjogMTU5NjM0MjU4OTAwMCxcblwiZGVsZXRlZFwiOiBmYWxzZVxuXG59XG5dXG59O1xuXG5cbi8vIGNvbnN0IEhvbWUgPSAoKT0+e1xuLy8gICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWRpdlwiPlxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPSd0cmVuZGluZy1ob21lJz48Yj5UcmVuZGluZyBDdXJyZW50bHk8L2I+XG4vLyAgICAgPGRpdj5kc2Foc2dkZ3NkamZkaWRmeXVpZmlmd2dma2ZnZmZ3dWZpd2Zmd2p3Zmp3Zmdmcmc8L2Rpdj5cbi8vICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1saXN0LWNhdGVnb3J5Jz48Yj5Ob3ZlbHM8L2I+PC9kaXY+XG4vLyAgICAgPENhdGVnb3J5UHJvZHVjdExpc3QgbGlzdD17bGlzdH0vPjwvZGl2PlxuLy8gICA8L2Rpdj4pXG4vLyB9XG5cbmNvbnN0IEhvbWUgPSAoKT0+e1xuXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhsaXN0KTtcblxuICByZXR1cm4oPEdyaWQgY29udGFpbmVyPlxuICAgIDxHcmlkLlJvdz48L0dyaWQuUm93PlxuICAgIHtrZXlzLm1hcChlbGU9PntcblxuICAgICAgcmV0dXJuIDxHcmlkLlJvdz5cbiAgICAgICAgPFNlZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yeS1uYW1lLWhvbWUnPjxiPntlbGV9PC9iPjwvZGl2PlxuICAgICAgPENhdGVnb3J5UHJvZHVjdExpc3QgbGlzdD17bGlzdFtlbGVdfS8+XG4gICAgICA8L1NlZ21lbnQ+XG4gICAgICA8L0dyaWQuUm93PlxuICAgIH0pfVxuICA8L0dyaWQ+XG5cbiAgKTtcblxuICAvLyByZXR1cm4oPEdyaWQgY29udGFpbmVyPlxuICAvLyAgIDxHcmlkLlJvdz5cbiAgLy8gICA8Q2F0ZWdvcnlQcm9kdWN0TGlzdCBsaXN0PXtsaXN0fS8+XG4gIC8vICAgPC9HcmlkLlJvdz5cbiAgLy8gICA8L0dyaWQ+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Home.js\n");

/***/ }),

/***/ "./components/Home/CategoryProductList.js":
/*!************************************************!*\
  !*** ./components/Home/CategoryProductList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Home_ProductSpan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Home/ProductSpan */ \"./components/Home/ProductSpan.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/akshay/Documents/bookstore-next/components/Home/CategoryProductList.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // const CategoryProductList = (props)=>{\n//   return (<div className='product-list-hr'>\n//     <Grid columns={4} textAlign={'center'}>\n//     {\n//         props.list.map(ele=>{\n//           return (<Grid.Column>\n//             <Segment piled>\n//             {ProductSpan(ele)}\n//             </Segment></Grid.Column>)\n//         })\n//     }\n//   </Grid></div>)\n// };\n\nconst CategoryProductList = props => {\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"].Row, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"product-list-hr\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 21\n    }\n  }, props.list.map(ele => {\n    return Object(_Home_ProductSpan__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ele);\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryProductList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvQ2F0ZWdvcnlQcm9kdWN0TGlzdC5qcz8xZjIxIl0sIm5hbWVzIjpbIkNhdGVnb3J5UHJvZHVjdExpc3QiLCJwcm9wcyIsImxpc3QiLCJtYXAiLCJlbGUiLCJQcm9kdWN0U3BhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Q0FJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxtQkFBbUIsR0FBSUMsS0FBRCxJQUFTO0FBRW5DLFNBQVEsTUFBQyxzREFBRCxDQUFNLEdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFVO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFWkEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEdBQVgsQ0FBZUMsR0FBRyxJQUFFO0FBQ2hCLFdBQU9DLGlFQUFXLENBQUNELEdBQUQsQ0FBbEI7QUFDSCxHQUZELENBRlksQ0FBVixDQUFSO0FBUUQsQ0FWRDs7QUFhZUosa0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUvQ2F0ZWdvcnlQcm9kdWN0TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFByb2R1Y3RTcGFuIGZyb20gJy4uL0hvbWUvUHJvZHVjdFNwYW4nO1xuaW1wb3J0IHtHcmlkLCBTZWdtZW50fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cblxuLy8gY29uc3QgQ2F0ZWdvcnlQcm9kdWN0TGlzdCA9IChwcm9wcyk9PntcblxuLy8gICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWxpc3QtaHInPlxuLy8gICAgIDxHcmlkIGNvbHVtbnM9ezR9IHRleHRBbGlnbj17J2NlbnRlcid9PlxuLy8gICAgIHtcbi8vICAgICAgICAgcHJvcHMubGlzdC5tYXAoZWxlPT57XG4vLyAgICAgICAgICAgcmV0dXJuICg8R3JpZC5Db2x1bW4+XG4vLyAgICAgICAgICAgICA8U2VnbWVudCBwaWxlZD5cbi8vICAgICAgICAgICAgIHtQcm9kdWN0U3BhbihlbGUpfVxuLy8gICAgICAgICAgICAgPC9TZWdtZW50PjwvR3JpZC5Db2x1bW4+KVxuLy8gICAgICAgICB9KVxuICAgICAgXG4vLyAgICAgfVxuLy8gICA8L0dyaWQ+PC9kaXY+KVxuLy8gfTtcblxuXG5jb25zdCBDYXRlZ29yeVByb2R1Y3RMaXN0ID0gKHByb3BzKT0+e1xuXG4gIHJldHVybiAoPEdyaWQuUm93PjxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWxpc3QtaHInPlxuICAgIHtcbiAgICAgICAgcHJvcHMubGlzdC5tYXAoZWxlPT57IFxuICAgICAgICAgICAgcmV0dXJuIFByb2R1Y3RTcGFuKGVsZSlcbiAgICAgICAgfSlcbiAgICAgIFxuICAgIH1cbiAgPC9kaXY+PC9HcmlkLlJvdz4pXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5UHJvZHVjdExpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Home/CategoryProductList.js\n");

/***/ }),

/***/ "./components/Home/ProductSpan.js":
/*!****************************************!*\
  !*** ./components/Home/ProductSpan.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/akshay/Documents/bookstore-next/components/Home/ProductSpan.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst ProductSpan = props => {\n  return __jsx(\"span\", {\n    className: \"product-span\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"product-id\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, \"Id:\", props.id), __jsx(\"div\", {\n    className: \"product-name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, \"Name:\", props.title), __jsx(\"div\", {\n    className: \"product-price\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, \"Price:\", props.price));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductSpan);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUvUHJvZHVjdFNwYW4uanM/NDMyYyJdLCJuYW1lcyI6WyJQcm9kdWN0U3BhbiIsInByb3BzIiwiaWQiLCJ0aXRsZSIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsTUFBTUEsV0FBVyxHQUFJQyxLQUFELElBQVM7QUFFM0IsU0FBUTtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ047QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQWdDQSxLQUFLLENBQUNDLEVBQXRDLENBRE0sRUFFTjtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBb0NELEtBQUssQ0FBQ0UsS0FBMUMsQ0FGTSxFQUdOO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFzQ0YsS0FBSyxDQUFDRyxLQUE1QyxDQUhNLENBQVI7QUFLRCxDQVBEOztBQVVlSiwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSG9tZS9Qcm9kdWN0U3Bhbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgUHJvZHVjdFNwYW4gPSAocHJvcHMpPT57XG5cbiAgcmV0dXJuICg8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3Qtc3Bhbic+XG4gICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtaWQnPklkOntwcm9wcy5pZH08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1uYW1lJz5OYW1lOntwcm9wcy50aXRsZX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1wcmljZSc+UHJpY2U6e3Byb3BzLnByaWNlfTwvZGl2PlxuICAgIDwvc3Bhbj4pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFNwYW47Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Home/ProductSpan.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/akshay/Documents/bookstore-next/components/Layout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// import Header from '../components/Header';\n // import store from '../store/index';\n\n\n // import { initGA, logPageView } from '../others/Analytics';\n// const title = 'freetests4u.com';\n\nconst Layout = props => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, props.title), __jsx(\"meta\", {\n    name: \"description\",\n    content: props.desc,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  })), props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwidGl0bGUiLCJkZXNjIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0NBRUE7QUFJQTs7QUFJQSxNQUFNQSxNQUFNLEdBQUVDLEtBQUQsSUFBUztBQUNsQixTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFBLEtBQUssQ0FBQ0MsS0FBZCxDQURKLEVBRUk7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUVELEtBQUssQ0FBQ0UsSUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFNS0YsS0FBSyxDQUFDRyxRQU5YLENBREo7QUFXSCxDQVpEOztBQWNlSixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4Jztcbi8vIGltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XG5pbXBvcnQgSGVhZCBmcm9tICAnbmV4dC9oZWFkJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBpbml0R0EsIGxvZ1BhZ2VWaWV3IH0gZnJvbSAnLi4vb3RoZXJzL0FuYWx5dGljcyc7XG5cblxuXG4vLyBjb25zdCB0aXRsZSA9ICdmcmVldGVzdHM0dS5jb20nO1xuXG5cblxuY29uc3QgTGF5b3V0PShwcm9wcyk9PntcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+e3Byb3BzLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e3Byb3BzLmRlc2N9Lz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICB7LyogPEhlYWRlciAvPiAqL31cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIHsvKiA8L1Byb3ZpZGVyPiAqL30gXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home */ \"./components/Home.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nvar _jsxFileName = \"/home/akshay/Documents/bookstore-next/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Index() {\n  const title = 'Title';\n  const description = 'Desc bla bla!';\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: title,\n    desc: description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUdlLFNBQVNBLEtBQVQsR0FBaUI7QUFFNUIsUUFBTUMsS0FBSyxHQUFHLE9BQWQ7QUFDQSxRQUFNQyxXQUFXLEdBQUcsZUFBcEI7QUFDQSxTQUNJLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUVELEtBQWY7QUFBc0IsUUFBSSxFQUFFQyxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESjtBQUtIIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBIb21lIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcblxuICAgIGNvbnN0IHRpdGxlID0gJ1RpdGxlJztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9ICdEZXNjIGJsYSBibGEhJztcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0IHRpdGxlPXt0aXRsZX0gZGVzYz17ZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgPEhvbWU+PC9Ib21lPlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"semantic-ui-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiPzVjODIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VtYW50aWMtdWktcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///semantic-ui-react\n");

/***/ })

/******/ });