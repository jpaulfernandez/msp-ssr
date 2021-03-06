"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _document = _interopRequireWildcard(require("next/document"));

var _styledComponents = require("styled-components");

var _react = _interopRequireDefault(require("react"));

var MyDocument =
/*#__PURE__*/
function (_Document) {
  (0, _inherits2.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck2.default)(this, MyDocument);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MyDocument).apply(this, arguments));
  }

  (0, _createClass2.default)(MyDocument, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("html", null, _react.default.createElement(_document.Head, null, _react.default.createElement("title", null, "MSP"), this.props.styleTags), _react.default.createElement("body", null, _react.default.createElement(_document.Main, null), _react.default.createElement(_document.NextScript, null)));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;
      var sheet = new _styledComponents.ServerStyleSheet();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(_react.default.createElement(App, props));
        };
      });
      var styleTags = sheet.getStyleElement();
      return (0, _objectSpread2.default)({}, page, {
        styleTags: styleTags
      });
    }
  }]);
  return MyDocument;
}(_document.default);

exports.default = MyDocument;