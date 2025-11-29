import React, { useState, useRef, useEffect } from 'react'

// ChatBox component that connects to backend OpenAI chat endpoint
export default function ChatBox() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', text: 'Hi — I can help with fund recommendations, explain returns, or show steps to invest. Ask me anything.' }
  ])
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)
  const API_ENDPOINT = 'http://localhost:3001/api/chat'

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  function pushMessage(role, text){
    setMessages(m => [...m, { id: Date.now()+Math.random(), role, text }])
  }

  async function send(){
    const text = input.trim()
    if(!text || loading) return
    setInput('')
    pushMessage('user', text)
    setLoading(true)

    try{
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ message: text })
      })
      const data = await res.json()
      const reply = data?.reply || 'Sorry, I could not get a reply.'
      pushMessage('assistant', reply)
    }catch(e){
      console.error('Chat error:', e)
      pushMessage('assistant', `⚠️ Backend unreachable. Make sure the server is running at ${API_ENDPOINT}`)
    }finally{
      setLoading(false)
    }
  }

  function handleKey(e){
    if(e.key === 'Enter' && !e.shiftKey){
      e.preventDefault(); send()
    }
  }

  return (
    <div className={`chat-widget ${open? 'open':''}`}>
      <div className="chat-toggle" onClick={()=>setOpen(o=>!o)} title="Chat with Assistant">
        {open ? '×' : '💬'}
      </div>

      <div className="chat-panel" aria-hidden={!open}>
        <div className="chat-header">Assistant</div>
        <div className="chat-body">
          {messages.map(m=> (
            <div key={m.id} className={`chat-msg ${m.role}`}>
              <div className="chat-bubble">{m.text}</div>
            </div>
          ))}
        </div>

        <div className="chat-input-area">
          <textarea
            ref={inputRef}
            value={input}
            onChange={e=>setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about funds, returns, or how to invest..."
            className="chat-input"
            rows={1}
            disabled={loading}
          />
          <button className="chat-send" onClick={send} disabled={loading}>{loading ? '⋯' : 'Send'}</button>
        </div>
      </div>
    </div>
  )
}
