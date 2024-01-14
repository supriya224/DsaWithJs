

function Subject() {
    this.observers = [];
  }
  
  Subject.prototype.addObserver = function(observer) {
    this.observers.push(observer);
  };
  
  Subject.prototype.removeObserver = function(observer) {
    var index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  };
  
  Subject.prototype.notifyObservers = function(data) {
    this.observers.forEach(function(observer) {
      observer.update(data);
    });
  };
  
  function Observer(name) {
    this.name = name;
  }
  
  Observer.prototype.update = function(data) {
    console.log(this.name + ' received data: ' + data);
  };
  
  var subject = new Subject();
  var observer1 = new Observer('Observer 1');
  var observer2 = new Observer('Observer 2');
  
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  
  subject.notifyObservers('Hello');  // Output: Observer 1 received data: Hello
                                     //         Observer 2 received data: Hello
  