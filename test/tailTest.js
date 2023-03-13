const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [1, 3, 5, 7, 11] for [3, 5, 7, 11]", () => {
    assert.deepEqual(tail([1, 3, 5, 7, 11]), [3, 5, 7, 11]);
  });
});