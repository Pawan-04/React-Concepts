import React, { useState } from 'react'
// import Card from './components/Card'
import Card2 from './components/Card2'
import './App.css'






function App() {
  // value yha define kro jo card me change krna hai
  const [data, setData] = useState([
  {img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    name: "Aman",
    profession: "Artist"
  },
  {img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    name: "John",
    profession: "Designer"
  },
  {img: "https://images.unsplash.com/photo-1776255076699-d2dc33434b16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    name: "Jane",
    profession: "Developer"
  }
])
  return (
    <div className="flex justify-center items-center min-h-screen">
      {data.map((item,index)=> (<Card2 key={index} props={item}/>))}
    </div>
  )
}

export default App
