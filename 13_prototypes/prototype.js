let myName='   Areeb      '

// lets say i want to add a property or a function to the string class to give me trueLen of any sentence after removing extrac spaces

// We will come to it

let myHeros=['thor','spiderman']

let heroPower={
    thor:'Hammer',
    spiderman:'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// heroPower.areeb() //undefined

// Agar main object mei hi dal do koi function to sabhi ko mil jaega kyun??

Object.prototype.areeb=function(){
    console.log('Areeb is there in all objects');
}


heroPower.areeb(); // Areeb is there in all objects


myHeros.areeb() // Areeb is there in all objects


// Agar array ko denge to kya object ko milega??

Array.prototype.arrayFunction=function(){
    console.log('Array Function');
}

myHeros.arrayFunction() //array function
// heroPower.arrayFunction() // heroPower.arrayFunction is not a function

// Yani upar ni jaega obviously


// PROTOTYPAL INHERITANCE ( OLD School )

// lets link one obj to another

const User={
    name:'areeb',
    email:'google'
}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvail:false
}

const TASupport={
    makeAssign:'JS Assign',
    fullTime:true,
    __proto__: TeachingSupport // ( refence karlo TS ko)
}

Teacher.__proto__= User

// MODERN WAY

// (a,b) a can access the properties of b
Object.setPrototypeOf(TeachingSupport,Teacher)

console.log(TeachingSupport.makeVideo); //true


// AB wo problem solve karo


String.prototype.trueLen=function(){
    return this.trim().length
}

console.log(myName.trueLen()); //5


