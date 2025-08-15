// Kya main change kar sakta hun math.pi ki value

// console.log(Math.PI)
// Math.PI=5 
// console.log(Math.PI)

// override ni hui

// Kyun ni hui aai jante hai
// Uski writeable property false hai

// ab ye kaise janoge 
// Object.getOwnPropertyDescriptor(obj_name,property_name)
// Object.getOwnPropertyDescriptors(obj_name)
// console.log(Object.getOwnPropertyDescriptor(Math,"PI"))

/* {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
} */

// Here you can see that these are not writable so you cannot change its properties ( You can try but you wont be able to do that )

// But can we change our own object's propertiess?? YESSSS

const mykey=Symbol('123')
const obj={
    test:'test',
    [mykey]:'345',
    arr:[1,2,3,4]
}

// console.log(Object.getOwnPropertyDescriptors(obj))



// Function is defineProperty,defineProperties

// Lets say I dont want someone to change the value of test

Object.defineProperty(obj,'test' ,{
    writable:false
})


obj.test='test2'

console.log(obj);  // { test: 'test', arr: [ 1, 2, 3, 4 ], [Symbol(123)]: '345' }

// Lets say I dont want the array to be iterable

// currently its itreable

obj.arr.forEach((val)=> console.log(val))


console.log('-----------After Removing Enumerable Property--------------');


Object.defineProperty(obj,'arr',{
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(obj,'arr'))
obj.arr.forEach((val)=> console.log(val)) 


// still iterable because ( tumne sirf object ke arr ko kaha hai ki ( jab bhi main obj pe iterate karun tb tum na ana iteration mein) na ki tumne direct array se kaha hai ki bhai tere andar ke elements are not iterable samjhheee murakh)


