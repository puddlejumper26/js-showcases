//剩余参数

// TypeScript里，你可以把所有参数收集到一个变量里：

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

console.log(employeeName);