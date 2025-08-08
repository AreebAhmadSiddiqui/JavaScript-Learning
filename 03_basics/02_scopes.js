// var vs let vs const

// let and const are block scoped
// var is function scoped if declared outside a function it becomes a globals scoped

// let a=10
// const b=20
// var c=10

{
    let a=20
    const b=30
    var c=50
    console.log("INNER: ",a,b,c); // 20 30 50 expected
    
}

// console.log(a,b,c); // 10 20 50 // error should have come 10 20 10 ( but var change ho jata hai agar koi change karde)

// -> Y not use var ? bhai manlo ye scope mein koi file import ho rahi ho ya koi doosra programmer likh raha ho to kitna gadbag ho jaega

// Inner functions ke liye uske upar wala function global hai ( Obviousslllyyy )


// See this will throw reference error

function helloFun(){
    var helloVar='Hello'
    console.log(hello);
}

console.log(helloVar); // hello not defined lekin agar function ko hatake if ya fir {} likh diya to accessible

function one(){
    const oneVal='one'
    function two(){
        const twoVal='two'
        console.log(oneVal);
        
    }
   // console.log(twoVal); // twoVal is not defined
    two()
}
one()


// +++++++++++++ INTERESTING QUESTION ++++++++++++++++


// HOISTING KA CONCEPT



hello() // no error
function hello(){
    console.log('hello');
}


// hello2() // Cannot access 'hello2' before initialization

const hello2= function (){
    console.log('hello');
}

// console.log(a) // Cannot access 'a' before initialization
let a=10 similarly const

console.log(b) // can access but undefined value
var b=10