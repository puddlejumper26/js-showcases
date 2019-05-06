var passcode = "secret passcode 12";
var Employee5 = /** @class */ (function () {
    function Employee5() {
    }
    Object.defineProperty(Employee5.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee5;
}());
var empployee6 = new Employee5();
empployee6.fullName = "Bod Smith";
if (empployee6.fullName) {
    console.log(empployee6.fullName);
}
//$ tsc demo10.ts && node demo10.js
//demo10.ts(5, 9): error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
//demo10.ts(9, 9): error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
//首先，存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。 其次，只带有get不带有set的存取器自动被推断为readonly。 这在从代码生成.d.ts文件时是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值。
//需要额外建立一个文件 tsconfig.json
