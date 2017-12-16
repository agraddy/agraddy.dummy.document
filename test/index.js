var path = require('path');
process.chdir(path.dirname(__filename));
var tap = require('agraddy.test.tap')(__filename);

var mod = require('../');

var document = mod;

tap.assert.equal(typeof document, 'object', 'Should be an object.');

tap.assert.equal(typeof document.querySelector, 'function', 'querySelector.');

tap.assert.equal(typeof document.querySelector().addEventListener, 'function', 'addEventListener');


