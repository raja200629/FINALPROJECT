import React from 'react'
import { Link } from 'react-router-dom'

export default function FundCard({ fund, watchlist, onToggle }){
  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <div style={{fontWeight:700}}>{fund.name}</div>
          <div className="small">{fund.category} • {fund.manager}</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontWeight:700}}>₹{fund.assets.toLocaleString()}</div>
          <div style={{color: fund.returns>=0 ? 'green':'#b91c1c'}}>{fund.returns}%</div>
        </div>
      </div>

      <div style={{marginTop:12,display:'flex',gap:8}}>
        <Link to={`/fund/${fund.id}`} className="small" style={{textDecoration:'none'}}>
          <button className="button">Details</button>
        </Link>
        <button className="button" onClick={()=>onToggle(fund.id)}>
          {watchlist.includes(fund.id) ? 'Remove' : 'Watch'}
        </button>
      </div>
    </div>
  )
}