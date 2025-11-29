import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="brand">MutualFund Pro</div>
      <nav className="nav">
        <Link to="/" className="nav-btn">Dashboard</Link>
        <Link to="/funds" className="nav-btn">Mutual Funds</Link>
        <Link to="/portfolio" className="nav-btn">Portfolio</Link>
        <Link to="/analyst" className="nav-btn">Data Analyst</Link>
        <Link to="/watchlist" className="nav-btn">Watchlist</Link>
      </nav>
    </header>
  )
}
