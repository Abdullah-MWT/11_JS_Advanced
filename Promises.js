// Promises in JS

const { Password } = require("@mui/icons-material");

//#1
// Creating Promises
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Asyn task1 is completed');
        resolve();  // Calling resolve
    },1000)
})
// Promises Consumption
promiseOne.then(function(){
    console.log('PromiseOne Consumed Successffully');
    
})


//#2
//Creating and Consuming Promises togather
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Asyn task2 is completed');
        resolve();
    },1000)
}).then(function(){
    console.log('PromiseTwo Consumed Successffully');
    
})


//#3
// Accessing data in Promises
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:'Abdullah', Password:'1234'});
    },1000)
})

promiseThree.then(function(user){
     console.log(user);
     
})


//#4
// Chaining in Promises
const fourthPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({userName:'Abdullah', PassWord:'1234'})
        } else{
            reject('ERROR: Something Went Wrong')
        }
        
    },1000)
})

fourthPromise
.then((user) => {
    console.log(user);
    return user.userName;
    
})
.then((userName) => {
    console.log(userName);
    
})
.catch(function(error){
    console.log(error);
    
})


// Async and Await: Alternative syntax to .then and .catch

const fifthPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({userName:'Python', PassWord:'1234'})
        } else{
            reject('ERROR: Python Went Wrong')
        }
        
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await fifthPromise;
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive();


// Now let,s Bring and handle some data through asyn,await and fetch
// async function getAllUsersData() {
//    try {
//     const response =  await fetch('https://jsonplaceholder.org/users');
//    const data = await response.json();
//    console.log(data);
//    } catch (error) {
//      console.log(error);
     
//    }
   
// }

// getAllUsersData();


// Now, let,s Handle the same condition as above one with the help off .then and .catch
fetch('https://jsonplaceholder.org/users')
.then(function(response){
   return response.json();
})
.then(function(data){
   console.log(data);
   
})
.catch(function(error){
   console.log('ERROR:', error);
   
})