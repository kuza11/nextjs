"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "(api)/./src/pages/api/hello.exp.tsx":
/*!*************************************!*\
  !*** ./src/pages/api/hello.exp.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n// Default Req and Res are IncomingMessage and ServerResponse\n// You may want to pass in NextApiRequest and NextApiResponse\nconst router = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__.createRouter)();\nrouter.use((0,next_connect__WEBPACK_IMPORTED_MODULE_0__.expressWrapper)(cors__WEBPACK_IMPORTED_MODULE_1___default()())) // express middleware are supported if you wrap it with expressWrapper\n.use(async (req, res, next)=>{\n    const start = Date.now();\n    await next(); // call next in chain\n    const end = Date.now();\n    console.log(`Request took ${end - start}ms`);\n}).get((req, res)=>{\n    res.status(200).json({\n        mes: \"Hello world\"\n    });\n}).post(async (req, res)=>{\n    // use async/await\n    console.log(\"fd\");\n    res.status(200).json({\n        m: \"s\"\n    });\n}).put(async (req, res)=>{\n    console.log(\"gf\");\n    res.status(200).json({\n        m: \"d\"\n    });\n});\n/*\r\n  .put(\r\n    async (req, res, next) => {\r\n      // You may want to pass in NextApiRequest & { isLoggedIn: true }\r\n      // in createRouter generics to define this extra property\r\n      if (!req.isLoggedIn) throw new Error(\"thrown stuff will be caught\");\r\n      // go to the next in chain\r\n      return next();\r\n    },\r\n    async (req, res) => {\r\n      const user = await updateUser(req.body.user);\r\n      res.json({ user });\r\n    }\r\n  );*/ // create a handler from router with custom\n// onError and onNoMatch\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.handler({\n    onError: (err, req, res)=>{\n        console.error(err);\n        res.status(500).end(\"Something broke!\");\n    },\n    onNoMatch: (req, res)=>{\n        res.status(404).end(\"Page is not found\");\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2hlbGxvLmV4cC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM0RDtBQUNwQztBQUV4Qiw2REFBNkQ7QUFDN0QsNkRBQTZEO0FBQzdELE1BQU1HLFNBQVNILDBEQUFZQTtBQUUzQkcsT0FDR0MsR0FBRyxDQUFDSCw0REFBY0EsQ0FBQ0MsMkNBQUlBLEtBQUssc0VBQXNFO0NBQ2xHRSxHQUFHLENBQUMsT0FBT0MsS0FBS0MsS0FBS0MsT0FBUztJQUM3QixNQUFNQyxRQUFRQyxLQUFLQyxHQUFHO0lBQ3RCLE1BQU1ILFFBQVEscUJBQXFCO0lBQ25DLE1BQU1JLE1BQU1GLEtBQUtDLEdBQUc7SUFDcEJFLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRUYsTUFBTUgsTUFBTSxFQUFFLENBQUM7QUFDN0MsR0FDQ00sR0FBRyxDQUFDLENBQUNULEtBQUtDLE1BQVE7SUFDakJBLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBQ0MsS0FBSztJQUFhO0FBQzFDLEdBQ0NDLElBQUksQ0FBQyxPQUFPYixLQUFLQyxNQUFRO0lBQ3hCLGtCQUFrQjtJQUNsQk0sUUFBUUMsR0FBRyxDQUFDO0lBQ1pQLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBQ0csR0FBRTtJQUFHO0FBQzdCLEdBQUdDLEdBQUcsQ0FBQyxPQUFPZixLQUFLQyxNQUFRO0lBQ3pCTSxRQUFRQyxHQUFHLENBQUM7SUFDWlAsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFDRyxHQUFFO0lBQUc7QUFDN0I7QUFBRTtBQWdCSjtBQUNBLGVBQWVoQixPQUFPa0IsT0FBTyxDQUFDO0lBQzVCQyxTQUFTLENBQUNDLEtBQUtsQixLQUFLQyxNQUFRO1FBQzFCTSxRQUFRWSxLQUFLLENBQUNEO1FBQ2RqQixJQUFJUyxNQUFNLENBQUMsS0FBS0osR0FBRyxDQUFDO0lBQ3RCO0lBQ0FjLFdBQVcsQ0FBQ3BCLEtBQUtDOztJQUVqQjtBQUNGLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL3BhZ2VzL2FwaS9oZWxsby5leHAudHN4PzIxYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm91dGVyLCBleHByZXNzV3JhcHBlciB9IGZyb20gXCJuZXh0LWNvbm5lY3RcIjtcclxuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcclxuXHJcbi8vIERlZmF1bHQgUmVxIGFuZCBSZXMgYXJlIEluY29taW5nTWVzc2FnZSBhbmQgU2VydmVyUmVzcG9uc2VcclxuLy8gWW91IG1heSB3YW50IHRvIHBhc3MgaW4gTmV4dEFwaVJlcXVlc3QgYW5kIE5leHRBcGlSZXNwb25zZVxyXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXI8TmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZT4oKTtcclxuXHJcbnJvdXRlclxyXG4gIC51c2UoZXhwcmVzc1dyYXBwZXIoY29ycygpKSkgLy8gZXhwcmVzcyBtaWRkbGV3YXJlIGFyZSBzdXBwb3J0ZWQgaWYgeW91IHdyYXAgaXQgd2l0aCBleHByZXNzV3JhcHBlclxyXG4gIC51c2UoYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XHJcbiAgICBhd2FpdCBuZXh0KCk7IC8vIGNhbGwgbmV4dCBpbiBjaGFpblxyXG4gICAgY29uc3QgZW5kID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnNvbGUubG9nKGBSZXF1ZXN0IHRvb2sgJHtlbmQgLSBzdGFydH1tc2ApO1xyXG4gIH0pXHJcbiAgLmdldCgocmVxLCByZXMpID0+IHtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXM6IFwiSGVsbG8gd29ybGRcIn0pO1xyXG4gIH0pXHJcbiAgLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAvLyB1c2UgYXN5bmMvYXdhaXRcclxuICAgIGNvbnNvbGUubG9nKFwiZmRcIik7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bTpcInNcIn0pO1xyXG4gIH0pLnB1dChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZ2ZcIik7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bTpcImRcIn0pXHJcbiAgfSkvKlxyXG4gIC5wdXQoXHJcbiAgICBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgICAgLy8gWW91IG1heSB3YW50IHRvIHBhc3MgaW4gTmV4dEFwaVJlcXVlc3QgJiB7IGlzTG9nZ2VkSW46IHRydWUgfVxyXG4gICAgICAvLyBpbiBjcmVhdGVSb3V0ZXIgZ2VuZXJpY3MgdG8gZGVmaW5lIHRoaXMgZXh0cmEgcHJvcGVydHlcclxuICAgICAgaWYgKCFyZXEuaXNMb2dnZWRJbikgdGhyb3cgbmV3IEVycm9yKFwidGhyb3duIHN0dWZmIHdpbGwgYmUgY2F1Z2h0XCIpO1xyXG4gICAgICAvLyBnbyB0byB0aGUgbmV4dCBpbiBjaGFpblxyXG4gICAgICByZXR1cm4gbmV4dCgpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXBkYXRlVXNlcihyZXEuYm9keS51c2VyKTtcclxuICAgICAgcmVzLmpzb24oeyB1c2VyIH0pO1xyXG4gICAgfVxyXG4gICk7Ki9cclxuXHJcbi8vIGNyZWF0ZSBhIGhhbmRsZXIgZnJvbSByb3V0ZXIgd2l0aCBjdXN0b21cclxuLy8gb25FcnJvciBhbmQgb25Ob01hdGNoXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlci5oYW5kbGVyKHtcclxuICBvbkVycm9yOiAoZXJyLCByZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmVuZChcIlNvbWV0aGluZyBicm9rZSFcIik7XHJcbiAgfSxcclxuICBvbk5vTWF0Y2g6IChyZXEsIHJlcykgPT4ge1xyXG4gICAgcmVzLnN0YXR1cyg0MDQpLmVuZChcIlBhZ2UgaXMgbm90IGZvdW5kXCIpO1xyXG4gIH0sXHJcbn0pOyJdLCJuYW1lcyI6WyJjcmVhdGVSb3V0ZXIiLCJleHByZXNzV3JhcHBlciIsImNvcnMiLCJyb3V0ZXIiLCJ1c2UiLCJyZXEiLCJyZXMiLCJuZXh0Iiwic3RhcnQiLCJEYXRlIiwibm93IiwiZW5kIiwiY29uc29sZSIsImxvZyIsImdldCIsInN0YXR1cyIsImpzb24iLCJtZXMiLCJwb3N0IiwibSIsInB1dCIsImhhbmRsZXIiLCJvbkVycm9yIiwiZXJyIiwiZXJyb3IiLCJvbk5vTWF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/hello.exp.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/hello.exp.tsx"));
module.exports = __webpack_exports__;

})();