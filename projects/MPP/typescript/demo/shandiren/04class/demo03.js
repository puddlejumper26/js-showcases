var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal3 = /** @class */ (function () {
    // name:string;
    // constructor(theName:string){
    //     this.name=theName;
    // }
    function Animal3(name) {
        this.name = name;
    }
    Animal3.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal3;
}());
//派生类包含了一个构造函数，它必须调用super()，它会执行基类的构造函数。 而且，在构造函数里访问this的属性之前，我们一定要调用super()。
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("the snake is Slithering");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal3));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal3));
var sam = new Snake("The Python");
console.log(sam.move());
var tom = new Horse("Tommy the Palomino");
console.log(tom.move(5));
//这个例子演示了如何在子类里可以重写父类的方法。 Snake类和Horse类都创建了move方法，它们重写了从Animal继承来的move方法，使得move方法根据不同的类而具有不同的功能。 注意，即使tom被声明为Animal类型，但因为它的值是Horse，调用tom.move(34)时，它会调用Horse里重写的方法：
