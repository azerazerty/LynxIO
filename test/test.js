// Import the Server and Client from the compiled `dist` folder
const { Server } = require("../dist/server");
const { Client } = require("../dist/client");

// Initialize the Server
const server = new Server();
server.start(); // Start the server

// Listen for any events (replace this with actual events in your Server class if necessary)
server.on("message", (msg) => {
  console.log(`Server received: ${msg}`);
});

// Initialize the Client
const client1 = new Client("user1");
const client2 = new Client("user2");

// Connect clients to test the setup
client1.connect();
client2.connect();

// Emit some test events (assuming these are implemented in your Client class)
client1.emit("message", "Hello from client1");
client2.emit("message", "Hello from client2");

// If you have a custom event handler in the Server or Client classes, test those too
client1.on("connected", () => {
  console.log("Client 1 connected!");
});
client2.on("connected", () => {
  console.log("Client 2 connected!");
});
