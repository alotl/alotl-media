import React from "react";

export default function(props) {

  function handleClick(e) {
    const user_id = 1;
    const type = document.querySelector('#chooseType').value;
    const title = document.querySelector('#newTitle').value;
    const review = document.querySelector('#newReview').value;
    const rating = document.querySelector('#rating-alotl').checked ? 1 : 0;

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
    <div className='col-auto'>
      <div className="card" style={{width: '18rem', height: '28em'}}>
        {/* <img className="card-img-top" src="" alt="Card image cap"></img> */}
        <div className="card-body">

          <select id='chooseType' class="form-select mb-2" aria-label="Choose a Media Type" required>
            <option selected>Choose a Media Type</option>
            <option value="movie">Movie</option>
            <option value="book">Book</option>
            <option value="music">Music</option>
          </select>

          <input id="newTitle" class="form-control mb-2" type="text" placeholder="Title" aria-label="Title" required />
          <textarea class="form-control mb-2" id="newReview" placeholder="Enter a short review" rows="3" required ></textarea>
          <p>I would reccomend this...</p>
          <div class='mb-2 d-flex justify-content-between'>
            <input type="radio" class="btn-check" name="options" id="rating-alotl" autocomplete="off"/>
            <label class="btn btn-success" style={{width: '45%'}} for="rating-alotl">alotl</label>
            
            <input type="radio" class="btn-check"  name="options" id="rating-not-alotl" autocomplete="off" />
            <label class="btn btn-danger" style={{width: '45%'}} for="rating-not-alotl">not alotl</label>
          </div>
          <div className='d-flex justify-content-center'>
          <a
            onClick={handleClick}
            className="btn btn-primary mt-4 .container-fluid fs-4" style={{width: '90%', height: '4em'}}>Submit</a>
          </div>
        </div>
      </div>
    </div>
  )
}



