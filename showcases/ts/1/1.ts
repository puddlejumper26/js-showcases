// function sayHallo(person:string){
//     return "hello --" + person;
// }

// console.log(sayHallo("Shawn"));

// let fullName1:string = `Bob Bobby`;
// let age1:number = 29;
// let sentence1:string = `hello, my name is ${fullName1},and my age is ${age1+1} `;
// console.log(sentence1);


// let arr:any=[1,2,'a'];
// let arr2:number[]=[1,2,3];
// let arr3:string[]=['a','b'];
// let arr4:Array<number>=[1,2,2];

//Tulp
// let x:[string,string];
// x=['hallo','world'];
// console.log(x[0].substring(1));
// x[1]='haha';
// console.log(x);

// Enum

// enum Color{red,green,black};
// console.log(Color.black);
// let c: Color=Color.green;

//Type assertion
// let someValue:any = [2,3];
// let someLength:number = someValue.length;
// console.log(someLength);


// variable declarations

// function f(shouldInitialize: boolean) {
//     if (shouldInitialize) {
//         var x = 10;
//     }

//     return console.log(x);
// }

// // f(true);  // returns '10'
// f(false); // returns 'undefined'


// function sumMatrix(matrix:number[][]){
//     var sum=0; 
//     for (let i=1;i<matrix.length;i++){
//         var currentRow = matrix[i];
//         for (let i = 0; i<currentRow.length;i++){
//             sum += currentRow[i];
//         }
//     }
//     return sum;
// }

// var newArray: number[][] = [
//     [1, 2, 3],
//     [2, 3, 4],

// ]
// console.log(sumMatrix(newArray));

// let input=[1,2];
// let [first,second]=input;
// console.log(first);

// function f([first,...rest]:[number,number]){
//     console.log(first);
// }

// f([1,2,3]);

// let tuple:[number,string,boolean]=[7,'hello',true];
// let [a,b,c] =tuple;
// console.log([a,b,c][1]);

// let o ={
//     a:'foo',
//     b:12,
//     c:'bar'
// }
// let {a,b} = o;

// console.log({a,b});

// interface LabelValue{
//     label:string;
//     size:number;
// }

// interface LabelSize{
//     size:number;
// }

// function printLabel(labeledObj:LabelValue){
//     console.log(labeledObj.size + labeledObj.label);
// }
// let myObj={size:10,label:" 10 Object"};
// printLabel(myObj);

// interface SquareConfig{
//     color?:string;
//     width:number;
// }

// function createSquare(config:SquareConfig):{color:string;area:number}{
//     let newSquare={color:'white',area:100}
//     if(config.color){newSquare.color = config.color;}
//     if(config.width){newSquare.area= config.width*config.width;}
//     return newSquare;
// }

// let mySquare = createSquare({color:'blank', width:20});

// console.log(mySquare);

// interface SearchFunc{
//     (source:string,subString:string):boolean;
// }

// let mySearch:SearchFunc;
// mySearch=function(source:string,subString:string){
//     let result = source.search(subString);
//     return result>-1;
// }

// class Animal {
//     name: string;
// }
// class Dog extends Animal {
//     breed: string;
// }

// // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }

// interface NumberDictionary {
//     [index: string]: number;
//     length: number;    // 可以，length是number类型
//     name: number ;      // 错误，`name`的类型与索引类型返回值的类型不匹配
//     age:number;
// }

// var obj = { 3: 'a', four: 'b' };
// console.log(obj['3']); // a
// console.log(obj[3]); // a
// console.log(obj[3] === obj['3']); // true

// interface ClockInterface{
//     currentTime:Date;
//     setTime(d:Date):void;
// }
// class Clock implements ClockInterface{
//     currentTime:Date=new Date();
//     setTime(d:Date){
//         this.currentTime=d;
//     }
//     constructor(h:number,m:number){}
// }

// interface ClockConstructor{
//     new (hour:number,minute:number):ClockInterface;
// }
// interface ClockInterface{
//     tick():void;
// }
// function createClock(ctor:ClockConstructor,hour:number,minute:number):ClockInterface{
//     return new ctor(hour,minute);
// }
// class DigitalClock implements ClockInterface{
//     constructor(h:number,m:number){}
//     tick(){console.log('Digital Clock - Beep Beep');}
    
// }
// class AnalogClock implements ClockInterface{
//     constructor(h:number,m:number){}
//     tick(){console.log('Analog Clock - Tick Tock');}
    
// }
// let digital =createClock(DigitalClock,12,17);
// let analog=createClock(AnalogClock,7,23);

// console.log(digital.tick());

// interface Shape{
//     color:string;
// }
// interface Square extends Shape{
//     sideLength:number;
// }
// let square={} as Square;
// square.color='blue';
// console.log(square.color);


// interface Counter{
//     (start:number):string;
//     interval:number;
//     reset():void;
// }
// function getCounted():Counter{
//     let counter = <Counter>function (start:number):string{return''};
//     counter.interval=123;
//     counter.reset=function(){};
//     return counter;    
// }
// let c=getCounted();
// c(10);


// interface Person{
//     firstName:string,
//     lastName:string,
//     sayHi:()=>string
// }
// var customer:Person={
//     lastName: "Hanks",
//     firstName:"tom",
    
//     sayHi:():string=>{return 'Hi there'}
// }

// console.log(customer.firstName)
// console.log(customer.lastName)
// console.log(customer.firstName +' says '+ customer.sayHi())  

// interface LabelledValue {
//     label: string;
//     size:number;
// }
// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
//     // console.log(labelledObj.size);
// }
// var myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

class Dog  {
    breed: string;
}
class Animal extends Dog{
    name: string;
}


// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}