(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/leave-warning"],{

/***/ "./resources/js/leave-warning.js":
/*!***************************************!*\
  !*** ./resources/js/leave-warning.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var isTimedOut = false;
var noUnsavedChanges = true;

if (window.ProcessMaker) {
  var _window$ProcessMaker = window.ProcessMaker,
      AccountTimeoutWorker = _window$ProcessMaker.AccountTimeoutWorker,
      EventBus = _window$ProcessMaker.EventBus;
  AccountTimeoutWorker && AccountTimeoutWorker.addEventListener("message", function (event) {
    if (event.data.method === "countdown" && event.data.data.time < 3) {
      isTimedOut = true;
    }
  });
  EventBus.$on("save-changes", function () {
    noUnsavedChanges = true;
  });
  EventBus.$on("new-changes", function () {
    noUnsavedChanges = false;
  });
}

window.addEventListener("beforeunload", function (event) {
  if (isTimedOut || noUnsavedChanges) {
    return;
  }

  event.preventDefault();

  var confirmationMessage = __("Are you sure you want to leave?");

  event.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+

  return confirmationMessage;
});

/***/ }),

/***/ 29:
/*!*********************************************!*\
  !*** multi ./resources/js/leave-warning.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/pianat.ai/resources/js/leave-warning.js */"./resources/js/leave-warning.js");


/***/ })

},[[29,"/js/manifest"]]]);