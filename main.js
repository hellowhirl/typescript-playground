function log(message) {
    console.log(message);
}
var message = "Hello testing";
log(message);
var drawPoint = function (point) {
    //
};
drawPoint({
    x: 1,
    y: 2
});
//////
// Classes
//
var PointClass = /** @class */ (function () {
    function PointClass() {
    }
    PointClass.prototype.draw = function () {
        console.log(this.x + "," + this.y);
    };
    return PointClass;
}());
var shape = new PointClass();
shape.x = 1;
shape.y = 2;
shape.draw();
