interface SearchFunc {
    (source: string, subString: string): boolean;
}

// let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string) {
//     let result = source.search(subString);
//     return result > -1;
// }

let mySearch: SearchFunc;
mySearch = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}

//let sample=('abcdef','ab');
console.log(mySearch('abcdef', 'ab'));

//因为函数直接赋值给了SearchFunc类型变量。 函数的返回值类型是通过其返回值推断出来的（此例是false和true）。 如果让这个函数返回数字或字符串，类型检查器会警告我们函数的返回值类型与SearchFunc接口中的定义不匹配。