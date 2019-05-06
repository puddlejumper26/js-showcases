var input = [1, 2];
var fir = input[0], sec = input[1];
var newA = [fir, sec];
// [fir, sec]=[sec,fir];
// console.log(fir); //2
function f(_a) {
    var fir = _a[0], sec = _a[1];
    console.log(fir);
    console.log(sec);
}
f([1, 2]);
var _a = [1, 2, 3, 4], secs = _a[1], fou = _a[3];
console.log(secs, fou);
