'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _pem = require('pem');

var _pem2 = _interopRequireDefault(_pem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } step("next"); }); }; }

_bluebird2.default.promisifyAll(_pem2.default);

const generatePrivateKey = (function () {
  var ref = _asyncToGenerator(function* () {
    var _ref = yield _pem2.default.createCertificateAsync();

    let serviceKey = _ref.serviceKey;

    return serviceKey;
  });

  return function generatePrivateKey() {
    return ref.apply(this, arguments);
  };
})();

const generatePublicKey = (function () {
  var ref = _asyncToGenerator(function* (privateKey) {
    var _ref2 = yield _pem2.default.getPublicKeyAsync(privateKey);

    let publicKey = _ref2.publicKey;

    return publicKey;
  });

  return function generatePublicKey(_x) {
    return ref.apply(this, arguments);
  };
})();

const generateKeys = (function () {
  var ref = _asyncToGenerator(function* () {
    const privateKey = yield generatePrivateKey();
    const publicKey = yield generatePublicKey(privateKey);
    return { privateKey, publicKey };
  });

  return function generateKeys() {
    return ref.apply(this, arguments);
  };
})();

let _keys;
exports.default = {

  keys() {
    return _asyncToGenerator(function* () {
      if (!_keys) {
        _keys = yield generateKeys();
      }

      return _keys;
    })();
  },

  reset() {
    _keys = null;
  }
};