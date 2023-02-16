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

/***/ "./components/InsightCard.jsx":
/*!************************************!*\
  !*** ./components/InsightCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\nconst InsightCard = (param)=>/*#__PURE__*/ {\n    let { imgUrl , title , subtitle , index  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_1__.fadeIn)(\"up\", \"spring\", index * 0.5, 1),\n        className: \"flex md:flex-row flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imgUrl,\n                alt: \"planet\",\n                className: \"md:w-[270px] w-full h-[250px] rounded-[22px] object-cover\"\n            }, void 0, false, {\n                fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/InsightCard.jsx\",\n                lineNumber: 7,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex justify-between center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 md:ml-[62px]\"\n                }, void 0, false, {\n                    fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/InsightCard.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/InsightCard.jsx\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/InsightCard.jsx\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, undefined);\n};\n_c = InsightCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InsightCard);\nvar _c;\n$RefreshReg$(_c, \"InsightCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0luc2lnaHRDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDdUM7QUFDRTtBQUV6QyxNQUFNRSxjQUFjLHVCQUNsQjtRQURtQixFQUFDQyxPQUFNLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFQyxNQUFLLEVBQUM7V0FDbkQsOERBQUNOLHFEQUFVO1FBQUNRLFVBQVVQLHFEQUFNQSxDQUFDLE1BQU0sVUFBVUssUUFBTSxLQUFLO1FBQUlHLFdBQVU7OzBCQUNwRSw4REFBQ0M7Z0JBQUlDLEtBQUtSO2dCQUFRUyxLQUFJO2dCQUFTSCxXQUFVOzs7Ozs7MEJBQ3pDLDhEQUFDRjtnQkFBSUUsV0FBVTswQkFDYiw0RUFBQ0Y7b0JBQUlFLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVA7S0FOUlA7QUFTTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0luc2lnaHRDYXJkLmpzeD9kOGVjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBmYWRlSW4gfSBmcm9tIFwiLi4vdXRpbHMvbW90aW9uXCI7XG5cbmNvbnN0IEluc2lnaHRDYXJkID0gKHtpbWdVcmwsIHRpdGxlLCBzdWJ0aXRsZSwgaW5kZXh9KSA9PiAoXG4gIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtmYWRlSW4oJ3VwJywgJ3NwcmluZycsIGluZGV4KjAuNSwgMSl9IGNsYXNzTmFtZT0nZmxleCBtZDpmbGV4LXJvdyBmbGV4LWNvbCBnYXAtNCc+XG4gICAgPGltZyBzcmM9e2ltZ1VybH0gYWx0PVwicGxhbmV0XCIgY2xhc3NOYW1lPVwibWQ6dy1bMjcwcHhdIHctZnVsbCBoLVsyNTBweF0gcm91bmRlZC1bMjJweF0gb2JqZWN0LWNvdmVyXCIvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWQ6bWwtWzYycHhdXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbW90aW9uLmRpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluc2lnaHRDYXJkO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsImZhZGVJbiIsIkluc2lnaHRDYXJkIiwiaW1nVXJsIiwidGl0bGUiLCJzdWJ0aXRsZSIsImluZGV4IiwiZGl2IiwidmFyaWFudHMiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/InsightCard.jsx\n"));

/***/ })

});