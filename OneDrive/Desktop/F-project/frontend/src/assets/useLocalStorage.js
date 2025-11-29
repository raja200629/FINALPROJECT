import { useState } from 'react'

export default function useLocalStorage(key, initial){
  const [state, setState] = useState(() => {
    try{ const s = localStorage.getItem(key); return s ? JSON.parse(s) : initial }catch(e){ return initial }
  })

  function setLocal(v){
    try{ const value = typeof v === 'function' ? v(state) : v; setState(value); localStorage.setItem(key, JSON.stringify(value)) }catch(e){}
  }

  return [state, setLocal]
}