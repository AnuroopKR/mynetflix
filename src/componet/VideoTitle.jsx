import React from 'react'
import play_icon from '../assets/play_icon.png'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12 absolute text-white'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>
      <div className='flex'>
      <button className="bg-red-600 text-black text-lg w-28 h-11 flex items-center justify-center space-x-2 rounded-md">
  <img className="w-5" src={play_icon} alt="Play Icon" />
  <span>Play</span>
</button>
<button className='text-lg w-28 h-11 flex px-3 items-center bg-slate-600 rounded-md mx-2'>More Info</button>

      </div>
    </div>
  )
}

export default VideoTitle
