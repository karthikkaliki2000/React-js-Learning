import React from 'react'
import Card from './Card'
import { albumData } from './AlbumData';
let data=albumData;
const CardContainer = () => {
  return (

    <div className='card-container'>
    
    {
        data.map(({ id, title, url, thumbnailUrl })=>{
            return <Card key={id} id={id} title={title} url={url} thumbnailUrl={thumbnailUrl}/>
        })
    }
    </div>
  )
}

export default CardContainer