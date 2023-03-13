
const assert = require('chai').assert;
const head   = require('../head');  

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 7 for [7, 2, 3]", () => {
    assert.strictEqual(head([7, 2, 3]), 7);
  });
  it("returns '16' for ['16', '8', '9']", () => {
    assert.strictEqual(head(['16', '8', '9']), '16'); 
  });
});