#!/usr/bin/node
// 2-calcul_chai.test.js

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 4 when inputs are SUM, 1.4 and 2.5', function() {
      expect(calculateNumber('SUM', 1.4, 2.5)).to.equal(4);
    });

    it('should return 5 when inputs are SUM, 1.5 and 2.5', function() {
      expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -1 when inputs are SUBTRACT, 1.4 and 2.5', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 2.5)).to.equal(-1);
    });

    it('should return -1 when inputs are SUBTRACT, 1.5 and 2.5', function() {
      expect(calculateNumber('SUBTRACT', 1.5, 2.5)).to.equal(-1);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.5 when inputs are DIVIDE, 1.4 and 2.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 2.5)).to.equal(0.5);
    });

    it('should return 0.6 when inputs are DIVIDE, 1.5 and 2.5', function() {
      expect(calculateNumber('DIVIDE', 1.5, 2.5)).to.equal(0.6);
    });

    it('should return Error when inputs are DIVIDE, 1.4 and 0.4', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
    });
  });

  describe('Invalid type', function() {
    it('should return Invalid type when type is invalid', function() {
      expect(calculateNumber('INVALID', 1.4, 2.5)).to.equal('Invalid type');
    });
  });
});
