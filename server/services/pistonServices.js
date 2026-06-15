const axios = require("axios");

const languageVersions = {
    java: "15.0.2",
    python: "3.10.0",
    javascript: "18.15.0",
    cpp: "10.2.0"
};

async function executeCode(language, code) {
    if (!languageVersions[language]) {
        throw new Error("Unsupported language");
    }
    try {
        const response = await axios.post(
            "https://emkc.org/api/v2/piston/execute",
            {
                language: language,
                version: languageVersions[language],
                files: [
                    {
                        content: code
                    }
                ]
            }
        );

        return response.data.run.stdout || response.data.run.stderr;

    } catch (error) {
        throw new Error(
            error.response?.data?.message ||
            error.message ||
            "Code execution failed"
        );
    }
}

module.exports = {
    executeCode
};