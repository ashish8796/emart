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

/***/ "./src/store/reducers/shopping.reducer.ts":
/*!************************************************!*\
  !*** ./src/store/reducers/shopping.reducer.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ashishkumarsaini_Documents_emart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ \"./src/store/actions/actionTypes.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_ashishkumarsaini_Documents_emart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nconst intialState = {\n  // cartId: \"emart-token\" in localStorage ? \"primary_cart_id\" in localStorage ? localStorage.getItem('primary_cart_id') : '' : \"secondry_cart_id\" in localStorage ? localStorage.getItem(\"secondry_cart_id\") : \"\",\n  cartId: {\n    id:  true && localStorage.getItem(\"primary_cart_id\") ? localStorage.getItem(\"primary_cart_id\") : \"\",\n    cartIdStatus:  true && localStorage.getItem(\"primary_cart_id\") ? 200 : false\n  },\n  productsList: [],\n  cartProductStatus: false\n};\n\nfunction shoppingCartReducer(state = intialState, action) {\n  switch (action.type) {\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.SET_SHOPPING_CART_ID:\n      {\n        localStorage.setItem(\"primary_cart_id\", action.payload.id);\n        return _objectSpread(_objectSpread({}, state), {}, {\n          cartId: action.payload\n        });\n      }\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.ADD_PRODUCT_IN_SHOPPING_CART:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          productsList: action.payload.result,\n          cartProductStatus: action.payload.status\n        });\n      }\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.SET_LIST_OF_PRODUCTS_IN_SHOPPING_CART:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          productsList: action.payload.result,\n          cartProductStatus: action.payload.status\n        });\n      }\n    // case REMOVE_PRODUCT_FROM_CART: {\n    //   return { ...state, productsList: action.payload.result, cartProductStatus: action.payload.status };\n    // }\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.SET_INTERNET_ERROR:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          cartProductStatus: action.payload,\n          productsList: []\n        });\n      }\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (shoppingCartReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlcnMvc2hvcHBpbmcucmVkdWNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFvQkEsTUFBTUksV0FBOEIsR0FBRztBQUNyQztBQUVBQyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsRUFBRSxFQUNBLFNBQWlDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsaUJBQXJCLENBQWpDLEdBQ0lELFlBQVksQ0FBQ0MsT0FBYixDQUFxQixpQkFBckIsQ0FESixHQUVJLEVBSkE7QUFLTkMsSUFBQUEsWUFBWSxFQUNWLFNBQWlDRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsaUJBQXJCLENBQWpDLEdBQ0ksR0FESixHQUVJO0FBUkEsR0FINkI7QUFhckNFLEVBQUFBLFlBQVksRUFBRSxFQWJ1QjtBQWNyQ0MsRUFBQUEsaUJBQWlCLEVBQUU7QUFka0IsQ0FBdkM7O0FBc0JBLFNBQVNDLG1CQUFULENBQTZCQyxLQUFLLEdBQUdULFdBQXJDLEVBQWtEVSxNQUFsRCxFQUFzRTtBQUNwRSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLWixzRUFBTDtBQUEyQjtBQUN6QkksUUFBQUEsWUFBWSxDQUFDUyxPQUFiLENBQXFCLGlCQUFyQixFQUF3Q0YsTUFBTSxDQUFDRyxPQUFQLENBQWVYLEVBQXZEO0FBRUEsK0NBQVlPLEtBQVo7QUFBbUJSLFVBQUFBLE1BQU0sRUFBRVMsTUFBTSxDQUFDRztBQUFsQztBQUNEOztBQUVELFNBQUtqQiw4RUFBTDtBQUFtQztBQUNqQywrQ0FDS2EsS0FETDtBQUVFSCxVQUFBQSxZQUFZLEVBQUVJLE1BQU0sQ0FBQ0csT0FBUCxDQUFlQyxNQUYvQjtBQUdFUCxVQUFBQSxpQkFBaUIsRUFBRUcsTUFBTSxDQUFDRyxPQUFQLENBQWVFO0FBSHBDO0FBS0Q7O0FBRUQsU0FBS2pCLHVGQUFMO0FBQTRDO0FBQzFDLCtDQUNLVyxLQURMO0FBRUVILFVBQUFBLFlBQVksRUFBRUksTUFBTSxDQUFDRyxPQUFQLENBQWVDLE1BRi9CO0FBR0VQLFVBQUFBLGlCQUFpQixFQUFFRyxNQUFNLENBQUNHLE9BQVAsQ0FBZUU7QUFIcEM7QUFLRDtBQUVEO0FBQ0E7QUFDQTs7QUFFQSxTQUFLbEIsb0VBQUw7QUFBeUI7QUFDdkIsK0NBQ0tZLEtBREw7QUFFRUYsVUFBQUEsaUJBQWlCLEVBQUVHLE1BQU0sQ0FBQ0csT0FGNUI7QUFHRVAsVUFBQUEsWUFBWSxFQUFFO0FBSGhCO0FBS0Q7O0FBRUQ7QUFDRSxhQUFPRyxLQUFQO0FBcENKO0FBc0NEOztBQUVELCtEQUFlRCxtQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvcmVkdWNlcnMvc2hvcHBpbmcucmVkdWNlci50cz80ZDhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFERF9QUk9EVUNUX0lOX1NIT1BQSU5HX0NBUlQsXG4gIFJFTU9WRV9QUk9EVUNUX0ZST01fQ0FSVCxcbiAgU0VUX0lOVEVSTkVUX0VSUk9SLFxuICBTRVRfTElTVF9PRl9QUk9EVUNUU19JTl9TSE9QUElOR19DQVJULFxuICBTRVRfU0hPUFBJTkdfQ0FSVF9JRCxcbn0gZnJvbSBcIi4uL2FjdGlvbnMvYWN0aW9uVHlwZXNcIjtcbmltcG9ydCB7XG4gIEFkZFByb2R1Y3RJblNob3BwaW5nQ2FydCxcbiAgQ2FydFByb2N1Y3QsXG4gIFJlbW92ZVByb2R1Y3RGcm9tQ2FydCxcbiAgU2V0U2hvcHBpbmdDYXJ0SWQsXG59IGZyb20gXCIuLi9hY3Rpb25zL3RzVHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTaG9wcGluZ0NhcnRTdGF0ZSB7XG4gIGNhcnRJZDogeyBjYXJ0SWRTdGF0dXM6IGJvb2xlYW4gfCBudW1iZXI7IGlkOiBzdHJpbmcgfCBudWxsIH07XG4gIHByb2R1Y3RzTGlzdDogQ2FydFByb2N1Y3RbXTtcbiAgY2FydFByb2R1Y3RTdGF0dXM6IGJvb2xlYW4gfCBudW1iZXIgfCBzdHJpbmc7XG59XG5cbmNvbnN0IGludGlhbFN0YXRlOiBTaG9wcGluZ0NhcnRTdGF0ZSA9IHtcbiAgLy8gY2FydElkOiBcImVtYXJ0LXRva2VuXCIgaW4gbG9jYWxTdG9yYWdlID8gXCJwcmltYXJ5X2NhcnRfaWRcIiBpbiBsb2NhbFN0b3JhZ2UgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJpbWFyeV9jYXJ0X2lkJykgOiAnJyA6IFwic2Vjb25kcnlfY2FydF9pZFwiIGluIGxvY2FsU3RvcmFnZSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2Vjb25kcnlfY2FydF9pZFwiKSA6IFwiXCIsXG5cbiAgY2FydElkOiB7XG4gICAgaWQ6XG4gICAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJpbWFyeV9jYXJ0X2lkXCIpXG4gICAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmltYXJ5X2NhcnRfaWRcIilcbiAgICAgICAgOiBcIlwiLFxuICAgIGNhcnRJZFN0YXR1czpcbiAgICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmltYXJ5X2NhcnRfaWRcIilcbiAgICAgICAgPyAyMDBcbiAgICAgICAgOiBmYWxzZSxcbiAgfSxcbiAgcHJvZHVjdHNMaXN0OiBbXSxcbiAgY2FydFByb2R1Y3RTdGF0dXM6IGZhbHNlLFxufTtcblxudHlwZSBNYWluQWN0aW9uID1cbiAgfCBTZXRTaG9wcGluZ0NhcnRJZFxuICB8IEFkZFByb2R1Y3RJblNob3BwaW5nQ2FydFxuICB8IFJlbW92ZVByb2R1Y3RGcm9tQ2FydDtcblxuZnVuY3Rpb24gc2hvcHBpbmdDYXJ0UmVkdWNlcihzdGF0ZSA9IGludGlhbFN0YXRlLCBhY3Rpb246IE1haW5BY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX1NIT1BQSU5HX0NBUlRfSUQ6IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJpbWFyeV9jYXJ0X2lkXCIsIGFjdGlvbi5wYXlsb2FkLmlkKTtcblxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnRJZDogYWN0aW9uLnBheWxvYWQgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9QUk9EVUNUX0lOX1NIT1BQSU5HX0NBUlQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0c0xpc3Q6IGFjdGlvbi5wYXlsb2FkLnJlc3VsdCxcbiAgICAgICAgY2FydFByb2R1Y3RTdGF0dXM6IGFjdGlvbi5wYXlsb2FkLnN0YXR1cyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBTRVRfTElTVF9PRl9QUk9EVUNUU19JTl9TSE9QUElOR19DQVJUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHNMaXN0OiBhY3Rpb24ucGF5bG9hZC5yZXN1bHQsXG4gICAgICAgIGNhcnRQcm9kdWN0U3RhdHVzOiBhY3Rpb24ucGF5bG9hZC5zdGF0dXMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIGNhc2UgUkVNT1ZFX1BST0RVQ1RfRlJPTV9DQVJUOiB7XG4gICAgLy8gICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHNMaXN0OiBhY3Rpb24ucGF5bG9hZC5yZXN1bHQsIGNhcnRQcm9kdWN0U3RhdHVzOiBhY3Rpb24ucGF5bG9hZC5zdGF0dXMgfTtcbiAgICAvLyB9XG5cbiAgICBjYXNlIFNFVF9JTlRFUk5FVF9FUlJPUjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRQcm9kdWN0U3RhdHVzOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgcHJvZHVjdHNMaXN0OiBbXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaG9wcGluZ0NhcnRSZWR1Y2VyO1xuIl0sIm5hbWVzIjpbIkFERF9QUk9EVUNUX0lOX1NIT1BQSU5HX0NBUlQiLCJTRVRfSU5URVJORVRfRVJST1IiLCJTRVRfTElTVF9PRl9QUk9EVUNUU19JTl9TSE9QUElOR19DQVJUIiwiU0VUX1NIT1BQSU5HX0NBUlRfSUQiLCJpbnRpYWxTdGF0ZSIsImNhcnRJZCIsImlkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNhcnRJZFN0YXR1cyIsInByb2R1Y3RzTGlzdCIsImNhcnRQcm9kdWN0U3RhdHVzIiwic2hvcHBpbmdDYXJ0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInNldEl0ZW0iLCJwYXlsb2FkIiwicmVzdWx0Iiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/reducers/shopping.reducer.ts\n");

/***/ })

});