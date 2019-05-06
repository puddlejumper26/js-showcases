function createSquare(config) {
    var newSquare = { color: "white", width: 10 };
    var second = { color: "red", width: 50 };
    //second.width=60;
    newSquare.width = 40;
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.width = config.width;
    }
    return newSquare;
}
// let mySquare=createSquare({color:"black",width:30})
// mySquare.width=2;
// ;
// console.log(mySquare);
// let addNew:SquareConfig={color:"green",width:20};
// // addNew.width=2;
// addNew.color="black";
// console.log(addNew);
var mySquare = createSquare({ color: "black", width: 30 });
var mySquare2 = createSquare({ width: 100, opacity: 0.5 });
console.log(mySquare2);
