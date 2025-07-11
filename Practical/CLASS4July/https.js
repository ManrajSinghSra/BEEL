//! create a basic http server using http module
const http=require("http") 


const server=http.createServer((req,res)=>{

    // if(req.url=="/secret"){

    //     res.writeHead(200,{'content-type':'text/plain'})
    //     res.write(" HELLO this is secret")
    //       res.end("Server is running")
    // }

    // if(req.url=="/"){

    //     res.writeHead(200, { "content-type": "text/html" });
    //     res.write(" HELLO this is secret");
    //     res.end("Server is running");
    // } 
    if(req.url="/"){
        res.writeHead(200, { "content-type": "text/json" });
       
        res.end('{"message":"Server is running"}');

    }
 
    
})

server.listen(4001,"localhost",()=>console.log("server is created"))