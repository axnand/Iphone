<<<<<<< HEAD
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
=======
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
>>>>>>> e04a2b9115f5fcb2376b9759ba1c44fc48a825a1
