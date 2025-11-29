import React, { useState } from 'react'
import '../App.css'

function PortfolioCard({ name, value, allocation, change, performance }) {
  return (
    <div className="card portfolio-item">
      <div className="portfolio-header">
        <div>
          <div className="portfolio-name">{name}</div>
          <div className="portfolio-allocation">{allocation}% allocation</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="portfolio-value">₹{value.toLocaleString()}</div>
          <div className={`portfolio-change ${change >= 0 ? 'positive' : 'negative'}`}>
            {change >= 0 ? '↑' : '↓'} {Math.abs(change).toFixed(1)}%
          </div>
        </div>
      </div>

      <div className="portfolio-bar">
        <div className="portfolio-bar-bg">
          <div
            className="portfolio-bar-fill"
            style={{
              width: `${allocation}%`,
              background: `hsl(${120 - allocation}, 70%, 50%)`
            }}
          />
        </div>
      </div>

      <div className="portfolio-meta">
        <span>YTD Return: {performance}%</span>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [portfolio] = useState({
    totalValue: 450230,
    totalInvested: 420000,
    totalGain: 30230,
    gainPercent: 7.2,
    holdings: [
      { id: 1, name: 'Equity Funds', value: 225115, allocation: 50, change: 12.5, performance: 8.4 },
      { id: 2, name: 'Debt Funds', value: 112558, allocation: 25, change: 5.2, performance: 4.1 },
      { id: 3, name: 'Hybrid Funds', value: 90046, allocation: 20, change: 8.3, performance: 6.2 },
      { id: 4, name: 'Gold ETF', value: 22512, allocation: 5, change: -2.1, performance: -1.5 }
    ]
  })

  return (
    <div style={{ padding: 18 }}>
      <h2 style={{ marginTop: 0 }}>Your Portfolio</h2>

      {/* Summary Cards */}
      <div className="portfolio-summary">
        <div className="card summary-card">
          <div className="summary-label">Total Value</div>
          <div className="summary-value">₹{portfolio.totalValue.toLocaleString()}</div>
          <div className="summary-sub">₹{portfolio.totalInvested.toLocaleString()} invested</div>
        </div>

        <div className="card summary-card">
          <div className="summary-label">Total Gain</div>
          <div className="summary-value" style={{ color: '#1f7a3a' }}>
            ₹{portfolio.totalGain.toLocaleString()}
          </div>
          <div className="summary-sub">+{portfolio.gainPercent}% return</div>
        </div>

        <div className="card summary-card">
          <div className="summary-label">Allocation</div>
          <div className="summary-value" style={{ fontSize: 16 }}>Balanced</div>
          <div className="summary-sub">50% Equity, 25% Debt</div>
        </div>
      </div>

      {/* Holdings List */}
      <h3 style={{ marginTop: 24, marginBottom: 12 }}>Holdings Breakdown</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {portfolio.holdings.map(h => (
          <PortfolioCard key={h.id} {...h} />
        ))}
      </div>

      {/* Asset Allocation Chart (Text-based) */}
      <div className="card" style={{ marginTop: 24 }}>
        <h3 style={{ marginTop: 0 }}>Asset Class Breakdown</h3>
        <div className="allocation-grid">
          {portfolio.holdings.map(h => (
            <div key={h.id} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  background: `hsl(${120 - h.allocation}, 70%, 50%)`
                }}
              />
              <span style={{ flex: 1 }}>{h.name}</span>
              <span style={{ fontWeight: 600 }}>{h.allocation}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="card" style={{ marginTop: 24 }}>
        <h3 style={{ marginTop: 0 }}>Performance Stats</h3>
        <div className="stats-row">
          <div>
            <div className="stat-label">3-Month Return</div>
            <div className="stat-value">+4.2%</div>
          </div>
          <div>
            <div className="stat-label">6-Month Return</div>
            <div className="stat-value">+6.8%</div>
          </div>
          <div>
            <div className="stat-label">1-Year Return</div>
            <div className="stat-value">+7.2%</div>
          </div>
        </div>
      </div>
    </div>
  )
}
