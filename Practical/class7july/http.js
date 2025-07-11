//! create a basic http server using http module
const http=require("http") 
const fs=require("fs")
const path=require("path") 

const indexPath1=path.join(__dirname,"index.html")

const indexPath = path.join(__dirname, "micky.jpeg");


const indexPath2 = path.join(__dirname, "user.json");

// const server=http.createServer((req,res)=>{
//         fs.readFile(indexPath,'utf-8',(error,data)=>{
//         if(error){
//             console.log(error)
//         }
//         else{
//                  res.writeHead(200, { "content-type": "text/html" });
//                 res.end(data);
//         }
//     })
// })
const server = http.createServer((req, res) => {

   if(req.url=="/image" && req.method==="GET"){

  fs.readFile(indexPath, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      res.end(data);
    }
  });

   }
   else if(req.url=="/html" && req.method=="GET"){

    fs.readFile(indexPath1,"utf-8", (error, data) => {

      if (error) {
        console.log(error);
      } 
      else
       {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } 
    });

   }
   else if(req.url=="/json" && req.method=="GET"){

    fs.readFile(indexPath2,"utf-8", (error, data) => {

      if (error) {
        console.log(error);
      } 
      else
       {
        res.writeHead(200, { "Content-Type": "text/json" });
        res.end(data);
      } 
    });

   }
   else{
           res.end("404 not found")
   }


});



server.listen(4001,"localhost",()=>console.log("server is created"))