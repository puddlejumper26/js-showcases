class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting=message;
    }
    greet(){
        return "hello - "+this.greeting;
    }
};

let newData= new Greeter("hahaha");
console.log(newData.greet());