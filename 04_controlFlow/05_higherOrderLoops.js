const nums=[1,2,3,4,5]

// for of loops

// in python we have

// for num in nums:
//     print(num)

// similarly

for ( const num of nums){
    console.log(num);
}

const hello = 'strings'

for (const char of hello){
    console.log(char);
}

const myObj={name:'Areeb',age:10}

// for (const obj of myObj){ // myObj is not iterable    
//     console.log(obj);
// }

// Maps

// stores in unique values

const map=new Map()

map.set('A','Areeb')
map.set('B','Hello')
map.set('C','Test')

for ( const it of map){
    console.log(it); //prints each key value pair in an array
}

for ( const [key,value] of map){
    console.log(key,value); //prints each key value pair
}



// How to run loops on Objects

// Use for in loops

for(let obj in myObj) {
    console.log(obj);//print keys
}

for(let obj in myObj) {
    console.log(obj,myObj[obj]);//print keys values
}

// if you use this loop in array

for ( let num in nums){
    console.log(num); //prints indices
}

// iterate over map

for (let num in map){
    console.log(num);  // doen't print anything
}


// For Each
console.log('------------For Each------------');

const arr=['JS','Java','Python','CPP','Node']

// callback function doesn't have a name
arr.forEach((val)=>{
    console.log(val);
})

const newArr = arr.forEach((val)=>{
    console.log(val);
})

console.log(newArr); // undefined becaue it doesn't return anyhting

arr.forEach(function (val) {
    console.log('hello '+val);
})


// add function outside


function greet(item){
    console.log('Hellooooo '+item);
}

arr.forEach(greet); // notice here we pass the reference not the call

// More parameters

// forEach has got multiple parameters some of them are

// we have forEach((val,index,ori_array)) // names might change but the position of these params remains the same

arr.forEach((num,index,myarr)=>{
    console.log(num,index,myarr);
})

const objArr=[
    {langname:'JS',filename:'js'},
    {langname:'JAVA',filename:'java'},
    {langname:'Python',filename:'py'}]

objArr.forEach((item)=>{
    console.log(item.langname,item.filename);
})

console.log('------------ Map ------------');

// map returns an array
const newArr1=arr.map((val)=>val+1)

console.log(arr);
console.log(newArr1); // prints + 1






