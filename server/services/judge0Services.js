const axios = require("axios");

const languageMap = {
  python: 71,
  c: 103,
  cpp: 105,
  java: 91,
  javascript: 102
};

const executeCode = async (language, code) => {
  const languageId = languageMap[language];

  if (!languageId) {
    throw new Error("Unsupported language");
  }

  const response = await axios.post(
    "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
    {
      source_code: code,
      language_id: languageId
    }
  );

  const result = response.data;

  return (
    result.stdout ||
    result.stderr ||
    result.compile_output ||
    result.message ||
    "No Output"
  );
};

module.exports = { executeCode };