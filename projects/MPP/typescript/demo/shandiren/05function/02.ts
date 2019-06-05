//函数类型

//函数类型包含两部分：参数类型和返回值类型。 

//第二部分是返回值类型。 对于返回值，我们在函数和返回值类型之前使用(=>)符号，使之清晰明了

let myAdd: (baseValue: number, increment: number) => number =
    function (x: number, y: number): number { return x + y; };

//返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为void而不能留空。