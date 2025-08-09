// const myArr=[1,2,3,4,5,'Hello',true,{'myname':1}]
// const arr2=[1,2,3,4]
// const arr3=new Array(1,2,3,4,5)

// Arrays are ordered, mutable collections of values (any type)

const arr=[1,2,3,4,5]

// Basic Operations
console.log(arr.length)

arr.push(6)

console.log(arr)

arr.pop()

console.log(arr);

// Naam kaafi confusing hai (ulta hona chahiye tha)
// unshift -> add to the start
// shift -> remove from start

arr.unshift(0)
console.log(arr);

arr.shift()
console.log(arr);

// Question Methods

arr.push(3)
console.log(arr.includes(1))
console.log(arr.indexOf(3))
console.log(arr.lastIndexOf(3))


// slice and splice

console.log(arr);

console.log(arr.slice(0,3))

console.log(arr);

console.log(arr.splice(2,1));

console.log(arr)

// Note->

// -> slice normal array function jaisa hai koi modify ni karega bas [startIdx,endIdx) tak value de dega
// -> supports negative index too

// splice 

// -> arr ko modify karta hai 
// -> splice(startIdx,no_of_characters) // kitne cha remove karne hai ater startIdx
// -> doesn't support neg indx

