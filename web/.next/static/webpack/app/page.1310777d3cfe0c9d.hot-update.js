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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useAccount.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useWalletClient.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useWriteContract.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"(app-pages-browser)/./src/app/Header.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"(app-pages-browser)/./src/app/constants.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const { address, isConnected } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    const { data: walletClient } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useWalletClient)();\n    const [isWhitelisted, setIsWhitelisted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { writeContract } = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useWriteContract)();\n    const addToWhitelist = async ()=>{\n        if (!walletClient) {\n            alert(\"Please connect your wallet first\");\n            return;\n        }\n        if (!address) {\n            alert(\"No address found. Please make sure your wallet is connected.\");\n            return;\n        }\n        try {\n            await writeContract({\n                address: _constants__WEBPACK_IMPORTED_MODULE_3__.WHITELIST_CONTRACT_ADDRESS,\n                abi: _constants__WEBPACK_IMPORTED_MODULE_3__.abi,\n                functionName: \"addAddressToWhitelist\",\n                args: [\n                    address\n                ]\n            });\n            setIsWhitelisted(true);\n        } catch (error) {\n            console.error(\"Error adding address to whitelist\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center flex-col flex-grow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card bg-base-100 w-96 shadow-xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp\",\n                                    alt: \"Shoes\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 5\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 3\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-body\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"card-title\",\n                                        children: \"Welcome to Buidl On Base!\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 5\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"If a dog chews shoes whose shoes does he choose?\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 5\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"badge badge-secondary\",\n                                        children: [\n                                            \" \",\n                                            isWhitelisted ? \"You have been whitelisted!\" : \"Join the whitelist now!\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 5\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"card-actions justify-end\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn btn-accent\",\n                                            children: \"Accent\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 5\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 5\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 3\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 2\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: isWhitelisted ? \"You have been whitelisted!\" : \"Join the whitelist now!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: addToWhitelist,\n                                    disabled: !isConnected || isWhitelisted,\n                                    children: isWhitelisted ? \"Whitelisted\" : \"Add to Whitelist\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"9nVr2boPJfN73JT8uM8PNgu0Jcs=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useWalletClient,\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useWriteContract\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDaUM7QUFDcUM7QUFDeEM7QUFDZ0M7QUFFL0MsU0FBU087O0lBQ3RCLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxXQUFXLEVBQUUsR0FBR1IsaURBQVVBO0lBQzNDLE1BQU0sRUFBRVMsTUFBTUMsWUFBWSxFQUFFLEdBQUdULHNEQUFlQTtJQUM5QyxNQUFNLENBQUNVLGVBQWVDLGlCQUFpQixHQUFHYiwrQ0FBUUEsQ0FBVTtJQUU1RCxNQUFNLEVBQUVjLGFBQWEsRUFBRSxHQUFHWCx1REFBZ0JBO0lBRTFDLE1BQU1ZLGlCQUFpQjtRQUNyQixJQUFJLENBQUNKLGNBQWM7WUFDakJLLE1BQU07WUFDTjtRQUNGO1FBRUEsSUFBSSxDQUFDUixTQUFTO1lBQ1pRLE1BQU07WUFDTjtRQUNGO1FBRUEsSUFBSTtZQUNGLE1BQU1GLGNBQWM7Z0JBQ2xCTixTQUFTSCxrRUFBMEJBO2dCQUNuQ0MsS0FBS0EsMkNBQUdBO2dCQUNSVyxjQUFjO2dCQUNkQyxNQUFNO29CQUFDVjtpQkFBUTtZQUNqQjtZQUNBSyxpQkFBaUI7UUFDbkIsRUFBRSxPQUFPTSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxxQ0FBcUNBO1FBQ3JEO0lBQ0Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNmLCtDQUFNQTs7Ozs7MEJBQ1AsOERBQUNpQjtnQkFBSUMsV0FBVTs7a0NBQ3BCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2QsOERBQUNDOzBDQUNDLDRFQUFDQztvQ0FDQ0MsS0FBSTtvQ0FDSkMsS0FBSTs7Ozs7Ozs7Ozs7MENBRVIsOERBQUNMO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0s7d0NBQUdMLFdBQVU7a0RBQWE7Ozs7OztrREFJM0IsOERBQUNNO2tEQUFFOzs7Ozs7a0RBQ0gsOERBQUNQO3dDQUFJQyxXQUFVOzs0Q0FBd0I7NENBQUVWLGdCQUM3QiwrQkFDQTs7Ozs7OztrREFDWiw4REFBQ1M7d0NBQUlDLFdBQVU7a0RBQ2YsNEVBQUNPOzRDQUFPUCxXQUFVO3NEQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWpDLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEOzBDQUNDLDRFQUFDQTtvQ0FBSUMsV0FBVTs4Q0FDWlYsZ0JBQ0csK0JBQ0E7Ozs7Ozs7Ozs7OzBDQUdSLDhEQUFDUzswQ0FDQyw0RUFBQ1E7b0NBQU9DLFNBQVNmO29DQUFnQmdCLFVBQVUsQ0FBQ3RCLGVBQWVHOzhDQUN4REEsZ0JBQWdCLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE3QztHQXpFd0JMOztRQUNXTiw2Q0FBVUE7UUFDWkMsa0RBQWVBO1FBR3BCQyxtREFBZ0JBOzs7S0FMcEJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VXYWxsZXRDbGllbnQsIHVzZVdyaXRlQ29udHJhY3QgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCB7IFdISVRFTElTVF9DT05UUkFDVF9BRERSRVNTLCBhYmkgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKTtcbiAgY29uc3QgeyBkYXRhOiB3YWxsZXRDbGllbnQgfSA9IHVzZVdhbGxldENsaWVudCgpO1xuICBjb25zdCBbaXNXaGl0ZWxpc3RlZCwgc2V0SXNXaGl0ZWxpc3RlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgeyB3cml0ZUNvbnRyYWN0IH0gPSB1c2VXcml0ZUNvbnRyYWN0KCk7XG5cbiAgY29uc3QgYWRkVG9XaGl0ZWxpc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCF3YWxsZXRDbGllbnQpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGNvbm5lY3QgeW91ciB3YWxsZXQgZmlyc3RcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICBhbGVydChcIk5vIGFkZHJlc3MgZm91bmQuIFBsZWFzZSBtYWtlIHN1cmUgeW91ciB3YWxsZXQgaXMgY29ubmVjdGVkLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgd3JpdGVDb250cmFjdCh7XG4gICAgICAgIGFkZHJlc3M6IFdISVRFTElTVF9DT05UUkFDVF9BRERSRVNTLFxuICAgICAgICBhYmk6IGFiaSxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiAnYWRkQWRkcmVzc1RvV2hpdGVsaXN0JyxcbiAgICAgICAgYXJnczogW2FkZHJlc3NdLFxuICAgICAgfSk7XG4gICAgICBzZXRJc1doaXRlbGlzdGVkKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGFkZHJlc3MgdG8gd2hpdGVsaXN0XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LWNvbCBmbGV4LWdyb3dcIj5cbiA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctYmFzZS0xMDAgdy05NiBzaGFkb3cteGxcIj5cbiAgPGZpZ3VyZT5cbiAgICA8aW1nXG4gICAgICBzcmM9XCJodHRwczovL2ltZy5kYWlzeXVpLmNvbS9pbWFnZXMvc3RvY2svcGhvdG8tMTYwNjEwNzU1NzE5NS0wZTI5YTRiNWI0YWEud2VicFwiXG4gICAgICBhbHQ9XCJTaG9lc1wiIC8+XG4gIDwvZmlndXJlPlxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgV2VsY29tZSB0byBCdWlkbCBPbiBCYXNlIVxuICAgICAgXG4gICAgPC9oMj5cbiAgICA8cD5JZiBhIGRvZyBjaGV3cyBzaG9lcyB3aG9zZSBzaG9lcyBkb2VzIGhlIGNob29zZT88L3A+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zZWNvbmRhcnlcIj4ge2lzV2hpdGVsaXN0ZWRcbiAgICAgICAgICAgICAgPyBcIllvdSBoYXZlIGJlZW4gd2hpdGVsaXN0ZWQhXCJcbiAgICAgICAgICAgICAgOiBcIkpvaW4gdGhlIHdoaXRlbGlzdCBub3chXCJ9PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbnMganVzdGlmeS1lbmRcIj5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tYWNjZW50XCI+QWNjZW50PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICB7aXNXaGl0ZWxpc3RlZFxuICAgICAgICAgICAgICA/IFwiWW91IGhhdmUgYmVlbiB3aGl0ZWxpc3RlZCFcIlxuICAgICAgICAgICAgICA6IFwiSm9pbiB0aGUgd2hpdGVsaXN0IG5vdyFcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRUb1doaXRlbGlzdH0gZGlzYWJsZWQ9eyFpc0Nvbm5lY3RlZCB8fCBpc1doaXRlbGlzdGVkfT5cbiAgICAgICAgICAgIHtpc1doaXRlbGlzdGVkID8gXCJXaGl0ZWxpc3RlZFwiIDogXCJBZGQgdG8gV2hpdGVsaXN0XCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICAgPC8+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQWNjb3VudCIsInVzZVdhbGxldENsaWVudCIsInVzZVdyaXRlQ29udHJhY3QiLCJIZWFkZXIiLCJXSElURUxJU1RfQ09OVFJBQ1RfQUREUkVTUyIsImFiaSIsIkhvbWUiLCJhZGRyZXNzIiwiaXNDb25uZWN0ZWQiLCJkYXRhIiwid2FsbGV0Q2xpZW50IiwiaXNXaGl0ZWxpc3RlZCIsInNldElzV2hpdGVsaXN0ZWQiLCJ3cml0ZUNvbnRyYWN0IiwiYWRkVG9XaGl0ZWxpc3QiLCJhbGVydCIsImZ1bmN0aW9uTmFtZSIsImFyZ3MiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJmaWd1cmUiLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});