"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RequestParams = _interopRequireDefault(require("./RequestParams"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RequestSender =
/*#__PURE__*/
function () {
  function RequestSender(storage, config) {
    var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, RequestSender);

    this._storage = storage;
    this.config = config;
    this.RequestParams = new _RequestParams["default"](storage, config, headers);
  }
  /**
   * 
   * @param {String} endpoint 
   * @param {Enumerator} method 
   * @param {Object} postObj 
   * @param {String} captchaToken
   * @returns {Object}
   * 
   */


  _createClass(RequestSender, [{
    key: "sendRequest",
    value: function () {
      var _sendRequest = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(endpoint, method) {
        var _this = this;

        var postObj,
            captchaToken,
            headers,
            methodRef,
            requestHeaders,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                postObj = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
                captchaToken = _args.length > 3 && _args[3] !== undefined ? _args[3] : null;
                headers = _args.length > 4 && _args[4] !== undefined ? _args[4] : null;
                methodRef = this.RequestParams[method].bind(this.RequestParams);
                _context.next = 6;
                return methodRef(postObj, captchaToken);

              case 6:
                requestHeaders = _context.sent;

                if (headers != null) {
                  // delete requestHeaders.headers; // 2018-12-20 commented by Alex K - added headers from login as parameter. This particular line is not known what it does.
                  requestHeaders.headers = Object.assign(requestHeaders.headers, headers);
                }

                headers = requestHeaders;
                return _context.abrupt("return", fetch(endpoint, headers).then(function (response) {
                  if (!response.ok) {
                    return {
                      body: {},
                      success: response.ok,
                      errors: response.json().then(function (r) {
                        _this.checkExpiredJwtAndLogOff(r);

                        return r;
                      })
                    };
                  }

                  return {
                    body: response.json(),
                    success: response.ok,
                    errors: {}
                  };
                }));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function sendRequest(_x, _x2) {
        return _sendRequest.apply(this, arguments);
      }

      return sendRequest;
    }()
  }, {
    key: "checkExpiredJwtAndLogOff",
    value: function checkExpiredJwtAndLogOff(r) {
      if (r.errors && r.errors.ExpiredJwt) {
        this._storage.removeItem("".concat(this.config.domainPrefix, ".auth.locktrip"));

        this._storage.removeItem("".concat(this.config.domainPrefix, ".auth.username"));
      }
    }
  }]);

  return RequestSender;
}();

exports["default"] = RequestSender;