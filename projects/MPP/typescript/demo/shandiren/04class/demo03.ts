class Animal3{
    // name:string;
    // constructor(theName:string){
    //     this.name=theName;
    // }
    constructor(private name:string){}
    //注意这里就是参数属性，对name定义的简化

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

//派生类包含了一个构造函数，它必须调用super()，它会执行基类的构造函数。 而且，在构造函数里访问this的属性之前，我们一定要调用super()。

class Snake extends Animal3{
    constructor(name:string){ super(name);}
    move(distanceInMeters=5){
        console.log("the snake is Slithering");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal3{
    constructor(name:string){ super(name);}
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("The Python");

console.log(sam.move());

let tom: Animal3 = new Horse("Tommy the Palomino");
console.log(tom.move(5));

//这个例子演示了如何在子类里可以重写父类的方法。 Snake类和Horse类都创建了move方法，它们重写了从Animal继承来的move方法，使得move方法根据不同的类而具有不同的功能。 注意，即使tom被声明为Animal类型，但因为它的值是Horse，调用tom.move(34)时，它会调用Horse里重写的方法：