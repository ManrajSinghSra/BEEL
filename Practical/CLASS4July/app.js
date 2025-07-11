 
const { log } = require("console");
const fs=require("fs")
const pt=require("path")

// fs.mkdir("t",(error,)=>{
//     if(error){
//         console.log("error");   
//     }
//     else{
//         console.log("Directory is created");
//     }
// })

//! rmdir not able to delete  when files has folder so use rm

// fs.rm("t",{recursive:true,force:true},(error)=>{
//     if(error){
//         console.log(error);
//     }

// })



//! copy path  for windows   "D:\\test.pdf"

//! ->  \->\\

const src = "/home/manraj/Documents/manraj.docx";

const path = "/home/manraj/Desktop/BEEL/Practical/CLASS4July/manra.docx";  // can give any name

fs.copyFile(src, path, (err) => {
  if (err) {
    console.error("Copy failed:", err);
  } else {
    console.log("File copied successfully.");
  }
});


console.log(__dirname);

console.log(__filename)


const a=pt.join(__dirname,"manraj.docx")   //!== do not copy path  + and 


console.log(a);


//! pt.extname  ==give extenstion name
