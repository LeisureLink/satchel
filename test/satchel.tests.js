'use strict';

const Sachel = require('../');

describe('sachel', () => {

  let sachel;
  before(() => {
    sachel = new Sachel();
    expect(sachel).to.be.ok;
  });

  it('initializes pem file in memory', (done) => {

    sachel.initialize()
      .then((data) => {

        expect(data.csr).to.be.ok;
        expect(data.csr).to.contain('-----BEGIN CERTIFICATE REQUEST-----');

        expect(data.clientKey).to.be.ok;
        expect(data.clientKey).to.contain('-----BEGIN RSA PRIVATE KEY-----');

        expect(data.certificate).to.be.ok;
        expect(data.certificate).to.contain('-----BEGIN CERTIFICATE-----');

        done();
      })
      .catch(done);
  });
});