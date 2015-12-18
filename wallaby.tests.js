'use strict';

module.exports = () => {
  return {
    files: [
      'index.js',
      'lib/**/*',
      'test/**/*',
      { pattern: '**/*.tests.js', ignore: true }
    ],
    tests: [
      '**/*.tests.js'
    ],
    env: {
      type: 'node'
    },
    bootstrap: () => {
      require('./test/helper');
    }
  }
};