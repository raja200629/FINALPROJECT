import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Funds from './pages/Funds.jsx'
import Portfolio from './pages/Portfolio.jsx'
import DataAnalyst from './pages/DataAnalyst.jsx'
import FundDetails from './pages/FundDetails.jsx'
import WatchlistPage from './pages/WatchlistPage.jsx'

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/analyst" element={<DataAnalyst />} />
          <Route path="/fund/:id" element={<FundDetails />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </main>
    </div>
  )
}
