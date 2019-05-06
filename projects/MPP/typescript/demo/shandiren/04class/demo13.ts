// 高级技巧

// 构造函数

class Greeter2 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter: Greeter2;//我们写了let greeter: Greeter，意思是Greeter类的实例的类型是Greeter
greeter = new Greeter2("world");
//我们也创建了一个叫做构造函数的值。 这个函数会在我们使用new创建类实例的时候被调用
console.log(greeter.greet());