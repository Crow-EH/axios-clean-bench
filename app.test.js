'use strict'

const bench = require('./app');

test('Test Bench', () => {
  expect(bench()).toBe('Result');
});
