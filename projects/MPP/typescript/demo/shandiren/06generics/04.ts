// 在泛型约束中使用类型参数



function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: "asdf", b: 2, c: 3, d: 4 };

console.log(getProperty(x, "a")); // okay
//getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'