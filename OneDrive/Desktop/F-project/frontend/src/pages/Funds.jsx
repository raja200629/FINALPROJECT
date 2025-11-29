import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchFunds } from '../assets/fundsAPI'
import Loader from '../assets/Loader'

function formatAssets(n){
  return n.toLocaleString(undefined,{maximumFractionDigits:0})
}

export default function Funds(){
  const [funds, setFunds] = useState(null)
  const [err, setErr] = useState(null)

  useEffect(()=>{
    let mounted = true
    fetchFunds().then(data=>{ if(mounted) setFunds(data) }).catch(e=>{ if(mounted) setErr(e) })
    return ()=>{ mounted=false }
  },[])

  if(err) return <div style={{padding:20}}>Failed to load funds.</div>
  if(!funds) return <Loader />

  return (
    <div style={{padding:18}}>
      <h2 style={{marginTop:0}}>Mutual Funds</h2>
      <div className="funds-grid">
        {funds.map(f => (
          <div key={f.id} className="card fund-card">
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <div>
                <div className="fund-name">{f.name}</div>
                <div className="fund-meta">{f.category} · Manager: {f.manager}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div className={"fund-returns "+(f.returns>=0? 'positive':'negative')}>{f.returns>=0? '+' : ''}{f.returns}%</div>
                <div className="fund-assets">AUM: ₹{formatAssets(f.assets)}</div>
              </div>
            </div>

            <div style={{marginTop:12,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Link to={`/fund/${f.id}`} className="nav-btn" style={{padding:'6px 10px'}}>View</Link>
              <div style={{color:'#7a7a7a',fontSize:12}}>Last 12 months</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
