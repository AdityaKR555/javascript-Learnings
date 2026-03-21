class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){              
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())         //static method cannot be accessed by object

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
//console.log(iphone.createId());              //static method can be inherited but not accessed by object