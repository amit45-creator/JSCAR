function sayMyname (){
    console.log("a");
    console.log("b");
    console.log("c");

}
sayMyname()
// sayMyname  -- reference hai  

//  function addTwoNumber(num1,num2){//parameter
//     console.log(num1,num2);
//  }

  function addTwoNumber(num1,num2){//parameter
    // let result =num1+num2
    // console.log("amit");
    return  num1+num2
 }

 const result=addTwoNumber(3,4)//argument

//  console.log("result",result);


function loginUserMessage(username="sam"){
    if(username===undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
//  console.log(loginUserMessage("hitesh"))
//  console.log(loginUserMessage(""))
//  console.log(loginUserMessage())//undefined

function calculateCartPrice(...num1){//saara khel dot ka hai 
    return num1
}
// console.log(calculateCartPrice(200,400,500))


function calculateCartPrice(val,val2,...num1){//saara khel dot ka hai 
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000))

const user ={
    username: "hitesh",
    price: 199
}//it is object

function handleObject (anyobject){
    console.log(`Username is${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})//we can also pass direct object 


const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]

}
//  console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200,400,500,1000]));
