function foo(){
    a=10;
    return a;
}

console.log(foo());
let a;
//可以运行，可能是因为可以正常改写成js
// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误


