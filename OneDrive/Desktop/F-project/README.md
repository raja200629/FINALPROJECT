# MutualFund Pro - Investor Dashboard

A comprehensive React-based mutual fund investment platform with dashboard, portfolio management, fund browsing, analytics, and AI-powered chatbot.

## Features

### Frontend
- **Dashboard** - Overview of portfolio value, active funds, monthly returns, and investment goals
- **Mutual Funds** - Browse and search available mutual funds with performance metrics
- **Portfolio** - Detailed portfolio breakdown by asset class with allocation tracking
- **Data Analyst** - Advanced analytics with performance charts, risk metrics, and insights
- **Watchlist** - Track favorite funds and stocks with ratings
- **AI Chatbox** - Conversational AI assistant for investment advice (powered by OpenAI)

### Tech Stack
- React 18.2 + Vite
- React Router for navigation
- CSS Grid & Flexbox for responsive design
- Axios for API calls

## Project Structure

```
F-project/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx          # Dashboard
│   │   │   ├── Funds.jsx         # Funds browser
│   │   │   ├── Portfolio.jsx     # Portfolio breakdown
│   │   │   ├── DataAnalyst.jsx   # Analytics dashboard
│   │   │   ├── WatchlistPage.jsx # Watchlist
│   │   │   └── FundDetails.jsx   # Fund details
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Navigation bar
│   │   │   └── ChatBox.jsx       # AI chatbox widget
│   │   ├── assets/
│   │   │   ├── fundsAPI.js       # Mock fund data
│   │   │   └── other utilities
│   │   ├── App.jsx               # Main app with routes
│   │   ├── App.css               # Global styles
│   │   └── main.jsx              # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── server.js         # Express server with OpenAI integration
│   ├── package.json
│   ├── .env.example      # Environment variables template
│   └── README.md         # Backend setup instructions
│
└── .gitignore
```

## Getting Started

### Frontend Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Start dev server:**
   ```bash
   npm run dev
   ```
   Open http://localhost:5174 in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

### Backend Setup (Optional - for AI Chat)

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Configure environment:**
   ```bash
   cp .env.example .env
   # Add your OpenAI API key to .env
   OPENAI_API_KEY=sk-...
   ```

3. **Start server:**
   ```bash
   npm start       # Production
   npm run dev     # Watch mode (requires Node 18+)
   ```
   Server runs at http://localhost:3001

## Pages & Features

### Dashboard (`/`)
- Quick portfolio overview with key metrics
- Top performing funds
- Investment goals progress tracker
- AI chatbot for instant help

### Mutual Funds (`/funds`)
- Browse available mutual funds
- Filter by category and performance
- View fund details and returns

### Portfolio (`/portfolio`)
- Asset allocation breakdown
- Individual holding performance
- Allocation percentages with visual bars
- YTD returns tracking

### Data Analyst (`/analyst`)
- Portfolio growth metrics
- Risk analysis (volatility, Sharpe ratio, beta)
- Asset allocation performance
- 12-month performance chart
- Key insights and recommendations

### Watchlist (`/watchlist`)
- Track favorite funds and stocks
- Star ratings
- Quick "Add to Portfolio" action
- Real-time price changes

## Sample Data

The app includes mock data for:
- 4 portfolio holdings (Equity, Debt, Hybrid, Gold)
- 5+ mutual funds with performance metrics
- 6 watchlist items with ratings
- Investment goals with progress tracking

Replace with real API calls to `src/assets/fundsAPI.js` as needed.

## Styling

- CSS Variables for theming (colors, spacing, shadows, border radius)
- Responsive grid layouts (mobile, tablet, desktop)
- Card-based UI design
- Color-coded returns (green for gains, red for losses)
- Smooth transitions and hover effects

## Environment Variables

**Frontend:** None required (mock data by default)

**Backend:** 
```
OPENAI_API_KEY=your_api_key_here
PORT=3001
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Future Enhancements

- Real-time market data integration
- User authentication & database
- Portfolio backtesting
- Tax reporting
- Mobile app (React Native)
- Dark mode toggle
- Export to PDF reports

## License

MIT

## Contact

For questions or feedback, please open an issue or contact the development team.
