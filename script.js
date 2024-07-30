function getCount(str) {
  var count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let p = 0; p < str.length; p++) {
    for (let i = 0; i < vowels.length; i++) {
      if (str[p] === vowels[i]) {
        count++;
      }
    }
  }
  return count;
}
console.log(getCount("abracadabra"));
