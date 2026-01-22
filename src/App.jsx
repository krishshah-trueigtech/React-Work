import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter App</h1>
      <div className="card">
        <h1>Count {count}</h1>
        <button onClick={() => setCount(count => count + 1)}>
          Increement Count
        </button>
        <button onClick={() => setCount(count => count - 1)}>
          Decrement Count
        </button>
      </div>
    </>
  )
}

export default App
