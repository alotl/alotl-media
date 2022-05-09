import React from "react";

export default function(props) {
  return (
    <div className='col-auto'>
      <div className="card" style={{width: '18rem', height: '28em'}}>
        <img className="card-img-top" src="" alt="Card image cap"></img>
        <div className="card-body">

          <select class="form-select mb-2" aria-label="Choose a Media Type" required>
            <option selected>Choose a Media Type</option>
            <option value="movie">Movie</option>
            <option value="book">Book</option>
            <option value="music">Music</option>
          </select>

          <input id="newTitle" class="form-control mb-2" type="text" placeholder="Title" aria-label="Title" required />
          <textarea class="form-control mb-2" id="newReviewText" placeholder="Enter a short review" rows="3" required ></textarea>
          <p>I would reccomend this...</p>
          <div class='mb-2 d-flex justify-content-between'>
            <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked />
            <label class="btn btn-success" style={{width: '45%'}} for="option1">alotl</label>
            
            <input type="radio" class="btn-check"  name="options" id="option4" autocomplete="off" />
            <label class="btn btn-danger" style={{width: '45%'}} for="option4">not alotl</label>
          </div>
          <div className='d-flex justify-content-center'>
          <a href="#" className="btn btn-primary mt-4 .container-fluid fs-4" style={{width: '90%', height: '4em'}}>Submit</a>
          </div>
        </div>
      </div>
    </div>
  )
}