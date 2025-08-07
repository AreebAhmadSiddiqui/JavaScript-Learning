// Discussion about this 


// console.log(this); // what would be the output?  {}

// but the same code in the browser will give you 

// window object  (Window object is the global object of browser)


const myObj={
    name:'Hello',
    greet:function hello(){
        // here this points to current context i.e the object myObj
        console.log(`Hello ${this.name}`); //Hello Hello
        console.log(this);
        // { name: 'Hello', greet: [Function: hello] }

        // after line 26
        
        // { name: 'test', greet: [Function: hello] }
    }
}

console.log(myObj.greet());
myObj.name='test'
console.log(myObj.greet());


function hello2(){
    const user='areeb'
    console.log(this); // a lot of things
    console.log(this.user); //undefined
    
}

hello2()

const func=function (){
    const user='areeb'
    console.log(this); // a lot of things
    console.log(this.user); //undefined
    
}

func()

// note 

// const var_name = function (){}  or function funcName(){}

// both you can do but dont you the latter one ( you cant access it with funcName you can only access it with var_name)


const a = () => {
    // arrow functions mein parent context deta hai in this case node environemtn hance prints {}
    console.log(this) // {}
}

a()

var b = (c,d) => {
    return c+d
}
console.log(b(2,3));

b = (c,d) => c+d
console.log(b(2,3));
