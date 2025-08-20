// After ES6
class User {
    constructor(username,email,password) {
        this.username=username;
        this.email=email;
        this.password=password
    }

    encryptPass(){
        return `${this.password}ASAD`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne=new User('areeb','areeb@google.com','pass')
console.log(userOne.encryptPass()); //passASAD
console.log(userOne.changeUserName()); //AREEB



// BEHIND THE SCENE ( AISA HI HOTA HAI )

function User(username,email,password) {
    this.username=username;
    this.email=email;
    this.password=password
}


User.prototype.encryptPass=function(){
    return `${this.password}ASAD`
}

User.prototype.changeUserName=function(){
    return `${this.username.toUpperCase()}`
}

const userTwo=new User('test','test2gmail.com','123')

console.log(userTwo.encryptPass()); //passASAD
console.log(userTwo.changeUserName()); //AREEB

