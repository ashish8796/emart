"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/store/reducers/screen.reducer.ts":
/*!**********************************************!*\
  !*** ./src/store/reducers/screen.reducer.ts ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ashishkumarsaini_Documents_emart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ \"./src/store/actions/actionTypes.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_ashishkumarsaini_Documents_emart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n// console.log(typeof localStorage.getItem)\nlet key = \"isDepartmentVisible\";\nconst initialState = {\n  isDepartmentVisible:  true && key in localStorage ? localStorage.getItem(key) === \"true\" && true : true\n};\n\nfunction screenReducer(state = initialState, action) {\n  switch (action.type) {\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.SET_IS_DEPARTMENT_VISIBLE:\n      {\n        localStorage.setItem(\"isDepartmentVisible\", JSON.stringify(action.payload));\n        console.log(action.payload);\n        return _objectSpread(_objectSpread({}, state), {}, {\n          isDepartmentVisible: action.payload\n        });\n      }\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (screenReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvc2NyZWVuLnJlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBT0E7QUFFQSxJQUFJQyxHQUFHLEdBQUcscUJBQVY7QUFFQSxNQUFNQyxZQUF5QixHQUFHO0FBQ2hDQyxFQUFBQSxtQkFBbUIsRUFDakIsU0FBaUNGLEdBQUcsSUFBSUcsWUFBeEMsR0FDSUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCSixHQUFyQixNQUE4QixNQUE5QixJQUF3QyxJQUQ1QyxHQUVJO0FBSjBCLENBQWxDOztBQVNBLFNBQVNLLGFBQVQsQ0FBdUJDLEtBQUssR0FBR0wsWUFBL0IsRUFBNkNNLE1BQTdDLEVBQWlFO0FBQy9ELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtULDJFQUFMO0FBQWdDO0FBQzlCSSxRQUFBQSxZQUFZLENBQUNNLE9BQWIsQ0FDRSxxQkFERixFQUVFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosTUFBTSxDQUFDSyxPQUF0QixDQUZGO0FBS0FDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxNQUFNLENBQUNLLE9BQW5CO0FBQ0EsK0NBQVlOLEtBQVo7QUFBbUJKLFVBQUFBLG1CQUFtQixFQUFFSyxNQUFNLENBQUNLO0FBQS9DO0FBQ0Q7O0FBRUQ7QUFDRSxhQUFPTixLQUFQO0FBWko7QUFjRDs7QUFFRCwrREFBZUQsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvcmVkdWNlcnMvc2NyZWVuLnJlZHVjZXIudHM/OWIxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRVRfSVNfREVQQVJUTUVOVF9WSVNJQkxFIH0gZnJvbSBcIi4uL2FjdGlvbnMvYWN0aW9uVHlwZXNcIjtcbmltcG9ydCB7IElzRGVwYXJ0bWVudFZpc2libGUgfSBmcm9tIFwiLi4vYWN0aW9ucy90c1R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NyZWVuU3RhdGUge1xuICBpc0RlcGFydG1lbnRWaXNpYmxlOiBib29sZWFuO1xufVxuXG4vLyBjb25zb2xlLmxvZyh0eXBlb2YgbG9jYWxTdG9yYWdlLmdldEl0ZW0pXG5cbmxldCBrZXkgPSBcImlzRGVwYXJ0bWVudFZpc2libGVcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBTY3JlZW5TdGF0ZSA9IHtcbiAgaXNEZXBhcnRtZW50VmlzaWJsZTpcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIGtleSBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSA9PT0gXCJ0cnVlXCIgJiYgdHJ1ZVxuICAgICAgOiB0cnVlLFxufTtcblxudHlwZSBNYWluQWN0aW9uID0gSXNEZXBhcnRtZW50VmlzaWJsZTtcblxuZnVuY3Rpb24gc2NyZWVuUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBNYWluQWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9JU19ERVBBUlRNRU5UX1ZJU0lCTEU6IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcImlzRGVwYXJ0bWVudFZpc2libGVcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoYWN0aW9uLnBheWxvYWQpXG4gICAgICApO1xuXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZCk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNEZXBhcnRtZW50VmlzaWJsZTogYWN0aW9uLnBheWxvYWQgfTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNjcmVlblJlZHVjZXI7XG4iXSwibmFtZXMiOlsiU0VUX0lTX0RFUEFSVE1FTlRfVklTSUJMRSIsImtleSIsImluaXRpYWxTdGF0ZSIsImlzRGVwYXJ0bWVudFZpc2libGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2NyZWVuUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/reducers/screen.reducer.ts\n");

/***/ })

});