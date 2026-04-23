import React from 'react'

function Card2(props) {
    const {img,name,profession} = props.props
  return (
    <div className="w-60 rounded-md border border-gray-400 shadow-lg">
        <img src={img} className="w-full h-40 rounded-t-md" />
      <div className=' flex flex-col gap-1 p-1 '>
        <h1 className='font-bold text-lg'>{name}</h1>
      <h3 className='text-gray-500 font-semibold'>{profession}</h3>

      <button className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600"
      onClick={()=>alert("Added")}>Add Friend</button></div>
    </div>
  )
}

export default Card2
