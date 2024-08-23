// ++++++++++++++++ Static Property in Classes ++++++++++++++++

class Phones {
    constructor(CompanyName,userName){
         this.CompanyName = CompanyName;
         this.userName = userName;
         
    }

    logMe(){
        console.log(`UserName: ${this.userName}`);
        
    }
   static createPhoneNumber(){    // now here the static keyWord stops giving the access of this function to it,s Childs 
        return (Math.round(10 * Math.random() + 1));
        
    }
}

// class Apple extends Phones {
//     constructor(){
//         super(this.CompanyName);

//     }
// }

const Iphone = new Phones('Apple','Abdullah');
console.log(Iphone.createPhoneNumber());