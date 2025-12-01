import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addCount = () =>{
    setCount((count) => count + 1)
  }

  const reduceCount = () =>{
    setCount((count) => count>0 ? count - 1 : count)
  }

  return (
    <>
      <h1>CountDown</h1>
      <div className="card">
        <div style={{marginBottom: '10px',fontSize:'2rem'}}>Number is {count}</div>
        <button onClick={() => addCount()} style={{marginRight: '10px',backgroundColor: "green"}}>
          +
        </button>
        <button onClick={() => reduceCount()} style={{backgroundColor: "red"}}>
          -
        </button> 
      </div>
    </>
  )
}

export default App
git