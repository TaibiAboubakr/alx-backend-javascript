// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when inputs are 1.4 and 2.5 (first number rounded down, second number rounded up)', function() {
    assert.strictEqual(calculateNumber(1.4, 2.5), 4);
  });

  it('should return 5 when inputs are 1.5 and 2.5 (both numbers rounded up)', function() {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('should return 6 when inputs are 2.6 and 3.3 (first number rounded up, second number rounded down)', function() {
    assert.strictEqual(calculateNumber(2.6, 3.3), 6);
  });

  it('should return 0 when inputs are 0.1 and -0.1 (both numbers rounded down)', function() {
    assert.strictEqual(calculateNumber(0.1, -0.1), 0);
  });

  it('should return -3 when inputs are -1.4 and -1.5 (first number rounded down, second number rounded down)', function() {
    assert.strictEqual(calculateNumber(-1.4, -1.5), -3);
  });

  it('should return -3 when inputs are -1.6 and -1.5 (first number rounded up, second number rounded down)', function() {
    assert.strictEqual(calculateNumber(-1.6, -1.5), -3);
  });
  
  it('should return -3 when inputs are -1.5 and -1.5 (both numbers rounded down)', function() {
    assert.strictEqual(calculateNumber(-1.5, -1.5), -3);
  });
});
