// Two ways objects can be created

// 1. using constructor ( whenever you use this singleton object ( Yani apne tarah ka ek hi ) is created)
// 2. using literals

// 1. Object Literals

// const JsUser= {}

// 2. Object constructor

// const JsUser2=new Object()

// {these keys by default they are treated as strings}
// const JsUser={
//     name:"Areeb",
//     age:18,
//     location:"Bangalore",
//     email:'email@gmail.com',
//     "test":"test"
// }


// how to access the keys in objects?

// 1. console.log(JsUser.name);
// 2. console.log(JsUser[name]); // says name not defined ( you can access things like these if they are symbol)
// 3. console.log(JsUser['name']);

// console.log(JsUser['test']);


// Ques- How to use symbol as a key in object

const mySymbol=Symbol('mykey1')
// agar ye confusion ho rha ki yahan mykey1 hai value object mein myvalue dal rahe ( lekin symbol to unique rahta hai ) to samjho ki mykey1 hi hai but symbol wrapper hai jiska naam mySymbol hai i.e
// mySymbol -> myKey1
const JsUser={
    name:"Areeb",
    age:18,
    location:"Bangalore",
    email:'email@gmail.com',
    "test":"test",
    // mySymbol:'myvalue' // this is string key
    [mySymbol]:'myvalue'
}

// console.log(typeof mySymbol); // string 
console.log(typeof mySymbol); // symbol
console.log(JsUser[mySymbol]); //myvalue


JsUser.email='test@chatgpt.com'

console.log(JsUser);

// if you want to freeze changes

// Object.freeze(JsUser)

// now no changes to JsUser will be encorporated

JsUser.email='hello@hello.com' // see no error would be shown its just that it wont change

console.log(JsUser );


// ADDING FUNCTION

JsUser.greet=function(){
    console.log(`Hi ${this.name}`); // this to samajh hi gae hoge ( current object )
}

// this is the reference to the function
console.log(JsUser.greet) //[Function (anonymous)]
console.log(JsUser.greet()) // undefined ( why? kuch return ni ho rah na function ke andar console log a raha hai yahan kuch ni aya obvious si baat hai)


