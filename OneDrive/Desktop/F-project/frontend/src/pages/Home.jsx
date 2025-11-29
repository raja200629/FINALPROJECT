import React from 'react'
import '../App.css'
import ChatBox from '../components/ChatBox'

function StatCard({ title, value, sub }) {
  return (
    <div className="card stat-card">
      <div className="card-title">{title}</div>
      <div className="card-value">{value}</div>
      {sub && <div className="card-sub">{sub}</div>}
    </div>
  )
}

function TopFund({ name, risk, change }) {
  return (
    <div className="top-fund">
      <div>
        <div className="fund-name">{name}</div>
        <div className="fund-risk">Risk: {risk}</div>
      </div>
      <div className="fund-change">{change}</div>
    </div>
  )
}

function GoalRow({ label, pct }) {
  return (
    <div className="goal-row">
      <div className="goal-label">{label}</div>
      <div className="progress-wrap">
        <div className="progress">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <div className="goal-pct">{pct}%</div>
    </div>
  )
}

export default function Home() {
  const stats = [
    { title: 'Portfolio Value', value: '$45,231.89', sub: '+20.1% from last month' },
    { title: 'Active Funds', value: '12', sub: '+3 funds this quarter' },
    { title: 'Monthly Return', value: '+12.5%', sub: 'Above benchmark by 2.3%' },
    { title: 'Risk Score', value: '7.2/10', sub: 'Moderate-High risk' },
  ]

  const topFunds = [
    { name: 'Vanguard S&P 500 ETF', risk: 'Moderate', change: '+15.2%' },
    { name: 'Fidelity Growth Fund', risk: 'High', change: '+12.8%' },
    { name: 'BlackRock Bond Index', risk: 'Low', change: '+8.4%' },
  ]

  const goals = [
    { label: 'Retirement Fund', pct: 68 },
    { label: 'Emergency Fund', pct: 85 },
    { label: 'House Down Payment', pct: 42 },
  ]

  return (
    <div className="dashboard-page">
      <header className="topbar">
        <div className="brand">MutualFund Pro</div>
        <nav className="nav">
          <button className="nav-btn active">Dashboard</button>
          <button className="nav-btn">Mutual Funds</button>
          <button className="nav-btn">Portfolio</button>
          <button className="nav-btn">Analytics</button>
        </nav>
      </header>

      <main className="dashboard">
        <h1 className="page-title">Welcome to your investor dashboard</h1>
        <p className="page-sub">Here's an overview of your current activity and key metrics.</p>

        <section className="stats-grid">
          {stats.map((s) => (
            <StatCard key={s.title} {...s} />
          ))}
        </section>

        <section className="panels">
          <div className="panel left-panel">
            <h3 className="panel-title">Top Performing Funds</h3>
            <div className="fund-list">
              {topFunds.map((f) => (
                <TopFund key={f.name} {...f} />
              ))}
            </div>
          </div>

          <div className="panel right-panel">
            <h3 className="panel-title">Investment Goals Progress</h3>
            <div className="goals">
              {goals.map((g) => (
                <GoalRow key={g.label} {...g} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <ChatBox />
    </div>
  )
}
