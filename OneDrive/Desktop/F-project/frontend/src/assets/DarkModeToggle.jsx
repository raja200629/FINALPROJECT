import React, { useState, useEffect } from 'react'

export default function DarkModeToggle(){
  const [dark, setDark] = useState(() => localStorage.getItem('dark') === '1')
  useEffect(()=>{ document.documentElement.style.background = dark ? '#0f172a' : ''; localStorage.setItem('dark', dark ? '1' : '0') },[dark])
  return (
    <button className="button" onClick={()=>setDark(d=>!d)}>{dark ? 'Light' : 'Dark'}</button>
  )
}