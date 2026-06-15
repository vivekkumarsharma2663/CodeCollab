const express = require("express");
const cors = require("cors");

const roomRoutes = require("./routes/roomRoutes");
const codeRoutes = require("./routes/codeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(roomRoutes);
app.use(codeRoutes);

app.get("/", (req,res)=>{
    res.send("Backend Running");
});

app.listen(5000,()=>{
    console.log("Server running on port 5000");
});