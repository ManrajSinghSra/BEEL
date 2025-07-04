const fs=require("fs")
const { console } = require("inspector")

//!const data=fs.readFileSync("./t.txt")
// READING FILE


//! fs.readFile("./t.txt","utf-8",(error,data)=>{
//     if(error){}
//     console.log(data)
// })
 


//? override and if not then make a new file and no data in callback
// when error = when need file premission and second file is corrupted
// fs.writeFile("./t.txt","S",(error)=>{
//     if(error){
//         console.log(error)
//     }
// })
//! const writeData= fs.writeFileSync("./t.txt","data is by sync")
// console.log(writeData);  // undefined



//? append file  and no data and if file not present make a new file

// fs.appendFile("./t1.txt","\n this is append file",(error)=>{

//     if(error){
//         console.log(error);
        
//     }
// })

//  fs.appendFileSync("./t.txt","log")  :void
 


//? unlink and  sync not return anything 
// fs.unlink("./t1.txt",(error)=>{
//     if(error){
//         console.log(error.message);
//     }
// });