class Animal2{
    private    name:string;
    constructor(theName:string){this.name=theName;}
}

class Rhino extends Animal2{
    constructor(){super("Rhino");}
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal2("Goat");
let rhino= new Rhino();
let employee = new Employee("bob");

animal = rhino;
animal = employee;
//Type 'Employee' is not assignable to type 'Animal2'.
//Types have separate declarations of a private property 'name'.ts

// 因为Animal和Rhino共享了来自Animal里的私有成员定义private name: string，因此它们是兼容的。 然而Employee却不是这样。当把Employee赋值给Animal的时候，得到一个错误，说它们的类型不兼容。 尽管Employee里也有一个私有成员name，但它明显不是Animal里面定义的那个。