import axios from 'axios'

// This function returns mocked transformed fund data or uses a public API if available.
export async function fetchFunds(){
  try{
    // Example of public MF API (if reachable). Fallback to mock data.
    const res = await axios.get('https://api.mfapi.in/mf');
    // The API returns a list of schemes; take first 30 and map to our shape (if res ok)
    if(res?.data && Array.isArray(res.data)){
      return res.data.slice(0,30).map((s,i)=>({
        id: String(i+1),
        name: s.schemeName || s.name || `Fund ${i+1}`,
        category: 'Equity',
        manager: 'Manager ' + (i+1),
        assets: Math.round((Math.random()+0.5)*1e7),
        returns: +(Math.random()*20-5).toFixed(2),
        history: generateHistory()
      }))
    }
  }catch(e){
    // ignore - fallback
  }
  // Fallback mock data
  return mockFunds()
}

function generateHistory(points=12){
  const arr = []
  let val = 100
  for(let i=0;i<points;i++){
    val = val * (1 + (Math.random()-0.4)*0.03)
    arr.push({ date: `M${i+1}`, value: +val.toFixed(2) })
  }
  return arr
}

function mockFunds(){
  return [
    { id:'1', name:'BlueChip Growth Fund', category:'Equity', manager:'A. Sharma', assets:12500000, returns:12.4, history:generateHistory() },
    { id:'2', name:'Safe Bond Ladder', category:'Debt', manager:'K. Rao', assets:8200000, returns:6.1, history:generateHistory() },
    { id:'3', name:'Balanced Advantage', category:'Hybrid', manager:'R. Singh', assets:5400000, returns:9.5, history:generateHistory() },
    { id:'4', name:'Emerging Markets Equity', category:'Equity', manager:'L. Mehta', assets:4300000, returns:18.3, history:generateHistory() },
    { id:'5', name:'SmallCap Opportunities', category:'Equity', manager:'P. Gupta', assets:2100000, returns:-2.4, history:generateHistory() }
  ]
}