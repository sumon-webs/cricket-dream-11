import axios from 'axios'
import './App.css'
import Available from './components/available/Available'
import Hero from './components/Hero/Hero'
import Navbar from './components/navbar/Navbar'
import { Suspense, useState } from 'react'

const availableData = axios.get('players.json')

function App() {

  const [balance, setBalance] = useState(123232333);

  return (
    <>
      <Navbar balance={balance} setBalance={setBalance} />

      <Hero />

      <Suspense fallback={<p>Loading..</p>}>
        <Available balance={balance} setBalance={setBalance} availableData={availableData} />
      </Suspense>
    </>
  )
}

export default App
