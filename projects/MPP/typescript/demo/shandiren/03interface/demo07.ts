interface Counter{
    (start:number):string;
    interval:number;
    reset():void;
}

function getCounter():Counter{
    let counter=<Counter>function (start:number):string{return ''};
    counter.interval = 123;
    counter.reset=function () {};       
    return counter;
}

let c=getCounter();
c(10);
c.reset();
c.interval=5.0;
console.log(c.interval);

interface Shape{ color:string;}
interface Square extends Shape{sideLength:number;}
let newDate ={} as Square; //let newDate=<Square>{}; 注意这里是直接从interface中过来的。
newDate.color="blue";
newDate.sideLength=10;
console.log(newDate.sideLength);
function newSquare():Square{
    let input=<Square>function
    input.color="red";
    return input;
}
