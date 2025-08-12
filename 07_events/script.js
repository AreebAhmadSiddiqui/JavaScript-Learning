// we have got few approaches to add events

// 1) Directly inject into HTML ( Not recommended )

{/* <li onClick="alert('Hi')"></li> */}

// 2) A better aproach

// function handleClick(e){
//     console.log(e);
    
//     alert('hello')
// }
// const liItem=document.querySelector('.list1')
// liItem.onclick=handleClick

// I was doing a mistake here I had written handleClick() it was calling the function immediately and hence getting the alert when the page loads not when it is clicked

// or

// liItem.onclick=function (){
//     alert('hello')
// }

// It gives less features while event listerner gives us more detail

// Recommended Approach

// const liItem=document.querySelector('.list1')
// liItem.addEventListener('click',(e)=>{
//     alert('hello')
// },false)

// Learn these events

// type,timestamp,preventDefault()
// target,currTarget (toElement,srcElement -> depecated use target)
// clientX,clientY,screenX,screenY , position related
// altkey,ctrlkey,shiftkey,keyCode


// Lets Learn Event Propagation

// -> Event propagation describes how events travel through the DOM tree

-> Jab bhi event raise hota hai to event propagation hota hi hota hai in two phases

a) capturing phase ( upar se neeche)
b) bubbling phase ( neeche se upar)

Aur pehle a hota hai fir b

Ex -> 
 <html>
    <body>
        <div class="grandparent">
        <div class="parent">
            <button class="child">Click Me</button>
        </div>
    </div>
    </body>
</html> 


iska matlab agar in sab pe event laga hai aur event listener mein capture = false ( -> yani bubbling phase)

agar click hua child se -> parent -> grandparent -> body -> html

jis jis pe event laga hoga wo execute hota jaega in any phase


document.getElementsByClassName('child')[0].addEventListener('click',()=>{
    console.log("child clicked");
})

document.getElementsByClassName('parent')[0].addEventListener('click',()=>{
    console.log("parent clicked");
})

document.getElementsByClassName('grandparent')[0].addEventListener('click',()=>{
    console.log("gradparent clicked");
})

// In this case since capture is false so we got chil clicked , parent clicked and then grand parent


document.getElementsByClassName('child')[0].addEventListener('click',()=>{
    console.log("child clicked");
})

// document.getElementsByClassName('parent')[0].addEventListener('click',()=>{
//     console.log("parent clicked");
// })

document.getElementsByClassName('grandparent')[0].addEventListener('click',()=>{
    console.log("gradparent clicked");
})

// In this case we got chil clicked adn then grand parent


document.getElementsByClassName('child')[0].addEventListener('click',(e)=>{
    console.log("child clicked");
})

document.getElementsByClassName('parent')[0].addEventListener('click',(e)=>{
   
    console.log("parent clicked");
})

document.getElementsByClassName('grandparent')[0].addEventListener('click',()=>{
    console.log("gradparent clicked");
},true)

-> g c p

document.getElementsByClassName('child')[0].addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log("child clicked");
})

document.getElementsByClassName('parent')[0].addEventListener('click',(e)=>{
   
    console.log("parent clicked");
})

document.getElementsByClassName('grandparent')[0].addEventListener('click',()=>{
    console.log("gradparent clicked");
})

you can use stop propagation to stop the event from propagating ( works in both phases)






