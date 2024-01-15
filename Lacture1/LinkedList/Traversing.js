class List {
  constructor() {
    this.head = {
      value: "",
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }
  appendNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  traversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }
} 
let list = new List(300);
list.appendNode(400);
list.appendNode(900);
list.appendNode(800);
list.appendNode(500);
list.appendNode(420);
list.traversing();
console.log(list);
