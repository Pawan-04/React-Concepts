import React from 'react'

const Card = () => {
  return (
    <div className="flex space-x-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1773332585749-5146862ba746?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Sample Image" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Beautiful Landscape</div>
          <p className="text-gray-700 text-base">
            This is a stunning image of a natural landscape featuring mountains and a serene lake. Perfect for relaxation and inspiration.
          </p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fHww" alt="Mountain View" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Majestic Mountains</div>
          <p className="text-gray-700 text-base">
            Explore the breathtaking views of towering mountains covered in snow. A perfect destination for adventure seekers.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
