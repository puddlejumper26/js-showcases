//TYpe assertation
// let someValue: any = "this is a string";
// let someLength:number = (someValue as string).length;
// console.log(someLength);
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 100 * i);
};
//******************* */
// variable declarations
//******************* */
// function sumMatrix(matrix:number[][]){
//     var sum=0;
//     for(let i=1;i<matrix.length;i++){
//         var currentRow = matrix[i];
//         for(let j=0;j<currentRow.length;j++){
//             sum += currentRow[j];
//         }
//     }
//     return sum;
// }
// var newArray:number[][]=[
//     [6,8],[2,3,7]
// ]
// console.log(sumMatrix(newArray));
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
