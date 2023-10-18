const EventEmitter = require("events");
const { resolve } = require("path");

const customEmitter = new EventEmitter();

customEmitter.on("userLoggedIn", (username) => {
  console.log(`User ${username} logged in.`);
});

const waitForMessageReceivedEvent = () => {
  return new Promise((resolve) => {
    customEmitter.on("messageReceived", (from, message) => {
      resolve(`Message from ${from}: ${message}`)
    })
  })
}

const doWaitForMessageReceivedEvent = async () => {
  const msg = await waitForMessageReceivedEvent();
  console.log(msg)
}

setInterval(() => {
  customEmitter.emit("userLoggedIn", "Alice")
}, 3000);

setInterval(() => {
  customEmitter.emit("userLoggedIn", "Charlie")
}, 3000);

doWaitForMessageReceivedEvent();

customEmitter.emit("messageReceived", "Bob", "Hello there!");
customEmitter.emit("messageReceived", "Dave", "How are you doing?");

