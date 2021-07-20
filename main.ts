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
