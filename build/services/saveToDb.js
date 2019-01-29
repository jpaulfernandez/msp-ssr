"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveToDB = void 0;

var _database = require("../database");

var saveToDB = function saveToDB(user) {
  console.log('saving user');
  (0, _database.SaveUser)(user);
};

exports.saveToDB = saveToDB;