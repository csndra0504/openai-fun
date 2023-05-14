require('dotenv').config();
const express = require('express');
// const axios = require('axios');
const cors = require('cors');
const { Configuration, OpenAIApi } = require("openai");
// Create an express app
const app = express();

// Use CORS to allow requests from the client
app.use(cors({
  origin: true,
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
}));

// Use express.json() to parse JSON bodies of requests
app.use(express.json());

// Create an axios instance with the OpenAI API base URL and your API key
// const openai = axios.create({
//   baseURL: 'https://api.openai.com/v1',
//   headers: {
//     'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//     'Content-Type': 'application/json'
//   }
// });
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Create a route to handle POST requests to /complete
app.post('/complete', async (req, res) => {
  const { prompt, max_tokens } = req.body;
  console.log('API LOG #1'); // eslint-disable-line no-console
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens,
      // temperature: 0,
    });
    console.log('response', response); // eslint-disable-line no-console
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
