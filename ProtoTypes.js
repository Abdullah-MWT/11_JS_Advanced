// JavaScript has ProtoTypal behavior beacuase in JavaScript, objects can inherit directly from other objects, and this inheritance is dynamic.

// Create a basic object to UnderStand the ProtoTypal Behavior of Js
let Human = {
  skinColor: "White",
  behavior: "Best",
  isStudent: true,
};

let Abdullah = Object.create(Human);
let Zaryab = Object.create(Human);
Abdullah.isTeacher = false;
Zaryab.isFrom = "S.K";

console.log(Abdullah.behavior);
console.log(Zaryab.isStudent);

// Here, Abdullah & Zaryab don,t have a direct properties called .behavior & .isStudent, but they inherit it from Human because they are created with Human as its prototype.

// ++++++++++ Let,s Prove that function is an Object In reality in JS
function addFiveToNum(num) {
  return num + 5;
}
addFiveToNum.added = 5;

console.log(addFiveToNum.added); // Now , as we Accessed the the just above value thorugh dot' . ' , which is Objects Characteristic, Therefore we Can Say that Function is also an Object

console.log(addFiveToNum(7));
console.log(addFiveToNum.prototype);  // OutPut = {}, it means it,s an object and has some protoTypes

