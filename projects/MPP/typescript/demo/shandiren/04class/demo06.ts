class Person{
    protected name:string;
    constructor(name:string){this.name=name;}
}

class Employee2 extends Person{
    private department:string;

    constructor(name:string,department:string){
        super(name);
        this.department = department;
    }

    public getElevatorPitch(){
        return `Hello, my name is ${this.name} and I work in ${this.department}.`
    }
}

let howard = new Employee2("Howard","Sales");
console.log(howard.getElevatorPitch());

console.log(howard.name); //error
//Property 'name' is protected and only accessible within class 'Person' and its subclasses.ts

//我们不能在Person类外使用name，但是我们仍然可以通过Employee类的实例方法访问，因为Employee是由Person派生而来的。

