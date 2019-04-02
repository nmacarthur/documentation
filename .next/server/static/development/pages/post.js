module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/logo.svg":
/*!*************************!*\
  !*** ./assets/logo.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iNTlweCIgdmlld0JveD0iMCAwIDEwMSA1OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTMuMiAoNzI2NDMpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPkdyb3VwPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwLjExODMzNTQ0OSAwLjMwOCAyMi4yNzkxMjc0IDAuMzA4IDIyLjI3OTEyNzQgMTcuMzgzNyAwLjExODMzNTQ0OSAxNy4zODM3Ij48L3BvbHlnb24+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMyIgcG9pbnRzPSIwIDAuMzM0MyAyMi4xNjE5Mjc0IDAuMzM0MyAyMi4xNjE5Mjc0IDE3LjQxMDMgMCAxNy40MTAzIj48L3BvbHlnb24+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtNSIgcG9pbnRzPSIwLjQzMiAwLjUxODkgMTEuOTk3IDAuNTE4OSAxMS45OTcgMTcuNTk0OSAwLjQzMiAxNy41OTQ5Ij48L3BvbHlnb24+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtNyIgcG9pbnRzPSIwLjk0OTc2MDk5OSAwLjA0NDU4NjM1MzcgMTYuMjA3IDAuMDQ0NTg2MzUzNyAxNi4yMDcgMTMgMC45NDk3NjA5OTkgMTMiPjwvcG9seWdvbj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQcm9wb3NlZC1ob21lcGFnZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgPHBhdGggZD0iTTE0LjI4NDIsMTYuODA5MyBMMTQuMjg0MiwwLjg4MjMgQzE0LjI4NDIsMC41NjUzIDE0LjAyNjIsMC4zMDgzIDEzLjcxMDIsMC4zMDgzIEwxMi4yMjcyLDAuMzA4MyBDMTEuOTEwMiwwLjMwODMgMTEuNjUyMiwwLjU2NTMgMTEuNjUyMiwwLjg4MjMgTDExLjY1MjIsMTMuMDYxMyBMMi45NTgyLDAuNTUzMyBDMi44NTAyLDAuNDAwMyAyLjY3NTIsMC4zMDgzIDIuNDg2MiwwLjMwODMgTDAuNTc0MiwwLjMwODMgQzAuMjU4MiwwLjMwODMgMC4wMDAyLDAuNTY1MyAwLjAwMDIsMC44ODIzIEwwLjAwMDIsMTYuODA5MyBDMC4wMDAyLDE3LjEyNjMgMC4yNTgyLDE3LjM4NDMgMC41NzQyLDE3LjM4NDMgTDIuMDU3MiwxNy4zODQzIEMyLjM3NTIsMTcuMzg0MyAyLjYzMzIsMTcuMTI2MyAyLjYzMzIsMTYuODA5MyBMMi42MzMyLDQuNjMwMyBMMTEuMzI3MiwxNy4xMzgzIEMxMS40MzQyLDE3LjI5MjMgMTEuNjEwMiwxNy4zODQzIDExLjgwMDIsMTcuMzg0MyBMMTMuNzEwMiwxNy4zODQzIEMxNC4wMjYyLDE3LjM4NDMgMTQuMjg0MiwxNy4xMjYzIDE0LjI4NDIsMTYuODA5MyIgaWQ9IkZpbGwtMSIgZmlsbD0iIzI4M0M2NCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjguNzQ5LDE2LjgwOTMgTDI4Ljc0OSwxNS40NTkzIEMyOC43NDksMTUuMTQyMyAyOC40OTEsMTQuODg0MyAyOC4xNzQsMTQuODg0MyBMMjAuMTM0LDE0Ljg4NDMgTDIwLjEzNCw5LjgyNTMgTDI3LjI5OCw5LjgyNTMgQzI3LjYxNSw5LjgyNTMgMjcuODczLDkuNTY4MyAyNy44NzMsOS4yNTAzIEwyNy44NzMsNy45MDEzIEMyNy44NzMsNy41ODQzIDI3LjYxNSw3LjMyNjMgMjcuMjk4LDcuMzI2MyBMMjAuMTM0LDcuMzI2MyBMMjAuMTM0LDIuODA4MyBMMjcuODE0LDIuODA4MyBDMjguMTMyLDIuODA4MyAyOC4zOSwyLjU1MDMgMjguMzksMi4yMzMzIEwyOC4zOSwwLjg4MjMgQzI4LjM5LDAuNTY1MyAyOC4xMzIsMC4zMDgzIDI3LjgxNCwwLjMwODMgTDE4LjA3NSwwLjMwODMgQzE3Ljc1OSwwLjMwODMgMTcuNTAxLDAuNTY1MyAxNy41MDEsMC44ODIzIEwxNy41MDEsMTYuODA5MyBDMTcuNTAxLDE3LjEyNjMgMTcuNzU5LDE3LjM4NDMgMTguMDc1LDE3LjM4NDMgTDI4LjE3NCwxNy4zODQzIEMyOC40OTEsMTcuMzg0MyAyOC43NDksMTcuMTI2MyAyOC43NDksMTYuODA5MyIgaWQ9IkZpbGwtMyIgZmlsbD0iIzI4M0M2NCI+PC9wYXRoPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICA8ZyBpZD0iQ2xpcC02Ij48L2c+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjIuMjU1OSwxLjA0MzcgQzIyLjMwNjksMC44Njk3IDIyLjI3MjksMC42ODE3IDIyLjE2MzksMC41Mzc3IEMyMi4wNTQ5LDAuMzkyNyAyMS44ODM5LDAuMzA3NyAyMS43MDI5LDAuMzA3NyBMMjAuMTczOSwwLjMwNzcgQzE5LjkxNTksMC4zMDc3IDE5LjY4OTksMC40Nzk3IDE5LjYxODksMC43Mjc3IEwxNi4xODc5LDEyLjk1NzcgTDEyLjY5NjksMC43MjU3IEMxMi42Mjc5LDAuNDc4NyAxMi40MDE5LDAuMzA3NyAxMi4xNDQ5LDAuMzA3NyBMMTAuMjU0OSwwLjMwNzcgQzkuOTk3OSwwLjMwNzcgOS43NzE5LDAuNDc4NyA5LjcwMTksMC43MjU3IEw2LjIwOTksMTIuOTUzNyBMMi43NzY5LDAuNzI3NyBDMi43MDY5LDAuNDc5NyAyLjQ4MDksMC4zMDc3IDIuMjIyOSwwLjMwNzcgTDAuNjkzOSwwLjMwNzcgQzAuNTEyOSwwLjMwNzcgMC4zNDI5LDAuMzkyNyAwLjIzMzksMC41Mzc3IEMwLjEyNDksMC42ODE3IDAuMDkwOSwwLjg2OTcgMC4xNDA5LDEuMDQzNyBMNC43NzY5LDE2Ljk3MDcgQzQuODQ4OSwxNy4yMTQ3IDUuMDczOSwxNy4zODM3IDUuMzI4OSwxNy4zODM3IEw3LjE1MDksMTcuMzgzNyBDNy40MDc5LDE3LjM4MzcgNy42MzI5LDE3LjIxMzcgNy43MDM5LDE2Ljk2NjcgTDExLjE5ODksNC42NjQ3IEwxNC42OTQ5LDE2Ljk2NjcgQzE0Ljc2NjksMTcuMjEzNyAxNC45OTA5LDE3LjM4MzcgMTUuMjQ4OSwxNy4zODM3IEwxNy4wNjk5LDE3LjM4MzcgQzE3LjMyNTksMTcuMzgzNyAxNy41NTA5LDE3LjIxNDcgMTcuNjIyOSwxNi45NzA3IEwyMi4yNTU5LDEuMDQzNyBaIiBpZD0iRmlsbC01IiBmaWxsPSIjMjgzQzY0IiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTQiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTMiPjwvdXNlPgogICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtOSI+PC9nPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTIyLjEzODcsMS4wNzAzIEMyMi4xODk3LDAuODk2MyAyMi4xNTU3LDAuNzA4MyAyMi4wNDY3LDAuNTY0MyBDMjEuOTM3NywwLjQxOTMgMjEuNzY2NywwLjMzNDMgMjEuNTg1NywwLjMzNDMgTDIwLjA1NTcsMC4zMzQzIEMxOS43OTg3LDAuMzM0MyAxOS41NzI3LDAuNTA2MyAxOS41MDE3LDAuNzU0MyBMMTYuMDcwNywxMi45ODQzIEwxMi41Nzk3LDAuNzUyMyBDMTIuNTEwNywwLjUwNDMgMTIuMjg0NywwLjMzNDMgMTIuMDI3NywwLjMzNDMgTDEwLjEzNjcsMC4zMzQzIEM5Ljg3OTcsMC4zMzQzIDkuNjUzNywwLjUwNDMgOS41ODI3LDAuNzUyMyBMNi4wOTE3LDEyLjk4MDMgTDIuNjU5NywwLjc1NDMgQzIuNTg4NywwLjUwNjMgMi4zNjM3LDAuMzM0MyAyLjEwNTcsMC4zMzQzIEwwLjU3NTcsMC4zMzQzIEMwLjM5NDcsMC4zMzQzIDAuMjI0NywwLjQxOTMgMC4xMTQ3LDAuNTY0MyBDMC4wMDU3LDAuNzA4MyAtMC4wMjczLDAuODk2MyAwLjAyMjcsMS4wNzAzIEw0LjY1ODcsMTYuOTk3MyBDNC43MzA3LDE3LjI0MTMgNC45NTQ3LDE3LjQxMDMgNS4yMTA3LDE3LjQxMDMgTDcuMDMzNywxNy40MTAzIEM3LjI5MDcsMTcuNDEwMyA3LjUxNTcsMTcuMjQwMyA3LjU4NjcsMTYuOTkzMyBMMTEuMDgxNyw0LjY5MTMgTDE0LjU3NjcsMTYuOTkzMyBDMTQuNjQ3NywxNy4yNDAzIDE0Ljg3MjcsMTcuNDEwMyAxNS4xMzA3LDE3LjQxMDMgTDE2Ljk1MTcsMTcuNDEwMyBDMTcuMjA2NywxNy40MTAzIDE3LjQzMjcsMTcuMjQxMyAxNy41MDQ3LDE2Ljk5NzMgTDIyLjEzODcsMS4wNzAzIFoiIGlkPSJGaWxsLTgiIGZpbGw9IiMyODNDNjQiIG1hc2s9InVybCgjbWFzay00KSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01NC40NDgyLDM2LjUzNzQgTDUwLjI0MDIsMjkuNTk1NCBDNTAuNDQzMiwyOS41NDY0IDUwLjY1MTIsMjkuNDg4NCA1MC44NjUyLDI5LjQyMjQgQzUxLjQwOTIsMjkuMjUxNCA1MS45MTMyLDI4Ljk4OTQgNTIuMzYwMiwyOC42NDE0IEM1Mi44MjMyLDI4LjI4MjQgNTMuMjEwMiwyNy44MTU0IDUzLjUwNjIsMjcuMjUzNCBDNTMuODExMiwyNi42Nzk0IDUzLjk2NzIsMjUuOTUyNCA1My45NjcyLDI1LjA5MzQgQzUzLjk2NzIsMjQuMzE5NCA1My44MzYyLDIzLjY0NjQgNTMuNTc3MiwyMy4wOTQ0IEM1My4zMjAyLDIyLjU0ODQgNTIuOTg4MiwyMi4wODc0IDUyLjU4ODIsMjEuNzIxNCBDNTIuMTkwMiwyMS4zNTg0IDUxLjczNTIsMjEuMDc4NCA1MS4yMzQyLDIwLjg4OTQgQzUwLjc2NjIsMjAuNzEyNCA1MC4zMDIyLDIwLjU4MTQgNDkuODUxMiwyMC41MDI0IEM0OS40MTMyLDIwLjQyMzQgNDguOTkzMiwyMC4zNzQ0IDQ4LjYwMjIsMjAuMzU3NCBDNDguMjMyMiwyMC4zNDI0IDQ3Ljk0MTIsMjAuMzM0NCA0Ny43MjQyLDIwLjMzNDQgTDQzLjU0MTIsMjAuMzM0NCBDNDMuMjI0MiwyMC4zMzQ0IDQyLjk2NzIsMjAuNTkyNCA0Mi45NjcyLDIwLjkwOTQgTDQyLjk2NzIsMzYuODM2NCBDNDIuOTY3MiwzNy4xNTM0IDQzLjIyNDIsMzcuNDEwNCA0My41NDEyLDM3LjQxMDQgTDQ1LjAyMzIsMzcuNDEwNCBDNDUuMzQxMiwzNy40MTA0IDQ1LjU5ODIsMzcuMTUzNCA0NS41OTgyLDM2LjgzNjQgTDQ1LjU5ODIsMjkuODUyNCBMNDcuNDYzMiwyOS44NTI0IEw1MS43NzQyLDM3LjEyODQgQzUxLjg3NzIsMzcuMzAzNCA1Mi4wNjUyLDM3LjQxMDQgNTIuMjY4MiwzNy40MTA0IEw1My45NTYyLDM3LjQxMDQgQzU0LjE2MzIsMzcuNDEwNCA1NC4zNTQyLDM3LjI5ODQgNTQuNDU3MiwzNy4xMTg0IEM1NC41NTgyLDM2LjkzNzQgNTQuNTU1MiwzNi43MTU0IDU0LjQ0ODIsMzYuNTM3NCBNNDguMTc0MiwyNy4zNTM0IEw0NS41OTgyLDI3LjM1MzQgTDQ1LjU5ODIsMjIuODM0NCBMNDguMTc0MiwyMi44MzQ0IEM0OC44NzkyLDIyLjgzNDQgNDkuNDQ2MiwyMi45MTk0IDQ5Ljg2MDIsMjMuMDg1NCBDNTAuMjY5MiwyMy4yNDk0IDUwLjU4MzIsMjMuNDQ1NCA1MC43OTMyLDIzLjY2ODQgQzUxLjAwMTIsMjMuODg1NCA1MS4xMzUyLDI0LjExMDQgNTEuMjA5MiwyNC4zNTQ0IEM1MS4yOTIyLDI0LjYzODQgNTEuMzM0MiwyNC44ODc0IDUxLjMzNDIsMjUuMDkzNCBDNTEuMzM0MiwyNS4zMDI0IDUxLjI5MjIsMjUuNTUwNCA1MS4yMTAyLDI1LjgzMDQgQzUxLjEzNTIsMjYuMDc2NCA1MS4wMDEyLDI2LjMwMjQgNTAuNzkzMiwyNi41MjA0IEM1MC41ODEyLDI2Ljc0NDQgNTAuMjY3MiwyNi45NDA0IDQ5Ljg2MDIsMjcuMTAxNCBDNDkuNDQ2MiwyNy4yNjg0IDQ4Ljg4MDIsMjcuMzUzNCA0OC4xNzQyLDI3LjM1MzQiIGlkPSJGaWxsLTExIiBmaWxsPSIjMjgzQzY0Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik03Mi4xNDA2LDI4Ljg3MjYgQzcyLjE0MDYsMjguNjY3NiA3Mi4xMTk2LDI4LjMxNTYgNzIuMDcxNiwyNy44MTc2IEM3Mi4wMjQ2LDI3LjMxMzYgNzEuOTA2NiwyNi43NDM2IDcxLjcyMzYsMjYuMTIzNiBDNzEuNTQxNiwyNS41MDE2IDcxLjI1MDYsMjQuODQyNiA3MC44NjA2LDI0LjE2MzYgQzcwLjQ2MDYsMjMuNDcxNiA2OS45MTA2LDIyLjgzMTYgNjkuMjIyNiwyMi4yNjU2IEM2OC41Mzc2LDIxLjcwMDYgNjcuNjcyNiwyMS4yMzI2IDY2LjY1MDYsMjAuODczNiBDNjUuNjMyNiwyMC41MTU2IDY0LjM4NzYsMjAuMzM0NiA2Mi45NTE2LDIwLjMzNDYgTDU4LjAyNTYsMjAuMzM0NiBDNTcuNzA3NiwyMC4zMzQ2IDU3LjQ1MDYsMjAuNTkxNiA1Ny40NTA2LDIwLjkwOTYgTDU3LjQ1MDYsMzYuODM1NiBDNTcuNDUwNiwzNy4xNTM2IDU3LjcwNzYsMzcuNDEwNiA1OC4wMjU2LDM3LjQxMDYgTDYyLjk1MTYsMzcuNDEwNiBDNjQuMzg3NiwzNy40MTA2IDY1LjYzMjYsMzcuMjI5NiA2Ni42NTE2LDM2Ljg3MjYgQzY3LjY3MTYsMzYuNTEyNiA2OC41MzY2LDM2LjA0NDYgNjkuMjIyNiwzNS40Nzk2IEM2OS45MTE2LDM0LjkxMDYgNzAuNDYyNiwzNC4yNzE2IDcwLjg2MTYsMzMuNTgwNiBDNzEuMjUwNiwzMi45MDM2IDcxLjU0MTYsMzIuMjQ0NiA3MS43MjM2LDMxLjYyMzYgQzcxLjkxMDYsMzAuOTkxNiA3Mi4wMjM2LDMwLjQzNjYgNzIuMDcxNiwyOS45Mjc2IEM3Mi4xMTk2LDI5LjQyOTYgNzIuMTQwNiwyOS4wNzg2IDcyLjE0MDYsMjguODcyNiBNNjguOTc0NiwzMS41ODc2IEM2OC42MjQ2LDMyLjMzNDYgNjguMTQyNiwzMi45NTc2IDY3LjU0MDYsMzMuNDQwNiBDNjYuOTI4NiwzMy45Mjg2IDY2LjE5NDYsMzQuMjk5NiA2NS4zNTY2LDM0LjUzOTYgQzY0LjQ5NzYsMzQuNzg1NiA2My41NjA2LDM0LjkxMDYgNjIuNTY5NiwzNC45MTA2IEw2MC4wODQ2LDM0LjkxMDYgTDYwLjA4NDYsMjIuODM0NiBMNjIuNTY5NiwyMi44MzQ2IEM2My41NTc2LDIyLjgzNDYgNjQuNDk0NiwyMi45NTk2IDY1LjM1NjYsMjMuMjA1NiBDNjYuMTk0NiwyMy40NDU2IDY2LjkyODYsMjMuODE2NiA2Ny41NDA2LDI0LjMwNjYgQzY4LjE0MzYsMjQuNzg3NiA2OC42MjY2LDI1LjQxMTYgNjguOTc0NiwyNi4xNTg2IEM2OS4zMjc2LDI2LjkwOTYgNjkuNTA1NiwyNy44MjI2IDY5LjUwNTYsMjguODcyNiBDNjkuNTA1NiwyOS45MjI2IDY5LjMyNzYsMzAuODM1NiA2OC45NzQ2LDMxLjU4NzYiIGlkPSJGaWxsLTEzIiBmaWxsPSIjMjgzQzY0Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOC44NDY3LDM1LjI3NTYgQzM4LjgzMjcsMzUuMTA2NiAzOC43NDM3LDM0Ljk1MzYgMzguNjA2NywzNC44NTU2IEwzNy40MTE3LDM0LjAxMTYgQzM3LjE4NjcsMzMuODUxNiAzNi44ODA3LDMzLjg3NjYgMzYuNjgxNywzNC4wNjY2IEMzNi4xODY3LDM0LjU0MjYgMzUuNjEyNywzNC45MjM2IDM0Ljk3MDcsMzUuMTk5NiBDMzMuNDU3NywzNS44NTM2IDMxLjM0MzcsMzUuODUzNiAyOS44MjY3LDM1LjE5OTYgQzI5LjA3MTcsMzQuODczNiAyOC40MjE3LDM0LjQxOTYgMjcuODk0NywzMy44NTE2IEMyNy4zNjM3LDMzLjI3OTYgMjYuOTQ5NywzMi41OTU2IDI2LjY2MjcsMzEuODE2NiBDMjYuMzcyNywzMS4wMjg2IDI2LjIyNDcsMzAuMTY0NiAyNi4yMjQ3LDI5LjI0OTYgQzI2LjIyNDcsMjguNDIyNiAyNi4zNTE3LDI3LjYyMjYgMjYuNjAyNywyNi44NzI2IEMyNi42ODM3LDI2LjYzMjYgMjYuNTk1NywyNi4zNjc2IDI2LjM4OTcsMjYuMjIwNiBMMjUuMTQ1NywyNS4zNDE2IEMyNC45OTk3LDI1LjI0MDYgMjQuNzk3NywyNS4yNTA2IDI0LjYyOTcsMjUuMzAyNiBDMjQuNDYwNywyNS4zNTM2IDI0LjMwNTcsMjUuNTIxNiAyNC4yNDA3LDI1LjY4NTYgQzIzLjgwOTcsMjYuNzYzNiAyMy41OTI3LDI3Ljk2MzYgMjMuNTkyNywyOS4yNDk2IEMyMy41OTI3LDMwLjUzNDYgMjMuODA5NywzMS43Mzc2IDI0LjIzOTcsMzIuODIzNiBDMjQuNjcxNywzMy45MTY2IDI1LjI4MDcsMzQuODc0NiAyNi4wNDg3LDM1LjY2NzYgQzI2LjgxOTcsMzYuNDYzNiAyNy43NTk3LDM3LjA4OTYgMjguODQxNywzNy41MzA2IEMyOS45MTc3LDM3Ljk2OTYgMzEuMTE1NywzOC4xOTI2IDMyLjM5OTcsMzguMTkyNiBDMzMuNjgzNywzOC4xOTI2IDM0Ljg4MDcsMzcuOTY5NiAzNS45NTY3LDM3LjUzMDYgQzM3LjAwMzcsMzcuMTA1NiAzNy45MjE3LDM2LjQ5ODYgMzguNjgzNywzNS43MzA2IEMzOC44MDI3LDM1LjYxMDYgMzguODYyNywzNS40NDM2IDM4Ljg0NjcsMzUuMjc1NiIgaWQ9IkZpbGwtMTUiIGZpbGw9IiMyODNDNjQiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTQxLjIwNywyOS4yNDkzIEM0MS4yMDcsMjcuOTY0MyA0MC45ODksMjYuNzY1MyA0MC41NTksMjUuNjg1MyBDNDAuMTI2LDI0LjU5NjMgMzkuNTE4LDIzLjY0NTMgMzguNzUsMjIuODU0MyBDMzcuOTc5LDIyLjA1ODMgMzcuMDQxLDIxLjQyODMgMzUuOTYxLDIwLjk3OTMgQzMzLjc5OSwyMC4wODYzIDMxLDIwLjA4NjMgMjguODM4LDIwLjk3OTMgQzI3LjgwMywyMS40MDkzIDI2Ljg5MiwyMi4wMTMzIDI2LjEzMiwyMi43NzczIEMyNi4wMTIsMjIuODk3MyAyNS45NTEsMjMuMDY0MyAyNS45NjUsMjMuMjMyMyBDMjUuOTc5LDIzLjQwMTMgMjYuMDY4LDIzLjU1NTMgMjYuMjA2LDIzLjY1MzMgTDI3LjM4OCwyNC40ODgzIEMyNy42MTMsMjQuNjQ3MyAyNy45MTksMjQuNjI0MyAyOC4xMTgsMjQuNDMyMyBDMjguNjEzLDIzLjk1NjMgMjkuMTg3LDIzLjU3NTMgMjkuODI2LDIzLjI5ODMgQzMxLjM0MywyMi42NDUzIDMzLjQ2MywyMi42NDczIDM0Ljk3MSwyMy4yOTgzIEMzNS43MjUsMjMuNjI0MyAzNi4zNzYsMjQuMDc5MyAzNi45MDQsMjQuNjQ3MyBDMzcuNDMxLDI1LjIxMzMgMzcuODQ2LDI1Ljg5NzMgMzguMTM3LDI2LjY4MDMgQzM4LjQyNywyNy40NzEzIDM4LjU3NCwyOC4zMzUzIDM4LjU3NCwyOS4yNDkzIEMzOC41NzQsMzAuMDc5MyAzOC40NDYsMzAuODc4MyAzOC4xOTYsMzEuNjI0MyBDMzguMTE1LDMxLjg2NjMgMzguMjAyLDMyLjEzMDMgMzguNDA5LDMyLjI3NzMgTDM5LjY1OCwzMy4xNjAzIEMzOS43MzgsMzMuMjE2MyAzOS44MzcsMzMuMjM5MyAzOS45MzYsMzMuMjM5MyBDNDAuMDE1LDMzLjIzOTMgNDAuMDk3LDMzLjIyNDMgNDAuMTcxLDMzLjIwMjMgQzQwLjM0MSwzMy4xNTIzIDQwLjQ5NCwzMi45ODgzIDQwLjU2LDMyLjgyMzMgQzQwLjk4OSwzMS43MzUzIDQxLjIwNywzMC41MzMzIDQxLjIwNywyOS4yNDkzIiBpZD0iRmlsbC0xNyIgZmlsbD0iIzI4M0M2NCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNTUuMzE4NCw1Ny43MjE5IEw1MS4xMTA0LDUwLjc3OTkgQzUxLjMxMzQsNTAuNzMwOSA1MS41MjE0LDUwLjY3MjkgNTEuNzM1NCw1MC42MDY5IEM1Mi4yNzk0LDUwLjQzNTkgNTIuNzgzNCw1MC4xNzM5IDUzLjIzMDQsNDkuODI1OSBDNTMuNjkyNCw0OS40Njk5IDU0LjA3NzQsNDkuMDAxOSA1NC4zNzY0LDQ4LjQzNzkgQzU0LjY4MTQsNDcuODYzOSA1NC44MzY0LDQ3LjEzNjkgNTQuODM2NCw0Ni4yNzc5IEM1NC44MzY0LDQ1LjUwMjkgNTQuNzA2NCw0NC44MzA5IDU0LjQ0NTQsNDQuMjc3OSBDNTQuMTg3NCw0My43MzA5IDUzLjg1NTQsNDMuMjY4OSA1My40NTg0LDQyLjkwNTkgQzUzLjA1NzQsNDIuNTQxOSA1Mi42MDI0LDQyLjI2MTkgNTIuMTA0NCw0Mi4wNzM5IEM1MS42Mzc0LDQxLjg5NjkgNTEuMTcxNCw0MS43NjU5IDUwLjcyMTQsNDEuNjg2OSBDNTAuMjgzNCw0MS42MDc5IDQ5Ljg2MzQsNDEuNTU4OSA0OS40NzI0LDQxLjU0MTkgQzQ5LjEwMjQsNDEuNTI2OSA0OC44MTE0LDQxLjUxODkgNDguNTkzNCw0MS41MTg5IEw0NC40MTE0LDQxLjUxODkgQzQ0LjA5NDQsNDEuNTE4OSA0My44Mzc0LDQxLjc3NjkgNDMuODM3NCw0Mi4wOTM5IEw0My44Mzc0LDU4LjAyMDkgQzQzLjgzNzQsNTguMzM3OSA0NC4wOTQ0LDU4LjU5NDkgNDQuNDExNCw1OC41OTQ5IEw0NS44OTM0LDU4LjU5NDkgQzQ2LjIxMTQsNTguNTk0OSA0Ni40Njg0LDU4LjMzNzkgNDYuNDY4NCw1OC4wMjA5IEw0Ni40Njg0LDUxLjAzNjkgTDQ4LjMzMzQsNTEuMDM2OSBMNTIuNjQ0NCw1OC4zMTI5IEM1Mi43NDc0LDU4LjQ4NzkgNTIuOTM1NCw1OC41OTQ5IDUzLjEzODQsNTguNTk0OSBMNTQuODI2NCw1OC41OTQ5IEM1NS4wMzM0LDU4LjU5NDkgNTUuMjI0NCw1OC40ODI5IDU1LjMyNzQsNTguMzAyOSBDNTUuNDI4NCw1OC4xMjE5IDU1LjQyNDQsNTcuODk5OSA1NS4zMTg0LDU3LjcyMTkgTTQ5LjA0NDQsNDguNTM3OSBMNDYuNDY4NCw0OC41Mzc5IEw0Ni40Njg0LDQ0LjAxODkgTDQ5LjA0NDQsNDQuMDE4OSBDNDkuNzQ3NCw0NC4wMTg5IDUwLjMxNTQsNDQuMTAzOSA1MC43MzA0LDQ0LjI2OTkgQzUxLjEzOTQsNDQuNDMzOSA1MS40NTM0LDQ0LjYyOTkgNTEuNjYzNCw0NC44NTI5IEM1MS44NzE0LDQ1LjA2OTkgNTIuMDA1NCw0NS4yOTQ5IDUyLjA3ODQsNDUuNTM4OSBDNTIuMTYyNCw0NS44MjI5IDUyLjIwNDQsNDYuMDcxOSA1Mi4yMDQ0LDQ2LjI3NzkgQzUyLjIwNDQsNDYuNDg2OSA1Mi4xNjI0LDQ2LjczNDkgNTIuMDgwNCw0Ny4wMTQ5IEM1Mi4wMDU0LDQ3LjI2MDkgNTEuODcxNCw0Ny40ODY5IDUxLjY2MzQsNDcuNzA0OSBDNTEuNDUxNCw0Ny45Mjg5IDUxLjEzNzQsNDguMTI0OSA1MC43MzA0LDQ4LjI4NTkgQzUwLjMxNTQsNDguNDUyOSA0OS43NDk0LDQ4LjUzNzkgNDkuMDQ0NCw0OC41Mzc5IiBpZD0iRmlsbC0xOSIgZmlsbD0iIzI4M0M2NCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNzMuMDExNyw1MC4wNTcxIEM3My4wMTE3LDQ5Ljg1MjEgNzIuOTkwNyw0OS41MDExIDcyLjk0MzcsNDkuMDAyMSBDNzIuODk2Nyw0OC40OTgxIDcyLjc3OTcsNDcuOTI4MSA3Mi41OTU3LDQ3LjMwNzEgQzcyLjQxMTcsNDYuNjgxMSA3Mi4xMjA3LDQ2LjAyMjEgNzEuNzMzNyw0NS4zNDgxIEM3MS4zMzI3LDQ0LjY1NjEgNzAuNzgxNyw0NC4wMTYxIDcwLjA5MzcsNDMuNDUxMSBDNjkuNDA5Nyw0Mi44ODcxIDY4LjU0NTcsNDIuNDE4MSA2Ny41MjI3LDQyLjA1NzEgQzY2LjUwNTcsNDEuNzAwMSA2NS4yNTk3LDQxLjUxOTEgNjMuODIyNyw0MS41MTkxIEw1OC44OTY3LDQxLjUxOTEgQzU4LjU3ODcsNDEuNTE5MSA1OC4zMjE3LDQxLjc3NjEgNTguMzIxNyw0Mi4wOTQxIEw1OC4zMjE3LDU4LjAyMDEgQzU4LjMyMTcsNTguMzM4MSA1OC41Nzg3LDU4LjU5NTEgNTguODk2Nyw1OC41OTUxIEw2My44MjI3LDU4LjU5NTEgQzY1LjI1OTcsNTguNTk1MSA2Ni41MDU3LDU4LjQxNDEgNjcuNTIzNyw1OC4wNTcxIEM2OC41NDQ3LDU3LjY5NzEgNjkuNDA4Nyw1Ny4yMjgxIDcwLjA5MzcsNTYuNjY1MSBDNzAuNzgzNyw1Ni4wOTYxIDcxLjMzNDcsNTUuNDU3MSA3MS43MzQ3LDU0Ljc2NTEgQzcyLjEyMDcsNTQuMDkyMSA3Mi40MDk3LDUzLjQzNDEgNzIuNTk1Nyw1Mi44MDgxIEM3Mi43ODI3LDUyLjE3NjEgNzIuODk1Nyw1MS42MjExIDcyLjk0MzcsNTEuMTExMSBDNzIuOTkwNyw1MC42MTMxIDczLjAxMTcsNTAuMjYzMSA3My4wMTE3LDUwLjA1NzEgTDczLjAxMTcsNTAuMDU3MSBaIE02MC45NTY3LDQ0LjAxOTEgTDYzLjQ0MDcsNDQuMDE5MSBDNjQuNDI5Nyw0NC4wMTkxIDY1LjM2NjcsNDQuMTQ0MSA2Ni4yMjc3LDQ0LjM5MDEgQzY3LjA2NjcsNDQuNjMwMSA2Ny44MDA3LDQ1LjAwMTEgNjguNDEyNyw0NS40OTExIEM2OS4wMTU3LDQ1Ljk3MjEgNjkuNDk4Nyw0Ni41OTYxIDY5Ljg0NzcsNDcuMzQzMSBDNzAuMTk4Nyw0OC4wOTQxIDcwLjM3NzcsNDkuMDA3MSA3MC4zNzc3LDUwLjA1NzEgQzcwLjM3NzcsNTEuMTA2MSA3MC4xOTg3LDUyLjAxOTEgNjkuODQ3Nyw1Mi43NzIxIEM2OS40OTc3LDUzLjUxOTEgNjkuMDE0Nyw1NC4xNDIxIDY4LjQxMjcsNTQuNjI1MSBDNjcuODAwNyw1NS4xMTQxIDY3LjA2NTcsNTUuNDg0MSA2Ni4yMjc3LDU1LjcyNDEgQzY1LjM3MDcsNTUuOTcwMSA2NC40MzM3LDU2LjA5NTEgNjMuNDQwNyw1Ni4wOTUxIEw2MC45NTY3LDU2LjA5NTEgTDYwLjk1NjcsNDQuMDE5MSBaIiBpZD0iRmlsbC0yMSIgZmlsbD0iIzI4M0M2NCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNODYuODg5Niw1OC4wMjA1IEw4Ni44ODk2LDU2LjY3MDUgQzg2Ljg4OTYsNTYuMzUzNSA4Ni42MzE2LDU2LjA5NTUgODYuMzE0Niw1Ni4wOTU1IEw3OC4yNzQ2LDU2LjA5NTUgTDc4LjI3NDYsNTEuMDM2NSBMODUuNDM5Niw1MS4wMzY1IEM4NS43NTY2LDUxLjAzNjUgODYuMDE0Niw1MC43Nzg1IDg2LjAxNDYsNTAuNDYxNSBMODYuMDE0Niw0OS4xMTI1IEM4Ni4wMTQ2LDQ4Ljc5NTUgODUuNzU2Niw0OC41Mzc1IDg1LjQzOTYsNDguNTM3NSBMNzguMjc0Niw0OC41Mzc1IEw3OC4yNzQ2LDQ0LjAxOTUgTDg1Ljk1NTYsNDQuMDE5NSBDODYuMjczNiw0NC4wMTk1IDg2LjUzMDYsNDMuNzYxNSA4Ni41MzA2LDQzLjQ0NDUgTDg2LjUzMDYsNDIuMDkzNSBDODYuNTMwNiw0MS43NzY1IDg2LjI3MzYsNDEuNTE5NSA4NS45NTU2LDQxLjUxOTUgTDc2LjIxNjYsNDEuNTE5NSBDNzUuODk5Niw0MS41MTk1IDc1LjY0MTYsNDEuNzc2NSA3NS42NDE2LDQyLjA5MzUgTDc1LjY0MTYsNTguMDIwNSBDNzUuNjQxNiw1OC4zMzc1IDc1Ljg5OTYsNTguNTk1NSA3Ni4yMTY2LDU4LjU5NTUgTDg2LjMxNDYsNTguNTk1NSBDODYuNjMxNiw1OC41OTU1IDg2Ljg4OTYsNTguMzM3NSA4Ni44ODk2LDU4LjAyMDUiIGlkPSJGaWxsLTIzIiBmaWxsPSIjMjgzQzY0Ij48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODkuMDAwMDAwLCA0MS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTYiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTUiPjwvdXNlPgogICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMjYiPjwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS45MTUsMTYuNzIxOSBMNy43MDcsOS43Nzk5IEM3LjkxMSw5LjcyOTkgOC4xMiw5LjY3MjkgOC4zMzEsOS42MDY5IEM4Ljg3Myw5LjQzNjkgOS4zNzYsOS4xNzQ5IDkuODI3LDguODI1OSBDMTAuMjg5LDguNDY5OSAxMC42NzQsOC4wMDE5IDEwLjk3Myw3LjQzNzkgQzExLjI3OCw2Ljg2MzkgMTEuNDMzLDYuMTM2OSAxMS40MzMsNS4yNzc5IEMxMS40MzMsNC41MDQ5IDExLjMwMSwzLjgzMjkgMTEuMDQyLDMuMjc4OSBDMTAuNzg0LDIuNzMxOSAxMC40NTMsMi4yNzA5IDEwLjA1NSwxLjkwNTkgQzkuNjU2LDEuNTQyOSA5LjIsMS4yNjI5IDguNzAxLDEuMDczOSBDOC4yMzQsMC44OTY5IDcuNzY4LDAuNzY1OSA3LjMxNywwLjY4NjkgQzYuODc5LDAuNjA3OSA2LjQ2LDAuNTU4OSA2LjA2OCwwLjU0MTkgQzUuNjk5LDAuNTI2OSA1LjQwOCwwLjUxODkgNS4xOSwwLjUxODkgTDEuMDA3LDAuNTE4OSBDMC42ODksMC41MTg5IDAuNDMyLDAuNzc2OSAwLjQzMiwxLjA5MzkgTDAuNDMyLDE3LjAyMDkgQzAuNDMyLDE3LjMzNzkgMC42ODksMTcuNTk0OSAxLjAwNywxNy41OTQ5IEwyLjQ5LDE3LjU5NDkgQzIuODA4LDE3LjU5NDkgMy4wNjQsMTcuMzM3OSAzLjA2NCwxNy4wMjA5IEwzLjA2NCwxMC4wMzY5IEw0LjkzLDEwLjAzNjkgTDkuMjM5LDE3LjMxMjkgQzkuMzQyLDE3LjQ4NzkgOS41MzEsMTcuNTk0OSA5LjczMywxNy41OTQ5IEwxMS40MjMsMTcuNTk0OSBDMTEuNjMsMTcuNTk0OSAxMS44MjEsMTcuNDgyOSAxMS45MjQsMTcuMzAyOSBDMTIuMDI1LDE3LjEyMTkgMTIuMDIxLDE2Ljg5OTkgMTEuOTE1LDE2LjcyMTkgTTUuNjQxLDcuNTM3OSBMMy4wNjQsNy41Mzc5IEwzLjA2NCwzLjAxODkgTDUuNjQxLDMuMDE4OSBDNi4zNDQsMy4wMTg5IDYuOTEyLDMuMTAzOSA3LjMyNywzLjI2OTkgQzcuNzM3LDMuNDMzOSA4LjA1MSwzLjYyOTkgOC4yNiwzLjg1MTkgQzguNDY0LDQuMDY4OSA4LjYwMyw0LjI5ODkgOC42NzUsNC41NDA5IEM4Ljc1OCw0LjgxOTkgOC44LDUuMDY3OSA4LjgsNS4yNzc5IEM4LjgsNS40ODk5IDguNzU4LDUuNzM2OSA4LjY3NSw2LjAxNTkgQzguNjAzLDYuMjU2OSA4LjQ2NCw2LjQ4NzkgOC4yNiw2LjcwNDkgQzguMDQ4LDYuOTI4OSA3LjczNSw3LjEyMzkgNy4zMjcsNy4yODU5IEM2LjkxMiw3LjQ1MjkgNi4zNDUsNy41Mzc5IDUuNjQxLDcuNTM3OSIgaWQ9IkZpbGwtMjUiIGZpbGw9IiMyODNDNjQiIG1hc2s9InVybCgjbWFzay02KSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0zMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuMDAwMDAwLCA0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTgiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTciPjwvdXNlPgogICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMjkiPjwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi4yMDcsNC4wNTcxIEMxNi4yMDcsMi43NzMxIDE1Ljk5LDEuNTc0MSAxNS41MiwwLjQwNjEgQzE1LjQ1NSwwLjI0MzEgMTUuMzE4LDAuMTE4MSAxNS4xNDksMC4wNjgxIEMxNC45ODIsMC4wMTgxIDE0Ljc5OSwwLjA0OTEgMTQuNjUzLDAuMTQ5MSBMMTMuNDA5LDEuMDI5MSBDMTMuMjAyLDEuMTc1MSAxMy4xMTUsMS40NDAxIDEzLjE5NiwxLjY4MjEgQzEzLjQ0NywyLjQyODEgMTMuNTc0LDMuMjI3MSAxMy41NzQsNC4wNTcxIEMxMy41NzQsNC45NzExIDEzLjQyNyw1LjgzNTEgMTMuMTM3LDYuNjI1MSBDMTIuODUsNy40MDUxIDEyLjQzNSw4LjA4OTEgMTEuOTAzLDguNjYwMSBDMTEuMzc3LDkuMjI3MSAxMC43MjgsOS42ODExIDkuOTczLDEwLjAwNjEgQzguNDU3LDEwLjY2MjEgNi4zNDIsMTAuNjYyMSA0LjgyOCwxMC4wMDYxIEM0LjE4OSw5LjczMTEgMy42MTMsOS4zNTAxIDMuMTE5LDguODc0MSBDMi45MTksOC42ODQxIDIuNjEyLDguNjYwMSAyLjM4OCw4LjgxOTEgTDEuMTkyLDkuNjY0MSBDMS4wNTUsOS43NjIxIDAuOTY2LDkuOTE0MSAwLjk1MiwxMC4wODMxIEMwLjkzNywxMC4yNTMxIDAuOTk4LDEwLjQxODEgMS4xMTYsMTAuNTM4MSBDMS44NzksMTEuMzA4MSAyLjc5NywxMS45MTQxIDMuODQyLDEyLjMzOTEgQzQuOTE4LDEyLjc3NzEgNi4xMTUsMTMuMDAwMSA3LjM5OSwxMy4wMDAxIEM4LjY4NCwxMy4wMDAxIDkuODgxLDEyLjc3NzEgMTAuOTU3LDEyLjMzOTEgQzEyLjAzOCwxMS44OTkxIDEyLjk3OCwxMS4yNzMxIDEzLjc1LDEwLjQ3NjEgQzE0LjUyLDkuNjgzMSAxNS4xMjgsOC43MjYxIDE1LjU2MSw3LjYzMTEgQzE1Ljk5LDYuNTQyMSAxNi4yMDcsNS4zNDAxIDE2LjIwNyw0LjA1NzEiIGlkPSJGaWxsLTI4IiBmaWxsPSIjMjgzQzY0IiBtYXNrPSJ1cmwoI21hc2stOCkiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cGF0aCBkPSJNMzguODMzLDQ0LjA0MTMgQzM4Ljg0OCw0My44NzIzIDM4Ljc4Nyw0My43MDUzIDM4LjY2OCw0My41ODUzIEMzNy45MDksNDIuODIyMyAzNi45OTksNDIuMjE3MyAzNS45NjEsNDEuNzg3MyBDMzMuNzk5LDQwLjg5NDMgMzEsNDAuODk0MyAyOC44MzgsNDEuNzg3MyBDMjcuNzU3LDQyLjIzNjMgMjYuODE5LDQyLjg2NTMgMjYuMDQ5LDQzLjY2MjMgQzI1LjI4LDQ0LjQ1NDMgMjQuNjcyLDQ1LjQwNjMgMjQuMjQsNDYuNDkzMyBDMjMuODEsNDcuNTcxMyAyMy41OTMsNDguNzcxMyAyMy41OTMsNTAuMDU3MyBDMjMuNTkzLDUxLjM0MjMgMjMuODEsNTIuNTQ1MyAyNC4yNzQsNTMuNzA4MyBDMjQuMzM4LDUzLjg3MjMgMjQuNDc1LDUzLjk5ODMgMjQuNjQ0LDU0LjA1MDMgQzI0LjY5OCw1NC4wNjUzIDI0Ljc1NSw1NC4wNzMzIDI0LjgxLDU0LjA3MzMgQzI0LjkyNyw1NC4wNzMzIDI1LjA0NCw1NC4wMzczIDI1LjE0Miw1My45NjgzIEwyNi4zOSw1My4wODUzIEMyNi41OTYsNTIuOTM4MyAyNi42ODQsNTIuNjc0MyAyNi42MDMsNTIuNDMzMyBDMjYuMzUzLDUxLjY4NDMgMjYuMjI1LDUwLjg4NDMgMjYuMjI1LDUwLjA1NzMgQzI2LjIyNSw0OS4xNDIzIDI2LjM3Myw0OC4yNzczIDI2LjY2Myw0Ny40ODkzIEMyNi45NTMsNDYuNzA4MyAyNy4zNjYsNDYuMDIzMyAyNy44OTUsNDUuNDU1MyBDMjguNDIzLDQ0Ljg4NjMgMjkuMDczLDQ0LjQzMzMgMjkuODI5LDQ0LjEwNjMgQzMxLjMzOCw0My40NTMzIDMzLjQ2LDQzLjQ1MzMgMzQuOTczLDQ0LjEwNjMgQzM1LjYxMyw0NC4zODQzIDM2LjE4OCw0NC43NjUzIDM2LjY3OSw0NS4yNDAzIEMzNi44NzgsNDUuNDMyMyAzNy4xODcsNDUuNDU1MyAzNy40MTEsNDUuMjk2MyBMMzguNTkzLDQ0LjQ2MTMgQzM4LjczLDQ0LjM2MzMgMzguODE4LDQ0LjIwOTMgMzguODMzLDQ0LjA0MTMiIGlkPSJGaWxsLTMxIiBmaWxsPSIjMjgzQzY0Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _organisms_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organisms/Header */ "./components/organisms/Header/index.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");





