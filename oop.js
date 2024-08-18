// ++++++++++++++++++   Object Literals  +++++++++++++++++++++++++

const user = {
    Name: "Abdullah",
    Grade: "12th",
    City: "Lahore",

    getUserInfo(){
        console.log("Successfully Recieved the User's Info");
        console.log(this); // This keyword talks all about the current context, here currrent context is whole object
        console.log(`User Name is ${this.Name}`); // But now here this will point to the user in current context above
        
        
    }
}

console.log(user.getUserInfo());
console.log(this); // Here in Global Context it,ll give us empty object but not in Browser


// ++++++++++++++++  Constructors Functions in JS  ++++++++++++++++++++
function Boy(Name,Age) {
    this.Name = Name;
    this.Age = Age;

    this.greet = function() {
        console.log(`Hello! My Name is ${this.Name} and I,m ${this.Age}`);
        
    }
}

// Creating instances of Boy
let Boy1 = new Boy('Abdullah', 17);
let Boy2 = new Boy('Zaryab', 17);

console.log(Boy1);
console.log(Boy2);
Boy1.greet();
Boy2.greet();


