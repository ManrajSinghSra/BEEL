import http from "http";
import path from "path";
import dotenv from "dotenv"; 

import serveFile from "./utils/serveFile.js";

dotenv.config();
 
const htmlPath = path.join(import.meta.dirname, "public", "index.html");
const cssPath = path.join(import.meta.dirname, "public", "c.css");

// MIME type function
 

 
const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    return serveFile(htmlPath, res);
  } else if (req.url === "/c.css") {
    return serveFile(cssPath, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(5001, () =>
  console.log("Server running at http://localhost:5001")
);
