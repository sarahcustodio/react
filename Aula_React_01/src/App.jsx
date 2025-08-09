import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div class="container">
    <div class="login-box">
      <h2>Entrar</h2>
      <form>
        <div class="input-group">
          <i class="ph ph-envelope"></i>
          <input type="email" id="email" name="email" required/>
        </div>
        <div class="input-group">
          <i class="ph ph-lock-key"></i>
          <input type="password" id="password" name="password" required/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
    </>
  )
}

