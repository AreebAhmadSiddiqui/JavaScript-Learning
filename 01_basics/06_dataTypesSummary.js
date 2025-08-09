// // How many types of Data Types are there in JS? Answer is 2

// // But why 2 and how are they categorized?

// // Answer is ( Based on the way the data is stored in the memory and accessed)

// // Primitive ( Call by value -> ( Reference ni milta hai sirf copied value milta hai ))

// 7 types

// Number
// String
// Boolean
// Null
// Undefined
// Symbol
// BigInt

// // Chahe data same ho lekin return output alag hoga
// const id1=Symbol('123')
// const id2=Symbol('123')

// console.log(id1,id2); // Symbol(123) Symbol(123)

// console.log(id1===id2); // false

// // Non primitive ( call by refence ) -> refernce diya jata hai

// Array
// Objects
// Functions
// Date
// RegExp

// // One more question 

// // Is JS statically typed or dynamically typed?

// JavaScript is a dynamically typed language.

// Statically Typed (e.g., Java, C++, TypeScript):

// ->Variable types are checked at compile time.
// ->Types must be explicitly declared and cannot change.

// Dynamically Typed (e.g., JavaScript, Python, Ruby):

// ->Variable types are checked at runtime.
// ->Types are flexible and can change during execution.


// javascript
// let x = 10;       // x is a number
// x = "hello";      // x is now a string (no error)
// x = true;         // x is now a boolean
// Since JavaScript allows variables to change types freely, it’s dynamically typed.

// Note:
// TypeScript (a superset of JavaScript) adds static typing to JavaScript for better tooling and error detection.

const arr=[12,123]
const obj={'test':1}
const functiona=function(){
    return 'hello'
}

console.log(typeof arr); // object
console.log(typeof obj); // object
console.log(typeof functiona); // function ( but actually its function object)
