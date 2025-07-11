//! get and post difference

//! limitation security , less memory and bulk 

const http = require("http");
const port = 3000;
const fs = require("fs");
const path = require("path");
const url=require("url")
const cssPath = path.join(__dirname, "c.css");
const htmlPath = path.join(__dirname, "index.html");

const server = http.createServer((req, res) => {
 


    const parseUrl=url.parse(req.url).pathname
    // const daat=usr 
  if (req.url == "/" && req.method == "GET") {
    fs.readFile(htmlPath, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    });
  } 
   else if (req.url == "/c.css") {
    fs.readFile(cssPath, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "content-type": "text/css" });
        res.end(data);
      }
    });
  } 
  else if (parseUrl == "/user" && req.method == "GET") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("DATA RECEIVED");
  } 
  else if (parseUrl == "/post" && req.method == "POST") {

    let d=""

    req.on("data",(c)=>{
        d+=c;
    })

    req.on("end",()=>{
        // res.writeHead(200, { "content-type": "text/plain" });
        console.log(d);
        res.end("DATA RECEIVED");

        
    })

  } 
  else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 - Page Not Found");
  }
});

server.listen(port, () => console.log("Server is Started"));
