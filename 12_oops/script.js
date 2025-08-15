// Object

// Objects are the fundamental building blocks of JavaScript. They are unordered collections of key-value pairs (properties) where:

// Keys are strings (or Symbols)

// Values can be any data type (primitives, functions, other objects)

const user={
    username:'Areeb',
    email:'email.com',
    phone:"123123",
    greet: function (){
        console.log(`Hello ${this.username}`)
    }
}

// console.log(user.username);
// console.log(user.greet());


// Constructor Function

// function ConstructorFunction(username,email,isLoggedIn){
//     // left wala is context ka aur right wala parameter
//     this.username=username
//     this.email=email
//     this.isLoggedIn=isLoggedIn

//     return this // optional
// }

// const userOne=constructorFunction('test1','test1@email.com',true)
// const userTwo=constructorFunction('test2','test2@email.com',true)

// console.log(userOne); // two ki detail de rha ye to 

// Upar wale code mein kya galti hai??
// wo to normal function ki tarah behave kar rha hai to ismein constructor function ka kya use???

// THE new keyword (this will)

// A new empty object {} is created

// The constructor's this is set to this new object

// The constructor function executes (adding properties to this)

// The new object is returned automatically (unless the constructor returns a different object)


function ConstructorFunction(username,email,isLoggedIn){
    // left wala is context ka aur right wala parameter
    this.username=username
    this.email=email
    this.isLoggedIn=isLoggedIn

    return this // optional ( implicitly return ho jaega karo na karo)
}

const userOne=new ConstructorFunction('test1','test1@email.com',true)
const userTwo=new ConstructorFunction('test2','test2@email.com',true)


console.log(userOne); //ConstructorFunction {username: 'test1',email: 'test1@email.com',isLoggedIn: true }
console.log(userTwo); //ConstructorFunction { username: 'test2',email: 'test2@email.com',isLoggedIn: true}

// Dono ka alag alag context ban gya

// instanceof ek operator hai jo check karta hai ki koi object kisi specific class ya constructor function ka instance hai ya nahi.

console.log(userOne instanceof ConstructorFunction); // true

const newObj={
    username:'test',
    email:'test',
    isLoggedIn:'test'
}


console.log(newObj instanceof ConstructorFunction); // false