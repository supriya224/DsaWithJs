let queue=[];
currentSize=queue.length;
let maxSize=5;

function enQueue(newVal){
  if(currentSize>=maxSize){
    console.log("quese is full right now")
  }else{
    queue[currentSize]=newVal;
    currentSize++
  }
}
function deQueue(){
    if(currentSize>0){
        console.log("queue is empty ")
    }else{
        currentSize--;
        queue.length=currentSize
    }
}
function display(){
console.log(queue)
}
function front(){
    if(currentSize>0){
        console.log(queue[0])
        console.log("front add ")
    }else{
        currentSize--;
        queue.length=currentSize
    }
}
enQueue(40);
enQueue(140);
enQueue(10);
enQueue(70);

// deQueue()
display()