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

