const score=100
console.log(score); //100

let num=new Number(200)
console.log(num); // [Number: 200]

// will it work? yeah definitely
// num='Hello'
// console.log(num);


console.log(num.toString(),typeof num.toString()) // 200 string
console.log(score.toString(),typeof score.toString()) // 100 string


console.log(num.toFixed(2))// fixed to 2 decimal 200.00

// Precision -> Significant figures ko batata hai

num=23.9333
console.log(num.toPrecision(3)) //23.9
console.log(num.toPrecision(2)) //24

// to locale string ( comma lagata hai)

num=10000000
console.log(num.toLocaleString()); // 1,00,00,000
console.log(num.toLocaleString('en-US')); // 10,000,000


// -------------------MATHS--------------------

console.log(Math.abs(-123123));
console.log(Math.PI)
console.log(Math.E)
console.log(Math.ceil(1234.45))
console.log(Math.trunc(-1234.45))
console.log(Math.floor(123.2))
console.log(Math.floor(-123.2))


console.log(Math.round(12314.523123))


// Random

console.log(Math.random()) //return [0-1)

// value in range 10-20

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)