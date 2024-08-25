// ++++++++++++++  Math.PI   +++++++++++++++++++++

console.log(Math.PI); // Now, we'll discuss that can we change it's value or not and if not then why?
Math.PI = 4;
console.log(Math.PI);// As we can that it,s value cannot be changed. so Why ?

const myValue = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(myValue); // outPut: { value: 3.141592653589793, writable: false, enumerable: false, configurable: false } 
// As we can see that in above ouPut writeable is set to false by default and we cannot set it to true as it,s hardcoded by default

// *************** Let,s Create Our Own Objects for Testing the above results *******************
let myObj = {
    Name: "Abdullah",
    Class: "12th",
    City: "Lahore"
}

console.log(Object.getOwnPropertyDescriptor(myObj, "Class"));
Object.defineProperty(myObj, 'Class', {
    writable: false,
    enumerable: false
});
console.log(Object.getOwnPropertyDescriptor(myObj, "Class"));

// Now in the above Example, we created our own object then set it,s properties like writeable to false 


