// Promises are used to handle asyn operations

// Before Promise

// const cart=['shoes','pants','mobile']

// api.createOrder(cart,function (orderId){
//     api.proceedToPayment(orderId)
// })

// // problem is inversion of control


// const promise=createOrder(cart);

// promise : {data: undefined} // jab tak data ni a jata 
// aur jab data a jaega to {data: some_data}

// promise.then(function (orderId){
//     api.proceedToPayment(orderId)
// })

// // jab data a jaega tb ye callback run ho jaega

// // Ab ye call back wale method se sahi kyun hai

// -> we are sure ki call hoga jab data aega
// -> ek baar call hoga ye bhi sure hai



// const api='https://api.github.com/users/AreebAhmadSiddiqui'

// const user=fetch(api)

// console.log(user);

// aisa dikha tha hai

// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Response

// ye to samjh a rha hoga ki neeche fulfilled kyun ( because jab print kiya tb pending tha lekin data a gaya baad mein)

// user.then(function (data){
//     // console.log(data);
//     return data.json()
// }).then(function (data){
//     console.log(data);
// })


// Creating a Promise
const cart=['shoes','pants','mobile']
const promise=createOrder(cart);
console.log(promise);
promise
.then(function (orderId){
    console.log(orderId);
    return orderId
})
.then(function (orderId){
    return proceedToPayment(orderId)
})
.then(function(data){
    console.log(data);
})
.catch(function(){
    alert('Failed to Load Cart')
})


// NOTEEE------------- ( catch jahan rakhoge uske upar ke sare errors pakdega) agar catch ko .then ke neeche likhta to sirf us then ki erorr ko pakadta is case mein hamara wala show hoja agar reject hua 



// Creatin a promise

function createOrder(cart){
    const pr=new Promise(function (resolve,reject){
        // createOrder
        // validateCart
        // orderId for success
        // error for issues

        if(validateCart(cart)){
            setTimeout(function(){
                resolve(123); // orderId
            },2000)
        }else{
            reject(new Error("Noob"))
        }
    })

    return pr;
}

function proceedToPayment(orderId){
    const pr=new Promise(function (resolve,reject){
        resolve('Payment Info')
    })
    return pr;
}


function validateCart(){
    // return false; //Error: Noob
    return true; //1234
}