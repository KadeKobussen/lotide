
const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [3, 7] for [1, 3, 7, 11]", () => {
    assert.deepEqual(middle([1, 3, 7, 11]), [3, 7]);
  });
});

