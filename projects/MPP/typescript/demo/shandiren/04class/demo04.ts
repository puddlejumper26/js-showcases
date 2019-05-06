class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`it moves ${distanceInMeters} meters`);
    }
}

class Dog extends Animal {
   private bark() {
        console.log("The Dog barks");
    }
}

const newDog = new Dog();
console.log(newDog.bark());
console.log(newDog.move(12));

//当设置bark为 private的时候，newDog.bark()就不能运行