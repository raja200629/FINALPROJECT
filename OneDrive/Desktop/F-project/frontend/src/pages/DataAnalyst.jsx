import React, { useState } from 'react'
import '../App.css'

function MetricCard({ title, value, change, trend }) {
  return (
    <div className="card metric-card">
      <div className="metric-title">{title}</div>
      <div className="metric-value">{value}</div>
      <div className={`metric-change ${change >= 0 ? 'positive' : 'negative'}`}>
        {trend} {Math.abs(change).toFixed(1)}%
      </div>
    </div>
  )
}

function AnalyticsRow({ label, value, percentage, color }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontWeight: 500 }}>{label}</span>
        <span style={{ fontWeight: 700 }}>{value}</span>
      </div>
      <div style={{ width: '100%', height: 8, background: '#e9e9ed', borderRadius: 6, overflow: 'hidden' }}>
        <div
          style={{
            width: `${percentage}%`,
            height: '100%',
            background: color || '#0b0a11',
            borderRadius: 6,
            transition: 'width 0.3s ease'
          }}
        />
      </div>
    </div>
  )
}

export default function DataAnalyst() {
  const [metrics] = useState({
    portfolioGrowth: { value: '+18.5%', change: 18.5, trend: '↑' },
    avgReturn: { value: '+7.2%', change: 7.2, trend: '↑' },
    volatility: { value: '12.3%', change: -2.1, trend: '↓' },
    sharpeRatio: { value: '1.48', change: 0.12, trend: '↑' }
  })

  const [categoryPerformance] = useState([
    { label: 'Equity Funds', value: '50%', percentage: 50, color: '#1f7a3a' },
    { label: 'Debt Funds', value: '25%', percentage: 25, color: '#3b6fa1' },
    { label: 'Hybrid Funds', value: '20%', percentage: 20, color: '#a15b3b' },
    { label: 'Gold ETF', value: '5%', percentage: 5, color: '#d4a600' }
  ])

  const [riskMetrics] = useState([
    { label: 'Downside Risk', value: '8.5%', percentage: 42, color: '#a12b2b' },
    { label: 'Upside Potential', value: '24.3%', percentage: 85, color: '#1f7a3a' },
    { label: 'Beta (Market Correlation)', value: '0.92', percentage: 46, color: '#3b6fa1' },
    { label: 'Max Drawdown', value: '-15.2%', percentage: 76, color: '#d4a600' }
  ])

  return (
    <div style={{ padding: 18 }}>
      <h2 style={{ marginTop: 0 }}>Data Analyst Dashboard</h2>
      <p style={{ color: '#8b8b8b', marginBottom: 24 }}>
        Comprehensive analytics of your portfolio performance, risk metrics, and asset allocation insights.
      </p>

      {/* Key Metrics Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
        <MetricCard title="Portfolio Growth" value={metrics.portfolioGrowth.value} change={metrics.portfolioGrowth.change} trend={metrics.portfolioGrowth.trend} />
        <MetricCard title="Avg Annual Return" value={metrics.avgReturn.value} change={metrics.avgReturn.change} trend={metrics.avgReturn.trend} />
        <MetricCard title="Volatility" value={metrics.volatility.value} change={metrics.volatility.change} trend={metrics.volatility.trend} />
        <MetricCard title="Sharpe Ratio" value={metrics.sharpeRatio.value} change={metrics.sharpeRatio.change} trend={metrics.sharpeRatio.trend} />
      </div>

      {/* Two Column Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
        {/* Category Performance */}
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Asset Allocation Performance</h3>
          {categoryPerformance.map((cat, idx) => (
            <AnalyticsRow key={idx} label={cat.label} value={cat.value} percentage={cat.percentage} color={cat.color} />
          ))}
        </div>

        {/* Risk Metrics */}
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Risk Analysis</h3>
          {riskMetrics.map((risk, idx) => (
            <AnalyticsRow key={idx} label={risk.label} value={risk.value} percentage={risk.percentage} color={risk.color} />
          ))}
        </div>
      </div>

      {/* Performance Timeline */}
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Performance Timeline (Last 12 Months)</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: 150, gap: 6 }}>
          {[12, 8, 15, 10, 18, 9, 22, 14, 11, 19, 16, 21].map((height, idx) => (
            <div
              key={idx}
              style={{
                flex: 1,
                height: `${height * 6}px`,
                background: `hsl(${120 - height * 3}, 70%, 50%)`,
                borderRadius: 4,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              title={`M${idx + 1}: +${height}%`}
            />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontSize: 12, color: '#8b8b8b' }}>
          <span>Jan</span>
          <span>Jul</span>
          <span>Dec</span>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="card" style={{ marginTop: 24 }}>
        <h3 style={{ marginTop: 0 }}>Key Insights</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <div style={{ padding: 12, background: '#f9fafb', borderRadius: 8 }}>
            <div style={{ fontSize: 12, color: '#8b8b8b', marginBottom: 6 }}>Best Performer</div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>Axis Small Cap</div>
            <div style={{ color: '#1f7a3a', fontSize: 12, marginTop: 4 }}>+28.5% YTD</div>
          </div>

          <div style={{ padding: 12, background: '#f9fafb', borderRadius: 8 }}>
            <div style={{ fontSize: 12, color: '#8b8b8b', marginBottom: 6 }}>Avg Dividend Yield</div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>2.8%</div>
            <div style={{ color: '#3b6fa1', fontSize: 12, marginTop: 4 }}>+0.3% vs last quarter</div>
          </div>

          <div style={{ padding: 12, background: '#f9fafb', borderRadius: 8 }}>
            <div style={{ fontSize: 12, color: '#8b8b8b', marginBottom: 6 }}>Rebalance Recommended</div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>In 45 days</div>
            <div style={{ color: '#d4a600', fontSize: 12, marginTop: 4 }}>Equity overweight by 3%</div>
          </div>
        </div>
      </div>
    </div>
  )
}
