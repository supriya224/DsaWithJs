let data=[];
let currentSize=data.length;
// let max=5;
function push(newVal){
//  if(currentSize>=max){
//     console.log("no more data to push in stack", data)
//  }
 data[currentSize]=newVal;
 currentSize+=1;
}
function pop(){
    currentSize-=1;
    data.length=currentSize
}

push(23);
push(90)
push(940)
push(190)

pop()

console.log(data)