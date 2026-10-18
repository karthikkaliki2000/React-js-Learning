import React from 'react'

const Card = ({id,title,url,thumbnailUrl}) => {
  return (
    <div className='card'>
       <h5>{id}</h5>
      <img className='image' src={thumbnailUrl} alt={title}/>
      <a href={url} className='btn'>View Details</a>
    </div>
  )
}

export default Card