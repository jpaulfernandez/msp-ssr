webpackHotUpdate("static/development/pages/customer/client.js",{

/***/ "./pages/customer/client.js":
/*!**********************************!*\
  !*** ./pages/customer/client.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "../node_modules/next/node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _component_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../component/wrapper */ "./component/wrapper/index.js");
/* harmony import */ var _component_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../component/typography */ "./component/typography/index.js");
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/InputGroup */ "../node_modules/react-bootstrap/InputGroup.js");
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/es/index.js");














var App =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(App, _React$Component);

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(App, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ctx) {
        var title, subLink;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                title = "CUSTOMER";
                subLink = [{
                  path: '/customer',
                  label: 'View All'
                }, {
                  path: '/customer/client',
                  label: 'Add New Client'
                }];
                return _context.abrupt("return", {
                  path: ctx.asPath,
                  title: title,
                  subLink: subLink,
                  query: ctx.query
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function App() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, App);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(App).call(this));

    _this.handleOnFormChange = function (event) {
      var name = event.target.name;
      var value = event.target.value;
      var client = _this.state.client;
      console.log(value);
      client[name] = value;

      _this.setState({
        client: client
      });
    };

    _this.handleSave = function (event) {
      alert('saving...');

      var client = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.client);

      console.log('inserting user');
      fetch('/api/client', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(client)
      }).then(function (res) {
        alert('saved!');
        console.log('logging result');
        console.log(res.json());
      });
    };

    _this.initiateState();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(App, [{
    key: "getUserView",
    value: function getUserView() {
      var _this2 = this;

      if (this.props.query.id) {
        console.log(this.props.query.id);
        var id = this.props.query.id;
        fetch("/api/client?id=".concat(id)).then(function (data) {
          data.json().then(function (d) {
            console.log(d[0]);

            _this2.setState({
              client: d[0]
            });

            _this2.setState({
              action: 'update'
            });
          });
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getUserView();
    }
  }, {
    key: "initiateState",
    value: function initiateState() {
      this.state = {
        action: 'new',
        client: {
          customerId: '',
          firstName: '',
          lastName: '',
          midName: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          province: '',
          birthday: '',
          civilStatus: '',
          dateCreated: '',
          spouseFirstName: '',
          spouseLastName: '',
          spouseMidName: '',
          businessName: '',
          businessIndustry: '',
          businessAddress: '',
          businessCity: '',
          businessProvince: '',
          businessNotes: '',
          digitalSignature: '',
          files: '',
          profile: '',
          status: ''
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_wrapper__WEBPACK_IMPORTED_MODULE_9__["Container"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_wrapper__WEBPACK_IMPORTED_MODULE_9__["Card"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_wrapper__WEBPACK_IMPORTED_MODULE_9__["Card"].Head, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 3
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 9
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 8
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_typography__WEBPACK_IMPORTED_MODULE_10__["CardName"], null, this.state.action === 'new' ? 'Add New Client' : "".concat(this.state.client.firstName, " ").concat(this.state.client.lastName))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_wrapper__WEBPACK_IMPORTED_MODULE_9__["Card"].Body, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 3
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://png.icons8.com/color/200/000000/user.png"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("video", {
        id: "capture-id",
        autoPlay: true
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 9
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_typography__WEBPACK_IMPORTED_MODULE_10__["PageNameSub"], null, "Client Information"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 4
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "First Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "text",
        name: "firstName",
        value: this.state.client.firstName,
        onChange: this.handleOnFormChange
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 4
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "Middle Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "text",
        name: "midName",
        value: this.state.client.midName,
        onChange: this.handleOnFormChange
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 4
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "Last Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "text",
        name: "lastName",
        value: this.state.client.lastName,
        onChange: this.handleOnFormChange
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 12
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "Address Line 1"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "text",
        name: "addressLine1",
        value: this.state.client.addressLine1,
        onChange: this.handleOnFormChange
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 12
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "Address Line 2"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "text",
        name: "addressLine2",
        value: this.state.client.addressLine1,
        onChange: this.handleOnFormChange
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 6
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "City / Municipality"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "text",
        name: "city",
        value: this.state.client.city,
        onChange: this.handleOnFormChange
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 6
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "Province"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "text",
        name: "province",
        value: this.state.client.province,
        onChange: this.handleOnFormChange
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 6
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "Birthday"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "text",
        name: "birthday",
        value: this.state.client.birthday,
        onChange: this.handleOnFormChange
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 6
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "Civil Status"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        as: "select",
        name: "civilStatus",
        value: this.state.client.civilStatus,
        onChange: this.handleOnFormChange
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: ""
      }, "-"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "single"
      }, "Single"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "married"
      }, "Married"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_typography__WEBPACK_IMPORTED_MODULE_10__["PageNameSub"], null, "Spouse Information"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 4
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "First Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "text",
        name: "spouseFirstName",
        value: this.state.client.spouseFirstName,
        onChange: this.handleOnFormChange
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 4
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "Middle Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "text",
        name: "spouseMidName",
        value: this.state.client.spouseMidName,
        onChange: this.handleOnFormChange
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 4
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "Last Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "text",
        name: "spouseLastName",
        value: this.state.client.spouseLastName,
        onChange: this.handleOnFormChange
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_typography__WEBPACK_IMPORTED_MODULE_10__["PageNameSub"], null, "Business Information"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 6
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "Business Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "text",
        name: "businessName",
        value: this.state.client.businessName,
        onChange: this.handleOnFormChange
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 6
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "Business Industry"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "text",
        name: "businessIndustry",
        value: this.state.client.businessIndustry,
        onChange: this.handleOnFormChange
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 12
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "Business Address"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "text",
        name: "businessAddress",
        value: this.state.client.businessAddress,
        onChange: this.handleOnFormChange
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 6
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "City / Municipality"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "text",
        name: "businessCity",
        value: this.state.client.businessName,
        onChange: this.handleOnFormChange
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 6
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "Province"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "text",
        name: "businessProvince",
        value: this.state.client.businessIndustry,
        onChange: this.handleOnFormChange
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 6
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_typography__WEBPACK_IMPORTED_MODULE_10__["PageNameSub"], null, "Digital Documents")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 6
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_typography__WEBPACK_IMPORTED_MODULE_10__["PageNameSub"], null, "Digital Signature"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 6
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "file",
        name: "files",
        value: this.state.client.files,
        onChange: this.handleOnFormChange
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 6
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        type: "file",
        name: "digitalSignature",
        value: this.state.client.digitalSignature,
        onChange: this.handleOnFormChange
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 12
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormLabel"], null, "Notes"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        as: "textarea",
        name: "businessNotes",
        value: this.state.client.businessNotes,
        onChange: this.handleOnFormChange
      }))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_wrapper__WEBPACK_IMPORTED_MODULE_9__["Card"].Footer, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        lg: 4
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleSave
      }, "Save")))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/customer/client")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=client.js.057a3340e16da245e022.hot-update.js.map