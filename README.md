# Satchel - A Bag of Keys

The purpose of this module is to generate public and private keys.  When the keys are generated they are cached for future use.

## Installation

NPM Installation

```js
npm install @leisurelink/satchel --save
```

## Usage

Using satchel is pretty easy.  Interaction with the module is performed via the .keys();

### Example

```js
import Satchel from '@leisurelink/satchel';

Satchel.keys().then((keys) => {
	keys.privateKey; // Usually a .pem file
	keys.publicKey; // Usuallly a .pub file
});
```

## API


### .keys() -> Promise<{ privateKey, publicKey }>

Returns the generated public and private key.  Recalling this function will return the same keys.

### .reset()

This will reset the keys, and is intended only to be utilized in testing the regeneration of keys.

