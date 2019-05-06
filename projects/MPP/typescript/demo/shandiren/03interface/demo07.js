function getCounter() {
    var counter = function (start) { return ''; };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
console.log(c.interval);
var newDate = {};
newDate.color = "blue";
newDate.sideLength = 10;
console.log(newDate.sideLength);
