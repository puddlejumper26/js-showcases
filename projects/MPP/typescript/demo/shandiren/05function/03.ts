// 可选参数

function buildName(a:string,b?:string){
    return a+b;
}

let a=buildName("bob");
let b=buildName("bob","haha");
let ch=buildName("bob",'a','d');

function buildName2(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName2("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName2("Bob", undefined);       // still works, also returns "Bob Smith"
let result3 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName2("Bob", "Adams");         // ah, just right

//可选参数必须跟在必须参数后面。 如果上例我们想让first name是可选的，那么就必须调整它们的位置，把first name放在后面。