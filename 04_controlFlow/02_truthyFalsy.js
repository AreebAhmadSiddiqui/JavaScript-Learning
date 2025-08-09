const userEmail='areeb@google.com'

if(userEmail){
    console.log('User is there'); // prints this
}else{
    console.log('Dont have access');
}

// Falsy values

// false, 0 ,-0,BigInt 0n,"",null,undefined,NaN ( Baaki sab truthy values)

// truthy values ( some are listed below )

// "0",'false'," ",[],{},function(){}

// How to check empty object

const myObj={}

if(Object.keys(myObj).length===0){
    console.log('Empty');
}

// these returns true

console.log(false==0);
console.log(false=='');
console.log(0=='');


// Nullish Coalescing Operator (??)
// work only for null or undefined

// The nullish coalescing operator (??) is a logical operator that returns its right-hand operand only when the left-hand operand is null or undefined. Otherwise, it returns the left-hand operand.

// Key Features
// ✅ Only checks for null or undefined (ignores other falsy values like 0, "", false).
// ✅ Great for providing default values safely.

// Basic Syntax


// const result = leftOperand ?? rightOperand;
// If leftOperand is null or undefined, result = rightOperand.

// Otherwise, result = leftOperand.


let val1;

val1 = 5 ?? 10

console.log( val1); //prints 5

val1 = null ?? 10


console.log( val1); //prints 10


val1 = null ?? 10 ?? 20

console.log(val1); // 10 ( jo pehle mil jae)


// Ternary operator

const a = 0==='0' ? 1 : 0

console.log(a); // 0


let hello = ('',false,0,null,undefined) || 20

console.log(hello); // prints 20

// || drops falsy value

