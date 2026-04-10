import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentFeedback from './StudentForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentFeedback />
    </>
  )
}

export default App
