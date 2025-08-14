// A Promise in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It is a way to handle async operations more elegantly than callbacks.

// Creating Promises

// 1)
// const promiseOne = new Promise(function(resolve,reject){
//     // Ya to hoga ya to ni hoga
//     // Do an asyn task
//     // DB calls,cryptogrpaphy,network

//     setTimeout(()=>{
//         console.log('Async task 1 is complete');
//         resolve()
//     },1000)
// })

// promiseOne.then(function (){
//     console.log('Promise 1 consumed');
// })

// 2) New promise

// new Promise(function (resolve,reject){
//      setTimeout(()=>{
//         console.log('Async task 2 is complete');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('Promise 2 consumed');
    
// })


// 3) New Promise ( data passing)

// new Promise(function (resolve,reject){
//      setTimeout(()=>{
//         console.log('Async task 3 is complete');
//         resolve({username:'areeb',age:10,email:'hello'})
//     },1000)
// }).then(function(data){
//     console.log('Promise 3 consumed');
//     console.log(data); // { username: 'areeb', age: 10, email: 'hello' }
// })


// 4) with error

// new Promise(function (resolve,reject){
//      setTimeout(()=>{
//         console.log('Async task 4 is complete');
//         let error=false
//         if(!error) resolve({username:'areeb',age:10,email:'hello'})
//         else reject('ERROR: Something Went Wrong')
//     },1000)
// }).then(function(data){
//     console.log('RESOLVE BLOCK');
//     console.log(data); // { username: 'areeb', age: 10, email: 'hello' }
//     return data.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(err){
//     console.log('REJECT BLOCK');
//     console.log(err);
// }).finally(()=>{
//     console.log('FINALLY BLOCK');
// })


// 5) asyn await

// const promFive=new Promise(function (resolve,reject){
//      setTimeout(()=>{
//         console.log('Async task 5 is complete');
//         let error=true
//         if(!error) resolve({username:'areeb',age:10,email:'hello'})
//         else reject('ERROR: Something Went Wrong')
//     },1000)
// })

// but here you should explicitly wrap in try catch block
// async function handlePromise() {
//     try {
//         const response=await promFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// handlePromise()


// Using Fetch API

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(data){
//     return data.json()
// }).then((data)=>{
//     console.log(data);
// })
// .catch(function(err){
//     console.log(err);
// }).finally(()=>{
//    console.log('finally');
// })

new Promise(function (resolve,reject){
    setTimeout(()=>{
        console.log('Async task 2 is complete');
        resolve()
    },10)
}).then(function(){
    console.log('Promise 2 consumed');
})
    

async function getDetails(){
    try {
        const response= await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()
        
        console.log(data);
        console.log('----------------------')
    } catch (error) {
        console.log(error);
    }

}

getDetails()


// For the above code only


// Pehle wala promise pehle output hoga obvisouly because of event loop concept
// lekin usko agar 2-3 sec kar do ho sakta hai ki pehle api wala output ho jae

// .then wale sabhi function microtask queue mein jaenge , ye jo setTimeout wala hai wo callback queue mein hi jaega aur jab wo run hoga tb .then wala jo promise hai 'Promise 2 consumed' ye run hoga microtask queue se  


// lekin agar tum is tareeqe se samjho ki wo promise ke andar kar diya hai to ( promis1 promis2 ho gaya jo pehle ho jaega wo pehle run hoga ) -> is analogy se yaad kar sakte ho but its not correct , correct upar wala hai