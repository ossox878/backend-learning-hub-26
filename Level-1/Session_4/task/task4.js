import http from "http";
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  let url = req.url;

  if (url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });

    res.end("Welcome to Cairo Metro Control — Line 3");
  }
   else if (url === "/next-train") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });

    let nextTrainArrivalDate = new Date().toLocaleString();
    res.end(`Next train arrives in: ${nextTrainArrivalDate}`);
  } 
  else {
    res.writeHead(404, {
      "Content-Type": "text/plain",
    });

    res.end("Platform not found");
  }
});

server.listen(PORT, () => {
  console.log("server is running");
});