var LayoutInner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MyLayout__LayoutInner",
  componentId: "sc-1d2bbzs-0"
})(["display:flex;padding:0px 0 0px 0px;max-width:1024px;margin:auto;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "MyLayout__Content",
  componentId: "sc-1d2bbzs-1"
})(["flex:1;margin:40px 0 0;padding:0px 40px;max-width:700px;overflow:hidden;"]);
var BaseStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MyLayout__BaseStyles",
  componentId: "sc-1d2bbzs-2"
})(["font-family:'Roboto';color:", ";line-height:", ";"], Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.black'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('lineHeights.l'));

var Layout = function Layout(_ref) {
  var sidebar = _ref.sidebar,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseStyles, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LayoutInner, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: sidebar
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atoms_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./atoms/Logo */ "./components/atoms/Logo/index.js");






var nanoid = __webpack_require__(/*! nanoid */ "nanoid");

var SidebarStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.aside.withConfig({
  displayName: "Sidebar__SidebarStyles",
  componentId: "sc-9qm6jw-0"
})(["flex-shrink:0;min-height:calc(100vh - 80px);padding-right:0px;box-sizing:content-box;border-right:1px solid rgb(210,210,210);min-width:200px;"]);
var SubMenu = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul.withConfig({
  displayName: "Sidebar__SubMenu",
  componentId: "sc-9qm6jw-1"
})(["list-style:none;padding:0;padding-left:20px;padding-right:20px;margin:40px 0 0;font-size:20px;position:sticky;top:40px;"]);
var SubMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li.withConfig({
  displayName: "Sidebar__SubMenuItem",
  componentId: "sc-9qm6jw-2"
})(["margin-bottom:23px;a{padding-left:0;background-color:transparent;color:inherit;text-decoration:none;}a.active{font-weight:700;}"]);
var StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_atoms_Logo__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "Sidebar__StyledLogo",
  componentId: "sc-9qm6jw-3"
})(["margin-left:10px;"]);

