function hello(name){ // name is parameter
    console.log(`Hello ${name}`);
}

hello // this is the reference
hello('Areeb') // this is function call

// areeb is argument

// explictily telling giving value to a function

function hello2(name='Areeb'){
    console.log(`Hello ${name}`);
}

console.log(hello2()); //hello areeb
console.log(hello2('Ahamad')) // hello ahamad


function one(){
    return function two(){
        return 'I am two'
    }
}

const getTwo=one()
console.log(getTwo());


// If you dont know number of parameters

// Rest operator -> ...

// function cart(num1){
//     return num1
// }

// console.log(cart(10)); // returns 10
// console.log(cart(10,20,30));// returns 10

// what if you have unlnown number of params

function cart(num1,num2,num3,...num4){
    return num4
}

console.log(cart(12,123,123,123,123,12,3)); // [array]

console.log(cart(10,20,340,30,50,230)) // [30,50,230]


function handleObj(myObj){

    // though hame type check karna hi padega production code pe
    console.log(`${myObj.name} and ${myObj.age}`);
}
handleObj({name:"Areeb",age:18})