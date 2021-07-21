function log(message) {
  console.log(message);
}

var message = "Hello testing";

log(message);

//////
// Interfaces
//

// use Pascal naming convention because we are introducing a custom type
interface Point {
  x: number;
  y: number;
}

let drawPoint = (point: Point) => {
  //
};

drawPoint({
  x: 1,
  y: 2,
});

//////
// Classes
//

class PointClass {
  constructor(private x?: number, private y?: number) {}

  draw() {
    console.log(this.x + ", " + this.y);
  }
}

let point = new PointClass(1, 2); // an instance of the class Point

// point.x = 1;
// point.y = 2;
point.draw();

//////
// Properties
//

class PointOptimal {
  constructor(private _x?: number, private _y?: number) {}

  draw() {
    //
  }

  get x() {
    return this.x;
  }
  set x(value) {
    // some validation
    if (value < 0) {
      throw new Error("value must be greater than 0");
    }
    this.x = value;
  }
}

let optimalPoint = new PointOptimal();
let readX = optimalPoint.x;
optimalPoint.x = 10; // set x
