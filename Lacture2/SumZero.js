function getSumZero(array) {
  let left = 1;
  let right = array.length - 1;
  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
const result = getSumZero([-5, -3, -4, -2, 0, 2, 4, 6, 8]);
console.log(result); // o(n) linear time complexity



function getSumZero1(array) {
  for (let number of array) {
    // we have used for of loop
    console.log("outer loop") // it will check how many time of going of loop
    for (let i = 1; i < array.length; i++) {
        console.log("inner loop") // it will check how many time of going of loop
      if (number + array[i] === 0) {
        return [number, array[i]];
      }
    }
  }
}
const result1 = getSumZero1([-5, -3, -4, -2, 0, 1, 2, 4, 6, 7]);
console.log(`result is ${result}`); // time complexity o(n^2)
