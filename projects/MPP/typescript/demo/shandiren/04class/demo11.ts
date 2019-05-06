//静态属性


//我们使用static定义origin，因为它是所有网格都会用到的属性。 每个实例想要访问这个属性的时候，都要在origin前面加上类名。
class Grid2{
    static origin={x:0,y:0};
    calculateDistanceFromOrigin(point:{x:number;y:number}){
        let xDist=(point.x-Grid2.origin.x);
        console.log(point.x);
        console.log(Grid2.origin.x);
        let yDist=(point.y-Grid2.origin.y);
        return Math.sqrt(xDist*xDist+yDist*yDist)/this.scale;
        console.log(this.scale);
    }
    constructor(public scale:number){}
}

let grid1=new Grid2(1.0);
let grid2=new Grid2(5.0);

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));