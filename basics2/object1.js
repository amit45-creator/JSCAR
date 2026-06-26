//  in this ssection we will cover singleton and using constructor
// const tinderUser= new Object()   or

const tinderUser ={

}
tinderUser.id="12345abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false


// console.log(tinderUser);


const regularUser={
    email: "some@gmail.com",
    fullname:{
        userfullname :{
            firstname: "hitesh",
            laslname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}// object ke andar object 

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);


const obj3={...obj1,...obj2}
//console.log(obj3)


//database  se jab value aayegi //array ke andar objects 
const users =[
    {
        id: 1,
        email: "amit@gmialc.com"
    },
    {

    }
]


users[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
