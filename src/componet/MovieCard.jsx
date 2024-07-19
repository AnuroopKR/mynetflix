import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  console.log('img',IMG_CDN+posterPath);
  console.log("posterpath",posterPath);
  return (
    <div className='w-48 pr-4'>
      <img src={IMG_CDN+posterPath} alt="" />
    </div>
  )
  
}

export default MovieCard


