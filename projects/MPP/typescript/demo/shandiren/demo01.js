//基础类型
//Boolean
var isDone = true;
var isDonenow = false;
//number 数字
var decLiteral = 6;
var hexliter = 0xf00d;
//字符串 string
var name2 = "Shawn";
name2 = "wu";
//字符串模板
var name3 = 'gene';
var age3 = 30;
var sentence3 = "hello,i am " + name3 + ", and I am " + age3 + " years old.";
var sentence4 = "hello,i am " + name3 + ", and I am " + (age3 + 1) + " years old.";
var sentence5 = "hello, i am " + name3 + ",age " + age3 + ", " + (age3 > 18 ? 'adult' : 'Teens'); // check here
console.log(sentence3);
console.log(sentence4);
console.log(sentence5);
//数组
var list = [1, 2, 3];
//let list2:number[]=[1,'a',true];//here not working due to number
var list3 = [1, 'a', true]; //here is OK due to any
var list4 = [1, 2, 3, 4];
//元祖 tuple
var x;
x = ['he', 30];
// x=[30,'he']; //here is not working due to wrong order
console.log(x[0]);
// x[3]='world';
// console.log(x[3]);
//枚举 
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
console.log(Color);
console.log(Color.blue);
//Any
var notSure = true;
var notSure2 = 123;
var notSure3 = "asf";
var list5 = [1, 'a', true];
list5[0] = 'wd';
console.log(list5[0]);
//void
function warnUser() {
    console.log('this is warning');
    // return;
}
//let unusable:void = 1; // not working
//let unusable: void = true; // not working
var unusable = undefined;
//Null and Undefined
//Never
function error(message) {
    throw new Error(message);
}
//Object
//object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
//类型断言
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
