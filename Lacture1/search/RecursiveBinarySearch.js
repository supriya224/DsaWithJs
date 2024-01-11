let data = [12, 20, 26, 29, 35, 40, 50, 90, 100];
let start = 0;
let end = data.length - 1;
let find = 40;
let position = undefined;

function recusrive(data, start, end) {
  // funciton ke anda rfunction call krna recursive hota hai ya recusion
  //  for finding middle point We use Math.floor [(satrt+end)/2]
  mid = Math.floor((start + end) / 2);
  position = mid;
  console.log("this is  mid elemnt ",data[mid]); // displaying the data getting from array with its position
  if (data[mid] === find) {
    // console.log("we get element");
    return true;
  } else if (data[mid] < find) {
    recusrive(data, start + 1, end);
    // console.log("getting start element from mid array");
  } else {
    recusrive(data, start, end - 1);
    // console.log("getting last element from mid array");
  }
}

recusrive(data, start, end);
console.log(position);
