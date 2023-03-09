const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔Assertion Failed: ${actual} !== ${expected}`);
  }
};



const countLetters = function(string){
  const charMap = {};
  for(let char of string){
    if(charMap[char]){
      charMap[char] = charMap[char] +1
    } else {
      charMap[char] = 1
    }
  }
  return charMap;
}
console.log(countLetters('piza'));