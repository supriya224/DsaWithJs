class Stack {
  item = [];
  currentSize;
  maxSize;
  constructor(size) {
    // class ke andar function call hone se phle constructor call hota hai
    this.maxSize = size;
    this.currentSize = this.item.length;
  }
  push(newVal) {
    if (this.currentSize >= this.maxSize) {
      console.log("stack is full");
    } else {
      this.item[this.currentSize] = newVal;
      this.currentSize++;
    }
  }
  pop() {
    if (this.currentSize > 0) {
      this.currentSize--;
      this.item.length = this.currentSize;
    } else {
      console.log("stack is empty");
    }
  }
  display() {
    console.log(this.item);
  }
}
str1 = new Stack(5);
str1.push(20);
str1.push(40);
str1.push(90);
str1.push(1000);
str1.pop();
str1.pop();
str1.pop();
str1.push(4000);
str1.display();
