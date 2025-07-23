import { getGroqResponse } from '../utils/groq.js';

export const handleTextAI = async (req, res) => {
  const { message } = req.body;

  if (!message || message.trim() === '') {
    return res.status(400).json({ error: 'Message cannot be empty' });
  }

  try {
    const reply = await getGroqResponse(message);
    res.json({ reply });
  } catch (error) {
    console.error('Groq Error:', error);
    res.status(500).json({ error: 'Failed to get AI response' });
  }
};
