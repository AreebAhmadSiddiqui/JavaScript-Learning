// Function Statement aka declaration
function a(){
    console.log('A called');
}


// Func expression
var b = function (){
    console.log('B called');
}

// Difference between Func Statement and Expression

// -> The way they are hoisted
// b can't be called but a can be called 

a(); // prints A called
b(); // throws error ( type error)


function a(){
    console.log('A called');
}

var b = function (){
    console.log('B called');
}

// func declaration

// Same as function statement

// Anonymous function
// A function who doesn't have any identity

// function (){

// } // but this is not valid ( Acc to ECMA standards Function statemnt need a name)
// So where can they be used

// -> They are used when functions are used as a value


// Named function expression

// same as function expression but this time a function has a name
var b = function xyz(){
    console.log('B called');
}
// xyz() // this will show error
b() // this will work

// Difference between Parameters and Arguments

// function test( a,b,c) -> a,b,c are params
// test(a,b,c) => a,b,c are arguments

// First class functions/ first class citizens

// When functions in a programming language are treated like any other variable then that programming language is known to have first-class functions. In javascript, the functions are known as the first-class citizens, which means functions can do what any other variables can. First-class functions javascript get this ability by treating the functions as an object.

// As functions are treated like a variable, we can pass them as a parameter to the other function and return the function from another function just like any other variable. Because functions are treated as variables we can store them in any other variable, objects, and in an array. This simply means first-class functions in javascript are simply like values or like any other objects in the code.


// Arrow functions

// Came ES6 (2015)
