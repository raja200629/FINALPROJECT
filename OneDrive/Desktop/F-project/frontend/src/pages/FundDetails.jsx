import React from 'react'
import { useParams } from 'react-router-dom'

export default function FundDetails() {
  const { id } = useParams()
  return (
    <div style={{padding:20}}>
      <h2>Fund Details</h2>
      <p>Details for fund id: {id}</p>
    </div>
  )
}
