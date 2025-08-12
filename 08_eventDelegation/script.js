

// one way is to add event liteners to each li items one by one like this

// document.querySelectorAll(".parent li").forEach(li => {
//   li.addEventListener("click", () => {
//     console.log(li.textContent);
//   });
// });

// but this is waste what if we have dynamically added values then??

// Instead add event to the parent and listen with the child this is event delegation

// EVENT DELEGATION

// Here we delegate the parent element to listen events of its children (we use the concept of bubbling where child element will bubble the event to its parent and parent will do the work -> this helps to remove all the unnesecarry even listeners that we need to add in all the childs)



// Lets suppose our task is to add the strike through line when we click on the li items

const parent=document.getElementsByClassName('parent')[0]
parent.addEventListener('click',(e)=>{

    // will this work no (kyunki hamne parent pe click event listener lagaya hai aur usmein jahan pe bhi click hoga wo is e main capture hoga zaruri thori hai ki wo li hi ho khali space bhi ho sakti ( agar koi aur tags hote to wo bhi click ho jata))
    // console.log(e.target.textContent);

    // ab sirf li target kiya tumne
    if(e.target.tagName==='LI'){
        console.log(e.target.textContent);
        // toggle karega bas is class hoga to hata dega ni hoga to laga dega
        e.target.classList.toggle('lt')
    }
})


// Lets say we want to remove the child from parent

parent.addEventListener('click',(e)=>{
    console.log(e.target); // <ul class="parent">..</ul>
    // let removeIt=e.target
    // removeIt.remove()

    // one more way

    let parentOfThisTag=e.target.parentNode
    parentOfThisTag.removeChild(e.target)
})