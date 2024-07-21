import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Highlights from './components/Highlights'
import Hero from './components/Hero'


  function App() {
    const [count, setCount] = useState(0)

    return (
      <main className='bg-black' >
        <Navbar />
        <Hero />
        <Highlights />
      </main>
    )
  }

export default App
