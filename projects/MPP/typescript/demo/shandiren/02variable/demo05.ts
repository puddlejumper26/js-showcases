for(var i=0;i<10;i++) {
    //console.log(i);
   
    setTimeout(function(i){
        console.log(i);
    }.bind(this,i), 100*i);
}

// for(var i=0;i<10;i++) {
//     //console.log(i);
//     (function(i)
//         {setTimeout(()=>{
//         console.log(i);
//     }, 100*i);})(i)
// }


// let声明出现在循环体里时拥有完全不同的行为。 不仅是在循环里引入了一个新的变量环境，而是针对每次迭代都会创建这样一个新作用域。 这就是我们在使用立即执行的函数表达式时做的事，所以在setTimeout例子里我们仅使用let声明就可以了。
for (let i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}