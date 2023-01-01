// // Using getElementById
// // To select the element of the h1 tag you have to select using the id 
// const title = document.getElementById('main-heading');

// // Using the GetE;ecmentByClassName
// const listItem = document.getElementsByClassName('list-items');

// // Using the GetElementByTagName()
// const listItems = document.getElementsByClassName('li');

// // Using querySelector to select any element in our html file 
// // When using the querySelector, it selects the first item that matches the selector that's given.
// const container = document.querySelector('div')

// DOM MANIPULATION
// Hw to change the styling of an element
const title = document.querySelector('#main-heading');

// to access css properties in js
title.style.color = 'green';

// applying styling to all of the list items 
// const listItems = document.querySelectorAll('list-items');


// for (i=0; i<listItems.length; i++){
//     listItems[i].style.fontSize = '2rem';
// }


// // For Creating Elements

// const ul = document.querySelector('ul');
// const li = document.querySelector('li');

// // Use the append method to add the list item inside the ul
ul.append(li);

// Using append and innerText to add the new item to the li

li.innerText = 'X-men';

// // Modifying the text in HTML
// const firstListItem = document.querySelector('list-item');

// // using the innerText, you see the visible text
// console.log(firstListItem.innerText);
// // Using the textContent, you see we are getting it the way it is on the HTML
// console.log(firstListItem.textContent);
// // YOu see with the innerHTML we see everything on the html file
// console.log(firstListItem.innerHTML);
