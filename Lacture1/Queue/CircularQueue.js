class Queue {
  constructor(size) {
    this.max = size;
    this.items = new Array(size);
    this.currentSize = 0;
    this.front = -1;
    this.rear = -1;
  }
  enqueue(newVal) {
    if (this.currentSize !== this.max) {
      if (this.rear === this.max - 1) {
        this.rear = 0;
      } else {
        this.rear++;
      }
      this.items[this.rear] = newVal;
      this.currentSize++;
      if ((this.front = -1)) {
        this.front = this.rear;
      }
    }
  }
  dequeue(){
    if(this.currentSize!=0){
        this.items[this.front]=null;
        if(this.front==this.max-1){
            this.front=0
        }else{
            this.front++;
        }
        this.currentSize--
    }else{
        this.front=-1;
        this.rear=-1;
        console.log("this is full")
    }

  }
}
let queue = new Queue(5);
queue.enqueue(45);
queue.enqueue(75);
queue.enqueue(20);
queue.enqueue(375);
queue.enqueue(250);
queue.dequeue()

queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue);
