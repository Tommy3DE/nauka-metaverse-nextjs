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

/***/ "./sections/Insights.jsx":
/*!*******************************!*\
  !*** ./sections/Insights.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n\n\n\n\n\n\nconst Insights = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].paddings, \" relative z-10\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.staggerContainer,\n            initial: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: \"false\",\n                amount: 0.25\n            },\n            className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].innerWidth, \" mx-auto flex flex-col\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.TypingText, {\n                    title: \"| Insight\",\n                    textStyles: \"text-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/sections/Insights.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.TitleText, {\n                    title: \"Insight about Metaverse\",\n                    textStyles: \"text-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/sections/Insights.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-[50px] flex-col flex gap-[25px]\",\n                    children: _constants__WEBPACK_IMPORTED_MODULE_4__.insights.map((insight, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.InsightCard, {\n                            ...insight,\n                            index: index + 1\n                        }, \"insight + \".concat(index), false, {\n                            fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/sections/Insights.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/sections/Insights.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/sections/Insights.jsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/sections/Insights.jsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, undefined);\n_c = Insights;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Insights);\nvar _c;\n$RefreshReg$(_c, \"Insights\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9JbnNpZ2h0cy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRXVDO0FBQzRCO0FBRXJDO0FBQ29CO0FBQ1Y7QUFFeEMsTUFBTU8sV0FBVyxrQkFDZiw4REFBQ0M7UUFBUUMsV0FBVyxHQUFtQixPQUFoQkwsd0RBQWUsRUFBQztrQkFDbkMsNEVBQUNKLHFEQUFVO1lBQ1hZLFVBQVVQLDJEQUFnQkE7WUFDMUJRLFNBQVE7WUFDUkMsYUFBWTtZQUNaQyxVQUFVO2dCQUFDQyxNQUFNO2dCQUFTQyxRQUFRO1lBQUk7WUFDdENSLFdBQVcsR0FBcUIsT0FBbEJMLDBEQUFpQixFQUFDOzs4QkFFOUIsOERBQUNGLG1EQUFVQTtvQkFBQ2lCLE9BQU07b0JBQVlDLFlBQVc7Ozs7Ozs4QkFDekMsOERBQUNqQixrREFBU0E7b0JBQUNnQixPQUFNO29CQUEwQkMsWUFBVzs7Ozs7OzhCQUN0RCw4REFBQ1Q7b0JBQUlGLFdBQVU7OEJBQ1pILG9EQUFZLENBQUMsQ0FBQ2dCLFNBQVNDLHNCQUN0Qiw4REFBQ3RCLG9EQUFXQTs0QkFBNkIsR0FBR3FCLE9BQU87NEJBQUVDLE9BQU9BLFFBQVE7MkJBQWxELGFBQW1CLE9BQU5BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FickNoQjtBQW9CTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9JbnNpZ2h0cy5qc3g/MGExNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBJbnNpZ2h0Q2FyZCwgVHlwaW5nVGV4dCwgVGl0bGVUZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMnXG5pbXBvcnQgeyBzdGFnZ2VyQ29udGFpbmVyIH0gZnJvbSAnLi4vdXRpbHMvbW90aW9uJ1xuaW1wb3J0IHsgaW5zaWdodHMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IEluc2lnaHRzID0gKCkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5wYWRkaW5nc30gcmVsYXRpdmUgei0xMGB9PlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgIHZhcmlhbnRzPXtzdGFnZ2VyQ29udGFpbmVyfVxuICAgICAgaW5pdGlhbD0naGlkZGVuJ1xuICAgICAgd2hpbGVJblZpZXc9J3Nob3cnXG4gICAgICB2aWV3cG9ydD17e29uY2U6ICdmYWxzZScsIGFtb3VudDogMC4yNX19XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbm5lcldpZHRofSBteC1hdXRvIGZsZXggZmxleC1jb2xgfVxuICAgICAgPlxuICAgICAgICA8VHlwaW5nVGV4dCB0aXRsZT0nfCBJbnNpZ2h0JyB0ZXh0U3R5bGVzPSd0ZXh0LWNlbnRlcicvPlxuICAgICAgICA8VGl0bGVUZXh0IHRpdGxlPSdJbnNpZ2h0IGFib3V0IE1ldGF2ZXJzZScgdGV4dFN0eWxlcz0ndGV4dC1jZW50ZXInLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1bNTBweF0gZmxleC1jb2wgZmxleCBnYXAtWzI1cHhdXCI+XG4gICAgICAgICAge2luc2lnaHRzLm1hcCgoaW5zaWdodCwgaW5kZXgpPT4oXG4gICAgICAgICAgICA8SW5zaWdodENhcmQga2V5PXtgaW5zaWdodCArICR7aW5kZXh9YH0gey4uLmluc2lnaHR9IGluZGV4PXtpbmRleCArIDF9Lz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluc2lnaHRzO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkluc2lnaHRDYXJkIiwiVHlwaW5nVGV4dCIsIlRpdGxlVGV4dCIsInN0eWxlcyIsInN0YWdnZXJDb250YWluZXIiLCJpbnNpZ2h0cyIsIkluc2lnaHRzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInBhZGRpbmdzIiwiZGl2IiwidmFyaWFudHMiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJhbW91bnQiLCJpbm5lcldpZHRoIiwidGl0bGUiLCJ0ZXh0U3R5bGVzIiwibWFwIiwiaW5zaWdodCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/Insights.jsx\n"));

/***/ })

});