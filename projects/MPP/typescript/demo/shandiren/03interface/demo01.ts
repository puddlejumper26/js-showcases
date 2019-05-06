// function printLabel(labelObj:{label:string}){
//     console.log(labelObj.label);
// }

// let myObj={size:10,label:"size 10 Object"}
// printLabel(myObj);

interface LabeledValue{
    size:number;
    label:string;
}
function printLabel(labelObj:LabeledValue){
    console.log(labelObj.size)
    console.log(labelObj.label);
}
let myObj = { size: 10, label: "size 10 Object" }
printLabel(myObj);