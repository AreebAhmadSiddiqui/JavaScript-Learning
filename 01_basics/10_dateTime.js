// JS Date objects represent single moment in time ( baseline is Jan 1, 1970 UTC)

const newDate= new Date()
console.log(newDate);

console.log(newDate.toDateString());
console.log(newDate.toISOString());
console.log(newDate.toJSON());
console.log(newDate.toLocaleDateString());
console.log(newDate.toLocaleString());
console.log(newDate.toLocaleTimeString());
console.log(newDate.toString());
console.log(newDate.toTimeString());
console.log(newDate.toUTCString());


console.log(typeof newDate) // object


// Custom date

// Month 0-11
let customDate=new Date(2023,0,23)
console.log(customDate.toLocaleString());// 23/1/2023, 12:00:00 am

// mm-dd-yyyy
// yyyy-mm-dd
customDate=new Date('02-24-1933')
console.log(customDate.toLocaleString());

customDate=new Date('1233-05-21')
console.log(customDate.toLocaleString());


// Timestamp

// Needed when you compare time ( booking time and all )

// in millisecond
let myTs=Date.now()
console.log(myTs);

console.log(Math.floor(myTs/1000)); // seconds

// some more methods
let newDass=new Date()

console.log(newDass);
console.log(newDass.getDate());
console.log(newDass.getDay());
console.log(newDass.getMonth()); // 0-11
console.log(newDass.getMilliseconds());
console.log(newDass.getHours())


