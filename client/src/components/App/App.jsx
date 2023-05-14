import { useState } from 'react'
import openaiLogo from '../../assets/openai.svg'
import { completePrompt } from '../../services/OpenAI.service.js'
import './App.css'

function App() {
  const [prompt, setPrompt] = useState('');
  const [maxTokens, setMaxTokens] = useState(100);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await completePrompt(prompt, maxTokens);
      setResponse(data.choices[0].text);
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <a href="https://platform.openai.com/" target="_blank">
          <img src={openaiLogo} className="logo" alt="OpenAI logo" />
        </a>
      </div>
      <h1>OpenAI Fun</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input type="text" value={prompt} onChange={e => setPrompt(e.target.value)} required />
        </label>
        <label>
          Max Tokens:
          <input type="number" min="1" value={maxTokens} onChange={e => setMaxTokens(e.target.value)} required />
        </label>
        <button type="submit" disabled={loading}>Complete</button>
      </form>
      {response && (
        <div>
          <h2>Response</h2>
          <p>{response}</p>
        </div>
      )}
    </>
  )
}

export default App
