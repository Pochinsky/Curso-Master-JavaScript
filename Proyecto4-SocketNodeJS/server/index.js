const express = require("express");
const app = express();
const server = require("http").Server(app);
const socket = require("socket.io")(server);

app.use(express.static("client"));

app.get("/hola-mundo", (request, response) =>
  response.status(200).send("<h1>Hola Mundo</h1>")
);

const messages = [
  {
    id: 1,
    text: "Bienvenido al chat privado de Socket.io y NodeJS",
    nickname: "Bot",
  },
];

socket.on("connection", (skt) => {
  console.log("Nodo conectado. IP: " + skt.handshake.address);
  skt.emit("messages", messages);
  skt.on("add-message", (data) => {
    messages.push(data);
    socket.sockets.emit("messages", messages);
  });
});

server.listen("6677", () =>
  console.log("Servidor hosteado en http://192.168.100.27:6677")
);
