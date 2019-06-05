var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "haha";
stringNumeric.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 2));
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
