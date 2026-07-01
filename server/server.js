const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const roomRoutes = require("./routes/roomRoutes");
const codeRoutes = require("./routes/codeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(roomRoutes);
app.use(codeRoutes);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {

    console.log("User Connected:", socket.id);

    socket.on("join-room", (roomId) => {
        socket.join(roomId);
        console.log(`${socket.id} joined ${roomId}`);
    });

    socket.on("code-change", ({ roomId, code }) => {
        socket.to(roomId).emit("receive-code", code);
    });

    socket.on("disconnect", () => {
        console.log("User Disconnected:", socket.id);
    });

});

server.listen(5000, () => {
    console.log("Server Running");
});