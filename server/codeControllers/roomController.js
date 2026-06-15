const { v4: uuidv4 } = require("uuid");

function createRoom(req,res){

    const { roomName, userName, language } = req.body;

    const roomid = uuidv4();

    res.json({
        success:true,
        roomid,
        roomName,
        userName,
        language
    });

}

module.exports = {
    createRoom
};