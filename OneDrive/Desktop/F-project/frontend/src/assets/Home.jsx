import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="card">
      <h2>Welcome to Mutual Funds Explorer</h2>
      <p className="small">Explore, Compare and Watch mutual funds. This project demonstrates React concepts including Context API, routing, hooks and localStorage persistence.</p>
      <div style={{marginTop:12}}>
        <Link to="/funds"><button className="button">Explore Funds</button></Link>
      </div>
    </div>
  )
}