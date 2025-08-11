const buttons=document.querySelectorAll('.button')
console.log(buttons);

buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const color=e.target.id
        console.log(e.target);
        
        document.body.style.backgroundColor=color
    })
})