// function init() {
//     const variable='hello'
//     function outer(){
//         console.log('Outer 1');
//     }
//     function outer2(){
//         console.log('Outer 2');
//         outer()
//     }
//     outer2();
// }
// init();

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();


// in this ham ye soch sakte hai ki function ka execution context hat gaya to wo function bhi chala jaega wahan se
// Sahi hai lekin ja tum return karte ho to function retrun hota hai wo akela ni return hota apne saath apna lexical scope bhi return karta hai


// Ek Real Use Case

// tumhare paas 2 button hai unka color mentioned hai aur click karte bg color same color ka ho jana chahiye

// OK EzpZ

// btn1->gree btn2->orange

// document.getElementById('btn1').addEventListener('click',function(){
//     document.body.style.backgroundColor='green'
// })

// document.getElementById('btn2').addEventListener('click',function(){
//     document.body.style.backgroundColor='orange'
// })

// bhadiya kaam kar rha hai

// but lets say bahut sare buttons hai tab???
// generic function likhna padega okk

// function changeColor(color){
//     document.body.style.backgroundColor=color
// }

// document.getElementById('btn1').addEventListener('click',changeColor('green'))

// document.getElementById('btn2').addEventListener('click',changeColor('orange'))

// are ye to orange ho gaya aur click karne par change bhi ni ho rha

// kyunki hamne execute kardiya directly so okk
// sirf reference kardein to? han kar sakte ho lekin reference is same function ka to doge ni kyun tumhe turant execute to krana ni hai

// isliye we would use closures

function changeColor(color){
    return function (){
        document.body.style.backgroundColor=color
    }
}

// document.getElementById('btn1').addEventListener('click',changeColor('green'))

// document.getElementById('btn2').addEventListener('click',changeColor('orange'))

// lekin changeColor to yahan bhi call ho raha tb issue ni a rha are dekhho isko thora change karke likhta hun shaya samjh ae

const handleChange=changeColor('green')
document.getElementById('btn1').addEventListener('click',handleChange) // notice karo reference diya ja rha turant execute ni ho rha

document.getElementById('btn2').addEventListener('click',changeColor('orange'))
