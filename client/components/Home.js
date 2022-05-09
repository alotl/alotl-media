import React from 'react'
import CreateMediaCard from './CreateMediaCard'
import MediaCard from './MediaCard'

export default function Home(props) {
  return(
    <div id='reviews-container' className='container'>
      <div className='row pt-5'>
        <CreateMediaCard />
        <MediaCard />
      </div>
    </div>
  )
}