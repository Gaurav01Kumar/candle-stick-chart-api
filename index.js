const config = require("./src/config");
const http = require("http");
const app = require("./src/app");
const server = http.createServer(app);
server.listen(config.PORT, () => {
  console.log("Server is running on port 8090");
});
