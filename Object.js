// NOTE:- This Folder is created after ProtoTypes.js, So make sure, you first Check that 

// +++++++++++++  Objects in Detail +++++++++++++++++

function createFullName(firstName,lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.nickName = ''
}

createFullName.prototype.addNickName = function() {
    this.lastName + this.nickName
}

let Nam1 = new createFullName('Abdullah',"gul",'Developer');
console.log(Nam1);

