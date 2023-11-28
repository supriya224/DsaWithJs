let data = [2, 3, 5, 6, 1, 19, 0];
let item = 1;
let index =undefined
for (i = 0; i <=data.length; i++) {
  if (data[i] == item) {
    // data[i] = item;
    index=i
    break; 
  }
}
// console.log(item);
console.log(index)
// console.log(data.indexOf(item)); // use of indexOf for search element in array

// let data=[23,45,12,67,89,0,30,50,20];
// let item=89;
// index=undefined
// for(let i=0;i<data.length-1; i++){
//     // console.log(data[i]);

// if(data[i]===item){
//     index=i

// }
// }
// // with the help of splice we can =easily delete items
// data.splice(4,2);
// console.log(data)
