"use strict" // treat all JS code as newer version of JS

// alert("Hello") // we are using nodejs , not browser hnce we get error

// tc39 for official JS documentation ( Ecma Standards )
// mdn for ease of readability

// Primitive Data Types

// number -> range is -2^53 + 1 to 2^53 - 1
// BigInt for very latge numbers
// String -> '',""
// Boolean -> true/false
// null -> standalone value as well as a data type
// undefined -> value assign ni hui hai

// null vs undefined

// null means ham use bata rahe ki explitcy khali hai
// undefined mein to initialise kar diya lekin data ni hai

// Use undefined when something is unintentionally missing (e.g., uninitialized variables).

// Use null when you want to explicitly indicate "no value" (e.g., clearing an object reference).


// More Variables

// symbol => uniqueness ko pata karne ke liye
// Symbol is a primitive data type introduced in ES6 (ES2015) that represents a unique and immutable value.

// List of Primitive Types
// Type	    Description	                            Example
// Number	    Numeric values (integer, float)	        42, 3.14
// String	    Text data (sequence of characters)	    "hello", 'world'
// Boolean	    Logical true or false	                true, false
// Undefined	Variable declared but not assigned	    let x; → x is undefined
// Null	    Intentional absence of value	        let y = null;
// Symbol	    Unique and immutable identifier	        const sym = Symbol('id');
// BigInt	    Arbitrary-precision integers	        12345678901234567890n

// Ye immutable hote hai yani change ni honge reassign ho sakte hai

// Key Features of Primitives
// ✅ Stored by value (copied when assigned).
// ✅ Immutable (cannot be changed, only reassigned).
// ✅ Compared by value ('hi' === 'hi' → true).

// let a = 10;
// let b = a; // b gets a COPY of a's value
// b = 20;
// console.log(a); // 10 (unchanged)


// List of Non-Primitive Types ( Referenced data type )
// Type	    Description	                                        Example
// Object	    Key-value pairs (includes arrays, functions, dates)	{ name: "Alice" }
// Array	    Ordered lists	                                    [1, 2, 3]
// Function	Callable objects	                                function foo() {}
// Date	    Date and time	                                    new Date()
// RegExp	    Regular expressions	                                /\d+/g

// They are mutable aur memory based changes honge

// Key Features of Non-Primitives
// ✅ Stored by reference (variables point to the same memory location).
// ✅ Mutable (can be modified after creation).
// ✅ Compared by reference ({} === {} → false).


// let obj1 = { name: "Alice" };
// let obj2 = obj1; // obj2 points to the SAME object as obj1
// obj2.name = "Bob";
// console.log(obj1.name); // "Bob" (original object modified)


// typeof
// let a=null
// console.log(typeof a); // object ye JS ki khami hai
// console.log(typeof(a)); // both are same
// console.log(typeof undefined); // undefined because wo undefined datatype hai