var PostLink = function PostLink(_ref) {
  var id = _ref.id,
      slug = _ref.slug,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubMenuItem, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: "/".concat(slug),
    href: "/post?id=".concat(id, "&title=").concat(title, "&slug=").concat(slug)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, title)));
};

var Sidebar = function Sidebar(_ref2) {
  var data = _ref2.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SidebarStyles, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLogo, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubMenu, null, data.map(function (article) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostLink, {
      key: nanoid(),
      id: article.sys.id,
      slug: article.fields.slug,
      title: article.fields.title
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/atoms/Box/Box.js":
/*!*************************************!*\
  !*** ./components/atoms/Box/Box.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clean_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clean-tag */ "clean-tag");
/* harmony import */ var clean_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clean_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(clean_tag__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "Box__StyledBox",
  componentId: "sc-1jffehg-0"
})(["", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";"], styled_system__WEBPACK_IMPORTED_MODULE_3__["space"], styled_system__WEBPACK_IMPORTED_MODULE_3__["width"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_3__["color"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontStyle"], styled_system__WEBPACK_IMPORTED_MODULE_3__["letterSpacing"], styled_system__WEBPACK_IMPORTED_MODULE_3__["display"], styled_system__WEBPACK_IMPORTED_MODULE_3__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_3__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_3__["height"], styled_system__WEBPACK_IMPORTED_MODULE_3__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["verticalAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_3__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_3__["alignContent"], styled_system__WEBPACK_IMPORTED_MODULE_3__["justifyItems"], styled_system__WEBPACK_IMPORTED_MODULE_3__["justifySelf"], styled_system__WEBPACK_IMPORTED_MODULE_3__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_3__["order"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flexBasis"], styled_system__WEBPACK_IMPORTED_MODULE_3__["gridGap"], styled_system__WEBPACK_IMPORTED_MODULE_3__["gridRowGap"], styled_system__WEBPACK_IMPORTED_MODULE_3__["gridColumnGap"], styled_system__WEBPACK_IMPORTED_MODULE_3__["gridColumn"], styled_system__WEBPACK_IMPORTED_MODULE_3__["gridRow"], styled_system__WEBPACK_IMPORTED_MODULE_3__["gridArea"], styled_system__WEBPACK_IMPORTED_MODULE_3__["gridAutoFlow"], styled_system__WEBPACK_IMPORTED_MODULE_3__["gridAutoRows"], styled_system__WEBPACK_IMPORTED_MODULE_3__["gridAutoColumns"], styled_system__WEBPACK_IMPORTED_MODULE_3__["gridTemplateRows"], styled_system__WEBPACK_IMPORTED_MODULE_3__["gridTemplateColumns"], styled_system__WEBPACK_IMPORTED_MODULE_3__["gridTemplateAreas"], styled_system__WEBPACK_IMPORTED_MODULE_3__["background"], styled_system__WEBPACK_IMPORTED_MODULE_3__["backgroundImage"], styled_system__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"], styled_system__WEBPACK_IMPORTED_MODULE_3__["backgroundPosition"], styled_system__WEBPACK_IMPORTED_MODULE_3__["backgroundRepeat"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_3__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_3__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_3__["opacity"], styled_system__WEBPACK_IMPORTED_MODULE_3__["overflow"], styled_system__WEBPACK_IMPORTED_MODULE_3__["position"], styled_system__WEBPACK_IMPORTED_MODULE_3__["zIndex"], styled_system__WEBPACK_IMPORTED_MODULE_3__["top"], styled_system__WEBPACK_IMPORTED_MODULE_3__["right"], styled_system__WEBPACK_IMPORTED_MODULE_3__["bottom"], styled_system__WEBPACK_IMPORTED_MODULE_3__["left"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textStyle"], styled_system__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], styled_system__WEBPACK_IMPORTED_MODULE_3__["buttonStyle"]);

var Box = function Box(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBox, props);
};

Box.propTypes = _objectSpread({}, styled_system__WEBPACK_IMPORTED_MODULE_3__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["width"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["color"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["fontFamily"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["fontStyle"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["letterSpacing"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["display"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["maxWidth"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["minWidth"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["height"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["maxHeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["minHeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["verticalAlign"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["justifyContent"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["flexWrap"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["flexDirection"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["flex"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["alignContent"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["justifyItems"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["justifySelf"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["alignSelf"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["order"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["flexBasis"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["gridGap"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["gridRowGap"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["gridColumnGap"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["gridColumn"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["gridRow"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["gridArea"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["gridAutoFlow"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["gridAutoRows"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["gridAutoColumns"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["gridTemplateRows"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["gridTemplateColumns"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["gridTemplateAreas"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["background"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["backgroundImage"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["backgroundSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["backgroundPosition"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["backgroundRepeat"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["borderRadius"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["borderColor"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["borders"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["boxShadow"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["opacity"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["overflow"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["position"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["zIndex"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["top"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["right"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["bottom"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["left"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["textStyle"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["colorStyle"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["buttonStyle"].propTypes);
/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "./components/atoms/Box/index.js":
/*!***************************************!*\
  !*** ./components/atoms/Box/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ "./components/atoms/Box/Box.js");

/* harmony default export */ __webpack_exports__["default"] = (_Box__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/atoms/Logo/Logo.js":
/*!***************************************!*\
  !*** ./components/atoms/Logo/Logo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/logo.svg */ "./assets/logo.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__);



var StyledSVG = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Logo__StyledSVG",
  componentId: "sc-1sriu0r-0"
})(["max-width:200px;margin:60px 20px 0px 20px;"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSVG, {
    className: "logo",
    src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "logo"
  });
});

/***/ }),

/***/ "./components/atoms/Logo/index.js":
/*!****************************************!*\
  !*** ./components/atoms/Logo/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo */ "./components/atoms/Logo/Logo.js");

/* harmony default export */ __webpack_exports__["default"] = (_Logo__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/atoms/Text/Text.js":
/*!***************************************!*\
  !*** ./components/atoms/Text/Text.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Box */ "./components/atoms/Box/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var StyledText = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Box__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "Text__StyledText",
  componentId: "nhi132-0"
})([""]);

var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledText, props);
};

Text.propTypes = _objectSpread({
  is: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['xs', 's', 'm', 'l']),
  m: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
}, _Box__WEBPACK_IMPORTED_MODULE_3__["default"].propTypes);
Text.defaultProps = {
  is: 'div',
  fontSize: 'm',
  m: '0 0 1.1em'
};
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/Text/index.js":
/*!****************************************!*\
  !*** ./components/atoms/Text/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text */ "./components/atoms/Text/Text.js");

/* harmony default export */ __webpack_exports__["default"] = (_Text__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/atoms/Title/Title.js":
/*!*****************************************!*\
  !*** ./components/atoms/Title/Title.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Box */ "./components/atoms/Box/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Box__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "Title__StyledTitle",
  componentId: "sc-1dnr8hi-0"
})(["line-height:", ";font-size:", "px;font-family:'adelle-sans';font-weight:300;"], function (_ref) {
  var size = _ref.size;
  return Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])("lineHeights.heading.".concat(size));
}, function (_ref2) {
  var size = _ref2.size;
  return Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])("fontSizes.heading.".concat(size));
});

var Title = function Title(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTitle, props);
};

Title.propTypes = _objectSpread({}, _Box__WEBPACK_IMPORTED_MODULE_4__["default"].propTypes, {
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  is: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div']),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  m: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});
Title.defaultProps = {
  is: 'h2',
  size: 'h2',
  fontWeight: 'bold',
  m: '0 0 30px'
};
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./components/atoms/Title/index.js":
/*!*****************************************!*\
  !*** ./components/atoms/Title/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Title */ "./components/atoms/Title/Title.js");

/* harmony default export */ __webpack_exports__["default"] = (_Title__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/organisms/Header/Header.js":
/*!***********************************************!*\
  !*** ./components/organisms/Header/Header.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, "Header");
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/organisms/Header/index.js":
/*!**********************************************!*\
  !*** ./components/organisms/Header/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/organisms/Header/Header.js");

/* harmony default export */ __webpack_exports__["default"] = (_Header__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @contentful/rich-text-html-renderer */ "@contentful/rich-text-html-renderer");
/* harmony import */ var _contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @contentful/rich-text-types */ "@contentful/rich-text-types");
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nanoid */ "nanoid");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_dataFetching__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/dataFetching */ "./util/dataFetching.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_atoms_Title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/atoms/Title */ "./components/atoms/Title/index.js");
/* harmony import */ var _components_atoms_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/atoms/Text */ "./components/atoms/Text/index.js");
/* harmony import */ var _components_atoms_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/atoms/Box */ "./components/atoms/Box/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../style.scss */ "./style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_12__);



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var options = {
  renderNode: _defineProperty({}, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_3__["BLOCKS"].EMBEDDED_ASSET, function (node) {
    return "<img class=\"img\" src=\"".concat(node.data.target.sys.id, "\" id=\"\" alt='oi' />");
  })
};
var StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_components_atoms_Title__WEBPACK_IMPORTED_MODULE_9__["default"]).withConfig({
  displayName: "post__StyledTitle",
  componentId: "fmjhvh-0"
})(["font-family:'adelle-sans';"]);

var swapUrlForID =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(string, slug) {
    var newString, assetArray;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newString = string;
            assetArray = Object(_util_dataFetching__WEBPACK_IMPORTED_MODULE_7__["getAssets"])(slug).then(function (assets) {
              return assets.map(function (a) {
                var obj = {};
                obj.id = a.sys.id;
                obj.url = a.fields.file.url;
                return obj;
              });
            }).then(function (a) {
              return a.map(function (object) {
                return newString.replace(object.id, object.url);
              });
            });
            return _context.abrupt("return", assetArray);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function swapUrlForID(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var Content = function Content(_ref2) {
  var content = _ref2.content,
      title = _ref2.title,
      slug = _ref2.slug;

  if (Array.isArray(content)) {
    content = content.toString();
  }

  var parsed = html_react_parser__WEBPACK_IMPORTED_MODULE_5___default()(content);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_atoms_Title__WEBPACK_IMPORTED_MODULE_9__["default"], {
    is: "h2",
    size: "h2"
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_atoms_Box__WEBPACK_IMPORTED_MODULE_11__["default"], null, parsed));
};

var Page = function Page(_ref3) {
  var sidebar = _ref3.sidebar,
      data = _ref3.data,
      title = _ref3.title,
      slug = _ref3.slug;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sidebar: sidebar
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
    title: title,
    content: data,
    slug: slug
  }));
};

Page.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(props) {
    var sidebar, data, htmlString, newdata;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_util_dataFetching__WEBPACK_IMPORTED_MODULE_7__["getAllPosts"])();

          case 2:
            sidebar = _context2.sent;
            _context2.next = 5;
            return Object(_util_dataFetching__WEBPACK_IMPORTED_MODULE_7__["getSinglePost"])(props);

          case 5:
            data = _context2.sent;
            htmlString = Object(_contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_2__["documentToHtmlString"])(data.data.content, options);

            if (!data.assets) {
              _context2.next = 12;
              break;
            }

            _context2.next = 10;
            return swapUrlForID(htmlString, props.query.slug);

          case 10:
            newdata = _context2.sent;
            return _context2.abrupt("return", {
              sidebar: sidebar.data,
              data: newdata,
              title: data.data.title,
              slug: props.query.slug
            });

          case 12:
            return _context2.abrupt("return", {
              sidebar: sidebar.data,
              data: htmlString,
              title: data.data.title,
              slug: props.query.slug
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./util/dataFetching.js":
/*!******************************!*\
  !*** ./util/dataFetching.js ***!
  \******************************/
/*! exports provided: getSinglePost, getAllPosts, getAssets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSinglePost", function() { return getSinglePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssets", function() { return getAssets; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var getSinglePost =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
    var res, json, assets;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("https://cdn.contentful.com/spaces/g0l9uemxdyxt/environments/master/entries?access_token=7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3&content_type=guide&fields.slug=".concat(props.query.slug, "&include=1"));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            json = _context.sent;

            if (!json.includes) {
              _context.next = 9;
              break;
            }

            assets = json.includes.Asset;
            return _context.abrupt("return", {
              data: json.items[0].fields,
              assets: assets
            });

          case 9:
            return _context.abrupt("return", {
              data: json.items[0].fields
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSinglePost(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getAllPosts =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()('https://cdn.contentful.com/spaces/g0l9uemxdyxt/environments/master/entries?access_token=7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3');

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            json = _context2.sent;
            return _context2.abrupt("return", {
              data: json.items
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAllPosts() {
    return _ref2.apply(this, arguments);
  };
}();

var getAssets =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(slug) {
    var res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("https://cdn.contentful.com/spaces/g0l9uemxdyxt/environments/master/entries?access_token=7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3&content_type=guide&fields.slug=".concat(slug, "&include=1"));

          case 2:
            res = _context3.sent;
            _context3.next = 5;
            return res.json();

          case 5:
            json = _context3.sent;
            return _context3.abrupt("return", json.includes.Asset);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getAssets(_x2) {
    return _ref3.apply(this, arguments);
  };
}();



/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/post.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/post.js */"./pages/post.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@contentful/rich-text-html-renderer":
/*!******************************************************!*\
  !*** external "@contentful/rich-text-html-renderer" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@contentful/rich-text-html-renderer");

/***/ }),

/***/ "@contentful/rich-text-types":
/*!**********************************************!*\
  !*** external "@contentful/rich-text-types" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@contentful/rich-text-types");

/***/ }),

/***/ "clean-tag":
/*!****************************!*\
  !*** external "clean-tag" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clean-tag");

/***/ }),

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "nanoid":
/*!*************************!*\
  !*** external "nanoid" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nanoid");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ })

/******/ });
//# sourceMappingURL=post.js.map