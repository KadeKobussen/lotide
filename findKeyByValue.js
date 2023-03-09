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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*const findKeyByValue = function(object, value){
  let key = null;
  for(let i = 0; 0 < object.length; i++){
    if(object.keys(object[i]) === value){
      key = object.keys(object[i]);
    }
  }
  return key;
}*/

const findKeyByValue = function(object, value){
  let list = Object.keys(object)
  let ans =''
  for(let i = 0; i < list.length; i++){
    if(object[list[i]] === value){
      return list[i]
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))