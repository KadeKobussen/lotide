
let reverse = function(word){
  let reversed = '';
  for(let i = word.length-1; i >= 0; i--){
    reversed += word[i];
  }
  return reversed
 } 
 for (let i = 2; i < process.argv.length; i++) {
  console.log(reverse(process.argv[i]));
 }
