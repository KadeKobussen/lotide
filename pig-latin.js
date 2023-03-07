let pigLatin = function (word) {
  let atinlay = '';
  for (let i = 1; i < word.length; i++) {
    atinlay += word[i];
  }
  return atinlay + word[0] + 'ay'
}
for (let i = 2; i < process.argv.length; i++) {
 console.log(pigLatin(process.argv[i]));
}
