import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LoadingScreen from 'components/LoadingScreen/LoadingScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LoadingScreen/>
       
    </div>
  )
}

export default App
