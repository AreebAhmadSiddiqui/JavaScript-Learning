// Ek baat karta hai 
// setTimeout(function (){
//     console.log('Areeb');
// },2000)

// set interval baar baar karta hai


// changes text after 2 s
function changeText(){
    document.querySelector('h1').innerHTML='Text changed'
}

let timeOutRef=setTimeout(changeText,2000)

// Agar stop karana hai to

// use clearTimeout

// but it will need a reference
// clearTimeout(timeOutRef) // stops the execution of changeText timeout

// I want to stop its execution after button click


document.getElementById('stop').addEventListener('click',()=>{
    clearTimeout(timeOutRef)
    console.log('STOPPED');
})

// lekin haan dhyaan rakhna ki agar uska time poora ho gaya hai to wo execute to ho hi jaega (jaise if you click stop after 2 s inner HTML already change ho chuka hoga)