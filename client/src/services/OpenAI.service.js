import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // replace with your server url

export const completePrompt = async (prompt, max_tokens) => {
  try {
    const response = await axios.post(`${BASE_URL}/complete`, { prompt, max_tokens });
    return response.data;
  } catch (error) {
    console.log('client error', error); // eslint-disable-line no-console
    console.error(error);
    throw error;
  }
};
