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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useAccount.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useWalletClient.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useWriteContract.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"(app-pages-browser)/./src/app/Header.tsx\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ \"(app-pages-browser)/./src/app/Footer.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"(app-pages-browser)/./src/app/constants.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { address, isConnected } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)();\n    const { data: walletClient } = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useWalletClient)();\n    const [isWhitelisted, setIsWhitelisted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { writeContract } = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.useWriteContract)();\n    const addToWhitelist = async ()=>{\n        if (!walletClient) {\n            alert(\"Please connect your wallet first\");\n            return;\n        }\n        if (!address) {\n            alert(\"No address found. Please make sure your wallet is connected.\");\n            return;\n        }\n        try {\n            await writeContract({\n                address: _constants__WEBPACK_IMPORTED_MODULE_4__.WHITELIST_CONTRACT_ADDRESS,\n                abi: _constants__WEBPACK_IMPORTED_MODULE_4__.abi,\n                functionName: \"addAddressToWhitelist\",\n                args: [\n                    address\n                ]\n            });\n            setIsWhitelisted(true);\n        } catch (error) {\n            console.error(\"Error adding address to whitelist\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center flex-col flex-grow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card bg-base-100 w-180 shadow-xl m-10 p-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n                                    alt: \"Turned on grey laptop\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 5\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"align-bottom align-right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        class: \"text-white font-bold\",\n                                        children: \"Get Lost in Mountains\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 9\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 3\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"card-title\",\n                                    children: \"Welcome to Buidl On Base!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 5\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"It's an NFT collection for developers building apps on Base\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 5\n                                }, this),\n                                isWhitelisted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"badge badge-secondary\",\n                                    children: '\"You have been whitelisted!\"'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, this) : \"Join the whitelist now!\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-actions justify-end\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: addToWhitelist,\n                                        disabled: !isConnected || isWhitelisted,\n                                        className: \"btn btn-accent\",\n                                        children: [\n                                            \" \",\n                                            isWhitelisted ? \"Whitelisted\" : \"Add to Whitelist\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 5\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 5\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 3\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"9nVr2boPJfN73JT8uM8PNgu0Jcs=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useWalletClient,\n        wagmi__WEBPACK_IMPORTED_MODULE_7__.useWriteContract\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBT2lDO0FBQ3FDO0FBQ3hDO0FBQ0E7QUFDZ0M7QUFFL0MsU0FBU1E7O0lBQ3RCLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxXQUFXLEVBQUUsR0FBR1QsaURBQVVBO0lBQzNDLE1BQU0sRUFBRVUsTUFBTUMsWUFBWSxFQUFFLEdBQUdWLHNEQUFlQTtJQUM5QyxNQUFNLENBQUNXLGVBQWVDLGlCQUFpQixHQUFHZCwrQ0FBUUEsQ0FBVTtJQUU1RCxNQUFNLEVBQUVlLGFBQWEsRUFBRSxHQUFHWix1REFBZ0JBO0lBRTFDLE1BQU1hLGlCQUFpQjtRQUNyQixJQUFJLENBQUNKLGNBQWM7WUFDakJLLE1BQU07WUFDTjtRQUNGO1FBRUEsSUFBSSxDQUFDUixTQUFTO1lBQ1pRLE1BQU07WUFDTjtRQUNGO1FBRUEsSUFBSTtZQUNGLE1BQU1GLGNBQWM7Z0JBQ2xCTixTQUFTSCxrRUFBMEJBO2dCQUNuQ0MsS0FBS0EsMkNBQUdBO2dCQUNSVyxjQUFjO2dCQUNkQyxNQUFNO29CQUFDVjtpQkFBUTtZQUNqQjtZQUNBSyxpQkFBaUI7UUFDbkIsRUFBRSxPQUFPTSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxxQ0FBcUNBO1FBQ3JEO0lBQ0Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNoQiwrQ0FBTUE7Ozs7OzBCQUNQLDhEQUFDa0I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDckIsOERBQUNDOzs4Q0FDQyw4REFBQ0M7b0NBQ0NDLEtBQUk7b0NBQ0pDLEtBQUk7Ozs7Ozs4Q0FDSiw4REFBQ0w7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNLO3dDQUFFQyxPQUFNO2tEQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR3RDLDhEQUFDUDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNPO29DQUFHUCxXQUFVOzhDQUFhOzs7Ozs7OENBSTNCLDhEQUFDSzs4Q0FBRTs7Ozs7O2dDQUNGZiw4QkFDVyw4REFBQ1M7b0NBQUlDLFdBQVU7OENBQXdCOzs7OzsyQ0FDdkM7OENBQ1osOERBQUNEO29DQUFJQyxXQUFVOzhDQUNmLDRFQUFDUTt3Q0FBT0MsU0FBU2hCO3dDQUFnQmlCLFVBQVUsQ0FBQ3ZCLGVBQWVHO3dDQUFlVSxXQUFVOzs0Q0FBaUI7NENBQUVWLGdCQUFnQixnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtySSw4REFBQ1IsK0NBQU1BOzs7Ozs7O0FBR2I7R0E5RHdCRzs7UUFDV1AsNkNBQVVBO1FBQ1pDLGtEQUFlQTtRQUdwQkMsbURBQWdCQTs7O0tBTHBCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5cblxuXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlV2FsbGV0Q2xpZW50LCB1c2VXcml0ZUNvbnRyYWN0IH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCB7IFdISVRFTElTVF9DT05UUkFDVF9BRERSRVNTLCBhYmkgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKTtcbiAgY29uc3QgeyBkYXRhOiB3YWxsZXRDbGllbnQgfSA9IHVzZVdhbGxldENsaWVudCgpO1xuICBjb25zdCBbaXNXaGl0ZWxpc3RlZCwgc2V0SXNXaGl0ZWxpc3RlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgeyB3cml0ZUNvbnRyYWN0IH0gPSB1c2VXcml0ZUNvbnRyYWN0KCk7XG5cbiAgY29uc3QgYWRkVG9XaGl0ZWxpc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCF3YWxsZXRDbGllbnQpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGNvbm5lY3QgeW91ciB3YWxsZXQgZmlyc3RcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICBhbGVydChcIk5vIGFkZHJlc3MgZm91bmQuIFBsZWFzZSBtYWtlIHN1cmUgeW91ciB3YWxsZXQgaXMgY29ubmVjdGVkLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgd3JpdGVDb250cmFjdCh7XG4gICAgICAgIGFkZHJlc3M6IFdISVRFTElTVF9DT05UUkFDVF9BRERSRVNTLFxuICAgICAgICBhYmk6IGFiaSxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiAnYWRkQWRkcmVzc1RvV2hpdGVsaXN0JyxcbiAgICAgICAgYXJnczogW2FkZHJlc3NdLFxuICAgICAgfSk7XG4gICAgICBzZXRJc1doaXRlbGlzdGVkKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGFkZHJlc3MgdG8gd2hpdGVsaXN0XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LWNvbCBmbGV4LWdyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLWJhc2UtMTAwIHctMTgwIHNoYWRvdy14bCBtLTEwIHAtMTBcIj5cbiAgPGZpZ3VyZT5cbiAgICA8aW1nXG4gICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4ODU5MDUyODUwNS05OGQyYjVhYmEwNGI/cT04MCZ3PTE0NzAmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCJcbiAgICAgIGFsdD1cIlR1cm5lZCBvbiBncmV5IGxhcHRvcFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLWJvdHRvbSBhbGlnbi1yaWdodFwiPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtd2hpdGUgZm9udC1ib2xkXCI+R2V0IExvc3QgaW4gTW91bnRhaW5zPC9wPlxuICAgIDwvZGl2PlxuICA8L2ZpZ3VyZT5cbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxuICAgIFdlbGNvbWUgdG8gQnVpZGwgT24gQmFzZSFcbiAgICAgIFxuICAgIDwvaDI+XG4gICAgPHA+SXQncyBhbiBORlQgY29sbGVjdGlvbiBmb3IgZGV2ZWxvcGVycyBidWlsZGluZyBhcHBzIG9uIEJhc2U8L3A+XG4gICAge2lzV2hpdGVsaXN0ZWRcbiAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXNlY29uZGFyeVwiPlwiWW91IGhhdmUgYmVlbiB3aGl0ZWxpc3RlZCFcIjwvZGl2PlxuICAgICAgICAgICAgICA6IFwiSm9pbiB0aGUgd2hpdGVsaXN0IG5vdyFcIn1cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9ucyBqdXN0aWZ5LWVuZFwiPlxuICAgIDxidXR0b24gb25DbGljaz17YWRkVG9XaGl0ZWxpc3R9IGRpc2FibGVkPXshaXNDb25uZWN0ZWQgfHwgaXNXaGl0ZWxpc3RlZH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1hY2NlbnRcIj4ge2lzV2hpdGVsaXN0ZWQgPyBcIldoaXRlbGlzdGVkXCIgOiBcIkFkZCB0byBXaGl0ZWxpc3RcIn08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUFjY291bnQiLCJ1c2VXYWxsZXRDbGllbnQiLCJ1c2VXcml0ZUNvbnRyYWN0IiwiSGVhZGVyIiwiRm9vdGVyIiwiV0hJVEVMSVNUX0NPTlRSQUNUX0FERFJFU1MiLCJhYmkiLCJIb21lIiwiYWRkcmVzcyIsImlzQ29ubmVjdGVkIiwiZGF0YSIsIndhbGxldENsaWVudCIsImlzV2hpdGVsaXN0ZWQiLCJzZXRJc1doaXRlbGlzdGVkIiwid3JpdGVDb250cmFjdCIsImFkZFRvV2hpdGVsaXN0IiwiYWxlcnQiLCJmdW5jdGlvbk5hbWUiLCJhcmdzIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlndXJlIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsImNsYXNzIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});