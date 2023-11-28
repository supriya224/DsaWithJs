let data = [34, 12, 4, 5, 6, 7, 89, 20];
let data2 = [36, 23, 45, 70, 10];
let data3 = [];

for (let i = 0; i < data.length; i++) {
  data3[i] = data[i];
  for (let i = 0; i < data2.length; i++) {  
    data3[data.length + i] = data2[i];
  }
}
console.log(data3);
// console.log(data);
 

// for merging element we can use spread operator
//  data3= [...data, ...data2]; 