import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function Counter() {
  const [counter, setCounter] = useState(0);
  
  if(counter<0) {
    setCounter(0)
  }
  // increment function
  function increment(){
    setCounter(pre=> pre+1);
  }
   // decrement function
  function decrement(){
    setCounter(pre=> pre-1)
  }
  return(
    <div className='counter-main'>
        <div className='counter-container'>
            <h1>Counter</h1>
          <span>{counter}</span>
        <div>
            <ul>
              <li onClick={increment}>Increment +</li>
              <li onClick={decrement}>Decrement -</li>
            </ul>
        </div>
        </div>
    </div>
  )
}
