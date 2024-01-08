let data = [23, 12, 56, 9, 2, 0, 5];
let temp;
function customeReverse(data, start, end) {
  console.log(data);
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    customeReverse(data, start + 1, end - 1);
  }
}
customeReverse(data, 0, data.length - 1);
