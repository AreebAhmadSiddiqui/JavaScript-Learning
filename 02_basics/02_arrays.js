let marvelHeros=["thor",'ironman','spiderman']
let dcHeros=['superman','batman','aquaman']

marvelHeros.push(dcHeros) // kya aega?? [t,i,sp,[s,b,a]]

console.log(marvelHeros);

// how to overcome??
// use flat

// flat mein depth dal sakte flat(depth) default 1 kitne level tak karna hai ) 

marvelHeros=marvelHeros.flat()
console.log(marvelHeros);

const test=[1,2,[1,[2,3,4,[1]]]]
console.log(test.flat()); //default 1
console.log(test.flat(1));
console.log(test.flat(2));
console.log(test.flat(3));


// or use concat

// marvelHeros=marvelHeros.concat(dcHeros)
// console.log(marvelHeros);

// use spread operator

// const all_new_heros=[...marvelHeros,...dcHeros]
// console.log(all_new_heros);


// More Array Methods

console.log(Array.isArray("hello")) //false
console.log(Array.from("Hello")) // ['h','e' ..]

console.log(Array.from({'hello':1,"name":'Areeb'}))// object se array ni banega o/p []

// wo keys ka bana sakta hai ya values ka

const obj = {'hello':1, "name":"test"};

console.log(Array.from(Object.keys(obj)));     // ["hello", "name"]
console.log(Array.from(Object.values(obj)));   // [1, "test"]
console.log(Array.from(Object.entries(obj)));  // [["hello", 1], ["name", "test"]]


// One more Array.of

console.log(Array.of(1,2,3,4,5));

