"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userModel = require("./userModel");

Object.keys(_userModel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userModel[key];
    }
  });
});