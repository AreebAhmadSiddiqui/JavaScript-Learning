// class User{
//     constructor(email,password){
//         this.email=email
//         this.password=password
//     }
//     get email(){
//         return this.email
//     }
//     set email(val){
//         this.email=val
//     }
// }

// const userOne=new User('test@google.com',"123")
// console.log(userOne.email);


// but this create an issue

// step by step explanation

// a) Jab bji kisi property ko tum set (obj_name.prop=val) ya get (obj_name.prop ) to sabse pehle wo dekhti hai ki getters and setters to ni hai

// b) agar hai to wahan se set aur get karti hai 

// c) Okk so, with this knowledge tum ismein dekho

// d) When you do new User("test@google.com", "123"):
//     1. Constructor runs this.email = email
//     2. JavaScript sees this as a property assignment, so it:
//     3. Checks if there's a set email() defined
//     4. Finds your setter and calls it with the value

// e) Inside your setter:

//     1.You wrote this.email = val
//     2. This is another property assignment
//     3.So JavaScript again checks for set email()
//     4. Calls the setter again... and again... ∞

// Similary this is for setter as well


// Ok so why this worksss

// class User{
//     constructor(email,password){
//         this._email=email
//         this._password=password
//     }
//     get email(){
//         return this._email
//     }
//     set email(val){
//         this._email=val
//     }
// }

// const userOne=new User('test@google.com',"123")
// console.log(userOne.email);

// Dekh bhai step by step

// What Happens in Constructor:

// 1. Creates new object {}

// 2. Runs constructor with provided values:
//    a. this._email = 'test@google.com' → Direct assignment to _email doesn't call setter
//    b. this._password = "123" → Direct assignment to _password doesn't call getter

// 3. Ab jab tum set karoge manlo (obj.email='hello')
//     a. JS dekhega ki koi setter hai email naam se
//     b. Haan hai to kya karo _email mein "hello" dal do
//     c. similarly for get

// Key note:

// Ismein loop mein fase hi ni


// Getter Setter Using Properties

function User1(email,password){
    this._email=email
    this._password=password

    Object.defineProperty(this,'email',{
        get: function (){
            return this._email.toUpperCase()
        },
        set: function(val){
            this._email=val
        }
    })

    Object.defineProperty(this,'password',{
        get: function (){
            return this._password.toUpperCase()
        },
        set: function(val){
            this._password=val
        }
    })
}

const newUser=new User1('areeb@gmail.com','123')
console.log(newUser.email);
console.log(newUser.password);


// One more way in objects

const User2={
    _email:'test@gmail.com',
    _password:'test',
    get email(){
        return this._email
    },
    set email(val){
        this._email=val
    }
}

// user se base pe object create karo aur newUser2 ko de do
const newUser2=Object.create(User2)
console.log(newUser2.email);


// Ismein ek cheez hai ki hame koi rok ni rha hai _ wale cheezon ko access karne ke liye

// Lekin ES2022 mein aisa concept laya gaya hai ki roka jae

// Lets see the example

class User3 {
  #email;  // Truly private field
  #password; // Private field for password

  constructor(email, password) {
    this.#email = email;
    this.#password = password;
  }

  // Email getter/setter
  get email() {
    return this.#email;
  }

  set email(newEmail) {
    // Add validation if needed
    if (!newEmail.includes('@')) {
      throw new Error('Invalid email format');
    }
    this.#email = newEmail;
  }

  // Password getter/setter (example)
  get password() {
    return '******'; // Never expose real password
  }

  set password(newPassword) {
    if (newPassword.length < 8) {
      throw new Error('Password too short');
    }
    this.#password = newPassword;
  }
}

// Usage
const newUser3 = new User3('test@example.com', 'secure123');
console.log(newUser3.email); // 'test@example.com'
newUser3.email = 'new@example.com';

// console.log(user.password); // '******'
// user.password = 'newpass'; // Throws error (too short)

// in all the other you could access the _ vairable

console.log(newUser._email) // accessible
console.log(newUser2._email); // accessible
console.log(newUser3.#email); // Property '#email' is not accessible outside class 'User3' because it has a private identifier.ts(18013)
