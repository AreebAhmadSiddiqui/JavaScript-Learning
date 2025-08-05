// Operations

console.log(2+2); 4
console.log(2-2); 0
console.log(2*2); 4
// console.log(2/2,typeof(2/2)); -> 1 number
console.log(2%2); 0
// console.log(2**2); -> 2^2 = 4
console.log(3/4);

// Note -> Remember '/' operator gives float value
// console.log(3/4); -> 0.75

// to get quotient
console.log(Math.floor(10/3)) // gives 3
console.log(Math.trunc(10/3)) // gives 3

// But here is the interesting part

console.log(Math.floor(-10/3)) // gives -4
console.log(Math.trunc(-10/3)) // gives -3

// -> Math.floor best for positives 
// -> Math.trunc best for negatives

// Note->

console.log(10/0) // error maybe? No output is Infinity


// Some Tricky things

let str1="hello"
let str2=" Hi"

console.log(str1+str2)


// problems
console.log("1"+2) // prints 12 // python mein error a jegaa
console.log(1+"2") // prints 12 // same yahan pe bhi

// ab dekho

console.log("1"+2+3);
console.log(1+2+'3');

// same ana chahiye? NOOOOOO

// prints -> 122
// prints -> 33

// Reason?

// JavaScript evaluates expressions left-to-right and applies type coercion for the + operator based on the current data types at each step.

// So if the first operand is string so it will consider the string operations

// And if not then normal things which we do

// 1. console.log("1" + 2 + 3) → "123"
// Step-by-Step Evaluation:
// "1" + 2

// Since "1" is a string, JavaScript coerces 2 into a string and performs string concatenation.

// Result: "12" (now a string).

// "12" + 3

// "12" is still a string, so 3 is coerced into a string.

// Result: "123".

// Key Takeaway:
// If the first operand is a string, all subsequent + operations become string concatenations.

// 2. console.log(1 + 2 + "3") → "33"
// Step-by-Step Evaluation:
// 1 + 2

// Both operands are numbers, so JavaScript performs numeric addition.

// Result: 3 (number).

// 3 + "3"

// Now, one operand is a string ("3"), so JavaScript coerces 3 into a string.

// Result: "33".

// Key Takeaway:
// If numbers appear before the string, they are added first (numeric +), then concatenated later.

// -----------------------

// console.log(+true) // 1
// console.log(true+) // error
// console.log(+"") // 1
// console.log(""+)//erroe

// Prefix and Postfix

let a=123
console.log(a++)
console.log(++a)
console.log(a)