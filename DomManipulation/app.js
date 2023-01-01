// DOM MANIPULATION

// GET ElementById()
// const title = document.getElementById("main_heading");
// console.log(title);
// Get ELementByClass()
// const listItems = document.getElementsByClassName("list-items");
// console.log(listItems);

//  Get ElementsByTagName
// const items = documents.getElementsByTagName("li")


// queryselector
// const container = document.querySelector('div')
// console.log(container);

// queryselectorAll
// const  container = document.querySelectorAll('div');

// // Using queryselector with a id 
// const title = document.querySelector('#main_heading')

// Using queryselector with a class 
// const items = document.querySelector('.listItems')

// var title = document.querySelector('#main_heading');
// title.style.fontSize = 64px;
// title.style.backgroundColor = 'turquiose';

// var listItems = document.querySelectorAll('.listItems')

// for (i=0; i<listItems.length; i++){
//     listItems[i].style.color = 'orange';
// }

// console.log(listItems);


// How to create elements in js
// Selecting the container ul and the li too since we want to add items to the li as well 
// var ul = document.querySelector('ul')
// var li = document.querySelector('li')

// Adding elements
// ul.append(li);
// To add the new li to the ul, you do below
// li.innerText = 'Andriod Development';

// console.log(ul);

// examples to show difference between innerText, textContent, innerHTML
// const firstListItem = document.querySelector('.list-items')

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

// Modifying attributes and classes
// li.setAttribute('id', 'main_heading')
// To remove attributes
// li.removeAttribute('id', 'main_heading')

// To add a class
// li.classList.add('.list-items')
// To remove a class
// li.classList.remove('.list-items')
// EVENT LISTENERS
// Element.addEventListener("click", function);

var btnTwo = document.querySelector('.btn-2');

btnTwo.addEventListener("click", alertBtn);

function alertBtn(){
    alert("I love coding")
}

console.log(btnTwo);