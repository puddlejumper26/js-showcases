// 泛型约束


interface Lengthwise{length:number;}

function loggingIdentity<T extends Lengthwise>(arg:T):T{
    console.log(arg.length);
    
    return arg;
}

loggingIdentity('asdfw'); 
loggingIdentity({ length: 10, value: 3 });

