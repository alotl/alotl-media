import React from 'react'

export default function MediaCard(props) {
  let rating;
  if(props.review.rating === 1) {
    rating = <p className="btn card-rating btn-success fs-4" style={{width: '90%', height: '4em'}}>alotl</p>
  } else {
    rating = <p className="btn card-rating btn-danger fs-4" style={{width: '90%', height: '4em'}}>not alotl</p>
  }
  return (
    <div className='col-auto h-100 '>
      <div className="card" style={{width: '18rem', height: '28em'}}>
        {/* <img className="card-img-top" src="" alt="Card image cap"></img> */}
        <div className="card-body d-flex flex-column justify-content-start align-items-center">
          <h3 className="card-title">{props.review.title}</h3>
          <h6 className="card-type">type: {props.review.type}</h6>
          <p className="card-text">{props.review.review}</p>
          <p>I recommend this </p>
          {rating}
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  )
}