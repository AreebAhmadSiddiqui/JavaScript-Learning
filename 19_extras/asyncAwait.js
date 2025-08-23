// Async function **always** returns a **promise**

// const p=new Promise(function(resolve,reject){
//     resolve("Promised Resolved Value")
// })

// async function getData(){
//     return 'Data'
// }
// async function getData(){
//     return p
// }
// const dataPromise=getData() // promise

// console.log(dataPromise.then(res=>console.log(res)
// ));


// Async/Await 

// const p1=new Promise(function(resolve,reject){
//     resolve("Promised Resolved Value")
// })


// function getData2(){
//     p.then(res=>console.log(res))
// }
// getData2()

// async function handlePromise(){
//     const val=await p1;
//     console.log(val);
// }
// handlePromise()


// Deep dive into async/await

// const p1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve("Promised Resolved Value 2")
//     },5000)
// })

// // Without async/await
// function getData2(){
//     p1.then(res=>console.log(res))
//     console.log('Hello');
// }
// getData2()

// For this

// Hello
// Promised Resolved Value 2


// async function handleFunc(){
    
//     const data=await p1
//     console.log(data);
//     console.log('Hello');
// }
// handleFunc()


// for this

// Promised Resolved Value 2
// Hello

// Are ye to block kar rha hai code ko aisa lag rha hai na

// Lekin dekho hello wala code in first case promise ka part hai hi ni ( ham promise ke saath jo bhi karna hai wo to .then wale chain mein karenge) , to ye to print hona hi hai

// Doosre mein data jab aega ab hame uske saath khelna bhi to hai to jo lines data ke neeche hai wo tabhi execute hone chahiye jab data a gaya ho to expected behaviour hi to hai

// Mera doubt the lekin man lo second case mein hello ki jagah 1000 lines hoti to wait karta JS ( waise kayde se wait to ni kar rha lekin agar wait kar bhi rha hai to sahi ni hai ki jab data aega tb main 1000 line execute karunga kyunki unhi ke andar data se khel rha honga)


// const p1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve("Promised Resolved Value 2")
//     },10000)
// })

// const p2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve("Promised Resolved Value 2")
//     },5000)
// })

// async function handleFunc(){
    
//     const data1=await p1
//     console.log(data1);
//     console.log('Data 1');

//     const data2=await p1
//     console.log(data2);
//     console.log('Data 2');
// }
// handleFunc()

// after 5 sec

// Promised Resolved Value 2
// Data 1
// Promised Resolved Value 2
// Data 2

// async function handleFunc2(){
    
//     const data1=await p1
//     console.log(data1);
//     console.log('Data 1');

//     const data2=await p2
//     console.log(data2);
//     console.log('Data 2');
// }
// handleFunc2()

// after 10 sec

// Promised Resolved Value 2
// Data 1
// Promised Resolved Value 2
// Data 2


// kyunki data1 wala wait karega 10 se uske baad hi execute hoga next lines
// Mujhe ye doubt the ki since p1 mein 10 s wait karna hai to jab p2 pe jaega to 5 aur s wait karega 
// lekin agar dekho to const p1 ,p2 ye dono 10 aur 5 s ke liye chl jaenge pehle hi


// Real world example

// fetch() => returns promise
// await fetch() => returns response object
// data.json() => returns a promise
// await data.json() => returns a json 

const api='asdasdasd'

// async function handleApi(){
//     const promData=await fetch(api)
//     console.log(await promData.json());
// }

handleApi()

// errors

async function handleApi(){
    try {
    const promData=await fetch(api)
    console.log(await promData.json());
    } catch (err){
        console.log(err);
    }
}