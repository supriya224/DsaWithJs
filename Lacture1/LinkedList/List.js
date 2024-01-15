class List {
  constructor() {
    this.head = {
      value: "",
      next: null,
    };
    this.tail= this.head
    this.size=1
  }
  appendNode (nodeData){
 let newNode= {
    value:nodeData,
    next:null
 };
 this.tail.next=newNode;
 this.tail=newNode
 this.size++
  }
}
let list = new List(300);
list.appendNode(400);
list.appendNode(900);
list.appendNode(800);
list.appendNode(500);
list.appendNode(420);

console.log(list);
