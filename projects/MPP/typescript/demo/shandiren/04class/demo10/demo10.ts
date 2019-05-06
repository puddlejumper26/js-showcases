// 存取器


let passcode = "secret passcode 12";
class Employee5{
    private _fullName:string;

    get fullName():string{
        return this._fullName;
    }

    set fullName(newName:string){
        if(passcode && passcode =="secret passcode"){
            this._fullName=newName;
        }
        else{
            console.log("Error");
        }
    }
}

let empployee6=new Employee5();
empployee6.fullName = "Bod Smith";
if(empployee6.fullName){console.log(empployee6.fullName);}
//$ tsc demo10.ts && node demo10.js
//demo10.ts(5, 9): error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
//demo10.ts(9, 9): error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.

//首先，存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。 其次，只带有get不带有set的存取器自动被推断为readonly。 这在从代码生成.d.ts文件时是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值。
//需要额外建立一个文件 tsconfig.json

// 然后通过 tsc && node demo10.js 运行

//之后修改密码初始let passcode = "secret passcode 12";，再运行，就会出现 Error