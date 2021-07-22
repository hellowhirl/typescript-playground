export class PointOptimal {
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
