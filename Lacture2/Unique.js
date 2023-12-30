function uniqArray(array) {
  if (array.length > 0) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) { // it will check arrray i equal to array j or not
        i++;  // incremnt to next element of aaray
        array[i] = array[j]; // it will be store the value in array i
      }
    }
    return i + 1; 
  } else {
    throw new Error("Array is empty");
  }
}
const result = uniqArray([1, 1, 2, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9]);
console.log(result);
