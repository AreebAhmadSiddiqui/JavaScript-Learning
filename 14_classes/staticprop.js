class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // Main ni chahta ki is function ka access ni dena chahta
    static notAccessible(){
        console.log('HEHEHEHHE');
    }
}

const user=new User('testset')
user.notAccessible() // user.notAccessible is not a function


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const teacher=new Teacher('teacher','teacher@gmail.com')

teacher.notAccessible() //user.notAccessible is not a function


// When you want to the stop the objects instantiated from a certain class to not able to access some fields you use static


// However the class having static field can directly user it

User.notAccessible() //HEHEHEHHE