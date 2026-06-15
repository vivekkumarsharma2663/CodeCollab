const { executeCode } = require("../services/pistonServices");

async function runCode(req, res) {

    try {

        console.log("===== Request Received =====");

        const { code, language } = req.body;

        console.log("Language:", language);
        console.log("Code:", code);

        const output = await executeCode(language, code);

        console.log("Output:", output);

        res.json({
            success: true,
            output
        });

    } catch (error) {

        console.log("========== ERROR ==========");
        console.log(error);
        console.log(error.message);
        console.log("===========================");

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

module.exports = {
    runCode
};