'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RequestParams = require('./RequestParams');

var _RequestParams2 = _interopRequireDefault(_RequestParams);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _locktripSvcLayer = require('locktrip-svc-layer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestSender = function () {
  function RequestSender(storage, config) {
    var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, RequestSender);

    this._storage = storage;
    this.config = config;
    this.RequestParams = new _RequestParams2.default(storage, config, headers);
    this.onServerResponse = this.onServerResponse.bind();
    this.onServerError = this.onServerError.bind();
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
    key: 'sendRequest',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(endpoint, method) {
        var postObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var captchaToken = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var config = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var methodRef, requestConfig;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                methodRef = this.RequestParams[method].bind(this.RequestParams);
                _context.next = 3;
                return methodRef(postObj, captchaToken);

              case 3:
                requestConfig = _context.sent;


                if (config != null) {
                  // delete requestConfig.headers; // 2018-12-20 commented by Alex K - added headers from login as parameter. This particular line is not known what it does.
                  requestConfig.headers = Object.assign(requestConfig.headers, config);
                }
                config = requestConfig;

                if (_locktripSvcLayer.DEBUG) console.info('[SERVER] ' + method + ' - ' + endpoint);

                if (!(method == 'GET')) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt('return', _axios2.default.get(endpoint, config).then(this.onServerResponse).catch(this.onServerError));

              case 11:
                return _context.abrupt('return', _axios2.default.post(endpoint, postObj, config).then(this.onServerResponse).catch(this.onServerError));

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function sendRequest(_x5, _x6) {
        return _ref.apply(this, arguments);
      }

      return sendRequest;
    }()
  }, {
    key: 'onServerResponse',
    value: function onServerResponse(response) {
      var _this = this;

      var data = response.data,
          status = response.status,
          config = response.config;

      var success = status == 200;

      if (_locktripSvcLayer.DEBUG) console.info('[SERVER]         Response - ' + config.method.toUpperCase() + ' -  ' + config.url, { response: response });

      var body = {},
          errors = {};

      if (success) {
        body = new Promise(function (resolve, reject) {
          resolve(data);
        });
      } else {
        errors = new Promise(function (resolve, reject) {
          _this.checkExpiredJwtAndLogOff(data);
          resolve(data);
        });
      }

      return { body: body, success: success, errors: errors };
    }
  }, {
    key: 'onServerError',
    value: function onServerError(error) {
      console.warn('[requester] server error - ' + error.message, { error: error });
    }
  }, {
    key: 'checkExpiredJwtAndLogOff',
    value: function checkExpiredJwtAndLogOff(r) {
      if (r.errors && r.errors.ExpiredJwt) {
        this._storage.removeItem(this.config.domainPrefix + '.auth.locktrip');
        this._storage.removeItem(this.config.domainPrefix + '.auth.username');
      }
    }
  }]);

  return RequestSender;
}();

exports.default = RequestSender;