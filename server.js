const WebSocket = require("ws");
const server = new WebSocket.Server({port : 3000});
server.on("connection", (socket) => {
    socket.on("message", (message) => {
        server.clients.forEach((client) => {
            client.send("ButtonClicked");
        });
    });
});