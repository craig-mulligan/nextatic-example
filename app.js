'use strict';
const schema = require('./schema');
const nextatic = require('nextatic');

(async () => {
  const conf = {
    schema
  }
  // launch server
  nextatic(conf)
  nextatic.dev()
})()
