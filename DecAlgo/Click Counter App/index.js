/* Your task is to write vanilla HTML and JS code that will display the current value of an integer number counter.

The counter should start at 0.
There should be a button to add 5 to the counter's value.
There should be a button to subtract 1 from the counter's value if the current counter value is an odd number
The counter value display should be rendered when the value changes.
Your code should render the following HTML elements:

A h1 element - Add an id counter to this element.
A button element. Add an id increment to this element. The element's text should have the text Increment by 5.
Another button element. Add an id decrement to this element. The element's text should have the text Decrement if Odd.
Make sure the correct id attribute for the elements are added and spelt correctly, otherwise, your tests would not pass.

Here's a demo of the working application:

010-assessment.gif */

let btnInc = document.querySelector('.increment');
let btnDec = document.querySelector(".decrement");
let counter = document.querySelector(".counter");

btnInc.addEventListener("click", increment());
btnDec.addEventListener("click", decrement);


function increment(){
    return counter.textContent++;
    // if you want to increment by 5
    // return counter.textContent+=5;
}
function decrement(){
    return counter.textContent--;
}