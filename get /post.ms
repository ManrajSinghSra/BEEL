const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const querystring = require("querystring");

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    const html = await fs.readFile(path.join(__dirname, "index.html"));
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(html);
  }

  if (req.method === "POST" && req.url === "/submit") {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      const parsed = querystring.parse(body); // for form-urlencoded
      const { name, age } = parsed;

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Hello ${name}, you are ${age} years old.`);
    });
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});





<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>POST Form with Fetch</title>
</head>
<body>
  <h1>POST Form (with JS)</h1>
  <form id="form">
    <input type="text" name="name" placeholder="Enter your name" />
    <input type="number" name="age" placeholder="Enter your age" />
    <button type="submit">Submit</button>
  </form>

  <p id="result"></p>

  <script>
    document.getElementById("form").addEventListener("submit", async (e) => {
      e.preventDefault();

      const form = new FormData(e.target);
      const name = form.get("name");
      const age = form.get("age");

      const res = await fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, age })
      });

      const text = await res.text();
      document.getElementById("result").innerText = text;
    });
  </script>
</body>
</html>
