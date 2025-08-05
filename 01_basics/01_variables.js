const accountId=14453
let accountEmail='areeb@gmail.com'
var accountPassword='12345'
// JS allows you to declare variables like this
accountCity='Lucknow'

// lets investigate
// Change the values of these variables

//accountId=121434  // no errors here synatactically its correct, (but its not allowed)

// TypeError: Assignment to constant variable.
// console.log(accountId);


// accountEmail='test@gmail.com'
// accountPassword='2345'
// accountCity='Barabanki'

// console.log(accountId,accountEmail,accountPassword,accountCity);

// // or

// console.table([accountId,accountEmail,accountPassword,accountCity]);


// Now the concepts

/*
-> There are two ways to store the data 
-> Const is for constant 
-> var and let is for variables

Why we don't use var?

Initially JS doen't know about scopes so, var ko ham kisi bhi scope mein likhe wo har jahag change ho jata hai

NEVER EVER USE VAR
because of issue in block and functional scope
*/

// Ex

var test='hello'

// scope
{
    var test='new'
}

console.log(test); //prints test here

test='asdasd'

console.log(test); // prints asdasd here


// One more test
// what if you dont know the value of a certain variable

// you want to just declare it

// const hello1; //SyntaxError: Missing initializer in const declaration we need to initialise it for sure no matter what
const hello1='hello1'
let hello2; // the value is undefined
let hello3='Hello3'
const hello4='Hello4'
console.table([hello1,hello2,hello3,hello4]);



// lets test the same thing with let

hello2='Hello2 outside'

{
    let hello2='hello2 inside'
    console.log(hello2) //prints hello2 inside
    hello2="hello2 inside value changed"
}

console.log(hello2) // prints this Hello2 outside


hello2='hello2 outside value changed'

console.log(hello2); // prints this hello2 outside value changed
