import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import SectionPertama from './components/SectionPertama'
import SectionKedua from './components/SectionKedua'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SectionPertama />
      <SectionKedua />
    </div>
  )
}

export default App
