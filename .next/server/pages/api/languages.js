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
exports.id = "pages/api/languages";
exports.ids = ["pages/api/languages"];
exports.modules = {

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "sqlite3":
/*!**************************!*\
  !*** external "sqlite3" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("sqlite3");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "sqlite":
/*!*************************!*\
  !*** external "sqlite" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("sqlite");;

/***/ }),

/***/ "(api)/./DB_functions/DB_lang_funcs.ts":
/*!***************************************!*\
  !*** ./DB_functions/DB_lang_funcs.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"insertDB\": () => (/* binding */ insertDB),\n/* harmony export */   \"readDB\": () => (/* binding */ readDB)\n/* harmony export */ });\n/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sqlite3 */ \"sqlite3\");\n/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sqlite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sqlite */ \"sqlite\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.json */ \"(api)/./config.json\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sqlite__WEBPACK_IMPORTED_MODULE_1__]);\nsqlite__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function readDB({ table  }) {\n    const db = await openDB();\n    return await db.all(`SELECT * from ${table}`);\n}\nasync function insertDB({ table  }, { name  }) {\n    const db = await openDB();\n    return await db.run(`INSERT INTO ${table} (name) VALUES (?)`, [\n        name\n    ]);\n}\nasync function openDB() {\n    return (0,sqlite__WEBPACK_IMPORTED_MODULE_1__.open)({\n        filename: \"./\" + _config_json__WEBPACK_IMPORTED_MODULE_2__.databaseName,\n        driver: (sqlite3__WEBPACK_IMPORTED_MODULE_0___default().Database)\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9EQl9mdW5jdGlvbnMvREJfbGFuZ19mdW5jcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEI7QUFDQTtBQUNTO0FBRWhDLGVBQWVHLE9BQU8sRUFBRUMsTUFBSyxFQUFrQixFQUFFO0lBQ3RELE1BQU1DLEtBQUssTUFBTUM7SUFDakIsT0FBTyxNQUFNRCxHQUFHRSxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUVILE1BQU0sQ0FBQztBQUM5QyxDQUFDO0FBRU0sZUFBZUksU0FBUyxFQUFFSixNQUFLLEVBQWtCLEVBQUUsRUFBRUssS0FBSSxFQUFrQixFQUFFO0lBQ2xGLE1BQU1KLEtBQUssTUFBTUM7SUFDakIsT0FBTyxNQUFNRCxHQUFHSyxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUVOLE1BQU0sa0JBQWtCLENBQUMsRUFBRTtRQUFDSztLQUFLO0FBQ3RFLENBQUM7QUFFRCxlQUFlSCxTQUFTO0lBQ3RCLE9BQU9MLDRDQUFJQSxDQUFDO1FBQ1ZVLFVBQVUsT0FBT1Qsc0RBQXNCO1FBQ3ZDVyxRQUFRYix5REFBZ0I7SUFDMUI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9EQl9mdW5jdGlvbnMvREJfbGFuZ19mdW5jcy50cz9iOWE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzcWxpdGUzIGZyb20gXCJzcWxpdGUzXCI7XHJcbmltcG9ydCB7IG9wZW4gfSBmcm9tIFwic3FsaXRlXCI7XHJcbmltcG9ydCBkZWZWYWx1ZXMgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhZERCKHsgdGFibGUgfTogZnVuY3Rpb25QYXJhbXMpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IG9wZW5EQigpO1xyXG4gIHJldHVybiBhd2FpdCBkYi5hbGwoYFNFTEVDVCAqIGZyb20gJHt0YWJsZX1gKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc2VydERCKHsgdGFibGUgfTogZnVuY3Rpb25QYXJhbXMsIHsgbmFtZSB9IDogd3JpdGVEQnBhcmFtcykge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgb3BlbkRCKCk7XHJcbiAgcmV0dXJuIGF3YWl0IGRiLnJ1bihgSU5TRVJUIElOVE8gJHt0YWJsZX0gKG5hbWUpIFZBTFVFUyAoPylgLCBbbmFtZV0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBvcGVuREIoKSB7XHJcbiAgcmV0dXJuIG9wZW4oe1xyXG4gICAgZmlsZW5hbWU6IFwiLi9cIiArIGRlZlZhbHVlcy5kYXRhYmFzZU5hbWUsXHJcbiAgICBkcml2ZXI6IHNxbGl0ZTMuRGF0YWJhc2UsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgZnVuY3Rpb25QYXJhbXMge1xyXG4gIHRhYmxlOiBzdHJpbmcgfCBzdHJpbmdbXSB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSB3cml0ZURCcGFyYW1ze1xyXG4gIG5hbWU6IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xyXG59Il0sIm5hbWVzIjpbInNxbGl0ZTMiLCJvcGVuIiwiZGVmVmFsdWVzIiwicmVhZERCIiwidGFibGUiLCJkYiIsIm9wZW5EQiIsImFsbCIsImluc2VydERCIiwibmFtZSIsInJ1biIsImZpbGVuYW1lIiwiZGF0YWJhc2VOYW1lIiwiZHJpdmVyIiwiRGF0YWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./DB_functions/DB_lang_funcs.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/languages/index.exp.ts":
