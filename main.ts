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
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    // initialize each field
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log(this.x + ", " + this.y);
  }
}

let point = new PointClass(1, 2); // an instance of the class Point

// point.x = 1;
// point.y = 2;
point.draw();
