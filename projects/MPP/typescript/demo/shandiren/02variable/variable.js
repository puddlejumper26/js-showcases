//因为TypeScript是JavaScript的超集，所以它本身就支持let和const。
//var 声明
function f() {
    var x = 100; // error: interferes with parameter declaration
}
var someValue = "654654";
var strLength = someValue.length;
console.log(strLength);
