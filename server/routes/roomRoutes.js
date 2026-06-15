const express = require("express");

const router = express.Router();

const { createRoom } =
require("../codeControllers/roomController");

router.post("/create-room", createRoom);

module.exports = router;