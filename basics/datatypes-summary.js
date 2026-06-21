//primitive // copy me change hona 
// 7  types : String,Number , Boolean ,null,undefined ,Symbol, BigInt 


// js is dynamically typed language

const  score=100
const scoreValue =100.3


const isLoggedIn =false
const outsideTemp = null
let userEmail ;

const id=Symbol('123')
const anotherId = Symbol('123')
console.log(id ===  anotherId);

// reference types or non primitive 

//array, objects, functionns 
 const heroes = ['shaktiman',"naagraj"];
 let myObj ={
    name : "amit",
    age: 22,
 }

 //we can treat function as variable 

 const myFunction = function(){
    console.log("hello");
 }

 console.log(typeof outsideTemp);//object 



 //******* *//

 //stack (primitive)--> we will copy ,heap (non-primitive)--> we get reference means cahnge in original values 

 let myYoutubename = "hitesh"
 let anothername =myYoutubename
 anothername="chaiaurcode"

 console.log(myYoutubename);
 console.log(anothername);


 let userOne ={
   email: "amit231354.com",
   upi:"hfhjfa"
 }

 let userTwo =userOne

 userTwo.email = " hitesh@google.com "

 console.log(userOne.email);
 console.log(userTwo.email);//  same ans

 // reference means change in original values 
