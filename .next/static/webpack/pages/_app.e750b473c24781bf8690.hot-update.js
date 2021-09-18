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

/***/ "./src/store/reducers/user.reducer.ts":
/*!********************************************!*\
  !*** ./src/store/reducers/user.reducer.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"customerObj\": function() { return /* binding */ customerObj; }\n/* harmony export */ });\n/* harmony import */ var _Users_ashishkumarsaini_Documents_emart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ \"./src/store/actions/actionTypes.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_ashishkumarsaini_Documents_emart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nconst customerObj = {\n  customer_id: 0,\n  name: \"\",\n  email: \"\",\n  address_1: \"\",\n  address_2: \"\",\n  city: \"\",\n  region: \"\",\n  postal_code: \"\",\n  country: \"\",\n  shipping_region_id: 0,\n  day_phone: \"\",\n  eve_phone: \"\",\n  mob_phone: \"\",\n  credit_card: \"\",\n  customer_status: false\n};\nlet initialState;\n\nif (false) {} else {\n  console.log(\"object\", \"line 56\");\n  initialState = {\n    accessToken: localStorage.hasOwnProperty(\"emart-token\") ? localStorage.getItem(\"emart-token\") : \"\",\n    customer: customerObj\n  };\n}\n\nfunction userReducer(state = initialState, action) {\n  switch (action.type) {\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.REGISTER_USER:\n      {\n        const accessToken = action.payload.accessToken;\n        localStorage.setItem(\"emart-token\", accessToken);\n        return _objectSpread(_objectSpread({}, state), {}, {\n          customer: _objectSpread(_objectSpread({}, action.payload.customer), {}, {\n            customer_status: action.payload.status\n          }),\n          accessToken\n        });\n      }\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.LOGIN_USER:\n      {\n        const accessToken = action.payload.accessToken;\n        localStorage.setItem(\"emart-token\", accessToken);\n        return _objectSpread(_objectSpread({}, state), {}, {\n          customer: _objectSpread(_objectSpread({}, action.payload.customer), {}, {\n            customer_status: action.payload.status\n          }),\n          accessToken\n        });\n      }\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.SET_USER_DETAILS:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          customer: action.payload\n        });\n      }\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.LOG_OUT_USER:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          customer: customerObj\n        });\n      }\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.SET_USER_ADDRESS:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          customer: _objectSpread(_objectSpread({}, action.payload.customer), {}, {\n            customer_status: action.payload.status\n          })\n        });\n      }\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.SET_USER_CREDIT_CARD:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          customer: _objectSpread(_objectSpread({}, action.payload.customer), {}, {\n            customer_status: action.payload.status\n          })\n        });\n      }\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.UPDATE_USER_DETAILS:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          customer: _objectSpread(_objectSpread({}, action.payload.customer), {}, {\n            customer_status: action.payload.status\n          })\n        });\n      }\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__.SET_CUSTOMER_STATUS:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          customer: _objectSpread(_objectSpread({}, state.customer), {}, {\n            customer_status: action.payload.customer\n          })\n        });\n      }\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (userReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUVQLFVBQUFBLFFBQVEsa0NBQ0hRLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlVixRQURaO0FBRU5ILFlBQUFBLGVBQWUsRUFBRVcsTUFBTSxDQUFDRSxPQUFQLENBQWVFO0FBRjFCO0FBRlY7QUFPRDs7QUFFRCxTQUFLL0IscUVBQUw7QUFBMEI7QUFDeEIsK0NBQ0swQixLQURMO0FBRUVQLFVBQUFBLFFBQVEsa0NBQ0hRLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlVixRQURaO0FBRU5ILFlBQUFBLGVBQWUsRUFBRVcsTUFBTSxDQUFDRSxPQUFQLENBQWVFO0FBRjFCO0FBRlY7QUFPRDs7QUFFRCxTQUFLbkMscUVBQUw7QUFBMEI7QUFDeEIsK0NBQ0s4QixLQURMO0FBRUVQLFVBQUFBLFFBQVEsa0NBQ0hPLEtBQUssQ0FBQ1AsUUFESDtBQUVOSCxZQUFBQSxlQUFlLEVBQUVXLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlVjtBQUYxQjtBQUZWO0FBT0Q7O0FBRUQ7QUFDRSxhQUFPTyxLQUFQO0FBcEZKO0FBc0ZEOztBQUVELCtEQUFlRCxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9yZWR1Y2Vycy91c2VyLnJlZHVjZXIudHM/ODNiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBMT0dJTl9VU0VSLFxuICBMT0dfT1VUX1VTRVIsXG4gIFJFR0lTVEVSX1VTRVIsXG4gIFNFVF9DVVNUT01FUl9TVEFUVVMsXG4gIFNFVF9VU0VSX0FERFJFU1MsXG4gIFNFVF9VU0VSX0NSRURJVF9DQVJELFxuICBTRVRfVVNFUl9ERVRBSUxTLFxuICBVUERBVEVfVVNFUl9ERVRBSUxTLFxufSBmcm9tIFwiLi4vYWN0aW9ucy9hY3Rpb25UeXBlc1wiO1xuXG5leHBvcnQgdHlwZSBDdXN0b21lciA9IHtcbiAgY3VzdG9tZXJfaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBhZGRyZXNzXzE6IHN0cmluZztcbiAgYWRkcmVzc18yOiBzdHJpbmc7XG4gIGNpdHk6IHN0cmluZztcbiAgcmVnaW9uOiBzdHJpbmc7XG4gIHBvc3RhbF9jb2RlOiBzdHJpbmc7XG4gIGNvdW50cnk6IHN0cmluZztcbiAgc2hpcHBpbmdfcmVnaW9uX2lkOiBudW1iZXI7XG4gIGRheV9waG9uZTogc3RyaW5nO1xuICBldmVfcGhvbmU6IHN0cmluZztcbiAgbW9iX3Bob25lOiBzdHJpbmc7XG4gIGNyZWRpdF9jYXJkOiBzdHJpbmc7XG4gIGN1c3RvbWVyX3N0YXR1czogbnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZztcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclN0YXRlIHtcbiAgYWNjZXNzVG9rZW46IHN0cmluZyB8IG51bGw7XG4gIGN1c3RvbWVyOiBDdXN0b21lcjtcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbWVyT2JqID0ge1xuICBjdXN0b21lcl9pZDogMCxcbiAgbmFtZTogXCJcIixcbiAgZW1haWw6IFwiXCIsXG4gIGFkZHJlc3NfMTogXCJcIixcbiAgYWRkcmVzc18yOiBcIlwiLFxuICBjaXR5OiBcIlwiLFxuICByZWdpb246IFwiXCIsXG4gIHBvc3RhbF9jb2RlOiBcIlwiLFxuICBjb3VudHJ5OiBcIlwiLFxuICBzaGlwcGluZ19yZWdpb25faWQ6IDAsXG4gIGRheV9waG9uZTogXCJcIixcbiAgZXZlX3Bob25lOiBcIlwiLFxuICBtb2JfcGhvbmU6IFwiXCIsXG4gIGNyZWRpdF9jYXJkOiBcIlwiLFxuICBjdXN0b21lcl9zdGF0dXM6IGZhbHNlLFxufTtcblxubGV0IGluaXRpYWxTdGF0ZTogVXNlclN0YXRlO1xuXG5pZiAodHlwZW9mIHdpbmRvdyA9PSB1bmRlZmluZWQpIHtcbiAgaW5pdGlhbFN0YXRlID0geyBhY2Nlc3NUb2tlbjogXCJcIiwgY3VzdG9tZXI6IGN1c3RvbWVyT2JqIH07XG59IGVsc2Uge1xuICBjb25zb2xlLmxvZyh0eXBlb2Ygd2luZG93LCBcImxpbmUgNTZcIik7XG5cbiAgaW5pdGlhbFN0YXRlID0ge1xuICAgIGFjY2Vzc1Rva2VuOiBsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoXCJlbWFydC10b2tlblwiKVxuICAgICAgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYXJ0LXRva2VuXCIpXG4gICAgICA6IFwiXCIsXG4gICAgY3VzdG9tZXI6IGN1c3RvbWVyT2JqLFxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVHSVNURVJfVVNFUjoge1xuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhY3Rpb24ucGF5bG9hZC5hY2Nlc3NUb2tlbjtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1hcnQtdG9rZW5cIiwgYWNjZXNzVG9rZW4pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3VzdG9tZXI6IHtcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5jdXN0b21lcixcbiAgICAgICAgICBjdXN0b21lcl9zdGF0dXM6IGFjdGlvbi5wYXlsb2FkLnN0YXR1cyxcbiAgICAgICAgfSxcbiAgICAgICAgYWNjZXNzVG9rZW4sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9HSU5fVVNFUjoge1xuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhY3Rpb24ucGF5bG9hZC5hY2Nlc3NUb2tlbjtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1hcnQtdG9rZW5cIiwgYWNjZXNzVG9rZW4pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3VzdG9tZXI6IHtcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5jdXN0b21lcixcbiAgICAgICAgICBjdXN0b21lcl9zdGF0dXM6IGFjdGlvbi5wYXlsb2FkLnN0YXR1cyxcbiAgICAgICAgfSxcbiAgICAgICAgYWNjZXNzVG9rZW4sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgU0VUX1VTRVJfREVUQUlMUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1c3RvbWVyOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0dfT1VUX1VTRVI6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXN0b21lcjogY3VzdG9tZXJPYmosXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgU0VUX1VTRVJfQUREUkVTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1c3RvbWVyOiB7XG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQuY3VzdG9tZXIsXG4gICAgICAgICAgY3VzdG9tZXJfc3RhdHVzOiBhY3Rpb24ucGF5bG9hZC5zdGF0dXMsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgU0VUX1VTRVJfQ1JFRElUX0NBUkQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXN0b21lcjoge1xuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLmN1c3RvbWVyLFxuICAgICAgICAgIGN1c3RvbWVyX3N0YXR1czogYWN0aW9uLnBheWxvYWQuc3RhdHVzLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFVQREFURV9VU0VSX0RFVEFJTFM6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXN0b21lcjoge1xuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLmN1c3RvbWVyLFxuICAgICAgICAgIGN1c3RvbWVyX3N0YXR1czogYWN0aW9uLnBheWxvYWQuc3RhdHVzLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFVF9DVVNUT01FUl9TVEFUVVM6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXN0b21lcjoge1xuICAgICAgICAgIC4uLnN0YXRlLmN1c3RvbWVyLFxuICAgICAgICAgIGN1c3RvbWVyX3N0YXR1czogYWN0aW9uLnBheWxvYWQuY3VzdG9tZXIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlclJlZHVjZXI7XG4iXSwibmFtZXMiOlsiTE9HSU5fVVNFUiIsIkxPR19PVVRfVVNFUiIsIlJFR0lTVEVSX1VTRVIiLCJTRVRfQ1VTVE9NRVJfU1RBVFVTIiwiU0VUX1VTRVJfQUREUkVTUyIsIlNFVF9VU0VSX0NSRURJVF9DQVJEIiwiU0VUX1VTRVJfREVUQUlMUyIsIlVQREFURV9VU0VSX0RFVEFJTFMiLCJjdXN0b21lck9iaiIsImN1c3RvbWVyX2lkIiwibmFtZSIsImVtYWlsIiwiYWRkcmVzc18xIiwiYWRkcmVzc18yIiwiY2l0eSIsInJlZ2lvbiIsInBvc3RhbF9jb2RlIiwiY291bnRyeSIsInNoaXBwaW5nX3JlZ2lvbl9pZCIsImRheV9waG9uZSIsImV2ZV9waG9uZSIsIm1vYl9waG9uZSIsImNyZWRpdF9jYXJkIiwiY3VzdG9tZXJfc3RhdHVzIiwiaW5pdGlhbFN0YXRlIiwiYWNjZXNzVG9rZW4iLCJjdXN0b21lciIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJoYXNPd25Qcm9wZXJ0eSIsImdldEl0ZW0iLCJ1c2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJzZXRJdGVtIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/reducers/user.reducer.ts\n");

/***/ })

});