const { v4: uuidv4 } = require("uuid");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend Running");
});

app.post("/create-room",(req,res)=>{
    const{roomName,userName,language}=req.body;

    const roomid=uuidv4();

    res.json({
        success:true,
        roomid:roomid,
        roomName,
        userName,
        language
    });
});
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});