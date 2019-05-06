function theCity(){
    let getCity;

    if(true){
        let city="Seattle";
        getCity=function(){
            return city;
        }
    }
   // console.log(city);这里会报错，因为没有city 定义
    return getCity(); 
    //但是这里getCity里面已经保存了city的信息，所以任然可以访问
}

console.log(theCity());

 
// var x=10;
// var x=20;
// console.log(x);
// let m=10;
// // let m=20;
// console.log(m);
