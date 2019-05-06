let a:number[]=[1,2,3,4];
let ro:ReadonlyArray<number>=a;
// ro[0]=12;
// ro.push(5);

let b=ro as number[];
let c=<number[]>ro;
console.log(b);
console.log(c);