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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n// Default Req and Res are IncomingMessage and ServerResponse\n// You may want to pass in NextApiRequest and NextApiResponse\nconst router = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__.createRouter)();\nrouter.use((0,next_connect__WEBPACK_IMPORTED_MODULE_0__.expressWrapper)(cors__WEBPACK_IMPORTED_MODULE_1___default()())) // express middleware are supported if you wrap it with expressWrapper\n.use(async (req, res, next)=>{\n    const start = Date.now();\n    await next(); // call next in chain\n    const end = Date.now();\n    console.log(`Request took ${end - start}ms`);\n}).get((req, res)=>{\n    res.status(200).json({\n        mes: \"Hello world\"\n    });\n}).post(async (req, res)=>{\n    // use async/await\n    console.log(\"fd\");\n    res.status(200).json({\n        m: \"s\"\n    });\n});\n/*\n  .put(\n    async (req, res, next) => {\n      // You may want to pass in NextApiRequest & { isLoggedIn: true }\n      // in createRouter generics to define this extra property\n      if (!req.isLoggedIn) throw new Error(\"thrown stuff will be caught\");\n      // go to the next in chain\n      return next();\n    },\n    async (req, res) => {\n      const user = await updateUser(req.body.user);\n      res.json({ user });\n    }\n  );*/ // create a handler from router with custom\n// onError and onNoMatch\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.handler({\n    onError: (err, req, res)=>{\n        console.error(err);\n        res.status(500).end(\"Something broke!\");\n    },\n    onNoMatch: (req, res)=>{\n        res.status(404).end(\"Page is not found\");\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2hlbGxvLmV4cC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM0RDtBQUNwQztBQUV4Qiw2REFBNkQ7QUFDN0QsNkRBQTZEO0FBQzdELE1BQU1HLFNBQVNILDBEQUFZQTtBQUUzQkcsT0FDR0MsR0FBRyxDQUFDSCw0REFBY0EsQ0FBQ0MsMkNBQUlBLEtBQUssc0VBQXNFO0NBQ2xHRSxHQUFHLENBQUMsT0FBT0MsS0FBS0MsS0FBS0MsT0FBUztJQUM3QixNQUFNQyxRQUFRQyxLQUFLQyxHQUFHO0lBQ3RCLE1BQU1ILFFBQVEscUJBQXFCO0lBQ25DLE1BQU1JLE1BQU1GLEtBQUtDLEdBQUc7SUFDcEJFLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRUYsTUFBTUgsTUFBTSxFQUFFLENBQUM7QUFDN0MsR0FDQ00sR0FBRyxDQUFDLENBQUNULEtBQUtDLE1BQVE7SUFDakJBLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBQ0MsS0FBSztJQUFhO0FBQzFDLEdBQ0NDLElBQUksQ0FBQyxPQUFPYixLQUFLQyxNQUFRO0lBQ3hCLGtCQUFrQjtJQUNsQk0sUUFBUUMsR0FBRyxDQUFDO0lBQ1pQLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBQ0csR0FBRTtJQUFHO0FBQzdCO0FBQUU7Ozs7Ozs7Ozs7Ozs7SUFhQSxHQUVKLDJDQUEyQztBQUMzQyx3QkFBd0I7QUFDeEIsaUVBQWVoQixPQUFPaUIsT0FBTyxDQUFDO0lBQzVCQyxTQUFTLENBQUNDLEtBQUtqQixLQUFLQyxNQUFRO1FBQzFCTSxRQUFRVyxLQUFLLENBQUNEO1FBQ2RoQixJQUFJUyxNQUFNLENBQUMsS0FBS0osR0FBRyxDQUFDO0lBQ3RCO0lBQ0FhLFdBQVcsQ0FBQ25CLEtBQUtDLE1BQVE7UUFDdkJBLElBQUlTLE1BQU0sQ0FBQyxLQUFLSixHQUFHLENBQUM7SUFDdEI7QUFDRixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL3BhZ2VzL2FwaS9oZWxsby5leHAudHN4PzIxYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGNyZWF0ZVJvdXRlciwgZXhwcmVzc1dyYXBwZXIgfSBmcm9tIFwibmV4dC1jb25uZWN0XCI7XG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xuXG4vLyBEZWZhdWx0IFJlcSBhbmQgUmVzIGFyZSBJbmNvbWluZ01lc3NhZ2UgYW5kIFNlcnZlclJlc3BvbnNlXG4vLyBZb3UgbWF5IHdhbnQgdG8gcGFzcyBpbiBOZXh0QXBpUmVxdWVzdCBhbmQgTmV4dEFwaVJlc3BvbnNlXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXI8TmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZT4oKTtcblxucm91dGVyXG4gIC51c2UoZXhwcmVzc1dyYXBwZXIoY29ycygpKSkgLy8gZXhwcmVzcyBtaWRkbGV3YXJlIGFyZSBzdXBwb3J0ZWQgaWYgeW91IHdyYXAgaXQgd2l0aCBleHByZXNzV3JhcHBlclxuICAudXNlKGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICBhd2FpdCBuZXh0KCk7IC8vIGNhbGwgbmV4dCBpbiBjaGFpblxuICAgIGNvbnN0IGVuZCA9IERhdGUubm93KCk7XG4gICAgY29uc29sZS5sb2coYFJlcXVlc3QgdG9vayAke2VuZCAtIHN0YXJ0fW1zYCk7XG4gIH0pXG4gIC5nZXQoKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lczogXCJIZWxsbyB3b3JsZFwifSk7XG4gIH0pXG4gIC5wb3N0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIC8vIHVzZSBhc3luYy9hd2FpdFxuICAgIGNvbnNvbGUubG9nKFwiZmRcIik7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe206XCJzXCJ9KTtcbiAgfSkvKlxuICAucHV0KFxuICAgIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgLy8gWW91IG1heSB3YW50IHRvIHBhc3MgaW4gTmV4dEFwaVJlcXVlc3QgJiB7IGlzTG9nZ2VkSW46IHRydWUgfVxuICAgICAgLy8gaW4gY3JlYXRlUm91dGVyIGdlbmVyaWNzIHRvIGRlZmluZSB0aGlzIGV4dHJhIHByb3BlcnR5XG4gICAgICBpZiAoIXJlcS5pc0xvZ2dlZEluKSB0aHJvdyBuZXcgRXJyb3IoXCJ0aHJvd24gc3R1ZmYgd2lsbCBiZSBjYXVnaHRcIik7XG4gICAgICAvLyBnbyB0byB0aGUgbmV4dCBpbiBjaGFpblxuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9LFxuICAgIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHVwZGF0ZVVzZXIocmVxLmJvZHkudXNlcik7XG4gICAgICByZXMuanNvbih7IHVzZXIgfSk7XG4gICAgfVxuICApOyovXG5cbi8vIGNyZWF0ZSBhIGhhbmRsZXIgZnJvbSByb3V0ZXIgd2l0aCBjdXN0b21cbi8vIG9uRXJyb3IgYW5kIG9uTm9NYXRjaFxuZXhwb3J0IGRlZmF1bHQgcm91dGVyLmhhbmRsZXIoe1xuICBvbkVycm9yOiAoZXJyLCByZXEsIHJlcykgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuZW5kKFwiU29tZXRoaW5nIGJyb2tlIVwiKTtcbiAgfSxcbiAgb25Ob01hdGNoOiAocmVxLCByZXMpID0+IHtcbiAgICByZXMuc3RhdHVzKDQwNCkuZW5kKFwiUGFnZSBpcyBub3QgZm91bmRcIik7XG4gIH0sXG59KTsiXSwibmFtZXMiOlsiY3JlYXRlUm91dGVyIiwiZXhwcmVzc1dyYXBwZXIiLCJjb3JzIiwicm91dGVyIiwidXNlIiwicmVxIiwicmVzIiwibmV4dCIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsImVuZCIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJzdGF0dXMiLCJqc29uIiwibWVzIiwicG9zdCIsIm0iLCJoYW5kbGVyIiwib25FcnJvciIsImVyciIsImVycm9yIiwib25Ob01hdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/hello.exp.tsx\n");

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