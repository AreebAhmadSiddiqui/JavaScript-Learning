// console.log('First')

// setTimeout(() => {
//     console.log('Second');
// }, 2000);

// console.log('Third')


// Lets  replicate the ecom funcitonality

const cart=['shoes','pants','mobile']

api.createOrder(cart,function (){
    api.proceedToPayment(function (){
        api.showOrderSummary(function (){
            api.updateWallet();
        })
    })
})

// Problem 
// This is what we call back hell ( one cb inside another and ifs and all) ( This is also called Pyramid of Doom )

// Other problem Inversion of Control
// we loose the control of our code 


api.createOrder(cart,function (){
    api.proceedToPayment()
})

// we are trusting createOrder to call proceedToPayment ( there can be several issues in createOrder might be some other develper wrote it, a wrong logic , call hi na kare proceedPyament wale ko ya fir koi bug ho , 2 baar call karde)



