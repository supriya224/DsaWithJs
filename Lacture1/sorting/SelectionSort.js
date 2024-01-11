let items = [23, 67, 12, 3, 9, 20];

function selectionSort(data) {
  // as a data parameter we can get all items
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    midId = i;
    // console.log(data[i]);
    for (j = i; j < data.length; j++) { // j ki value jb j=i (i ke equal hogi tb aage jayega means next element pe)
        if (data[j] > data[midId]) {
        // if (data[j] > data[midId]) { // data[j] ki value data[midId] se choti hogi tb 
        midId = j; // midId= j return hoga
      }
    }
    let temp=data[midId]; // temp se variable bna ke data[midId] ki value store krenge
    data[midId]=data[i] //data mid ki value data[i] ke andar
    data[i]=temp; //data[i] ki value temp ke andar store krenge
  }
}
selectionSort(items);
selectionSort(items)
