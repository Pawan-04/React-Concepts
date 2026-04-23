import React, { useState } from 'react'

const Card = () => {

  const [val,setVal] = useState(false)

  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">

      
      <div className="w-72 bg-white rounded-xl shadow-lg p-4">

       
        <div className={`w-full h-40  overflow-hidden rounded-lg`}>

          {/* Images wrapper (side by side) */}
          <div className={`flex transition-transform duration-500 ${val? '-translate-x-full' : 'translate-x-0'}`}>

            <img
              className={`w-full h-40 object-cover flex-shrink-0 `}
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="img1"
            />

            {/* <img
              className="w-full h-40 object-cover flex-shrink-0"
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt="img2"
            /> */}

            <img
              className="w-full h-40 object-cover flex-shrink-0"
              src="https://images.unsplash.com/photo-1776255076699-d2dc33434b16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
              alt="img3"
            />

          </div>
        </div>

       
        <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"        onClick={()=>setVal(()=>!val)}>
          Change Image
        </button>

      </div>

    </div>
  )
}

export default Card