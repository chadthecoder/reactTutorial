import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <h1>Chad Mc Adams Home Page</h1>
    <h2>Welcome!</h2>
    <p>Use the navigation bar above to navigate the website.</p>
    </>
  )
}

export default App