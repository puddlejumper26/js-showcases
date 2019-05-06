function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () { console.log("--beep--"); };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () { console.log("--tick--"); };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
console.log(digital.tick());
console.log();
