let queue=[]
let currentSize=queue.length;
let maxSize=5;
function enQueue(newVal){
   if(currentSize>=maxSize){
    console.log("queue is full")
   }else{
    queue[currentSize]=newVal;
    currentSize++
   }
}
function deQueue(){

    // for(let i=0; i<queue.length;i++){
    //     queue[i]=queue[i+1];
    //     console.log(queue[i])
    // }
    // currentSize--;
    //  queue.length-currentSize
    
    if(currentSize>0){
        console.log("queue is empty ")
    }else{
        currentSize--;
        queue.length=currentSize
    }
  
}
function display(){
    console.log(queue);
}
enQueue(40);
enQueue(140);
enQueue(10);
enQueue(70);

// deQueue()
display()
