//! create  a file user details user.json=== array of object =username and password
//! task 2 function  take username and serach file and check user exist or not if xist message user is valid and show dashboard ans create a new file of login  users




 
const fs=require("fs")


const data =fs.readFileSync("./user.json","utf-8")


// console.log(data);
const users=JSON.parse(data)

function abc(name){

    const find=users.find((curr)=>curr.name==name)

    if(!find){
        console.log("INVALID USER")
    }

    fs.appendFile("./log.txt",`Login user  is   ${JSON.stringify(find)} \n`,
        (error)=>{
        console.log(error);
        
    })
 

}

abc("Manraj")