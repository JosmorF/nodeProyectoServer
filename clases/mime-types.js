import http from "node:http";
import mime from "mime-types";

const server = http.createServer(async (req, res) => {
  const pathname = req.url;
  console.log("Content-Type:", mime.lookup(".html"));
  res.end("Chao");
});

server.listen(3001);
