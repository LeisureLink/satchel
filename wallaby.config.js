'use strict';

const Fs = require('fs');
const Path = require('path');

const babelConfiguration = JSON.parse(Fs.readFileSync(Path.join(__dirname, '.babelrc')));
babelConfiguration.babel = require('babel-core');

module.exports = (wallaby) => {
  return {
    files: [
      '.babelrc',
      'index.js',
      'src/**/*',
      'test/**/*',
      { pattern: '**/*.tests.js', ignore: true },
      { pattern: 'build/**/*', ignore: true }
    ],
    tests: [
      '**/*.tests.js'
    ],
    env: {
      type: 'node'
    },
    bootstrap: () => {
      require('./test/helper')
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel(babelConfiguration)
    }
  }
};
