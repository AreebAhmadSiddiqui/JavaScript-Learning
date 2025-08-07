const myObj={
    name:"areeb",
    age:18,
    hello:"How are you",
    fullname:{
        userfullname:{
            firstname:"Areeb",
            lastname:'Siddiqui'
        }
    },
    greet: function(){
        console.log(this.name);
    }
}

console.log(myObj);


// merging objects

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}

// easiest way
const obj3={...obj1,...obj2}

console.log(obj1);
console.log(obj2);
console.log(obj3);


// there is one more way Object.assign dekh lena if you want


// Get keys,values and entries
console.log(Object.keys(obj3)); // [1,2,3,4]
console.log(Object.values(obj3));// [a,b,c,d]
// console.log(Object.entries(obj3)); [[key,value],[key,value]...] // [[1,a],[2,b]..]


// If you want to see if certain object has got certain property

console.log(myObj.hasOwnProperty('hello')); // true
console.log(myObj.hasOwnProperty('test')); //false



// Destructuring of Object

const {name,age,greet}=myObj

console.log(name,age); // areeb 18
greet() // undefined comes up because object ka this keyword ise ni pata ye to doosra variable hai