/*!**********************************************!*\
  !*** ./src/pages/api/languages/index.exp.ts ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DB_functions_DB_lang_funcs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../DB_functions/DB_lang_funcs */ \"(api)/./DB_functions/DB_lang_funcs.ts\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DB_functions_DB_lang_funcs__WEBPACK_IMPORTED_MODULE_0__, next_connect__WEBPACK_IMPORTED_MODULE_1__]);\n([_DB_functions_DB_lang_funcs__WEBPACK_IMPORTED_MODULE_0__, next_connect__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst router = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__.createRouter)();\nrouter.use((0,next_connect__WEBPACK_IMPORTED_MODULE_1__.expressWrapper)(cors__WEBPACK_IMPORTED_MODULE_2___default()())).use(async (req, res, next)=>{\n    const start = Date.now();\n    await next();\n    const end = Date.now();\n}).get(async (req, res)=>{\n    const data = await (0,_DB_functions_DB_lang_funcs__WEBPACK_IMPORTED_MODULE_0__.readDB)({\n        table: \"languages\"\n    });\n    if (data) res.status(200).json(data);\n    else res.status(500).json({\n        message: \"error\"\n    });\n}).post(async (req, res)=>{\n    const data = await (0,_DB_functions_DB_lang_funcs__WEBPACK_IMPORTED_MODULE_0__.insertDB)({\n        table: \"languages\"\n    }, {\n        name: JSON.parse(req.body).name\n    });\n    if (data) res.status(201).json(data);\n    else res.status(500).json({\n        message: \"error\"\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.handler({\n    onError: (err, req, res)=>{\n        res.status(400).json({\n            error: err,\n            message: \"Probably wrong data in body\"\n        });\n    },\n    onNoMatch: (req, res)=>{\n        res.status(405).json({\n            message: \"Method Not Allowed\"\n        });\n    }\n})); /*export default async function RWlanguages(\r\n  req: NextApiRequest,\r\n  res: NextApiResponse\r\n) {\r\n  try {\r\n    if(req.method === \"POST\"){\r\n      const data = await insertDB({table: \"languages\"}, {name: req.body.name});\r\n      if(data) res.status(201).json(data);\r\n      else res.status(500).json({message: \"error\"});\r\n    } else if(req.method === \"GET\"){\r\n      const data = await readDB({table: \"languages\"});\r\n      if(data) res.status(200).json(data);\r\n      else res.status(500).json({message: \"error\"});\r\n    }else{\r\n      res.status(405).json({ message: \"Method Not Allowed\" });\r\n    }\r\n  } catch (error) {\r\n    res.status(400).json({error: error, message: \"Probably wrong data in body\"});\r\n  }\r\n  \r\n}*/ \n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xhbmd1YWdlcy9pbmRleC5leHAudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDMEU7QUFDZDtBQUNwQztBQUV4QixNQUFNSyxTQUFTSCwwREFBWUE7QUFFM0JHLE9BQ0dDLEdBQUcsQ0FBQ0gsNERBQWNBLENBQUNDLDJDQUFJQSxLQUN2QkUsR0FBRyxDQUFDLE9BQU9DLEtBQUtDLEtBQUtDLE9BQVM7SUFDN0IsTUFBTUMsUUFBUUMsS0FBS0MsR0FBRztJQUN0QixNQUFNSDtJQUNOLE1BQU1JLE1BQU1GLEtBQUtDLEdBQUc7QUFDdEIsR0FDQ0UsR0FBRyxDQUFDLE9BQU9QLEtBQUtDLE1BQVE7SUFDdkIsTUFBTU8sT0FBTyxNQUFNZCxtRUFBTUEsQ0FBQztRQUFDZSxPQUFPO0lBQVc7SUFDN0MsSUFBR0QsTUFBTVAsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7U0FDekJQLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBQ0MsU0FBUztJQUFPO0FBRTdDLEdBQ0NDLElBQUksQ0FBQyxPQUFPYixLQUFLQyxNQUFRO0lBQ3hCLE1BQU1PLE9BQU8sTUFBTWYscUVBQVFBLENBQUM7UUFBQ2dCLE9BQU87SUFBVyxHQUFHO1FBQUNLLE1BQU1DLEtBQUtDLEtBQUssQ0FBQ2hCLElBQUlpQixJQUFJLEVBQUVILElBQUk7SUFBQTtJQUNsRixJQUFHTixNQUFNUCxJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtTQUN6QlAsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFDQyxTQUFTO0lBQU87QUFDN0M7QUFDRixpRUFBZWQsT0FBT29CLE9BQU8sQ0FBQztJQUM1QkMsU0FBUyxDQUFDQyxLQUFLcEIsS0FBS0MsTUFBUTtRQUMxQkEsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDVSxPQUFPRDtZQUFLUixTQUFTO1FBQTZCO0lBQzFFO0lBQ0FVLFdBQVcsQ0FBQ3RCLEtBQUtDLE1BQVE7UUFDdkJBLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFxQjtJQUN2RDtBQUNGLEVBQUUsRUFBQyxDQUdIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9wYWdlcy9hcGkvbGFuZ3VhZ2VzL2luZGV4LmV4cC50cz84MjgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBpbnNlcnREQiwgcmVhZERCIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0RCX2Z1bmN0aW9ucy9EQl9sYW5nX2Z1bmNzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJvdXRlciwgZXhwcmVzc1dyYXBwZXIgfSBmcm9tIFwibmV4dC1jb25uZWN0XCI7XHJcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXI8TmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZT4oKTtcclxuXHJcbnJvdXRlclxyXG4gIC51c2UoZXhwcmVzc1dyYXBwZXIoY29ycygpKSlcclxuICAudXNlKGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgYXdhaXQgbmV4dCgpO1xyXG4gICAgY29uc3QgZW5kID0gRGF0ZS5ub3coKTtcclxuICB9KVxyXG4gIC5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVhZERCKHt0YWJsZTogXCJsYW5ndWFnZXNcIn0pO1xyXG4gICAgaWYoZGF0YSkgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgICBlbHNlIHJlcy5zdGF0dXMoNTAwKS5qc29uKHttZXNzYWdlOiBcImVycm9yXCJ9KTtcclxuICAgIFxyXG4gIH0pXHJcbiAgLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgaW5zZXJ0REIoe3RhYmxlOiBcImxhbmd1YWdlc1wifSwge25hbWU6IEpTT04ucGFyc2UocmVxLmJvZHkpLm5hbWV9KTtcclxuICAgIGlmKGRhdGEpIHJlcy5zdGF0dXMoMjAxKS5qc29uKGRhdGEpO1xyXG4gICAgZWxzZSByZXMuc3RhdHVzKDUwMCkuanNvbih7bWVzc2FnZTogXCJlcnJvclwifSk7XHJcbiAgfSk7XHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlci5oYW5kbGVyKHtcclxuICBvbkVycm9yOiAoZXJyLCByZXEsIHJlcykgPT4ge1xyXG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe2Vycm9yOiBlcnIsIG1lc3NhZ2U6IFwiUHJvYmFibHkgd3JvbmcgZGF0YSBpbiBib2R5XCJ9KTtcclxuICB9LFxyXG4gIG9uTm9NYXRjaDogKHJlcSwgcmVzKSA9PiB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIgfSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5cclxuLypleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBSV2xhbmd1YWdlcyhcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICBpZihyZXEubWV0aG9kID09PSBcIlBPU1RcIil7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBpbnNlcnREQih7dGFibGU6IFwibGFuZ3VhZ2VzXCJ9LCB7bmFtZTogcmVxLmJvZHkubmFtZX0pO1xyXG4gICAgICBpZihkYXRhKSByZXMuc3RhdHVzKDIwMSkuanNvbihkYXRhKTtcclxuICAgICAgZWxzZSByZXMuc3RhdHVzKDUwMCkuanNvbih7bWVzc2FnZTogXCJlcnJvclwifSk7XHJcbiAgICB9IGVsc2UgaWYocmVxLm1ldGhvZCA9PT0gXCJHRVRcIil7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZWFkREIoe3RhYmxlOiBcImxhbmd1YWdlc1wifSk7XHJcbiAgICAgIGlmKGRhdGEpIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xyXG4gICAgICBlbHNlIHJlcy5zdGF0dXMoNTAwKS5qc29uKHttZXNzYWdlOiBcImVycm9yXCJ9KTtcclxuICAgIH1lbHNle1xyXG4gICAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvcjogZXJyb3IsIG1lc3NhZ2U6IFwiUHJvYmFibHkgd3JvbmcgZGF0YSBpbiBib2R5XCJ9KTtcclxuICB9XHJcbiAgXHJcbn0qLyJdLCJuYW1lcyI6WyJpbnNlcnREQiIsInJlYWREQiIsImNyZWF0ZVJvdXRlciIsImV4cHJlc3NXcmFwcGVyIiwiY29ycyIsInJvdXRlciIsInVzZSIsInJlcSIsInJlcyIsIm5leHQiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJlbmQiLCJnZXQiLCJkYXRhIiwidGFibGUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInBvc3QiLCJuYW1lIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImhhbmRsZXIiLCJvbkVycm9yIiwiZXJyIiwiZXJyb3IiLCJvbk5vTWF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/languages/index.exp.ts\n");

/***/ }),

/***/ "(api)/./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"databaseName":"mydb.sqlite"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/languages/index.exp.ts"));
module.exports = __webpack_exports__;

})();