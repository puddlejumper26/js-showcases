// 泛型类


class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "haha";
stringNumeric.add = function (x, y) { return x + y; };

console.log(myGenericNumber.add(myGenericNumber.zeroValue,2));
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));