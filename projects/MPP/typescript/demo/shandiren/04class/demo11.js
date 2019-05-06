//静态属性
//我们使用static定义origin，因为它是所有网格都会用到的属性。 每个实例想要访问这个属性的时候，都要在origin前面加上类名。
var Grid2 = /** @class */ (function () {
    function Grid2(scale) {
        this.scale = scale;
    }
    Grid2.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid2.origin.x);
        console.log(point.x);
        console.log(Grid2.origin.x);
        var yDist = (point.y - Grid2.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        console.log(this.scale);
    };
    Grid2.origin = { x: 0, y: 0 };
    return Grid2;
}());
var grid1 = new Grid2(1.0);
var grid2 = new Grid2(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
