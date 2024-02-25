const { connect } = require("./client");
const { setupInput } = require("./input");
const connection = connect();
console.log("Connecting ...");
setupInput(connection);