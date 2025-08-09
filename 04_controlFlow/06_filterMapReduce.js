const arr = [1,2,3,4,5]

// const values= arr.forEach((num)=>{
//     console.log(num);
// })

// console.log(values); // undefined


// But can we return and get?? lets see

let values= arr.forEach((num)=>{
    return num
})

console.log(values); // undefined

// Note => forEach doesn't return any value , if we try to return explicity it doesn't return anything

console.log("----------- Filter ------------");

// filter

// const newArray = arr.filter(callback(element, index, array), thisArg);
// callback → A function to test each element (returns true to keep the element, false otherwise).

// element → Current element being processed.

// index (Optional) → Index of the current element.

// array (Optional) → The array filter was called on.

// thisArg (Optional) → Value to use as this in the callback.


// we give a conditional to filter

const filteredArray=arr.filter((num)=> num>4)
console.log(arr);// [1,2,3,4,5]
console.log(filteredArray); // [5]

const books = [
  { id: 1,  title: "The Great Gatsby",       genre: "Classic", publishedYear: 1925 },
  { id: 2,  title: "To Kill a Mockingbird",   genre: "Fiction", publishedYear: 1960 },
  { id: 3,  title: "1984",                   genre: "Sci-Fi",  publishedYear: 1949 },
  { id: 4,  title: "Pride and Prejudice",    genre: "Classic", publishedYear: 1813 },
  { id: 5,  title: "The Catcher in the Rye", genre: "Fiction", publishedYear: 1951 },
  { id: 6,  title: "Brave New World",        genre: "Sci-Fi",  publishedYear: 1932 },
  { id: 7,  title: "Moby-Dick",              genre: "Classic", publishedYear: 1851 },
  { id: 8,  title: "The Handmaid's Tale",    genre: "Sci-Fi",  publishedYear: 1985 },
  { id: 9,  title: "Jane Eyre",              genre: "Classic", publishedYear: 1847 },
  { id: 10, title: "Fahrenheit 451",         genre: "Sci-Fi",  publishedYear: 1953 }
];

const filteredBooks=books.filter((book)=>{
    return book.genre==='Classic'
}
)
console.log(filteredBooks);


console.log('-------------- MAP --------------');


// const newArray = array.map(callback(currentValue, index, array), thisArg);
// callback → Function to execute on each element.

// currentValue → Current element being processed.

// index (Optional) → Index of the current element.

// array (Optional) → The original array being traversed.

// thisArg (Optional) → Value to use as this in the callback.


const myNums=[1,2,3,4,5,6,7,8]

const newNums=myNums.map((num)=>num+2)
console.log(newNums);

// Chaining

// get even and then multiple by 10
const chainedNums=myNums.filter((num)=>num%2==0).map((num)=>num*10)
console.log(chainedNums);


console.log('-------------- Reduce ----------------');
// array.reduce(
//   (accumulator, currentValue, index, array) => { /* ... */ },
//   initialValue
// );
const total = myNums.reduce((acc,currVal)=>acc+currVal,0)

console.log(total);


const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
b) Finding Maximum/Minimum
javascript
const max = numbers.reduce((acc, num) => Math.max(acc, num), -Infinity);
console.log(max); // 4
c) Flattening Arrays
javascript
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => [...acc, ...arr], []);
console.log(flat); // [1, 2, 3, 4, 5]
d) Grouping Objects by Property
javascript
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 25 }
];

const groupedByAge = users.reduce((acc, user) => {
  const key = user.age;
  if (!acc[key]) acc[key] = [];
  acc[key].push(user);
  return acc;
}, {});

console.log(groupedByAge);
// Output: { '25': [ { id: 1, name: 'Alice', age: 25 }, { id: 3, name: 'Charlie', age: 25 } ], '30': [ { id: 2, name: 'Bob', age: 30 } ] }
e) Counting Occurrences
javascript
const fruits = ["apple", "banana", "apple", "orange", "banana"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count); // { apple: 2, banana: 2, orange: 1 }