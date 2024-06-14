const { OpenAI } = require('openai');

const openAiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = { openAiClient };
