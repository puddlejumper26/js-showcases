// interface UIElement{
//     addClickListener(onclick:(this:void,e:Event)=>void):void;
// }
function identity(arg) {
    return arg;
}
var myIdentity = identity;
console.log(myIdentity(5));
