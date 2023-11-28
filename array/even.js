var data = [2, 3, 12, 5, 20, 43];
var temp = [];

for (let i = 0; i < data.length; i++) {
  // console.log(number[i]%2); //% eska mtlub hai reminder
  if (data[i] % 2 == 0) {
    temp.push(data[i]);
  }
}
for (let i = 0; i < temp.length; i++) {
  temp[i] = temp[i] * 2;
}
console.log(temp);
