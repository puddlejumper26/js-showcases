//为构造函数所用
interface ClockConstructor{
    new (hour:number,minute:number):ClockInterface;//返回的是ClockInterface
}

//为实例方法所用
interface ClockInterface{tick():void;}

//构造函数,它用传入的类型创建实例
function createClock(ctor:ClockConstructor,hour:number,minute:number):ClockInterface{
    return new ctor(hour,minute);
}

//实例方法，创建实现了ClockInterface的DigitalClock
class DigitalClock implements ClockInterface{
    
    
    constructor(h:number,m:number){}
    tick(){console.log("--beep--");}
}


//实例方法
class AnalogClock implements ClockInterface{
    constructor(h: number, m: number){}
    tick(){console.log("--tick--");}
}

let digital=createClock(DigitalClock,5,20);
//这里必须传入数字，因为定义的时候就有三样
console.log(digital.tick());
console.log();