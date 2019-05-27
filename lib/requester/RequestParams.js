'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestParams = function () {
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
    key: 'getAllHeaders',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
                return _context.abrupt('return', _context.t0.assign.call(_context.t0, _context.t1, _context.t2));

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAllHeaders() {
        return _ref.apply(this, arguments);
      }

      return getAllHeaders;
    }()

    /**
     * 
     * @returns {Object}
     * 
     */

  }, {
    key: 'getAuthHeader',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var authorization;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._storage.getItem(this.config.domainPrefix + '.auth.locktrip');

              case 2:
                authorization = _context2.sent;
                return _context2.abrupt('return', authorization ? { 'Authorization': authorization } : {});

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAuthHeader() {
        return _ref2.apply(this, arguments);
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
    key: 'getCaptchaHeader',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(captcha) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return', captcha ? { 'Captcha': captcha } : {});

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getCaptchaHeader(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getCaptchaHeader;
    }()

    /**
     * 
     * @returns {Object}
     * 
     */

  }, {
    key: 'GET',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getAllHeaders();

              case 2:
                _context4.t0 = _context4.sent;
                return _context4.abrupt('return', {
                  headers: _context4.t0,
                  method: 'GET'
                });

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function GET() {
        return _ref4.apply(this, arguments);
      }

      return GET;
    }()

    /**
     * 
     * @returns {Object}
     * 
     */

  }, {
    key: 'DELETE',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getAllHeaders();

              case 2:
                _context5.t0 = _context5.sent;
                return _context5.abrupt('return', {
                  headers: _context5.t0,
                  method: 'DELETE'
                });

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function DELETE() {
        return _ref5.apply(this, arguments);
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
    key: 'POST',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(object, captchaToken) {
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
                return _context6.abrupt('return', {
                  headers: _context6.t4,
                  method: 'POST',
                  body: _context6.t5
                });

              case 15:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function POST(_x3, _x4) {
        return _ref6.apply(this, arguments);
      }

      return POST;
    }()
  }]);

  return RequestParams;
}();

exports.default = RequestParams;