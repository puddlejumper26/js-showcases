//基础类型

//Boolean
let isDone:boolean = true;
let isDonenow:boolean = false;

//number 数字
let decLiteral:number = 6;
let hexliter:number = 0xf00d;

//字符串 string
let name2:string ="Shawn";
name2 = "wu";

//字符串模板
let name3:string = 'gene';
let age3:number = 30;
let sentence3:string=`hello,i am ${name3}, and I am ${age3} years old.`
let sentence4: string = `hello,i am ${name3}, and I am ${age3+1} years old.`
let sentence5:string=`hello, i am ${name3},age ${age3}, ${age3>18?'adult':'Teens'}`// check here
console.log(sentence3);
console.log(sentence4);
console.log(sentence5);

//数组
let list:number[]=[1,2,3];
//let list2:number[]=[1,'a',true];//here not working due to number
let list3:any[]=[1,'a',true];//here is OK due to any
let list4:Array<number>=[1,2,3,4];

//元祖 tuple
let x:[string,number];
x=['he',30];
// x=[30,'he']; //here is not working due to wrong order
console.log(x[0]);
// x[3]='world';
// console.log(x[3]);

//枚举 
enum Color{red,green,blue};
console.log(Color);
console.log(Color.blue);

//Any
let notSure:any = true;
let notSure2:any= 123;
let notSure3:any = "asf";

let list5:any[]=[1,'a',true];
list5[0]='wd';
console.log(list5[0]);

//void
function warnUser():void{
    console.log('this is warning');
   // return;
}

//let unusable:void = 1; // not working
//let unusable: void = true; // not working
let unusable: void = undefined;

//Null and Undefined

//Never
function error(message:string):never{
    throw new Error(message);
}


//Object
//object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。


//类型断言
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log(strLength);

//  另一个为as语法：

let someValue2: any = "this is a string";
let strLength2: number = (someValue as string).length;





