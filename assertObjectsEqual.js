const eqObjects = function (obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectEquals = function(obj1,obj2){
  const inspect = require('util').inspect;
  if(eqObjects(obj1, obj2) === true){
    console.log(`💚💚💚Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`)
  } else {
    console.log(`💔💔💔Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`)}
  
}
const wow = {s:1, d:2}
const woah = {s:1, d:0}
assertObjectEquals(wow, woah)