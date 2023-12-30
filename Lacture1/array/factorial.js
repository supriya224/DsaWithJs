let data = 5;
function factorial(item) {
  if (item == 0) {
    return 1;
  }
  return item * factorial(item - 1);
}
console.log(factorial(data));



// get  items via while loop
let items=["apple", "banana", "grapes"];
let i=0;
while(i<items.length){
    console.log(items[i])
    i++
}