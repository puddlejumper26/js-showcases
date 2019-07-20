// 7.2 rest

//  function add( ...value){
//      let sum = 0;
//      for (var val of value){
//          sum += val;
//      }

//      return sum;
//  }

// add(2,3,4); //9

// var arr1=[1,2,3];
// var arr2=[2,3,4];
// var arr3 =[1,2,3];
// var arr4 =[1,2,3];
// arr1.push(...arr2);
// arr3.push(arr2);
// Array.prototype.push.apply(arr4,arr2);
// console.log(arr1); // [ 1, 2, 3, 2, 3, 4 ]
// console.log(arr3); //[ 1, 2, 3, [ 2, 3, 4 ] ]
// console.log(arr4);//[ 1, 2, 3, 2, 3, 4 ]


// console.log(Math.max(...[2,3,4])); //4
// console.log(Math.max([2,3,4])); //NaN
// console.log(Math.max.apply(null,[2,3,4]));// 4

// console.log(new Date(...[2015,1,11]));

// var arr1=['a','b','c'];
// var arr2=['e','f','g'];

// //ES5
// arr1.concat(arr2);

// //ES6
// console.log([...arr1,...arr2]);

// var [first,...rest] = [1,2,3,4,5,6];
// console.log(first);//1
// console.log(rest);[2, 3, 4, 5, 6]

// var str = '123';
// arr1 = [...str];
// console.log(arr1);
// var arr = JSON.parse('[' + String(arr1) + ']');
// console.log(arr);

// let arrayLike={
//     '0':'a',
//     '1':'b',
//     '2':'c',
//     length:3
// }
// let arr2 = Array.from(arrayLike);
// console.log(arr2);//[ 'a', 'b', 'c' ]

// console.log(Array.from([1, 2, 3], (x) => x * x)); //[1,4,9])

// console.log([1,2,3,-5,7].findIndex((n)=>n<0));//3

// for (let index of ['a','b'].keys()){console.log(index);} 
// //0
// //1
// for (let elem of ['a', 'b'].values()) { console.log(elem); } 
// //a
// //b
// for (let [index,elem] of ['a', 'b'].entries()) { console.log(index,elem); } 
// //0 'a'
// //1 'b'


// // 9
// var target={a:1,b:3,d:5};
// var source1 = {b:2,c:2};
// var source2={c:3}

// Object.assign(target,source1,source2)
// console.log(target);


// // 10
// let s = Symbol()
// console.log(typeof(s));

//11
// let arr=[1,1,2,2,3,3,4,4];
// console.log(...new Set(arr));

//20 
// class A{
//     constructor(){
//         console.log(new.target.name);
//     }
// }
// class B extends A{
//     constructor(){
//         super();
//     }
// }
// new A();
// new B();

// class A{
//     constructor(){}
//     p(){
//         return 2;
//     }
// }
// class B extends A{
//     constructor(){
//         super();
//         console.log(super.p());
//     }
// }

// new B()

// class A{
//     constructor(){this.p=2;}
// }
// class B extends A{
//     get m(){
//         return super.p;
//     }
// }
// new B();

