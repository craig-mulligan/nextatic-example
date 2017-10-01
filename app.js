'use strict';
const schema = require('./schema');
const nextatic = require('nextatic');

(async () => {
  const conf = {
    schema
  }
  // launch server
  nextatic(conf)
  await nextatic.export()
  process.exit(0)
})()
