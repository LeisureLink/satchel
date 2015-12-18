'use strict';

import Promise from 'bluebird';
import Satchel from '../src';

describe('satchel', () => {

  afterEach(() => {
    Satchel.reset();
  });

  it('generates a public and private key', (done) => {
    Satchel.keys()
      .then((keys) => {
        expect(keys.privateKey).to.contain('-----BEGIN RSA PRIVATE KEY-----');
        expect(keys.publicKey).to.contain('-----BEGIN PUBLIC KEY-----');
        return done();
      })
      .catch(done);
  });

  it('retains the keys after generation', (done) => {
    Satchel.keys()
      .then((result) => {
        return Satchel.keys().then((result2)=> {
          expect(result).to.deep.equal(result2);
          return done();
        });
      })
      .catch(done);
  });

});