import { useState } from 'react'
import { LoginForm } from "./components/form_manipulation.jsx"
import {Counter} from "./components/counterApp.jsx"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginForm 
        email={email} 
        setEmail={setEmail} 
        password={password}
        setPassword={setPassword}
    />
    <Counter count = {count} setCount = {setCount}/>
    </>
  )
}

export default App
