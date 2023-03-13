const middle = function(array){
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
  return newArr;
}

module.exports = middle;