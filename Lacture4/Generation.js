let arr=[1,2,3,4,5];
function* test() {
  yield arr[4];
  yield arr[3];
  yield arr[2];
}
let result=test();
console.log(result.next()); // { value: 5,done:false}
console.log(result.next()); // { value: 4,done:false}
console.log(result.next()); // { value: 3,done:false}
console.log(result.next()); // { value: undefined,done:true}

for(let item of test())
{
  console.log('using for of ',item); //  using for of  5 (then 4,3, undefined)
}

// function* printTillCount() {
//     let id=0;
//     while(id<3)
//       yield id++;
//    }
//    let resultNew=printTillCount();
//    console.log(resultNew.next()); // {value: 0, done: false}
//    console.log(resultNew.next()); // {value: 1, done: false}
//   console.log(resultNew.next()); // {value: 2, done: false}
//   console.log(resultNew.next()); // {value: undefined, done: true}
  // we can also iterate above in for of loop using generator function 'printTillCount