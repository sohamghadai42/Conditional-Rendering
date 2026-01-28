import { useState } from 'react'
import Men from './components/Men.jsx'
import Women from './components/Women.jsx'
import './index.css'

function App() {
  const user1 ={
    name: "Soham",
    age: 19,
    gender: "male"
  }
  const user2 ={
    name: "Kulwant",
    age: 20,
    gender: "female"
  }

  return (
    <div className="parent h-screen w-screen overflow-hidden p-5">
      {user1.gender === "male" ? <Men/>:<Women/>}
    </div>
  )
}

export default App;
