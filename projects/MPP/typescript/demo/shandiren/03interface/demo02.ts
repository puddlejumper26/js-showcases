interface SquareConfig{
    color?:string;
   readonly width:number;
    [propName:string]:any;
}

function createSquare(config:SquareConfig):{color:string; width:number}{
    let newSquare={color:"white",width:10};
    let second:SquareConfig={color:"red",width:50};
    //second.width=60;
    newSquare.width=40;
    if(config.color){
        newSquare.color=config.color;
    }
    if(config.width){
        newSquare.width=config.width;
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

let mySquare = createSquare({ color: "black", width: 30 })
let mySquare2 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
console.log(mySquare2);