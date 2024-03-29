const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to the game server!");
    conn.write(`Name: LDH`);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  // handle incoming data
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {connect};