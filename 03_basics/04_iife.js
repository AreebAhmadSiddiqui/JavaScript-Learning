// Immediately Invoked Function Expressions (IIFE)


// this is the syntax
// (function hello(){  // named iife ( because it has got a name )
//     console.log('Hello')
// })()

// ()() -> first ( ) reprsents the scope and the ( ) represents the function call

// The first ( ) forces the function to be treated as an expression (so it can be called immediately).

// The second ( ) executes the function right away.

// (() =>{ // also plain IIFE 
//     console.log('Hello')
// })()
// this is arrow functions structure


// Interview Question?

// Add two IIFE in a code

(function funcOne(name){
    console.log(`Hello ${name}`);
    
// })('Areeb')   with this line we get the following error ((intermediate value)(...) is not a function )  To solve this
})('Areeb')

((name)=>{
    console.log(`Hello ${name}`);
})('Ahmad')


// JavaScript has a feature called Automatic Semicolon Insertion (ASI), where it sometimes adds semicolons if they’re missing. However, ASI can behave unexpectedly, especially with IIFEs.

// Without a semicolon, JS might interpret the two IIFEs as one statement: