//基础类型
//Boolean
var isDone = true;
var isDoneNow = false;
//number 数字
var decLiteral = 6;
var hexliter = 0xf00d;
//字符串 string
var name2 = "Shawn";
name2 = "wu";
//字符串模板
var name3 = 'gene';
var age3 = 30;
var sentence3 = "hello, i am " + name3 + ",and I am " + age3 + " years old.";
var sentence4 = "hello,i am " + name3 + ", and I am " + (age3 + 1) + " years old.";
var sentence5 = "hello, i am " + name3 + ",age " + age3 + ", " + (age3 > 18 ? 'adult' : 'Teens'); // check here
console.log(sentence3);
console.log(sentence4);
console.log(sentence5);
//数组
var list = [1, 2, 3];
// let list2:number[]=[1,'a',true];//here not working due to number
var list3 = [1, 'a', true]; //here is OK due to any
var list4 = [1, 2, 3, 4];
//元祖 tuple
var x;
x = ['he', 30];
// x=[30,'he']; //here is not working due to wrong order
console.log(x[0]);
// x[3]='world';
// console.log(x[2]);//here is not working due to 2 is not exsiting
//枚举 
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
console.log(Color); //出现一个{0:"red",1:"green",2:"blue",red:0,green:1,blue:2}
console.log(Color.blue);
//默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 1] = "red";
    Color2[Color2["blue"] = 2] = "blue";
    Color2[Color2["green"] = 3] = "green";
})(Color2 || (Color2 = {}));
;
console.log(Color2.green); //3
console.log(Color2[2]); //blue
var Color3;
(function (Color3) {
    Color3[Color3["red"] = 1] = "red";
    Color3[Color3["blue"] = 3] = "blue";
    Color3[Color3["green"] = 7] = "green";
})(Color3 || (Color3 = {}));
;
console.log(Color3.green); //7
console.log(Color3[2]); //undefined
//Any
var notSure = true;
var notSure2 = 123;
var notSure3 = "asf";
var list5 = [1, 'a', true];
list5[0] = 'wd';
console.log(list5[0]);
//void
//某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是void
function warnUser() {
    console.log('this is warning');
    // return;
}
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
//let unusable:void = 1; // not working
//let unusable: void = true; // not working
var unusable = undefined;
//Null and Undefined
//TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 
var u = undefined;
var n = null;
//Never
//表示的是那些永不存在的值的类型
//任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使any也不可以赋值给never。
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// create({ prop: 0 }); // OK
// create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
//类型断言
var someValue = "this is a string";
var strLength = someValue.length;
console.log("strLength is   " + strLength);
//  另一个为as语法：
var strLength2 = someValue.length;
//注意这里的 as 的用法
console.log("strLength2 is   " + strLength2);
