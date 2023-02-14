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

/***/ "./components/ExploreCard.jsx":
/*!************************************!*\
  !*** ./components/ExploreCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\nconst ExploreCard = (param)=>/*#__PURE__*/ {\n    let { handleClick , index , active , id , imgUrl , title  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.fadeIn)(\"right\", \"spring\", index * 0.5, 0.75),\n        className: \"relative \".concat(active === id ? \"lg:flex-[3.5] flex-[10]\" : \"lg:flex-[0.5] flex-2\", \" flex items-center justify-center min-2-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imgUrl,\n                alt: title,\n                className: \"absolute w-full h-full object-cover rounded-[24px]\"\n            }, void 0, false, {\n                fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/ExploreCard.jsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined),\n            active !== id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-9\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/ExploreCard.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].center, \" w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/headset.svg\",\n                            alt: \"headset\",\n                            className: \"w-1/2 h-1/2 object-contain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/ExploreCard.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/ExploreCard.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-normal text-[16px] leading-[20px] text-white uppercase\",\n                        children: \"Enter the metaverse\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/ExploreCard.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/ExploreCard.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/ExploreCard.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/ExploreCard.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ExploreCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExploreCard);\nvar _c;\n$RefreshReg$(_c, \"ExploreCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGxvcmVDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ3VDO0FBRVQ7QUFDVTtBQUV4QyxNQUFNRyxjQUFjLHVCQUNsQjtRQURtQixFQUFDQyxZQUFXLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFQyxHQUFFLEVBQUVDLE9BQU0sRUFBRUMsTUFBSyxFQUFDO1dBQ2xFLDhEQUFDVCxxREFBVTtRQUNYVyxVQUFVVCxxREFBTUEsQ0FBQyxTQUFTLFVBQVVHLFFBQVEsS0FBSztRQUNqRE8sV0FBVyxZQUVWLE9BRENOLFdBQVdDLEtBQUssNEJBQTJCLHNCQUFzQixFQUNsRTs7MEJBRUMsOERBQUNNO2dCQUFJQyxLQUFLTjtnQkFBUU8sS0FBS047Z0JBQ3ZCRyxXQUFVOzs7Ozs7WUFDVE4sV0FBV0MsbUJBQ1YsOERBQUNTO2dCQUFHSixXQUFVOzBCQUNYSDs7Ozs7MENBR0gsOERBQUNDO2dCQUFJRSxXQUFVOztrQ0FDYiw4REFBQ0Y7d0JBQUlFLFdBQVcsR0FBaUIsT0FBZFgsc0RBQWEsRUFBQztrQ0FDL0IsNEVBQUNZOzRCQUFJQyxLQUFJOzRCQUFlQyxLQUFJOzRCQUFVSCxXQUFVOzs7Ozs7Ozs7OztrQ0FFbEQsOERBQUNNO3dCQUFFTixXQUFVO2tDQUE4RDs7Ozs7O2tDQUMzRSw4REFBQ087d0JBQUdQLFdBQVU7a0NBQWlFSDs7Ozs7Ozs7Ozs7eUJBRWxGOzs7Ozs7O0FBQ1M7S0F0QlJOO0FBeUJOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRXhwbG9yZUNhcmQuanN4PzIzY2MiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMnXG5pbXBvcnQgeyBmYWRlSW4gfSBmcm9tICcuLi91dGlscy9tb3Rpb24nXG5cbmNvbnN0IEV4cGxvcmVDYXJkID0gKHtoYW5kbGVDbGljaywgaW5kZXgsIGFjdGl2ZSwgaWQsIGltZ1VybCwgdGl0bGV9KSA9PiAoXG4gIDxtb3Rpb24uZGl2XG4gIHZhcmlhbnRzPXtmYWRlSW4oJ3JpZ2h0JywgJ3NwcmluZycsIGluZGV4ICogMC41LCAwLjc1KX1cbiAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgJHtcbiAgICBhY3RpdmUgPT09IGlkID8gJ2xnOmZsZXgtWzMuNV0gZmxleC1bMTBdJzogJ2xnOmZsZXgtWzAuNV0gZmxleC0yJ1xuICB9IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi0yLVsxNzBweF0gaC1bNzAwcHhdIHRyYW5zaXRpb24tW2ZsZXhdIGR1cmF0aW9uLVswLjdzXSBlYXNlLW91dC1mbGV4IGN1cnNvci1wb2ludGVyYH1cbiAgPlxuICAgIDxpbWcgc3JjPXtpbWdVcmx9IGFsdD17dGl0bGV9IFxuICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgcm91bmRlZC1bMjRweF0nIC8+XG4gICAge2FjdGl2ZSAhPT0gaWQgPyAoXG4gICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBzbTp0ZXh0LVsyNnB4XSB0ZXh0LVsxOHB4XSB0ZXh0LXdoaXRlIGFic29sdXRlIHotMCBsZzpib3R0b20tMjAgbGc6cm90YXRlLVstOTBkZWddIGxnOm9yaWdpbi05XCI+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvaDM+XG4gICAgKTooXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHAtOCBqdXN0aWZ5LXN0YXJ0IHctZnVsbCBmbGV4LWNvbCBiZy1bcmdiYSgwLDAsMCwwLjUpXSByb3VuZGVkLWItWzI0cHhdXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2VudGVyfSB3LVs2MHB4XSBoLVs2MHB4XSByb3VuZGVkLVsyNHB4XSBnbGFzc21vcnBoaXNtIG1iLVsxNnB4XWB9PlxuICAgICAgICAgIDxpbWcgc3JjPScvaGVhZHNldC5zdmcnIGFsdD1cImhlYWRzZXRcIiBjbGFzc05hbWU9XCJ3LTEvMiBoLTEvMiBvYmplY3QtY29udGFpblwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LVsxNnB4XSBsZWFkaW5nLVsyMHB4XSB0ZXh0LXdoaXRlIHVwcGVyY2FzZVwiPkVudGVyIHRoZSBtZXRhdmVyc2U8L3A+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC1bMjRweF0gZm9udC1zZW1pYm9sZCBzbTp0ZXh0LVszMnB4XSB0ZXh0LVsyNHB4XSB0ZXh0LXdoaXRlXCI+e3RpdGxlfTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICA8L21vdGlvbi5kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlQ2FyZDtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJzdHlsZXMiLCJmYWRlSW4iLCJFeHBsb3JlQ2FyZCIsImhhbmRsZUNsaWNrIiwiaW5kZXgiLCJhY3RpdmUiLCJpZCIsImltZ1VybCIsInRpdGxlIiwiZGl2IiwidmFyaWFudHMiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoMyIsImNlbnRlciIsInAiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ExploreCard.jsx\n"));

/***/ })

});