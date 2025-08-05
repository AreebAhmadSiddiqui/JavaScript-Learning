//String to number

// 1. If str is a valid number
let myStr="33"
console.log(typeof(myStr)); // prints string
let myNum=Number(myStr)
console.log(typeof myNum,myNum) // prints number 33

// 2. if str is not a valid number
myStr="33abc"
console.log(typeof(myStr)); // prints string
myNum=Number(myStr)
console.log(typeof myNum,myNum) // prints number NaN

// what is NaN? -> Not a Number

// 3. if it is null
myStr=null
console.log(typeof(myStr)); // prints object ( JS bug )
myNum=Number(myStr)
console.log(typeof myNum,myNum) // prints number 0

// why o in the above one -> due to the historical mapping (refer to lesson 4 why typeof null is object) null is mapped to 0000000000...

// 4. if it undefined
myStr=undefined
console.log(typeof(myStr)); // prints undefined
myNum=Number(myStr)
console.log(typeof myNum,myNum) // prints number NaN

//5. if it is a boolean
myStr=true
console.log(typeof(myStr)); // prints boolean
myNum=Number(myStr)
console.log(typeof myNum,myNum) // prints number 1 for true/ 0 for false


// Boolean conversion

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(typeof(isLoggedIn)) // prints number
console.log(typeof(booleanIsLoggedIn),booleanIsLoggedIn) // prints boolean and true for 1 and 0 for false

// what if its not 1 or 0
isLoggedIn="asdasd"
booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(typeof(isLoggedIn)) // prints number
console.log(typeof(booleanIsLoggedIn),booleanIsLoggedIn) // prints boolean and true 

// Basically it takes that as something is there
// like we do this check na if(!something) aisa hi

// Similary
// isLoggedIn = null or '' or undefined

// what will be the output? 

// Yess !! false


// String conversion

let someNum=123
let stringNum=String(someNum)
console.log(typeof someNum)// prints number
console.log(typeof(stringNum),stringNum) //prints string 123

// for null -> prints null
// for undefined -> print undefined
// for true / false -> true / false

// Basically jo doge wo string mein convert kardega 

// Object ke case mein 
let someNum={name:"hello"}
let stringNum=JSON.stringify(someNum)
console.log(typeof someNum)// prints object
console.log(typeof(stringNum),stringNum) //prints string {"name":"hello"}

// Ye expected hai aise hi aega 
// use JSON.stringify(someNum) // for exact string match