import { useState } from 'react'
import './App.css'
import Dashboard from './pages/dashboard'
import { RiskGauge } from './components/RiskGauge.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Dashboard/>
    

    </>
  )
}

export default App
