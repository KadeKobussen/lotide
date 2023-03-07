const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  let newArr = [];
  for (let i = 1; i < array.length; i++)
    newArr.push(array[i]);
  console.log(newArr);
  return newArr;
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

 let reverse = function(word){
  let reversed;
  for(let i = word.length; i > 0; i++){
    reversed.push(i)

  }
 } 