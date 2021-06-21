/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n // header\n\nvar menuButton = document.querySelector(\".fa-bars\");\nvar navMenu = document.querySelector(\"#navMenu\");\nvar displayNone = \"displayNone\";\nmenuButton.addEventListener(\"click\", function () {\n  navMenu.classList.toggle(\"\" + displayNone);\n}); // Api \n\nvar mainInputUrl = document.querySelector(\"#mainInputUrl\");\nvar mainButtonUrl = document.querySelector(\"#mainButtonUrl\");\nvar Api = \"https://api.shrtco.de/v2/shorten?url=\";\nvar mainShortenResult = document.querySelector(\"#mainShortenResult\");\nvar buttonLoader = document.querySelector(\"#buttonLoader\");\nvar mainMessageError = document.querySelector(\"#mainMessageError\");\nmainButtonUrl.addEventListener(\"click\", function () {\n  notError();\n\n  if (mainInputUrl.value == \"\") {\n    errorMessage();\n  } else {\n    checkUrl(mainInputUrl.value);\n  }\n});\n\nfunction checkUrl(url) {\n  if (url.includes(\" \")) {\n    errorMessage();\n    console.log(mainInputUrl.value == \"\");\n  } else if (url.includes(\".\")) {\n    var makeApi = \"\" + Api + url;\n    urlFetch(makeApi);\n    buttonLoader.innerHTML = \"\\n    <img class=\\\"button-loader\\\" src=\\\"https://acegif.com/wp-content/uploads/loading-11.gif\\\" alt=\\\"loader git\\\">\\n    \"; //delete error message\n\n    notError();\n  }\n}\n\nfunction urlFetch(url) {\n  fetch(url).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    return templateResult(data.result.short_link);\n  })[\"catch\"](function (err) {\n    return apiError(err);\n  });\n}\n\nfunction templateResult(data) {\n  console.log(data);\n  var infoDiv = document.createElement(\"div\");\n  infoDiv.innerHTML = \"\\n  <div class=\\\"main-url_container\\\">\\n    <div class=\\\"origin-Url\\\">\\n      <p class=\\\"displayNone\\\">\" + mainInputUrl.value + \"</p>\\n    </div>\\n    <div class=\\\"url-container_result\\\">\\n      <a href=\\\"https://\" + data + \"\\\" target=\\\"_blank\\\" class=\\\"main-url\\\">\" + data + \"</a>\\n      <button id=\\\"urlCopy\\\">Copy</button>\\n    </div>\\n  </div>\\n  \";\n  mainShortenResult.append(infoDiv);\n  buttonLoader.innerHTML = \"\";\n  mainInputUrl.value = \"\";\n}\n\nfunction apiError(data) {\n  console.log(data);\n  var infoDiv = document.createElement(\"div\");\n  infoDiv.innerHTML = \"\\n  <p>That Url is not accept. Try again.</p>\\n  \";\n  mainShortenResult.appendChild(infoDiv);\n  buttonLoader.innerHTML = \"\";\n}\n\nfunction errorMessage() {\n  mainInputUrl.style = \"border: 1px solid red;\";\n  mainMessageError.innerHTML = \"\\n    <p>You need to review your url. Try again</p>\\n    \";\n}\n\nfunction notError() {\n  mainInputUrl.style = \"border: none;\";\n  mainMessageError.innerHTML = \"\\n    <p></p>\\n    \";\n}\n\n//# sourceURL=webpack://url-shortening-api-master-challenge/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://url-shortening-api-master-challenge/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;