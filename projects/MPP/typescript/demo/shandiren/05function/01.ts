//函数


//TypeScript函数可以创建有名字的函数和匿名函数

// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function (x, y) { return x + y; };

//在JavaScript里，函数可以使用函数体外部的变量。 当函数这么做时，我们说它‘捕获’了这些变量。

let z = 100;

function addToZ(x, y) {
    return x + y + z;
}