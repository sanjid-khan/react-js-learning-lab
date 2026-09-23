import { useState } from 'react'
import './App.css'

import Counter from "./components/Counter.jsx"
import Posts from "./components/Posts.jsx"

function App() {

 const [count,setCount]=useState(0);

  return (
    <>
       <h1>Zustand</h1>
       <Counter/>
       <Posts/>
    </>
  )
}

export default App
