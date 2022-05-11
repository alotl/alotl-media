import React from "react";

export default function(props) {

  function handleClick(e) {
    const user_id = 1;
    const type = document.querySelector('#chooseType').value;
    const title = document.querySelector('#newTitle').value;
    const review = document.querySelector('#newReview').value;
    const rating = document.querySelector('#rating-alotl').checked ? 1 : 0;
    console.log('fired')
    let newReview = {
      user_id,
      type,
      title,
      review,
      rating
    }
    // props.handleNewReview(newReview)


    // Post the Review
      // If it's Succesful. 
        // Add it to the reviewsState
        // Reset the From Values to there original Value. 
      // Else Log an Error

    fetch('media', {
      method: 'POST',
      body: JSON.stringify(newReview),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (true) {
        // if (res.status === 200) {
          // Add it to the reviewsState
          props.handleNewReview(newReview)
          
          // Reset the From Values to there original Value.
          document.querySelector('#chooseType').value = 'Choose a Media Type';
          document.querySelector('#newTitle').value = ''
          document.querySelector('#newReview').value = ''
          document.querySelector('#rating-alotl').checked = false;
          
        } else {
          throw new Error('Review not created Succesfuly');
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className='review-creator-container'>
      <div className="review-creator">

        <select id='chooseType' className="" aria-label="Choose a Media Type" required>
          <option selected>Choose a Media Type</option>
          <option value="movie">Movie</option>
          <option value="book">Book</option>
          <option value="music">Music</option>
        </select>

        <input id="newTitle" className="" type="text" placeholder="Title" aria-label="Title" required />
        <textarea className="" id="newReview" placeholder="Enter a short review" rows="3" required ></textarea>
        <p>I would reccomend this...</p>
        <div class=''>
          <input type="radio" className="" name="options" id="rating-alotl" autocomplete="off"/>
          <label className="" style={{width: '45%'}} for="rating-alotl">ALOTL</label>
          
          <input type="radio" className=""  name="options" id="rating-not-alotl" autocomplete="off" />
          <label className="" style={{width: '45%'}} for="rating-not-alotl">NOT ALOTL</label>
        </div>
        <div className=''>
          <a onClick={handleClick} className="" style={{width: '90%', height: '4em'}}>Submit</a>
        </div>
      </div>
    </div>
  )
}



