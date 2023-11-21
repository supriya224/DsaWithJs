function deleteEle() {
  let data = [2, 34, 56, 78, 12, 45, 5];
  let position = document.getElementById("position").value;
  position = parseInt(position);
  // console.log(data[i])
  for (i = position; i < data.length - 1; i++) {
    data[i] = data[i + 1];
  }
  data.length = data.length - 1;
  console.log(data);
}
  



