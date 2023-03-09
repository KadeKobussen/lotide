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



const words = ["ground", "control", "to", "major", "tom"];


const map =(array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));

  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, word => word.length);
console.log(results2);

assertArraysEqual(map(words, word => word.length), [ 6, 7, 2, 5, 3 ]);

const results3 = map(words, word => word.toUpperCase());
console.log(results3);

assertArraysEqual(map(words, word => word.toUpperCase()), [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ])