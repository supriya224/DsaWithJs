let data = [];
let currentSize = data.length;
// let max=5;
function push(newVal) {
  //  if(currentSize>=max){
  //     console.log("no more data to push in stack", data)
  //  }
  data[currentSize] = newVal;
  currentSize += 1;
}
function pop() {
  lastRemove = [currentSize - 1];
  currentSize -= 1;
  data.length = currentSize;
  return lastRemove;
}

function reverseStr(item) {
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }
  for (let i = 0; i < item.length; i++) {
    item[i] =pop()
    // console.log(pop());
  }
}
// push(23);
// push(90)
let str = "neha";
str = str.split(""); // to convert string in to array
reverseStr(str);
console.log(str.join())
// console.log("stack", data);
