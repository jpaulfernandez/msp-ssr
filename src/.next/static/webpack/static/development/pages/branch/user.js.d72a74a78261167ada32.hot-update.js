webpackHotUpdate("static/development/pages/branch/user.js",{

/***/ "./database/model/userModel.js":
/*!*************************************!*\
  !*** ./database/model/userModel.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "../node_modules/mongoose/browser.js");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose_timestamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose-timestamp */ "../node_modules/mongoose-timestamp/index.js");
/* harmony import */ var mongoose_timestamp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose_timestamp__WEBPACK_IMPORTED_MODULE_1__);


var UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  firstName: String,
  lastName: String,
  midName: String,
  civilStatus: String,
  role: String,
  birthDate: String,
  employeeId: String,
  contactNo: String,
  email: String
}); // console.log(require('mongoose-bcrypt'));
// UserSchema.plugin(timestamp);

var UserModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema);
/* harmony default export */ __webpack_exports__["default"] = (UserModel);

/***/ })

})
//# sourceMappingURL=user.js.d72a74a78261167ada32.hot-update.js.map