//singleton 
//object.create


//object literals

const mySym=Symbol("key1")

const JsUser={
    name: "amit" ,
    "full name": "hitesh",//dot se access nhi kar payenge 
    [mySym]: "mykey1",
    age: 20,
    location: "gkp",
    email: "akumargkp2021@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])//giving output is fine but it is not used as symbol when we not add square bracket 

JsUser.email="chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="google.com"
// console.log(JsUser)

JsUser.greeting =function(){
    console.log("Hello Js user");

}

JsUser.greetingTwo =function(){
    console.log(`Hello Js user",${this.name}`);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());