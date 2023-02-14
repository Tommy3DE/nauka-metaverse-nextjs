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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\nconst ExploreCard = (param)=>/*#__PURE__*/ {\n    let { handleClick , index , active , id , imgUrl , title  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.fadeIn)(\"right\", \"spring\", index * 0.5, 0.75),\n        className: \"relative \".concat(active === id ? \"lg:flex-[3.5] flex-[10]\" : \"lg:flex-[0.5] flex-2\", \" flex items-center justify-center min-2-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imgUrl,\n                alt: title,\n                className: \"absolute w-full h-full object-cover rounded-[24px]\"\n            }, void 0, false, {\n                fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/ExploreCard.jsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined),\n            active !== id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-9\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/ExploreCard.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/headset.svg\",\n                        alt: \"headset\",\n                        className: \"w-1/2 h-1/2 object-contain\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/ExploreCard.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/ExploreCard.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/ExploreCard.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tomek/Desktop/programowanie/nextjs/tutorial-metaverse/components/ExploreCard.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ExploreCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExploreCard);\nvar _c;\n$RefreshReg$(_c, \"ExploreCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGxvcmVDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ3VDO0FBRVQ7QUFDVTtBQUV4QyxNQUFNRyxjQUFjLHVCQUNsQjtRQURtQixFQUFDQyxZQUFXLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFQyxHQUFFLEVBQUVDLE9BQU0sRUFBRUMsTUFBSyxFQUFDO1dBQ2xFLDhEQUFDVCxxREFBVTtRQUNYVyxVQUFVVCxxREFBTUEsQ0FBQyxTQUFTLFVBQVVHLFFBQVEsS0FBSztRQUNqRE8sV0FBVyxZQUVWLE9BRENOLFdBQVdDLEtBQUssNEJBQTJCLHNCQUFzQixFQUNsRTs7MEJBRUMsOERBQUNNO2dCQUFJQyxLQUFLTjtnQkFBUU8sS0FBS047Z0JBQ3ZCRyxXQUFVOzs7Ozs7WUFDVE4sV0FBV0MsbUJBQ1YsOERBQUNTO2dCQUFHSixXQUFVOzBCQUNYSDs7Ozs7MENBR0gsOERBQUNDO2dCQUFJRSxXQUFVOzBCQUNiLDRFQUFDRjs4QkFDQyw0RUFBQ0c7d0JBQUlDLEtBQUk7d0JBQWVDLEtBQUk7d0JBQVVILFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozt5QkFHckQ7Ozs7Ozs7QUFDUztLQXBCUlQ7QUF1Qk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeHBsb3JlQ2FyZC5qc3g/MjNjYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcydcbmltcG9ydCB7IGZhZGVJbiB9IGZyb20gJy4uL3V0aWxzL21vdGlvbidcblxuY29uc3QgRXhwbG9yZUNhcmQgPSAoe2hhbmRsZUNsaWNrLCBpbmRleCwgYWN0aXZlLCBpZCwgaW1nVXJsLCB0aXRsZX0pID0+IChcbiAgPG1vdGlvbi5kaXZcbiAgdmFyaWFudHM9e2ZhZGVJbigncmlnaHQnLCAnc3ByaW5nJywgaW5kZXggKiAwLjUsIDAuNzUpfVxuICBjbGFzc05hbWU9e2ByZWxhdGl2ZSAke1xuICAgIGFjdGl2ZSA9PT0gaWQgPyAnbGc6ZmxleC1bMy41XSBmbGV4LVsxMF0nOiAnbGc6ZmxleC1bMC41XSBmbGV4LTInXG4gIH0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLTItWzE3MHB4XSBoLVs3MDBweF0gdHJhbnNpdGlvbi1bZmxleF0gZHVyYXRpb24tWzAuN3NdIGVhc2Utb3V0LWZsZXggY3Vyc29yLXBvaW50ZXJgfVxuICA+XG4gICAgPGltZyBzcmM9e2ltZ1VybH0gYWx0PXt0aXRsZX0gXG4gICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciByb3VuZGVkLVsyNHB4XScgLz5cbiAgICB7YWN0aXZlICE9PSBpZCA/IChcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHNtOnRleHQtWzI2cHhdIHRleHQtWzE4cHhdIHRleHQtd2hpdGUgYWJzb2x1dGUgei0wIGxnOmJvdHRvbS0yMCBsZzpyb3RhdGUtWy05MGRlZ10gbGc6b3JpZ2luLTlcIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9oMz5cbiAgICApOihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgcC04IGp1c3RpZnktc3RhcnQgdy1mdWxsIGZsZXgtY29sIGJnLVtyZ2JhKDAsMCwwLDAuNSldIHJvdW5kZWQtYi1cIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz0nL2hlYWRzZXQuc3ZnJyBhbHQ9XCJoZWFkc2V0XCIgY2xhc3NOYW1lPVwidy0xLzIgaC0xLzIgb2JqZWN0LWNvbnRhaW5cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gIDwvbW90aW9uLmRpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmVDYXJkO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInN0eWxlcyIsImZhZGVJbiIsIkV4cGxvcmVDYXJkIiwiaGFuZGxlQ2xpY2siLCJpbmRleCIsImFjdGl2ZSIsImlkIiwiaW1nVXJsIiwidGl0bGUiLCJkaXYiLCJ2YXJpYW50cyIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ExploreCard.jsx\n"));

/***/ })

});