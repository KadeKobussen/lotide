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




const middle2 = function(array){
  let midIndex = 0;
  let midIndex2 = 0;
  let newArr = [];
  if(array.length % 2 !== 0){
    midIndex = Math.floor(array.length / 2)
    newArr.push(array[midIndex])
  } else if(array.length % 2 === 0){
    midIndex = Math.ceil(array.length / 2);
    midIndex2 = midIndex - 1;
    newArr.push(array[midIndex2], array[midIndex])
  }
  console.log(newArr);
  return newArr;
}
assertArraysEqual(middle2([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle2([1, 2, 3]), [2]);