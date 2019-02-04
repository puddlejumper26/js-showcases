// //                      To declare Variables

let color: string = "green";
let squareSizeNum: number = 100;
//the width and height properties of the square div, so let's go ahead and make a string representing the whole style declaration.
let squareSize: string = `${ squareSizeNum }px`;

//some elements for the square and button
let button: Element = document.createElement('button');
let div: Element=document.createElement('div');

//add some text to the button, and then append those elements to our document.body
button.textContent = "haha Change Color";



//                      To declare Functions

//elem, representing the square we are going to be changing the background color of, and color representing the color we are changing to
let colorChange: Function = (elem: Element, color: string) : boolean => {
    (elem as HTMLElement).style.backgroundColor = color;
    return true;
}
//same rule outside of the colorChange function to give the div variable
(div as HTMLElement).style.width = squareSize;
(div as HTMLElement).style.height= squareSize;
//to bind to the onclick property of the button element
(button as HTMLElement).onclick = (event) => {
    colorChange (div, color);
}


document.body.appendChild(button);
document.body.appendChild(div);


