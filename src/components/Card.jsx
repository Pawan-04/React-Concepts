import React, { useState } from 'react'

const Card = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6])

  return (
    <div className="flex flex-col gap-6 items-center justify-center max-w-md mx-auto">
      {numbers.map((number, index) => (
        <div className="p-6 bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 w-full" key={index}>
          <h3 className="text-xl font-bold text-slate-800 mb-2">{number}</h3>
          
        </div>
      ))}
      <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
      
      onClick={()=>setNumbers(()=>  numbers.filter((elem,index)=> index!=numbers.length-1))}>      Delete
          </button>
    </div>
  )
}

export default Card
