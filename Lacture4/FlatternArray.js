const flatten = (arr,result=[]) => {
    for(let i=0;i<arr.length;i++) {
      if(Array.isArray(arr[i])) {
         flatten(arr[i],result)
      }
      else  {
        result.push(arr[i]);
      }
    }
    return result;
}

const arr=[1,2,[5,3,4,[7,8,9,[10,11]]]];
console.log(flatten(arr)); //   [1,2,5,3,4,7,8,9,10,11];

//using inbuilt function flat //
const result=arr.flat(Infinity);
console.log(result); //   [1,2,5,3,4,7,8,9,10,11];