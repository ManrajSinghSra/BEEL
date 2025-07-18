const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const url = require("url");

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (req.method === "GET" && pathname === "/") {
    const htmlPath = path.join(__dirname, "index.html");
    const html = await fs.readFile(htmlPath);
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(html);
  }

  if (req.method === "GET" && pathname === "/greet") {
    const { name, age } = parsedUrl.query;

    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end(`Hello ${name}, you are ${age} years old.`);
  }

  res.writeHead(404);
  res.end("Not Found");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});




here we need to parse url