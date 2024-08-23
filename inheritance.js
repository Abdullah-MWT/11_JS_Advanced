// +++++++++++++ Inheritance in Classes ++++++++++++++++

//Base Class
class Person {
    constructor(Name,Email) {
       this.Name = Name;
       this.Email = Email;
    }

    introduceMe() {
        console.log(`My Name is ${this.Name} and my Emial is ${this.Email}`);
        
    }
}


// Inherited Class
class Student extends Person {
    constructor(Name,Email,Role){
       super(Name,Email);
       this.Role = Role;
    }

    introduceMe() {
        console.log(`My Name is ${this.Name} and i am a ${this.Role}. Email is ${this.Email}`);
    }
}

const person = new Person('Musab','apple@gmail.com');
console.log(person.introduceMe());

const student = new Student('Abdullah','google@gmail.com','Student');
console.log(student.introduceMe());

// So in the above Example , we can see that, Person is the Base Class and Student is the Inherited Class. Means that Student inherits all the properties and methods of Person. 

