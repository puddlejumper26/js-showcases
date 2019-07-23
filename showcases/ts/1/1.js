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
// // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }
// class Dog  {
//     breed: string;
// }
// class Animal extends Dog{
//     name: string;
// }
// function createArray<ANY>(length: number, value: ANY): Array<ANY> {
//     let result: ANY[] = [];
//     for(let i=0;i<length;i++){
//         result[i]=value;
//     }
//     return result;
// }
// console.log(createArray(3,3));
// interface NumberArray{
//     [index:number]:string;
// }
// let a: NumberArray = ['a','b'];
// console.log(a);
// var global_num=12;
// class Numbers{
//     num_val = 13;
//     static sval=10;
//     storeNum():void{
//         var local_num=14;
//     }
// }
// console.log(Numbers.sval)
// let obj=new Numbers();
// console.log(obj.num_val);
// let someArray=[1,'a',false];
// for (let i of someArray){
//     console.log(i);
// }
// (function(){var x = 'Hello!';console.log(x);})()
// class User{
//     name:string;
//     private sex:string = 'male';
//     protected age:number =29;
//     constructor(_name:string){this.name=_name;};
//     sayHallo():string{return `Hallo, ${this.name} ,the sex is ${this.sex} and the age is ${this.age}`}
// }
// let user = new User('John');
// // user.name='Root';
// console.log(user.name);
// // console.log(user.age);
// // console.log(user.sex);
// console.log(user.sayHallo());
// class Greeter{
//     greeting:string;
//     constructor(message:string){
//         this.greeting=message;
//     }
//     greet(){return `hallo, ${this.greeting}`}
// }
// let greeter = new Greeter("World");
// console.log(greeter.greet());
// class Animal{
//     name:string;
//     constructor(theName:string){this.name=theName;};
//     move(distanceInMeters:number=0){
//         console.log(`${this.name} moved ${distanceInMeters} meters`);
//     }
// }
// class Dog extends Animal{
//     name:string;
//     constructor(name:string){
//         super();
//         this.name=name;
//     }
//     move(distanceInMeters:number = 5){console.log(`${this.name} moved ${distanceInMeters} meters`)};
//     // jump(distanceInMeters: number = 5) { console.log(`woof`); super.move(distanceInMeters); }
//     // bark() {
//         // console.log(`${this.name} Woof!`);
//     // }
// }
// class Snake extends Animal{
//     name:string;
//     constructor(name:string){super(name)};
//     move(distanceInMeters: number = 20) { console.log(`${this.name} moved ${distanceInMeters} meters`)};
// }
// const dog = new Dog("Jessy");
// const snake= new Snake('haha');
// console.log(dog.name);
// // console.log(dog.move());
// // console.log(dog.jump());
// // console.log(snake.move());
// class Animal {
//     private name:string;
//     constructor(theName:string){this.name=theName;};
// }
// class Bull extends Animal{
//     constructor(){super('Bull');};
// }
// class Employee{
//     private name:string;
//     constructor(theName:string){this.name=theName;};
// }
// let animal = new Animal('Goat');
// let bull = new Bull ();
// let emp = new Employee('Bob');
// animal = bull;
// animal = emp;
// class Person{
//     protected name:string;
//     constructor(theName:string){this.name=theName;}
// }
// class Emp extends Person{
//     private department:string;
//     constructor(name:string,department:string){
//         super(name);
//         this.department=department;
//     }
//     public getEle(){
//         return `hallo, this is ${this.name}, and i am from ${this.department}`;
//     }
// }
// let howard = new Emp('Howard',"HR");
// console.log(howard.getEle());
// class Octo{
//     name:string;
//     numberofLegs:number = 10;
//     constructor(name:string){this.name=name;}
// }
// let dad = new Octo('haha');
// console.log(dad.name);
// dad.name='asdfaf';
// console.log(dad.numberofLegs);
// dad.numberofLegs=2;
// console.log(dad.numberofLegs);
// class Element1{
//     private _class:string=null;
//     get className(){
//         return this._class;
//     }
//     set className(name){
//         this._class=`todd-${name}`;
//     }
// }
// let ele = new Element1();
// ele.className='asdf';   
// console.log(ele.className);
// let passcode="secret passcode";
// class Employee{
//     private _fullName:string;
//     get fullName(){
//         return this._fullName;
//     }
//     set fullName(newName:string){
//         if(passcode && passcode === 'secret passcode'){
//             this._fullName=newName;
//         }else{
//             console.log('Error..............');
//         }
//     }
// }
// let emp = new Employee();
// emp.fullName='Bob';
// if(emp.fullName){
//     console.log(emp.fullName);
// }
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
