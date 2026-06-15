const express = require("express");

const router = express.Router();

const { runCode } = require("../codeControllers/codeController");

router.post("/run-code", runCode);

module.exports = router;