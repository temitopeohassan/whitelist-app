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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useAccount.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useWalletClient.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useWriteContract.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"(app-pages-browser)/./src/app/Header.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"(app-pages-browser)/./src/app/constants.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const { address, isConnected } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    const { data: walletClient } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useWalletClient)();\n    const [isWhitelisted, setIsWhitelisted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { writeContract } = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useWriteContract)();\n    const addToWhitelist = async ()=>{\n        if (!walletClient) {\n            alert(\"Please connect your wallet first\");\n            return;\n        }\n        if (!address) {\n            alert(\"No address found. Please make sure your wallet is connected.\");\n            return;\n        }\n        try {\n            await writeContract({\n                address: _constants__WEBPACK_IMPORTED_MODULE_3__.WHITELIST_CONTRACT_ADDRESS,\n                abi: _constants__WEBPACK_IMPORTED_MODULE_3__.abi,\n                functionName: \"addAddressToWhitelist\",\n                args: [\n                    address\n                ]\n            });\n            setIsWhitelisted(true);\n        } catch (error) {\n            console.error(\"Error adding address to whitelist\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center flex-col flex-grow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card bg-base-100 w-96 shadow-xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp\",\n                                    alt: \"Shoes\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 5\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 3\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-body\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"card-title\",\n                                        children: \"Welcome to Buidl On Base!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 5\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"It's an NFT collection for developers building apps on Base\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 5\n                                    }, this),\n                                    isWhitelisted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"badge badge-secondary\",\n                                        children: '\"You have been whitelisted!\"'\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, this) : \"Join the whitelist now!\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"card-actions justify-end\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn btn-accent\",\n                                            children: \"Accent\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 5\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 5\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 3\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 2\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: isWhitelisted ? \"You have been whitelisted!\" : \"Join the whitelist now!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: addToWhitelist,\n                                    disabled: !isConnected || isWhitelisted,\n                                    children: isWhitelisted ? \"Whitelisted\" : \"Add to Whitelist\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"9nVr2boPJfN73JT8uM8PNgu0Jcs=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useWalletClient,\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useWriteContract\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDaUM7QUFDcUM7QUFDeEM7QUFDZ0M7QUFFL0MsU0FBU087O0lBQ3RCLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxXQUFXLEVBQUUsR0FBR1IsaURBQVVBO0lBQzNDLE1BQU0sRUFBRVMsTUFBTUMsWUFBWSxFQUFFLEdBQUdULHNEQUFlQTtJQUM5QyxNQUFNLENBQUNVLGVBQWVDLGlCQUFpQixHQUFHYiwrQ0FBUUEsQ0FBVTtJQUU1RCxNQUFNLEVBQUVjLGFBQWEsRUFBRSxHQUFHWCx1REFBZ0JBO0lBRTFDLE1BQU1ZLGlCQUFpQjtRQUNyQixJQUFJLENBQUNKLGNBQWM7WUFDakJLLE1BQU07WUFDTjtRQUNGO1FBRUEsSUFBSSxDQUFDUixTQUFTO1lBQ1pRLE1BQU07WUFDTjtRQUNGO1FBRUEsSUFBSTtZQUNGLE1BQU1GLGNBQWM7Z0JBQ2xCTixTQUFTSCxrRUFBMEJBO2dCQUNuQ0MsS0FBS0EsMkNBQUdBO2dCQUNSVyxjQUFjO2dCQUNkQyxNQUFNO29CQUFDVjtpQkFBUTtZQUNqQjtZQUNBSyxpQkFBaUI7UUFDbkIsRUFBRSxPQUFPTSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxxQ0FBcUNBO1FBQ3JEO0lBQ0Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNmLCtDQUFNQTs7Ozs7MEJBQ1AsOERBQUNpQjtnQkFBSUMsV0FBVTs7a0NBQ3BCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2QsOERBQUNDOzBDQUNDLDRFQUFDQztvQ0FDQ0MsS0FBSTtvQ0FDSkMsS0FBSTs7Ozs7Ozs7Ozs7MENBRVIsOERBQUNMO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0s7d0NBQUdMLFdBQVU7a0RBQWE7Ozs7OztrREFJM0IsOERBQUNNO2tEQUFFOzs7Ozs7b0NBQ0ZoQiw4QkFDVyw4REFBQ1M7d0NBQUlDLFdBQVU7a0RBQXdCOzs7OzsrQ0FDdkM7a0RBQ1osOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNmLDRFQUFDTzs0Q0FBT1AsV0FBVTtzREFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlqQyw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDswQ0FDQyw0RUFBQ0E7b0NBQUlDLFdBQVU7OENBQ1pWLGdCQUNHLCtCQUNBOzs7Ozs7Ozs7OzswQ0FHUiw4REFBQ1M7MENBQ0MsNEVBQUNRO29DQUFPQyxTQUFTZjtvQ0FBZ0JnQixVQUFVLENBQUN0QixlQUFlRzs4Q0FDeERBLGdCQUFnQixnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRN0M7R0F6RXdCTDs7UUFDV04sNkNBQVVBO1FBQ1pDLGtEQUFlQTtRQUdwQkMsbURBQWdCQTs7O0tBTHBCSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlV2FsbGV0Q2xpZW50LCB1c2VXcml0ZUNvbnRyYWN0IH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgeyBXSElURUxJU1RfQ09OVFJBQ1RfQUREUkVTUywgYWJpIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGFkZHJlc3MsIGlzQ29ubmVjdGVkIH0gPSB1c2VBY2NvdW50KCk7XG4gIGNvbnN0IHsgZGF0YTogd2FsbGV0Q2xpZW50IH0gPSB1c2VXYWxsZXRDbGllbnQoKTtcbiAgY29uc3QgW2lzV2hpdGVsaXN0ZWQsIHNldElzV2hpdGVsaXN0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IHsgd3JpdGVDb250cmFjdCB9ID0gdXNlV3JpdGVDb250cmFjdCgpO1xuXG4gIGNvbnN0IGFkZFRvV2hpdGVsaXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghd2FsbGV0Q2xpZW50KSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBjb25uZWN0IHlvdXIgd2FsbGV0IGZpcnN0XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghYWRkcmVzcykge1xuICAgICAgYWxlcnQoXCJObyBhZGRyZXNzIGZvdW5kLiBQbGVhc2UgbWFrZSBzdXJlIHlvdXIgd2FsbGV0IGlzIGNvbm5lY3RlZC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHdyaXRlQ29udHJhY3Qoe1xuICAgICAgICBhZGRyZXNzOiBXSElURUxJU1RfQ09OVFJBQ1RfQUREUkVTUyxcbiAgICAgICAgYWJpOiBhYmksXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogJ2FkZEFkZHJlc3NUb1doaXRlbGlzdCcsXG4gICAgICAgIGFyZ3M6IFthZGRyZXNzXSxcbiAgICAgIH0pO1xuICAgICAgc2V0SXNXaGl0ZWxpc3RlZCh0cnVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBhZGRyZXNzIHRvIHdoaXRlbGlzdFwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZmxleC1jb2wgZmxleC1ncm93XCI+XG4gPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLWJhc2UtMTAwIHctOTYgc2hhZG93LXhsXCI+XG4gIDxmaWd1cmU+XG4gICAgPGltZ1xuICAgICAgc3JjPVwiaHR0cHM6Ly9pbWcuZGFpc3l1aS5jb20vaW1hZ2VzL3N0b2NrL3Bob3RvLTE2MDYxMDc1NTcxOTUtMGUyOWE0YjViNGFhLndlYnBcIlxuICAgICAgYWx0PVwiU2hvZXNcIiAvPlxuICA8L2ZpZ3VyZT5cbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxuICAgIFdlbGNvbWUgdG8gQnVpZGwgT24gQmFzZSFcbiAgICAgIFxuICAgIDwvaDI+XG4gICAgPHA+SXQncyBhbiBORlQgY29sbGVjdGlvbiBmb3IgZGV2ZWxvcGVycyBidWlsZGluZyBhcHBzIG9uIEJhc2U8L3A+XG4gICAge2lzV2hpdGVsaXN0ZWRcbiAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXNlY29uZGFyeVwiPlwiWW91IGhhdmUgYmVlbiB3aGl0ZWxpc3RlZCFcIjwvZGl2PlxuICAgICAgICAgICAgICA6IFwiSm9pbiB0aGUgd2hpdGVsaXN0IG5vdyFcIn1cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9ucyBqdXN0aWZ5LWVuZFwiPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1hY2NlbnRcIj5BY2NlbnQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIHtpc1doaXRlbGlzdGVkXG4gICAgICAgICAgICAgID8gXCJZb3UgaGF2ZSBiZWVuIHdoaXRlbGlzdGVkIVwiXG4gICAgICAgICAgICAgIDogXCJKb2luIHRoZSB3aGl0ZWxpc3Qgbm93IVwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFRvV2hpdGVsaXN0fSBkaXNhYmxlZD17IWlzQ29ubmVjdGVkIHx8IGlzV2hpdGVsaXN0ZWR9PlxuICAgICAgICAgICAge2lzV2hpdGVsaXN0ZWQgPyBcIldoaXRlbGlzdGVkXCIgOiBcIkFkZCB0byBXaGl0ZWxpc3RcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgICA8Lz5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VBY2NvdW50IiwidXNlV2FsbGV0Q2xpZW50IiwidXNlV3JpdGVDb250cmFjdCIsIkhlYWRlciIsIldISVRFTElTVF9DT05UUkFDVF9BRERSRVNTIiwiYWJpIiwiSG9tZSIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsImRhdGEiLCJ3YWxsZXRDbGllbnQiLCJpc1doaXRlbGlzdGVkIiwic2V0SXNXaGl0ZWxpc3RlZCIsIndyaXRlQ29udHJhY3QiLCJhZGRUb1doaXRlbGlzdCIsImFsZXJ0IiwiZnVuY3Rpb25OYW1lIiwiYXJncyIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImZpZ3VyZSIsImltZyIsInNyYyIsImFsdCIsImgyIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});