// Stores the active TCP connection object.
let connection;
// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const messages = {
  1: 'GG',
  2: 'lol',
  3: 'lmao',
  4: 'great job'
}
const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log("Exiting the game.");
    process.exit();
  } if (key === `w`) {
    connection.write('Move: up')
  } if (key === `s`) {
    connection.write('Move: down')
  } if (key === `a`) {
    connection.write('Move: left')
  } if (key === `d`) {
    connection.write('Move: right')
  } if (messages[key]) {
    connection.write(`Say: ${messages[key]}`)
  }
};

module.exports = {setupInput}