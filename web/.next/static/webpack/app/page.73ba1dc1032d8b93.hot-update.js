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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useAccount.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useWalletClient.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useWriteContract.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"(app-pages-browser)/./src/app/Header.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"(app-pages-browser)/./src/app/constants.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// Import necessary libraries\n\n\n\n\n// Main component\nfunction Home() {\n    _s();\n    const { address, isConnected } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    const { data: walletClient } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useWalletClient)();\n    const [isWhitelisted, setIsWhitelisted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Contract write hook\n    const { writeContract } = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useWriteContract)({\n        contract: {\n            address: _constants__WEBPACK_IMPORTED_MODULE_3__.WHITELIST_CONTRACT_ADDRESS,\n            abi: _constants__WEBPACK_IMPORTED_MODULE_3__.abi\n        },\n        functionName: \"addAddressToWhitelist\"\n    });\n    // Function to add the address to the whitelist\n    const addToWhitelist = async ()=>{\n        if (!walletClient) {\n            alert(\"Please connect your wallet first\");\n            return;\n        }\n        try {\n            const tx = await writeContract();\n            if (tx) {\n                await tx.wait();\n                setIsWhitelisted(true);\n            }\n        } catch (error) {\n            console.error(\"Error adding address to whitelist\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"\",\n                                children: \"Welcome to Crypto Devs!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: \"It's an NFT collection for developers in Crypto.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: isWhitelisted ? \"You have been whitelisted!\" : \"Join the whitelist now!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: addToWhitelist,\n                            disabled: !isConnected || isWhitelisted,\n                            children: isWhitelisted ? \"Whitelisted\" : \"Add to Whitelist\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"\",\n                children: \"Made with ❤ by Project Buidl On Base\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"9nVr2boPJfN73JT8uM8PNgu0Jcs=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useWalletClient,\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useWriteContract\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSw2QkFBNkI7QUFDSTtBQUNxQztBQUN4QztBQUNnQztBQUU5RCxpQkFBaUI7QUFDRixTQUFTTzs7SUFDdEIsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFdBQVcsRUFBRSxHQUFHUixpREFBVUE7SUFDM0MsTUFBTSxFQUFFUyxNQUFNQyxZQUFZLEVBQUUsR0FBR1Qsc0RBQWVBO0lBQzlDLE1BQU0sQ0FBQ1UsZUFBZUMsaUJBQWlCLEdBQUdiLCtDQUFRQSxDQUFVO0lBRTVELHNCQUFzQjtJQUN0QixNQUFNLEVBQUVjLGFBQWEsRUFBRSxHQUFHWCx1REFBZ0JBLENBQUM7UUFDekNZLFVBQVU7WUFDUlAsU0FBU0gsa0VBQTBCQTtZQUNuQ0MsS0FBS0EsMkNBQUdBO1FBQ1Y7UUFDQVUsY0FBYztJQUNoQjtJQUVBLCtDQUErQztJQUMvQyxNQUFNQyxpQkFBaUI7UUFDckIsSUFBSSxDQUFDTixjQUFjO1lBQ2pCTyxNQUFNO1lBQ047UUFDRjtRQUVBLElBQUk7WUFDRixNQUFNQyxLQUFLLE1BQU1MO1lBQ2pCLElBQUlLLElBQUk7Z0JBQ04sTUFBTUEsR0FBR0MsSUFBSTtnQkFDYlAsaUJBQWlCO1lBQ25CO1FBQ0YsRUFBRSxPQUFPUSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxxQ0FBcUNBO1FBQ3JEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDbkIsK0NBQU1BOzs7OzswQkFDUCw4REFBQ21CO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7OzBDQUNDLDhEQUFDRTtnQ0FBR0QsV0FBVTswQ0FBRzs7Ozs7OzBDQUNqQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQUc7Ozs7OzswQ0FDbEIsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNaWixnQkFDRywrQkFDQTs7Ozs7Ozs7Ozs7O2tDQUdSLDhEQUFDVztrQ0FDQyw0RUFBQ0c7NEJBQU9DLFNBQVNWOzRCQUFnQlcsVUFBVSxDQUFDbkIsZUFBZUc7c0NBQ3hEQSxnQkFBZ0IsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdkMsOERBQUNpQjtnQkFBT0wsV0FBVTswQkFBRzs7Ozs7Ozs7Ozs7O0FBRzNCO0dBdER3QmpCOztRQUNXTiw2Q0FBVUE7UUFDWkMsa0RBQWVBO1FBSXBCQyxtREFBZ0JBOzs7S0FOcEJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbi8vIEltcG9ydCBuZWNlc3NhcnkgbGlicmFyaWVzXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlV2FsbGV0Q2xpZW50LCB1c2VXcml0ZUNvbnRyYWN0IH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgeyBXSElURUxJU1RfQ09OVFJBQ1RfQUREUkVTUywgYWJpIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vLyBNYWluIGNvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBhZGRyZXNzLCBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuICBjb25zdCB7IGRhdGE6IHdhbGxldENsaWVudCB9ID0gdXNlV2FsbGV0Q2xpZW50KCk7XG4gIGNvbnN0IFtpc1doaXRlbGlzdGVkLCBzZXRJc1doaXRlbGlzdGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICAvLyBDb250cmFjdCB3cml0ZSBob29rXG4gIGNvbnN0IHsgd3JpdGVDb250cmFjdCB9ID0gdXNlV3JpdGVDb250cmFjdCh7XG4gICAgY29udHJhY3Q6IHtcbiAgICAgIGFkZHJlc3M6IFdISVRFTElTVF9DT05UUkFDVF9BRERSRVNTLFxuICAgICAgYWJpOiBhYmksXG4gICAgfSxcbiAgICBmdW5jdGlvbk5hbWU6ICdhZGRBZGRyZXNzVG9XaGl0ZWxpc3QnLFxuICB9KTtcblxuICAvLyBGdW5jdGlvbiB0byBhZGQgdGhlIGFkZHJlc3MgdG8gdGhlIHdoaXRlbGlzdFxuICBjb25zdCBhZGRUb1doaXRlbGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXdhbGxldENsaWVudCkge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgY29ubmVjdCB5b3VyIHdhbGxldCBmaXJzdFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgdHggPSBhd2FpdCB3cml0ZUNvbnRyYWN0KCk7XG4gICAgICBpZiAodHgpIHtcbiAgICAgICAgYXdhaXQgdHgud2FpdCgpO1xuICAgICAgICBzZXRJc1doaXRlbGlzdGVkKHRydWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGFkZHJlc3MgdG8gd2hpdGVsaXN0XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiXCI+V2VsY29tZSB0byBDcnlwdG8gRGV2cyE8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+SXQncyBhbiBORlQgY29sbGVjdGlvbiBmb3IgZGV2ZWxvcGVycyBpbiBDcnlwdG8uPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIHtpc1doaXRlbGlzdGVkXG4gICAgICAgICAgICAgID8gXCJZb3UgaGF2ZSBiZWVuIHdoaXRlbGlzdGVkIVwiXG4gICAgICAgICAgICAgIDogXCJKb2luIHRoZSB3aGl0ZWxpc3Qgbm93IVwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFRvV2hpdGVsaXN0fSBkaXNhYmxlZD17IWlzQ29ubmVjdGVkIHx8IGlzV2hpdGVsaXN0ZWR9PlxuICAgICAgICAgICAge2lzV2hpdGVsaXN0ZWQgPyBcIldoaXRlbGlzdGVkXCIgOiBcIkFkZCB0byBXaGl0ZWxpc3RcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiXCI+TWFkZSB3aXRoICYjMTAwODQ7IGJ5IFByb2plY3QgQnVpZGwgT24gQmFzZTwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQWNjb3VudCIsInVzZVdhbGxldENsaWVudCIsInVzZVdyaXRlQ29udHJhY3QiLCJIZWFkZXIiLCJXSElURUxJU1RfQ09OVFJBQ1RfQUREUkVTUyIsImFiaSIsIkhvbWUiLCJhZGRyZXNzIiwiaXNDb25uZWN0ZWQiLCJkYXRhIiwid2FsbGV0Q2xpZW50IiwiaXNXaGl0ZWxpc3RlZCIsInNldElzV2hpdGVsaXN0ZWQiLCJ3cml0ZUNvbnRyYWN0IiwiY29udHJhY3QiLCJmdW5jdGlvbk5hbWUiLCJhZGRUb1doaXRlbGlzdCIsImFsZXJ0IiwidHgiLCJ3YWl0IiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});