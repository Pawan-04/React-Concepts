import React from 'react'

const Card = () => {

  const song = [
    {name:"Brwon Tang",
      description:"This is the description for song 1. Enjoy the melody and rhythm.",
    },
    {name:"Mahi ve",
      description:"This is the description for song 2. Feel the beat and vibe.",
    }
  ]

  const handleDownload = ()=>{
    alert("Hello")
  }
  return (
    <div className="flex flex-col gap-6 items-center justify-center max-w-md mx-auto">
      {song.map((item,index) =>( 
        <div className="p-6 bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 w-full" key={index}>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{item.name}</h3>
        <p className="text-slate-600 mb-4 leading-relaxed">{item.description}</p>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
        onClick={handleDownload}>Download</button>
      </div>

      ) )}
      
    </div>
  )
}

export default Card
