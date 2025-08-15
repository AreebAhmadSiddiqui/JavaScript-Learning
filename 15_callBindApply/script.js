lets say I have two server ek server india main aur doosra usa main sare kaam main india wale server mein karta hun lekin ek kaam america wala bhi karta hai

function america(salInINR){
    // complex chezein karin
    this.usdSal=salInINR*80.0
    console.log("America Function Called");
}


function India(name,age,salary){
    this.name=name
    this.age=age
    this.salary=salary

    // this.toUSD america function set karke dega mujhe
    america(salary)
}


lets call our function and try to access its values

const userOne=new India('areeb','21',1000)
console.log(userOne);

O/P

America Function Called
India { name: 'areeb', age: '21', salary: 1000 }  ( usdSal property to ai hi ni -> function ke andar function hai agar mein ise thora modify karke likhun to samjhoge ki function ke andar function hai)



function India(name,age,salary){
    this.name=name
    this.age=age
    this.salary=salary

    // this.toUSD america function set karke dega mujhe
    function america(salInINR){
    // complex chezein karin
        this.usdSal=salInINR*80.0
        console.log("America Function Called");
    }

    america(salary)
}

const userOne=new India('areeb','21',1000)
console.log(userOne);

fir se same cheez hi ai ??? ( Reason is us america function ko ni pata ki tum kis this(yani object) ki baat kar rahe ho )
wo to global object mein dal rhaa cheezein agar dhyan se dekho

console.log(this.usdSal); // ye browser mein chalao to work karta hai ( aur output agar 1000 diya to 80000 dikha rha tha)


To hame kisi tareeqe se is obejct ka context bhi dena padega ???

Hence we use these methods

With these methods we can pass the context of one object to other other ( functions bhi to object hi hai)

Correct way of doing it

function america(salInINR){
    // complex chezein karin
    this.usdSal=salInINR*80.0
    console.log("America Function Called");
}
function India(name,age,salary){
    this.name=name
    this.age=age
    this.salary=salary

    america.call(this,salary)
}


const userOne=new India('areeb','21',1000)
console.log(userOne); // ab sahi se a rha hai to basically hamne us function ko ye bata diya ki is this ki baat ho rhi hai


Call vs Apply vs Bind ( easy examples)

function hello(age,place){
    console.log(`${this.name} lives in ${place} and is ${age} years old`);
}

const obj1={
    name:'Areeb'
}

const obj2={
    name:'Test'
}

hello(123,'Lucknow') // undefined lives in Lucknow and is 123 years old ( No context )

hello.call(obj1,123,'Lucknow')
hello.apply(obj2,[1223,'Mumbai'])

// bind binds the function to the obj and returns a reference
const newfun=hello.bind(obj1,232,'Chandigarh')

console.log(newfun());


// Bind ka ek acha example

const product1 = { name: "iPhone", price: 50000 };
const product2 = { name: "Samsung", price: 40000 };

function showPrice() {
  console.log(`${this.name} costs ₹${this.price}`);
}

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

// Har button ke liye alag bound function banaya

btn1.addEventListener("click", showPrice); // undefined ( ismein to ye scene hai ki this to button ko point kar rha hai)
btn2.addEventListener("click", showPrice); // undefined ( ismein to ye scene hai ki this to button ko point kar rha hai)

// since bind reference return karta hai to hamne ye showPrice.bind(product1/2) isi mein direct likh diya
btn1.addEventListener("click", showPrice.bind(product1)); // yahan this product1 ko point kar rha
btn2.addEventListener("click", showPrice.bind(product2)); // yahan this product2 ko point kar rha
