//基础类型

//Boolean
let isDone:boolean=true;
let isDoneNow:boolean=false;

//number 数字
let decLiteral:number=6;
let hexliter: number = 0xf00d;

//字符串 string
let name2:string ="Shawn";
name2 = "wu";

//字符串模板
let name3:string = 'gene';
let age3:number = 30;
let sentence3=`hello, i am ${name3},and I am ${age3} years old.`
let sentence4: string = `hello,i am ${name3}, and I am ${age3+1} years old.`
let sentence5:string=`hello, i am ${name3},age ${age3}, ${age3>18?'adult':'Teens'}`// check here
console.log(sentence3);
console.log(sentence4);
console.log(sentence5);

//数组
let list:number[]=[1,2,3];
// let list2:number[]=[1,'a',true];//here not working due to number
let list3:any[]=[1,'a',true];//here is OK due to any
let list4:Array<number>=[1,2,3,4];

//元祖 tuple
let x:[string,number];
x=['he',30];
// x=[30,'he']; //here is not working due to wrong order
console.log(x[0]);
// x[3]='world';
// console.log(x[2]);//here is not working due to 2 is not exsiting

//枚举 
enum Color{red,green,blue};
console.log(Color); //出现一个{0:"red",1:"green",2:"blue",red:0,green:1,blue:2}
console.log(Color.blue);

//默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。
enum Color2{red=1,blue,green};console.log(Color2.green); //3
                                console.log(Color2[2]); //blue
enum Color3{red=1, blue=3,green=7};console.log(Color3.green);//7
                                    console.log(Color3[2]);//undefined

//Any
let notSure:any = true;
let notSure2:any= 123;
let notSure3:any = "asf";

let list5:any[]=[1,'a',true];
list5[0]='wd';
console.log(list5[0]);

//void
//某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是void
function warnUser():void{
    console.log('this is warning');
   // return;
}
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
//let unusable:void = 1; // not working
//let unusable: void = true; // not working
let unusable: void = undefined;

//Null and Undefined
//TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 
let u: undefined = undefined;
let n: null = null;




//Never
//表示的是那些永不存在的值的类型
//任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使any也不可以赋值给never。
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}





//Object
//object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。使用object类型，就可以更好的表示像Object.create这样的API。
declare function create(o: object | null): void;

// create({ prop: 0 }); // OK
// create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error



//类型断言Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log("strLength is   "+strLength);

//  另一个为as语法：
let strLength2: number = (someValue as string).length;
//注意这里的 as 的用法
console.log("strLength2 is   "+strLength2);




