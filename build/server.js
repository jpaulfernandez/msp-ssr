"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _express = _interopRequireDefault(require("express"));

var _next = _interopRequireDefault(require("next"));

var _cors = _interopRequireDefault(require("cors"));

var _compression = _interopRequireDefault(require("compression"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _lruCache = _interopRequireDefault(require("lru-cache"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var Server =
/*#__PURE__*/
function () {
  function Server() {
    (0, _classCallCheck2.default)(this, Server);
    var dev = process.env.NODE_ENV !== "production";
    this.nextApp = (0, _next.default)({
      dir: './src',
      dev: dev
    });
    this.expressApp = (0, _express.default)();
    this.configureExpressServer();
    this.configureCustomNextServer(); // this.connectToMongo();

    this.ssrCache = new _lruCache.default({
      max: 100 * 1024 * 1024,

      /* cache size will be 100 MB using `return n.length` as length() function */
      length: function length(n, key) {
        return n.length;
      },
      maxAge: 1000 * 60 * 60 * 24 * 30
    });
  }

  (0, _createClass2.default)(Server, [{
    key: "configureExpressServer",
    value: function configureExpressServer() {
      this.expressApp.use(_bodyParser.default.json());
      this.expressApp.use(_bodyParser.default.urlencoded({
        extended: true
      }));
      this.expressApp.use((0, _cors.default)());
      this.expressApp.options("*", (0, _cors.default)());
      this.expressApp.use((0, _compression.default)());
      this.expressApp.use((0, _morgan.default)('common'));
      this.expressApp.use((0, _helmet.default)());
    }
  }, {
    key: "configureCustomNextServer",
    value: function configureCustomNextServer() {
      var _this = this;

      var handle = this.nextApp.getRequestHandler(); // const handle = routes.getRequestHandler(this.nextApp);

      this.nextApp.prepare().then(function () {
        //==== Use this to enable caching
        // this.expressApp.get('/_next/*', (req, res) => {
        //     /* serving _next static content using next.js handler */
        //     handle(req, res);
        // });
        // this.expressApp.get('*', (req, res) => {
        //     /* serving page */
        //     return this.renderAndCache(req, res)
        // });
        //==== Use this to disable caching 
        _this.expressApp.get('*', function (req, res) {
          handle(req, res);
        });
      });
    }
  }, {
    key: "connectToMongo",
    value: function connectToMongo() {
      var options = {
        server: {
          socketOptions: {
            keepAlive: 1
          }
        }
      };
      return _mongoose.default.connect('mongo://localhost:22107/msp', options);
    }
  }, {
    key: "getCacheKey",
    value: function getCacheKey(req) {
      return "".concat(req.path);
    }
  }, {
    key: "renderAndCache",
    value: function () {
      var _renderAndCache = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(req, res) {
        var key, html;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                key = this.getCacheKey(req); // If we have a page in the cache, let's serve it

                if (!this.ssrCache.has(key)) {
                  _context.next = 5;
                  break;
                }

                //console.log(`serving from cache ${key}`);
                res.setHeader('x-cache', 'HIT');
                res.send(this.ssrCache.get(key));
                return _context.abrupt("return");

              case 5:
                _context.prev = 5;
                _context.next = 8;
                return this.nextApp.renderToHTML(req, res, req.path, req.query);

              case 8:
                html = _context.sent;

                if (!(res.statusCode !== 200)) {
                  _context.next = 12;
                  break;
                }

                res.send(html);
                return _context.abrupt("return");

              case 12:
                // Let's cache this page
                this.ssrCache.set(key, html);
                res.setHeader('x-cache', 'MISS');
                res.send(html);
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](5);
                this.nextApp.renderError(_context.t0, req, res, req.path, req.query);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 17]]);
      }));

      function renderAndCache(_x, _x2) {
        return _renderAndCache.apply(this, arguments);
      }

      return renderAndCache;
    }()
  }], [{
    key: "Bootstrap",
    value: function Bootstrap() {
      return new Server();
    }
  }]);
  return Server;
}();

var server = Server.Bootstrap();
var _default = server.expressApp; // server.configure();

exports.default = _default;