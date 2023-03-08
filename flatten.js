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

const flatten = function(array){
  let flattened = [];
  for(let i = 0; i < array.length; i++){
    if(Array.isArray(array[i])){
      for(let x = 0; x < array[i].length; x++){
        flattened.push(array[i][x])
      }
    } else {flattened.push(array[i])}
  }
  console.log(flattened);
  return flattened;
}
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])