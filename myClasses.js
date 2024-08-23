// +++++++++++++++++ Classes , Constructor etc +++++++++++++++++++++

class Users  {
    constructor(name,age,password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
    encrypytedPassword() {
        return `${this.password}123`;
    }
    capitalUser() {
        return `${this.name.toUpperCase()}`
    }
}

const user1 = new Users('Abdullah','18','abc');
console.log(user1.encrypytedPassword());
console.log(user1.capitalUser());



 