import React from 'react'

const Card = () => {

  var arr = [{ img:"https://images.unsplash.com/photo-1773332585749-5146862ba746?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",title: "Beautiful Landscape", description: "This is a stunning image of a natural landscape featuring mountains and a serene lake. Perfect for relaxation and inspiration." },

    { img:"https://images.unsplash.com/photo-1769788873128-442998aed3da?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",title: "Drive Towards Mountains ", description: "This is a stunning image of a natural landscape featuring mountains and a serene lake. Perfect for relaxation and inspiration." },

    { img:"https://images.unsplash.com/photo-1772311283542-1c537cff0887?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",title: "Lights in the City", description: "This is a stunning image of a natural landscape featuring mountains and a serene lake. Perfect for relaxation and inspiration." }
  ]
  return (
    <div className="flex space-x-4">

      {arr.map((elem,index)=>( <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src={elem.img} alt="Sample Image" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{elem.title}</div>
          <p className="text-gray-700 text-base">
           {elem.description}
          </p>
        </div>
      </div>))}
     
      
    </div>
  )
}

export default Card
