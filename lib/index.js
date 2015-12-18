'use strict';

const Promise = require('bluebird');
const Pem = Promise.promisifyAll(require('pem'));

class Sachel {
  initialize() {
    return Pem.createCertificateAsync();
  }
}

module.exports = Sachel;