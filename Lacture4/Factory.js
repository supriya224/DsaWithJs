function ShapeFactory() {}

ShapeFactory.prototype.createShape = function(type) {
  switch (type) {
    case 'circle':
      return new Circle();
    case 'rectangle':
      return new Rectangle();
    case 'triangle':
      return new Triangle();
    default:
      throw new Error('Invalid shape type');
  }
};

function Circle() {
  this.type = 'circle';
}

function Rectangle() {
  this.type = 'rectangle';
}

function Triangle() {
  this.type = 'triangle';
}

var factory = new ShapeFactory();
var circle = factory.createShape('circle');
var rectangle = factory.createShape('rectangle');
var triangle = factory.createShape('triangle');

console.log(circle.type);     // Output: circle
console.log(rectangle.type);  // Output: rectangle
console.log(triangle.type);   // Output: triangle