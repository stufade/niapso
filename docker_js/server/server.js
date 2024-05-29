const http = require("http");
const fs = require("fs");
const path = require("path");

const createFilePath = (page) => path.resolve(__dirname, `${page}.html`);

const requestHandler = (request, response) => {
  console.log("Request received:", request.url);

  const page = request.url === "/" ? "index" : request.url.slice(1);
  const filePath = createFilePath(page);

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === "ENOENT") {
        response.writeHead(404, { "Content-Type": "text/html" });
        return response.end("<h1>404 Not Found</h1>");
      } else {
        response.writeHead(500, { "Content-Type": "text/html" });
        return response.end("<h1>500 Server Error</h1>");
      }
    }
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(content, "utf-8");
  });
};

const server = http.createServer(requestHandler);
const port = 1234;
server.listen(port, (error) => {
  if (error) {
    return console.error("Error starting server:", error);
  }
  console.log(`Server is listening on port ${port}`);
});
