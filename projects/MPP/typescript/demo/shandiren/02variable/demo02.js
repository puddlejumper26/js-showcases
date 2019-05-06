function add(num) {
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        var row = num[i];
        console.log("row-->i->" + i, row);
        for (var i = 0; i < row.length; i++) {
            var column = row[i];
            sum += column;
            console.log("column-->i->" + i, column);
        }
    }
    return sum;
}
var newArray = [
    [1, 2, 3],
    [2, 3, 4],
];
console.log(add(newArray)); //15
//如果第二个循环里面的j用i来替代，最后的结果就会是6，有问题
//如果这里都用 let 进行定义，也没有问题，可以得到正确的答案
function add2(num) {
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        var row = num[i];
        console.log("row-->i->" + i, row);
        for (var i_1 = 0; i_1 < row.length; i_1++) {
            var column = row[i_1];
            sum += column;
            console.log("column-->i->" + i_1, column);
        }
    }
    return sum;
}
var newArray2 = [
    [1, 2, 3],
    [2, 3, 4],
];
console.log(add2(newArray2)); //15
