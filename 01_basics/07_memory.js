// Two types of Memory

// Stack mem -> Primitve datatypes are stored here

// Heap mem -> Non Primitive datatypes are stored here

const a=1
const b=a
b=2
console.log(a,b); // 1,2
STACK                          HEAP
-------                        ------
b        
a       

const hello1 = {'hello': 1};  // Object created in heap
const hello2 = hello1;        // Reference copied (not the object itself)

STACK                          HEAP
-------                        ------
hello1 (ref: 0x123)            { 'hello': 1 } (at address 0x123)
hello2 (ref: 0x123)             
