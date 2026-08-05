//for of 

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr){
    console.log(num);
   
}


const greetings="Hello world"
for (const greet of greetings){
    console.log(`each  char is ${greet}`)
}


// maps 

const map= new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

console.log(map);


for (const [key,value] of map){
    console.log(key,':-' ,value);
}


const myObject ={
    'Game1' : 'NFS',
    'Game2' : 'Spiderman'

}

for (const[key,value] of myObject){
    console.log(key,':-', value);
}// error aayega isme //yaah object iterate nhi ho rha hai 


const myObject ={
    js:'javascript',
    cpp:'C++',
    rb:"rubby",
    swift:"swift by apple"
}


for (const key in myObject){
    console.log(`${key} shortcut if for${myObject[key]}`);
}



const programming =["js","rb","py","java","cpp"]

for (const key in programming){
    console.log(programming[key]);
}



const map= new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")


for (const key in map) {
      console.log(key);
}//printing nothing ,iteratable nhi hai 



