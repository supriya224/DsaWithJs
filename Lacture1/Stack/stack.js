let data=[];
let currentSize= data.length;
let max=5;

function push(newVal){
if(currentSize>=max){
  console.log("your can't add more than 5 elements", newVal)
 }
//  else{
//     console.log("stack is empty")
// }

data[currentSize]=newVal;
currentSize+=1
}
function pop(){
    if(currentSize>0){
    currentSize-=1;
    data.length=currentSize;
    }else{
        console.log("stack is empty")
    }
}
push(23)
push(3)
push(20)
push(30)
push(28)
pop()
pop()
pop()
pop()
push(28)

pop()
pop()
pop()
// push(200)
console.log(data)