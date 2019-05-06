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
var Person3 = /** @class */ (function () {
    function Person3(theName) {
        this.name = theName;
    }
    return Person3;
}());
//构造函数也可以被标记成protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承
// Employee 能够继承 Person
var Employee3 = /** @class */ (function (_super) {
    __extends(Employee3, _super);
    function Employee3(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee3.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee3;
}(Person3));
var howard2 = new Employee("Howard", "Sales");
var john = new Person3("John"); // 错误: 'Person' 的构造函数是被保护的.
