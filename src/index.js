'use strict';

import Promise from 'bluebird';
import Pem from 'pem';
Promise.promisifyAll(Pem);


const generatePrivateKey = async () => {
  let { serviceKey } = await Pem.createCertificateAsync();
  return serviceKey;
};

const generatePublicKey = async (privateKey) => {
  let { publicKey } = await Pem.getPublicKeyAsync(privateKey);
  return publicKey;
};

const generateKeys = async () => {
  const privateKey = await generatePrivateKey();
  const publicKey = await generatePublicKey(privateKey);
  return { privateKey, publicKey };
};

let keys;
export default {

  async keys() {
    if (!keys) {
      keys = await generateKeys();
    }

    return keys;
  },

  reset() {
    keys = null;
  }
};
