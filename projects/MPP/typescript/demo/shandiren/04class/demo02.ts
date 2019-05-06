class Animal{
    move(distanceInMeters:number=0){
        console.log(`it moves ${distanceInMeters} meters`);
    }
}

class Dog extends Animal{
    bark(){
        console.log("The Dog barks");
    }
}

const newDog= new Dog();
console.log(newDog.bark());
console.log(newDog.move(12));

//类从基类中继承了属性和方法。 这里，Dog是一个派生类，它派生自Animal基类，通过extends关键字。 派生类通常被称作子类，基类通常被称作超类。

//因为Dog继承了Animal的功能，因此我们可以创建一个Dog的实例，它能够bark()和move() 。