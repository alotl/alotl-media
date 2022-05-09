import React, { useState, useEffect } from 'react'
import CreateMediaCard from './CreateMediaCard'
import MediaCard from './MediaCard'

export default function Home(props) {
  const[reviews, setReviews] = useState([]);
  function handleNewReview(review) {
    setReviews([...reviews, review]);
  }
  const mediaCards = reviews.map(el => {
    return <MediaCard review={el} />
  })

  useEffect(() => {
    fetch('profile')
      .then(res => res.json())
      .then(body => setReviews(body))
  })

  return(
    <div id='reviews-container' className='container'>
      <div className='row pt-5'>
        <CreateMediaCard handleNewReview={handleNewReview} />
        {mediaCards}
      </div>
    </div>
  )
}