"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./sections/About.jsx":
/*!****************************!*\
  !*** ./sections/About.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\n\nconst About = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].paddings, \" relative z-10\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gradient-02 z-0\"\n            }, void 0, false, {\n                fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/sections/About.jsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.staggerContainer,\n                initial: \"hidden\",\n                whileInView: \"show\",\n                viewport: {\n                    once: false,\n                    amount: 0.25\n                },\n                className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].innerWidth, \" mx-auto \").concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].flexCenter, \" flex-col\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.TypingText, {\n                    title: \"| About MetaVersus\"\n                }, void 0, false, {\n                    fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/sections/About.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/sections/About.jsx\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/sections/About.jsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9BYm91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDdUM7QUFDSTtBQUViO0FBQzRCO0FBRTFELE1BQU1LLFFBQVEsa0JBQ1osOERBQUNDO1FBQVFDLFdBQVcsR0FBbUIsT0FBaEJMLHdEQUFlLEVBQUM7OzBCQUNyQyw4REFBQ087Z0JBQUlGLFdBQVU7Ozs7OzswQkFDZiw4REFBQ1AscURBQVU7Z0JBQ1RVLFVBQVVOLDJEQUFnQkE7Z0JBQzFCTyxTQUFRO2dCQUNSQyxhQUFZO2dCQUNaQyxVQUFVO29CQUFFQyxNQUFNLEtBQUs7b0JBQUVDLFFBQVE7Z0JBQUs7Z0JBQ3RDUixXQUFXLEdBQWdDTCxPQUE3QkEsMERBQWlCLEVBQUMsYUFBNkIsT0FBbEJBLDBEQUFpQixFQUFDOzBCQUUzRCw0RUFBQ0QsbURBQVVBO29CQUFDaUIsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FWcEJiO0FBZU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvQWJvdXQuanN4PzI2YzQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IFR5cGluZ1RleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcydcbmltcG9ydCB7IGZhZGVJbiwgc3RhZ2dlckNvbnRhaW5lciB9IGZyb20gJy4uL3V0aWxzL21vdGlvbidcblxuY29uc3QgQWJvdXQgPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnBhZGRpbmdzfSByZWxhdGl2ZSB6LTEwYH0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmFkaWVudC0wMiB6LTBcIiAvPlxuICAgIDxtb3Rpb24uZGl2IFxuICAgICAgdmFyaWFudHM9e3N0YWdnZXJDb250YWluZXJ9IFxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiIFxuICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCIgXG4gICAgICB2aWV3cG9ydD17eyBvbmNlOiBmYWxzZSwgYW1vdW50OiAwLjI1IH19IFxuICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW5uZXJXaWR0aH0gbXgtYXV0byAke3N0eWxlcy5mbGV4Q2VudGVyfSBmbGV4LWNvbGB9XG4gICAgICA+XG4gICAgICAgIDxUeXBpbmdUZXh0IHRpdGxlPSd8IEFib3V0IE1ldGFWZXJzdXMnLz5cbiAgICA8L21vdGlvbi5kaXY+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIlR5cGluZ1RleHQiLCJzdHlsZXMiLCJmYWRlSW4iLCJzdGFnZ2VyQ29udGFpbmVyIiwiQWJvdXQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwicGFkZGluZ3MiLCJkaXYiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsImFtb3VudCIsImlubmVyV2lkdGgiLCJmbGV4Q2VudGVyIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/About.jsx\n"));

/***/ })

});