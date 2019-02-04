// //                      To declare Variables
var color = "green";
var squareSizeNum = 100;
//the width and height properties of the square div, so let's go ahead and make a string representing the whole style declaration.
var squareSize = squareSizeNum + "px";
//some elements for the square and button
var button = document.createElement('button');
var div = document.createElement('div');
//add some text to the button, and then append those elements to our document.body
button.textContent = "haha Change Color";
//                      To declare Functions
//elem, representing the square we are going to be changing the background color of, and color representing the color we are changing to
var colorChange = function (elem, color) {
    elem.style.backgroundColor = color;
    return true;
};
//same rule outside of the colorChange function to give the div variable
div.style.width = squareSize;
div.style.height = squareSize;
//to bind to the onclick property of the button element
button.onclick = function (event) {
    colorChange(div, color);
};
document.body.appendChild(button);
document.body.appendChild(div);
