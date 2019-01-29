"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _saveToDb = require("./saveToDb");

Object.keys(_saveToDb).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _saveToDb[key];
    }
  });
});