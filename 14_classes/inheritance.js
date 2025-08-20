class User {
    constructor(username) {
        this.username=username;
    }
    getUserName(){
        return `${this.username}`
    }
}

class Teacher extends User{
    constructor(username,email,pass){
        super(username)
        this.email=email
        this.pass=pass
        // super(username) yahan error de rha tha kah rha pehle super use karo
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher=new Teacher('areeb','areeb@google.com',"1231")

console.log(teacher.getUserName()); //areeb
teacher.addCourse() //A new course was added by areeb

console.log(teacher instanceof Teacher) //true
console.log(teacher instanceof User) //true