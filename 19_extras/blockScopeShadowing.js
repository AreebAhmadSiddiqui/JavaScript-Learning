// {
//     var a=10;
//     let b=20;
//     const c=30;
// } // this is a block


// We get Something like this

// Block
// b : <value unavailable>
// c : <value unavailable>

// Global          Window
// a: undefined

// This proves b and c are blocked scope and a is global
// Means ( var is global/function scoped and let/const block scoped)

// // They are stored in a separate memory space


// Shadowing

// same variable inside a block or a function shadows the outer variable

// const a=10
// var b=20;
// let c=30;
// {
//     const a=20; // shadows the outer variable
//     var b=40;  // shadows the outer variable
//     let c=100; // shadows the outer variable
// }

// illegal shadowing ( jab let and const ko shadow karna chahoge using var )

const a=10
let b=20;
// var b=20;
// let c=30;
{
    var a=20;  //Identifier 'a' has already been declared
    var b=405; // Identifier 'b' has already been declared
    console.log(a);
    // var b=40;  // shadows the outer variable
    // let c=100; // shadows the outer variable
}