import React, { useState } from 'react'
import '../App.css'

function WatchlistItem({ name, current, change, category, rating }) {
  return (
    <div className="card watchlist-item">
      <div className="watchlist-header">
        <div>
          <div className="watchlist-name">{name}</div>
          <div className="watchlist-category">{category}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="watchlist-price">₹{current.toLocaleString()}</div>
          <div className={`watchlist-change ${change >= 0 ? 'positive' : 'negative'}`}>
            {change >= 0 ? '↑' : '↓'} {Math.abs(change).toFixed(2)}%
          </div>
        </div>
      </div>

      <div className="watchlist-row">
        <span className="watchlist-label">Rating</span>
        <span className="watchlist-stars">{'⭐'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
      </div>

      <div className="watchlist-actions">
        <button className="watchlist-btn">Add to Portfolio</button>
        <button className="watchlist-btn-remove">Remove</button>
      </div>
    </div>
  )
}

export default function WatchlistPage() {
  const [watchlist] = useState([
    { id: 1, name: 'Vanguard S&P 500 ETF', current: 4521, change: 12.5, category: 'US Equity', rating: 5 },
    { id: 2, name: 'Fidelity Growth Fund', current: 3847, change: 8.3, category: 'Growth', rating: 4 },
    { id: 3, name: 'HDFC Bank', current: 1850, change: -2.1, category: 'Stock', rating: 4 },
    { id: 4, name: 'Infosys Ltd', current: 2234, change: 5.7, category: 'Tech Stock', rating: 4 },
    { id: 5, name: 'ICICI Prudential Balanced', current: 892, change: 3.2, category: 'Balanced Fund', rating: 3 },
    { id: 6, name: 'Axis Small Cap Fund', current: 1456, change: 18.9, category: 'Small Cap', rating: 5 },
  ])

  return (
    <div style={{ padding: 18 }}>
      <h2 style={{ marginTop: 0 }}>My Watchlist</h2>
      <p style={{ color: '#8b8b8b', marginBottom: 24 }}>Track your favorite funds and stocks. Add promising investments to monitor their performance.</p>

      <div className="watchlist-grid">
        {watchlist.map(w => (
          <WatchlistItem key={w.id} {...w} />
        ))}
      </div>

      {watchlist.length === 0 && (
        <div className="card" style={{ padding: 40, textAlign: 'center' }}>
          <div style={{ fontSize: 14, color: '#8b8b8b' }}>Your watchlist is empty. Start adding funds to track them.</div>
        </div>
      )}
    </div>
  )
}
