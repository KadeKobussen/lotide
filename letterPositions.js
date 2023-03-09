const eqArrays = function (arr1, arr2) {
  let result;
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`💚💚💚Assertion Passed: ${arr1} === ${arr2}`)
  } else { console.log(`💔💔💔Assertion Failed: ${arr1} !== ${arr2}`) }

}


const letterPositions = function (sentence) {
  const charMap = {};
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i]
    if (char !== ' ') {
      if (!charMap[char]) {
        charMap[char] = [];
      }
      charMap[char].push(i)
    }
  }
  return charMap;
}

console.log(letterPositions("banana"))

assertArraysEqual(letterPositions("hello").e, [1]);