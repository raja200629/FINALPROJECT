import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { OpenAI } from 'openai'

dotenv.config()

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// Simple in-memory conversation history (in production, use a database)
const conversations = new Map()

app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationId = 'default' } = req.body

    if (!message) {
      return res.status(400).json({ error: 'Message is required' })
    }

    // Get or create conversation history
    if (!conversations.has(conversationId)) {
      conversations.set(conversationId, [
        {
          role: 'system',
          content:
            'You are a helpful financial advisor assistant for a mutual funds investment platform. ' +
            'Provide concise, friendly advice about mutual funds, returns, portfolio management, ' +
            'risk assessment, and investing strategies. Keep responses under 200 words.'
        }
      ])
    }

    const history = conversations.get(conversationId)
    history.push({ role: 'user', content: message })

    // Call OpenAI
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: history,
      max_tokens: 300,
      temperature: 0.7
    })

    const assistantMessage = response.choices[0].message.content
    history.push({ role: 'assistant', content: assistantMessage })

    // Keep history manageable (last 20 messages)
    if (history.length > 22) {
      history.splice(1, 2)
    }

    res.json({ reply: assistantMessage })
  } catch (err) {
    console.error('Chat error:', err)
    res.status(500).json({ error: 'Failed to process chat request' })
  }
})

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`🚀 Backend server running at http://localhost:${PORT}`)
  console.log(`Chat endpoint: POST http://localhost:${PORT}/api/chat`)
  console.log(`Make sure OPENAI_API_KEY is set in .env`)
})
