// const funnyNumber =(array)=>{
//  for(let i=0; i<array.length; i++){
//     if(i===0) return array[i]
//  }
// }

const funnyNumber =(array)=>{
   return array[3]
  }
  
const nums=[420, 96, 12,69]
console.time("funny number")
console.log(funnyNumber(nums))
console.timeEnd("funny number")
