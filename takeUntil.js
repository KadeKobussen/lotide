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


const takeUntil = (array, callback) => {
  let newArr = [];
  for (let item of array) {
    if (callback(item) === true) {
      break;
    }
    newArr.push(item);
  }
  return newArr;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2])

const results2 = takeUntil(data1, x => x === 4);
console.log(results2);

assertArraysEqual(takeUntil(data1, x => x === 4), [
  1, 2, 5, 7,
  2, -1, 2
])
