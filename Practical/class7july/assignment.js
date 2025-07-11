//! create a basic http server using http module
const http=require("http")
const path=require("path")

const fs=require("fs")

const home=path.join(__dirname,"home.html")
const contact=path.join(__dirname,"contact.html")
const about=path.join(__dirname,"about.html")


const server=http.createServer((req,res)=>{

     if (req.url == "/" && req.method == "GET") {
       fs.readFile(home, "utf-8", (error, data) => {
         if (error) {
           console.log(error);
         } else {
           res.writeHead(200, { "Content-Type": "text/html" });
           res.end(data);
         }
       });
     } else if (req.url == "/contact" && req.method == "GET") {
       fs.readFile(contact, "utf-8", (error, data) => {
         if (error) {
           console.log(error);
         } else {
           res.writeHead(200, { "Content-Type": "text/html" });
           res.end(data);
         }
       });
     } 
     else if (req.url == "/about" && req.method == "GET") {
       fs.readFile(about, "utf-8", (error, data) => {
         if (error) {
           console.log(error);
         } else {
           res.writeHead(200, { "Content-Type": "text/html" });
           res.end(data);
         }
       });
     }
 
 
    
})

server.listen(6001,"localhost",()=>console.log("server is created"))