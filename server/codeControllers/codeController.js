async function runCode(req, res) {

    const { code, language } = req.body;

    console.log(code);

    console.log(language);

    res.json({

        success: true,

        output: "Backend received successfully"

    });

}

module.exports = {

    runCode

};