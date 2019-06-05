function getProperty(obj, key) {
    return obj[key];
}
var x = { a: "asdf", b: 2, c: 3, d: 4 };
console.log(getProperty(x, "a")); // okay
//getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'
