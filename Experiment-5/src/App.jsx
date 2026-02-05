import { useState } from 'react'

import './App.css'
import Singlepageapp from './components/Spa.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Singlepageapp />
    </>
  )
}

export default App
