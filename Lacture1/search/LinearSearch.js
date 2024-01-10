let data=[23,1,45,8,20,90,18,4,67,30];
let num =67;
let position=undefined;
let numValue;
for(let i=0; i<data.length; i++){
// console.log(data)
if(data[i]==num){
    position=i;
    break;
}

}
if(!position){
    console.log("element not exists is array")
}
console.log(data)
console.log(position)
console.log(numValue)