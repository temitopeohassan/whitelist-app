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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useAccount.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useWalletClient.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/esm/hooks/useWriteContract.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"(app-pages-browser)/./src/app/Header.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"(app-pages-browser)/./src/app/constants.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// Import necessary libraries\n\n\n\n\n// Main component\nfunction Home() {\n    _s();\n    const { address, isConnected } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    const { data: walletClient } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useWalletClient)();\n    const [isWhitelisted, setIsWhitelisted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Contract write hook\n    const { writeContract } = (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.useWriteContract)({\n        abi: _constants__WEBPACK_IMPORTED_MODULE_3__.abi,\n        address: _constants__WEBPACK_IMPORTED_MODULE_3__.WHITELIST_CONTRACT_ADDRESS,\n        functionName: \"addAddressToWhitelist\"\n    });\n    // Function to add the address to the whitelist\n    const addToWhitelist = async ()=>{\n        if (!walletClient) {\n            alert(\"Please connect your wallet first\");\n            return;\n        }\n        try {\n            const tx = await writeContract();\n            await tx.wait();\n            setIsWhitelisted(true);\n        } catch (error) {\n            console.error(\"Error adding address to whitelist\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"\",\n                                children: \"Welcome to Crypto Devs!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: \"It's an NFT collection for developers in Crypto.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: isWhitelisted ? \"You have been whitelisted!\" : \"Join the whitelist now!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: addToWhitelist,\n                            disabled: !isConnected || isWhitelisted,\n                            children: isWhitelisted ? \"Whitelisted\" : \"Add to Whitelist\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"\",\n                children: \"Made with ❤ by Project Buidl On Base\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\IMAGIC STUDIO\\\\whitelist-app\\\\web\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"9nVr2boPJfN73JT8uM8PNgu0Jcs=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useWalletClient,\n        wagmi__WEBPACK_IMPORTED_MODULE_6__.useWriteContract\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFXQSw2QkFBNkI7QUFDSTtBQUNxQztBQUN4QztBQUNnQztBQUU5RCxpQkFBaUI7QUFDRixTQUFTTzs7SUFDdEIsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFdBQVcsRUFBRSxHQUFHUixpREFBVUE7SUFDM0MsTUFBTSxFQUFFUyxNQUFNQyxZQUFZLEVBQUUsR0FBR1Qsc0RBQWVBO0lBQzlDLE1BQU0sQ0FBQ1UsZUFBZUMsaUJBQWlCLEdBQUdiLCtDQUFRQSxDQUFVO0lBRTVELHNCQUFzQjtJQUN0QixNQUFNLEVBQUVjLGFBQWEsRUFBRSxHQUFHWCx1REFBZ0JBLENBQUM7UUFDekNHLEtBQUtBLDJDQUFHQTtRQUNSRSxTQUFTSCxrRUFBMEJBO1FBQ25DVSxjQUFjO0lBQ2hCO0lBRUEsK0NBQStDO0lBQy9DLE1BQU1DLGlCQUFpQjtRQUNyQixJQUFJLENBQUNMLGNBQWM7WUFDakJNLE1BQU07WUFDTjtRQUNGO1FBRUEsSUFBSTtZQUNGLE1BQU1DLEtBQUssTUFBTUo7WUFDakIsTUFBTUksR0FBR0MsSUFBSTtZQUNiTixpQkFBaUI7UUFDbkIsRUFBRSxPQUFPTyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxxQ0FBcUNBO1FBQ3JEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDbEIsK0NBQU1BOzs7OzswQkFDUCw4REFBQ2tCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7OzBDQUNDLDhEQUFDRTtnQ0FBR0QsV0FBVTswQ0FBRzs7Ozs7OzBDQUNqQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQUc7Ozs7OzswQ0FDbEIsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNaWCxnQkFDRywrQkFDQTs7Ozs7Ozs7Ozs7O2tDQUdSLDhEQUFDVTtrQ0FDQyw0RUFBQ0c7NEJBQU9DLFNBQVNWOzRCQUFnQlcsVUFBVSxDQUFDbEIsZUFBZUc7c0NBQ3hEQSxnQkFBZ0IsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdkMsOERBQUNnQjtnQkFBT0wsV0FBVTswQkFBRzs7Ozs7Ozs7Ozs7O0FBRzNCO0dBbER3QmhCOztRQUNXTiw2Q0FBVUE7UUFDWkMsa0RBQWVBO1FBSXBCQyxtREFBZ0JBOzs7S0FOcEJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cblxuXG5cblxuXG5cblwidXNlIGNsaWVudFwiXG4vLyBJbXBvcnQgbmVjZXNzYXJ5IGxpYnJhcmllc1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZVdhbGxldENsaWVudCwgdXNlV3JpdGVDb250cmFjdCB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IHsgV0hJVEVMSVNUX0NPTlRSQUNUX0FERFJFU1MsIGFiaSB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLy8gTWFpbiBjb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKTtcbiAgY29uc3QgeyBkYXRhOiB3YWxsZXRDbGllbnQgfSA9IHVzZVdhbGxldENsaWVudCgpO1xuICBjb25zdCBbaXNXaGl0ZWxpc3RlZCwgc2V0SXNXaGl0ZWxpc3RlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgLy8gQ29udHJhY3Qgd3JpdGUgaG9va1xuICBjb25zdCB7IHdyaXRlQ29udHJhY3QgfSA9IHVzZVdyaXRlQ29udHJhY3Qoe1xuICAgIGFiaTogYWJpLFxuICAgIGFkZHJlc3M6IFdISVRFTElTVF9DT05UUkFDVF9BRERSRVNTLFxuICAgIGZ1bmN0aW9uTmFtZTogJ2FkZEFkZHJlc3NUb1doaXRlbGlzdCcsXG4gIH0pO1xuXG4gIC8vIEZ1bmN0aW9uIHRvIGFkZCB0aGUgYWRkcmVzcyB0byB0aGUgd2hpdGVsaXN0XG4gIGNvbnN0IGFkZFRvV2hpdGVsaXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghd2FsbGV0Q2xpZW50KSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBjb25uZWN0IHlvdXIgd2FsbGV0IGZpcnN0XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0eCA9IGF3YWl0IHdyaXRlQ29udHJhY3QoKTtcbiAgICAgIGF3YWl0IHR4LndhaXQoKTtcbiAgICAgIHNldElzV2hpdGVsaXN0ZWQodHJ1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgYWRkcmVzcyB0byB3aGl0ZWxpc3RcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJcIj5XZWxjb21lIHRvIENyeXB0byBEZXZzITwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5JdCdzIGFuIE5GVCBjb2xsZWN0aW9uIGZvciBkZXZlbG9wZXJzIGluIENyeXB0by48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAge2lzV2hpdGVsaXN0ZWRcbiAgICAgICAgICAgICAgPyBcIllvdSBoYXZlIGJlZW4gd2hpdGVsaXN0ZWQhXCJcbiAgICAgICAgICAgICAgOiBcIkpvaW4gdGhlIHdoaXRlbGlzdCBub3chXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkVG9XaGl0ZWxpc3R9IGRpc2FibGVkPXshaXNDb25uZWN0ZWQgfHwgaXNXaGl0ZWxpc3RlZH0+XG4gICAgICAgICAgICB7aXNXaGl0ZWxpc3RlZCA/IFwiV2hpdGVsaXN0ZWRcIiA6IFwiQWRkIHRvIFdoaXRlbGlzdFwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJcIj5NYWRlIHdpdGggJiMxMDA4NDsgYnkgUHJvamVjdCBCdWlkbCBPbiBCYXNlPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VBY2NvdW50IiwidXNlV2FsbGV0Q2xpZW50IiwidXNlV3JpdGVDb250cmFjdCIsIkhlYWRlciIsIldISVRFTElTVF9DT05UUkFDVF9BRERSRVNTIiwiYWJpIiwiSG9tZSIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsImRhdGEiLCJ3YWxsZXRDbGllbnQiLCJpc1doaXRlbGlzdGVkIiwic2V0SXNXaGl0ZWxpc3RlZCIsIndyaXRlQ29udHJhY3QiLCJmdW5jdGlvbk5hbWUiLCJhZGRUb1doaXRlbGlzdCIsImFsZXJ0IiwidHgiLCJ3YWl0IiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});