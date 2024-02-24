const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: `localhost`,
    port: 50541,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to the game server!");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  // handle incoming data
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

console.log("Connecting ...");
connect();
module.exports = connect