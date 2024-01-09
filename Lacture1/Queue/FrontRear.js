let queue = [];
currentSize = queue.length;
let maxSize = 5;

function enQueue(newVal) {
  if (currentSize >= maxSize) {
    console.log("quese is full right now");
  } else {
    queue[currentSize] = newVal;
    currentSize++;
  }
}
function deQueue() {
  if (isEmpty()) {
  
  
  }else{
    console.log("queue is alreqady empty ");
  }
  currentSize--;
  queue.length = currentSize;

}

function display() {
  console.log(queue);
}


function front() {
  if (isEmpty()) {
    console.log(queue[0]);
    // console.log("front added");
  } else {
    console.log("queue is empty you can't add any no now");
  }
}

function rear(newVal){
  if(isEmpty()){
    console.log(queue[currentSize-1]);
    // console.log(`removed items from queue` )
   
  }else{
    // console.log(`removed items from queue` )
    console.log('queue is empty')
  }

}

function isEmpty(){
  if(currentSize>=0){
return true
  }else{
  return false
  }
}

enQueue(40);
enQueue(140);
enQueue(10);
enQueue(460);
enQueue(90);
// enQueue(100);
deQueue();
deQueue();
deQueue();
deQueue();
deQueue();
display();
front();
rear();
isEmpty();

// function deQueue() {
//   if (currentSize > 0) {
//     console.log("queue is empty ");
  
//   }
//   currentSize--;
//   queue.length = currentSize;
// }

// function display() {
//   console.log(queue);
// }


// function front() {
//   if (currentSize > 0) {
//     console.log(queue[0]);
//     console.log("front added");
//   } else {
//     console.log("queue is empty you can't add any no now");
//   }
// }

// function rear(newVal){
//   if(currentSize>0){
//     console.log(queue[currentSize-1]);
//     console.log(`removed items from queue` )
//   }

// }

// function isEmpty(){
//   if(currentSize===0){
//     console.log("your quuese is empty right now")
//   }
// }

