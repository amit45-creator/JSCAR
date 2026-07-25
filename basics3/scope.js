// let a = 10
// const b=20
// var c=30

let a=300
if (true){
    let a =10;
    const b=20;
    // var c =30;
    console.log("Inner: ",a);
}

console.log(a);
// console.log(b);
// console.log(c);

//globe scope and block scope 



//another example
// function one() {
//     const username ="hitesh" 
//     function two() {
//         const website ="youtube"
//         console.log(username);     //closure concept ?
//     }
//     console.log(website);// yaha error aayega kyuki iska scope keval block tak hi hai 

//     two();
// }
// one();


// //another example 
// if(true) {
//     const username ="amit "
//     if(username==="hitesh"){
//         const website = "youtube"
//         console.log(username+website);
//     }
//     console.log(website);
// }
// console.log(username);



addone(5)//no error
function addone (value){
    return num +1
}



// addTwo(4)//error aayega yaha 
// const addTwo=function(num){
//     return num+2
// }





