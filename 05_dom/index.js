const title=document.getElementById('title')

// get properties of it

console.log(title.id); // title
console.log(title.class); // undefined
console.log(title.className);// heading
console.log(title.getAttribute('id')) //title
console.log(title.getAttribute('class')); //heading

// seting attribute
console.log(title.setAttribute('class','test')); // ye override kardeta
// use

console.log(title.setAttribute('class','test heading'));


console.log(title);
title.style.backgroundColor='green'
title.style.padding='10px'
title.style.borderRadius='10px'


// Adding the content

console.log(title.textContent); // Hello World!
console.log(title.innerText);// Hello World!
console.log(title.innerHTML);// Hello World!

// So whats the difference?

// innerText vs textContent

// -> innerText gives you only that value which is visible
// -> textContent will give you everything ( visible or not visibile)


const testText=document.getElementsByClassName('testText')[0]

console.log(testText.innerText); // Hello this for test only
console.log(testText.textContent); //  Hello this for test only span text ( display is none )

console.log(testText.innerHTML); // gives html as well if it is there


// Selector

console.log(document.querySelector('h1')) // gives you the first
console.log(document.querySelector('.testText')) 
console.log(document.querySelector('#title')) 



// Let change the color of the first li

const myUl=document.querySelector('ul') //first ul
const myLi=myUl.querySelector('li') // first li

myLi.style.backgroundColor='green'

// Quesry Selcetor ALl

const myLiList=document.querySelectorAll('li')
// console.log(typeof allLi); // (NodeList(3) [li, li, li])

// type of array but not an array  ( ismein to loop kar liya hamne lekin HTMLCOllection mein to wo bhi ni hota)

// What to do ? convert to array

// these are not it jsut an example
// Feature	    HTMLCollection	                            NodeList
// Returned By	getElementsByClassName/TagName, children	querySelectorAll, childNodes

const myHTMLList=document.getElementsByClassName("list-item")

// Convert to Array

const arr=Array.from(myHTMLList)
console.log(arr);

arr.forEach((l)=> l.style.color='green')

