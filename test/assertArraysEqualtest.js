const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;



describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for [1, 2, 3, 4], [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3, 4], [1, 2, 3]), false);
  });
});