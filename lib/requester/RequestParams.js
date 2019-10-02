"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RequestParams =
/*#__PURE__*/
function () {
  function RequestParams(storage, config) {
    var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, RequestParams);

    this._storage = storage;
    this.config = config;
    this._headers = Object.assign(headers, {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
  }
  /**
   * 
   * @returns {Object}
   * 
   */


  _createClass(RequestParams, [{
    key: "getAllHeaders",
    value: function () {
      var _getAllHeaders = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = Object;
                _context.t1 = this._headers;
                _context.next = 4;
                return this.getAuthHeader();

              case 4:
                _context.t2 = _context.sent;
                return _context.abrupt("return", _context.t0.assign.call(_context.t0, _context.t1, _context.t2));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAllHeaders() {
        return _getAllHeaders.apply(this, arguments);
      }

      return getAllHeaders;
    }()
    /**
     * 
     * @returns {Object}
     * 
     */

  }, {
    key: "getAuthHeader",
    value: function () {
      var _getAuthHeader = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var authorization;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._storage.getItem("".concat(this.config.domainPrefix, ".auth.locktrip"));

              case 2:
                authorization = _context2.sent;
                return _context2.abrupt("return", authorization ? {
                  'Authorization': authorization
                } : {});

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAuthHeader() {
        return _getAuthHeader.apply(this, arguments);
      }

      return getAuthHeader;
    }()
    /**
     * 
     * @param {String} captcha 
     * @returns {Object}
     * 
     */

  }, {
    key: "getCaptchaHeader",
    value: function () {
      var _getCaptchaHeader = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(captcha) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", captcha ? {
                  'Captcha': captcha
                } : {});

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getCaptchaHeader(_x) {
        return _getCaptchaHeader.apply(this, arguments);
      }

      return getCaptchaHeader;
    }()
    /**
     * 
     * @returns {Object}
     * 
     */

  }, {
    key: "GET",
    value: function () {
      var _GET = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getAllHeaders();

              case 2:
                _context4.t0 = _context4.sent;
                return _context4.abrupt("return", {
                  headers: _context4.t0,
                  method: 'GET'
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function GET() {
        return _GET.apply(this, arguments);
      }

      return GET;
    }()
    /**
     * 
     * @returns {Object}
     * 
     */

  }, {
    key: "DELETE",
    value: function () {
      var _DELETE = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getAllHeaders();

              case 2:
                _context5.t0 = _context5.sent;
                return _context5.abrupt("return", {
                  headers: _context5.t0,
                  method: 'DELETE'
                });

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function DELETE() {
        return _DELETE.apply(this, arguments);
      }

      return DELETE;
    }()
    /**
     * 
     * @param {Object} object
     * @returns {Object}
     * 
     */

  }, {
    key: "POST",
    value: function () {
      var _POST = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(object, captchaToken) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.t0 = Object;
                _context6.next = 3;
                return this.getAllHeaders();

              case 3:
                _context6.t1 = _context6.sent;

                if (!captchaToken) {
                  _context6.next = 10;
                  break;
                }

                _context6.next = 7;
                return this.getCaptchaHeader(captchaToken);

              case 7:
                _context6.t2 = _context6.sent;
                _context6.next = 11;
                break;

              case 10:
                _context6.t2 = {};

              case 11:
                _context6.t3 = _context6.t2;
                _context6.t4 = _context6.t0.assign.call(_context6.t0, _context6.t1, _context6.t3);
                _context6.t5 = JSON.stringify(object);
                return _context6.abrupt("return", {
                  headers: _context6.t4,
                  method: 'POST',
                  body: _context6.t5
                });

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function POST(_x2, _x3) {
        return _POST.apply(this, arguments);
      }

      return POST;
    }()
  }]);

  return RequestParams;
}();

exports["default"] = RequestParams;