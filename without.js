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

const assertArraysEqual = function (arr1, arr2){
  if(eqArrays(arr1, arr2) === true){
    console.log(`💚💚💚Assertion Passed: ${arr1} === ${arr2}`)
  } else {console.log(`💔💔💔Assertion Failed: ${arr1} !== ${arr2}`)}
  
}

const without = function(source, itemsToRemove){
  let arrWithout = [];
  for (let i = 0; i < source.length; i++){
    if(source[i] !== itemsToRemove[i]){
      arrWithout.push(source[i])
    }
  }
  return arrWithout;
}

assertArraysEqual(without([1, 2, 3, 4], [1]), [2, 3, 4]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);