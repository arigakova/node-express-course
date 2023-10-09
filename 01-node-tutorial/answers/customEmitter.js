const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("userLoggedIn", (username) => {
  console.log(`User ${username} logged in.`);
});

customEmitter.on("messageReceived", (from, message) => {
  console.log(`Message from ${from}: ${message}`);
});

customEmitter.emit("userLoggedIn", "Alice");
customEmitter.emit("messageReceived", "Bob", "Hello there!");

customEmitter.emit("userLoggedIn", "Charlie");
customEmitter.emit("messageReceived", "Dave", "How are you doing?");

