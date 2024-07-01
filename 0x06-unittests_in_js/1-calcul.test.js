#!/usr/bin/node
// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 4 when inputs are SUM, 1.4 and 2.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.5), 4);
    });

    it('should return 5 when inputs are SUM, 1.5 and 2.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -2 when inputs are SUBTRACT, 1.4 and 2.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.5), -2);
    });

    it('should return -1 when inputs are SUBTRACT, 1.5 and 2.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2.5), -1);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.3333333333333333 when inputs are DIVIDE, 1.4 and 2.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 2.5), 0.3333333333333333);
    });

    it('should return 0.6666666666666666 when inputs are DIVIDE, 1.5 and 2.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 2.5), 0.6666666666666666);
    });

    it('should return Error when inputs are DIVIDE, 1.4 and 0.4', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });
  });

  describe('Invalid type', function() {
    it('should return Invalid type when type is invalid', function() {
      assert.strictEqual(calculateNumber('INVALID', 1.4, 2.5), 'Invalid type');
    });
  });
});
