// Immediately Invoked function expressions (iife)

//global pollution ko hatane ke liye 
(function chai(){
    console.log(`db connected`);
})();// semi colon nhi lagaoge to error aayega 

// ()()
(  (name)=>{
    console.log(`db connected two ${name}`);
}   
)("amit")
