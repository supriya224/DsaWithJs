// anagram is the word or phrase  formate by rearranging the letters of
//  a different qord or phrase., using all the original letter exactly once

const isAnagram = function (s, t) {
  s = s.split(" ").sort().join(" ");
  t = t.split(" ").sort().join(" ");
  return s === t;
};
const res = isAnagram(hello);
console.log(res);
