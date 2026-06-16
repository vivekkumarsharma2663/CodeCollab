const { executeCode } = require("../services/judge0Services");

const runCode = async (req, res) => {
  try {
    const { language, code } = req.body;

    const output = await executeCode(language, code);

    res.json({ output });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = { runCode };