// let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string) {
//     let result = source.search(subString);
//     return result > -1;
// }
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
//let sample=('abcdef','ab');
console.log(mySearch('abcdef', 'ab'));
