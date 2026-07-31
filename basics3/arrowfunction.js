const user ={
    username :"amit",
    price: 999,

    welcomeMessage:function(){
       console.log(`${this.username},welcome to website`);
    //    console.log(this);
    }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);//output empty object 


// function chai (){
//     let username ="hitesh"
//     console.log(this.username);//undefined ho rha function ke andar
// }

// chai()



// const chai=()=> {
//     let username="manish";
//     console.log(this);// empty parentheses

// }
// chai()


// const addTwo =(num1,num2)=>{
//     return num1 +num2
// }


// const addTwo =(num1,num2)=> (num1 +num2)//curly braces agar use hua to return likhna padega 

const addTwo =(num1,num2)=> ({username:"amit"})//object ko parentheses me hi return karna hota hai 

console.log(addTwo(3,4))


