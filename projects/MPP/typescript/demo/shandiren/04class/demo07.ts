class Person3 {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}
//构造函数也可以被标记成protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承

// Employee 能够继承 Person
class Employee3 extends Person3 {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard2 = new Employee("Howard", "Sales");
let john = new Person3("John"); // 错误: 'Person' 的构造函数是被保护的.