var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
        console.log("this is me - " + this.name);
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
console.log(dad);
