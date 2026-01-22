import { useState } from 'react'
import { LoginForm } from "./components/form_manipulation.jsx"
import {Counter} from "./components/counterApp.jsx"
import UserList from "./components/UserList.jsx"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
    <UserList/>
    </>
  )
}

export default App
