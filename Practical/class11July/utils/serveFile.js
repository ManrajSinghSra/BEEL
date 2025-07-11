import fs from "fs";
import fsp from "fs/promises";
import path from "path";


async function serveFile(filePath, res) {
    
  try {
    const stat = await fsp.stat(filePath);
    if (!stat.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("File not found");
    }

    const contentType = getMimeType(filePath);
    res.writeHead(200, { "Content-Type": contentType });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);

    stream.on("error", () => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    });
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error: " + err.message);
  }
}


function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mime = {
    ".html": "text/html",
    ".htm": "text/html",
    ".txt": "text/plain",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpg",
    ".png": "image/png",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".css": "text/css",
    ".js": "application/javascript",
    ".pdf": "application/pdf",
    ".json": "application/json",
    ".ico": "image/x-icon",
  };
  return mime[ext];
}


export default  serveFile