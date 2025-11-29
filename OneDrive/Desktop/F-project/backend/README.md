# Backend Setup Instructions

## Install Dependencies
```bash
cd backend
npm install
```

## Configure OpenAI API Key
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Edit `.env` and add your OpenAI API key:
   ```
   OPENAI_API_KEY=sk-...
   ```

## Run Server
```bash
npm start       # Production
npm run dev     # Watch mode
```

The server will start at `http://localhost:3001`.

## API Endpoints

### POST /api/chat
Sends a message and returns an AI response.

**Request:**
```json
{
  "message": "What funds do you recommend?",
  "conversationId": "optional-user-id"
}
```

**Response:**
```json
{
  "reply": "Based on your portfolio..."
}
```

### GET /health
Health check endpoint.

## Frontend Integration
The frontend ChatBox component will automatically POST to `http://localhost:3001/api/chat` when the user sends a message.
