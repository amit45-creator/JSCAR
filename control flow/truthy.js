const userEmail = "ah@.ai"

if(userEmail){
    console.log("got user email");

}else {
    console.log("don't  have user email");
}



// falsy values

// false, 0,-0,BigInt 0n, "",null,undefined,Nan 

// truthy values 
//  "0",'false'," ",[],{},function(){}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//nullish coalescing  operator (??):null  undefined
// let val1;
// val1=5?? 10

// console.log(val1);


// ternary operator 