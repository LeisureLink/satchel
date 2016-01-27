'use strict';

import Satchel from '../src';

describe('satchel', () => {

  afterEach(() => {
    Satchel.reset();
  });

  it('generates a public and private key', () => {
    return Satchel.keys()
      .then(keys => {
        expect(keys.privateKey).to.contain('-----BEGIN RSA PRIVATE KEY-----');
        expect(keys.publicKey).to.contain('-----BEGIN PUBLIC KEY-----');
      });
  });

  it('retains the keys after generation', () => {
    return Satchel.keys()
      .then((result) => {
        return Satchel.keys().then((result2)=> {
          expect(result).to.deep.equal(result2);
        });
      });
  });

});
