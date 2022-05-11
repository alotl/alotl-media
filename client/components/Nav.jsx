const React = require('react');
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      loggedIn: this.props.loggedIn
    };

  }
  
  logout = (e) => {
    e.preventDefault();
    fetch('/api/user/logout')
    .then(response => response.json())
    .then(data => {
        console.log(data);
      }
    );
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <div className="nav-container">
          <Link to ="/movie">
            <div className="icon-container" key={0}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25px" style={{ fill: '#fb6376', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none' }}>
                <path d="M326.1 160l127.4-127.4C451.7 32.39 449.9 32 448 32h-86.06l-128 128H326.1zM166.1 160l128-128H201.9l-128 128H166.1zM497.7 56.19L393.9 160H512V96C512 80.87 506.5 67.15 497.7 56.19zM134.1 32H64C28.65 32 0 60.65 0 96v64h6.062L134.1 32zM0 416c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V192H0V416z"/>
              </svg>
              <div className="icon-description">
                MOVIE
              </div>
            </div>
          </Link>

          <Link to ="/book">
            <div className="icon-container ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25px" style={{ fill: '#fb6376', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none' }}>
                <path d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z"/>
              </svg>
              <div className="icon-description">
                BOOK
              </div>
            </div>
          </Link>

          <Link to ="/music">
            <div className="icon-container ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25px" style={{ fill: '#fb6376', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none' }}>
                <path d="M511.1 367.1c0 44.18-42.98 80-95.1 80s-95.1-35.82-95.1-79.1c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32.01 4.898V148.1L192 224l-.0023 208.1C191.1 476.2 149 512 95.1 512S0 476.2 0 432c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32 4.898V126.5c0-12.97 10.06-26.63 22.41-30.52l319.1-94.49C472.1 .6615 477.3 0 480 0c17.66 0 31.97 14.34 32 31.99L511.1 367.1z"/>
              </svg>
              <div className="icon-description">
                MUSIC
              </div>
            </div>
          </Link>

          <Link to ="/">
            <div className="title-container">
              <svg className='axolotl' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 462.25 267.27">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1" style={{ fill: '#fb6376', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none' }}>
                    <path className="cls-1" d="M95,8.27c3.32-.63,11.36-2.54,16-1v1h3l1,2,4,1,1,2h2v1h2v1h2v1h2v1l9,3v1h2v1l6,2v1h3v1h2v1l4,1v1h3v1h2v1h2v1h2v1h3v1h2v1h3v1c4.83,1.55,12.19-1.17,15-2h6v-1h7v-1h9v-1h21c19.17,0,36.46.57,51,5h5v1c2.61.57,15.67-4.86,18-6v-1h3v-1h2v-1l4-1v-1h3v-1h2v-1h2v-1h2v-1l9-3v-1h2v-1h2v-1h2v-1h2v-1h2v-1l4-1,1-2h2v-1l4-1v-1c4.54-1.64,12.75.44,16,1l1,3h1c1.73,4.78-2,12.68,1,16,2.47-2.74,6.45-3.26,10-5v-1h3v-1l4-1v-1h2v-1l4-1v-1l4-1v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2l1-2,4-1,1-2h3v-1h13l3,4h1v16h-1l-1,5h-1v2h-1v2h-1v2h-1v2l-2,1-2,6-2,1-1,4-2,1v2l-2,1v2l-2,1v2h-1l-1,3h1v1h6v-1h7c6.42-1.83,26.36-7.23,29,2,1.88,2,1.1,9.23,1,13-2.44,1.58-.65.82-2,3h-1v2l-3,2-6,7h-2l-5,6h-2l-3,4h-2l-2,3h-2l-2,3h-2l-1,2h-2l-2,3h-2l-1,2h-2l-2,3h-2l-2,3h-2l-2,3c-3.63,2.57-7.67,3-9,8-1.58,1.7-2.06,4.71-1,8h1v4h1v5h1l1,33h-1v7h-1v5h-1v4h-1v2h-1v3h-1l-1,4h-1v3l-2,1-1,4-2,1-1,4-2,1v2l-3,2v2l-9,8-4,5h-2l-2,3h-2l-1,2-4,1-1,2-4,1-1,2h-2v1h-2v1h-3v1h-2v1l-4,1v1h-3v1h-2v1h-3v1h-2v1l-35,7h-7v1h-8v1h-9v1H257v1H236v1H225v-1c-6-1.73-15.56.57-21-1H194l-21-2-38-7v-1h-3v-1h-3v-1h-3v-1h-2v-1h-3v-1l-6-2v-1h-2v-1h-3l-1-2-6-2-1-2-4-1-1-2H95l-17-16v-2l-3-2v-2l-2-1-1-4-2-1-1-4H68v-2H67l-2-6H64l-2-9H61l-1-13c-1-3.7-2.47-18.89-1-24h1l1-13c1.16-3.61,2.73-7.12,3-12-2.44-1.54-.62-1.21-2-3H61l-1-2H58l-2-3H54l-2-3H50l-2-3H46l-2-3H42l-2-3H38l-1-2H35l-2-3H31l-1-2H28l-2-3H24l-4-5H18l-5-6H11l-6-7-2-1-1-4-2-1v-13c1.14-1.14.4,0,1-2,14-6.47,27.32.71,43,1l1-2c-2.63-1.73-3.35-4.21-5-7H39v-2l-2-1-1-4-2-1-1-4-2-1-2-6H28v-2l-2-1v-3H25v-2H24v-3H23v-14c3-2,.94-2.82,5-4,3-2.74,14.76-.4,17,1l1,2,4,1,1,2,42,20v-16l2-1Z"/>
                  </g>
                </g>
              </svg>
              <h1 className='alotl'><a href="/">ALOTL</a></h1>
              <svg className='axolotl' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 462.25 267.27">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1" style={{ fill: '#fb6376', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none' }}>
                    <path className="cls-1" d="M95,8.27c3.32-.63,11.36-2.54,16-1v1h3l1,2,4,1,1,2h2v1h2v1h2v1h2v1l9,3v1h2v1l6,2v1h3v1h2v1l4,1v1h3v1h2v1h2v1h2v1h3v1h2v1h3v1c4.83,1.55,12.19-1.17,15-2h6v-1h7v-1h9v-1h21c19.17,0,36.46.57,51,5h5v1c2.61.57,15.67-4.86,18-6v-1h3v-1h2v-1l4-1v-1h3v-1h2v-1h2v-1h2v-1l9-3v-1h2v-1h2v-1h2v-1h2v-1h2v-1l4-1,1-2h2v-1l4-1v-1c4.54-1.64,12.75.44,16,1l1,3h1c1.73,4.78-2,12.68,1,16,2.47-2.74,6.45-3.26,10-5v-1h3v-1l4-1v-1h2v-1l4-1v-1l4-1v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2l1-2,4-1,1-2h3v-1h13l3,4h1v16h-1l-1,5h-1v2h-1v2h-1v2h-1v2l-2,1-2,6-2,1-1,4-2,1v2l-2,1v2l-2,1v2h-1l-1,3h1v1h6v-1h7c6.42-1.83,26.36-7.23,29,2,1.88,2,1.1,9.23,1,13-2.44,1.58-.65.82-2,3h-1v2l-3,2-6,7h-2l-5,6h-2l-3,4h-2l-2,3h-2l-2,3h-2l-1,2h-2l-2,3h-2l-1,2h-2l-2,3h-2l-2,3h-2l-2,3c-3.63,2.57-7.67,3-9,8-1.58,1.7-2.06,4.71-1,8h1v4h1v5h1l1,33h-1v7h-1v5h-1v4h-1v2h-1v3h-1l-1,4h-1v3l-2,1-1,4-2,1-1,4-2,1v2l-3,2v2l-9,8-4,5h-2l-2,3h-2l-1,2-4,1-1,2-4,1-1,2h-2v1h-2v1h-3v1h-2v1l-4,1v1h-3v1h-2v1h-3v1h-2v1l-35,7h-7v1h-8v1h-9v1H257v1H236v1H225v-1c-6-1.73-15.56.57-21-1H194l-21-2-38-7v-1h-3v-1h-3v-1h-3v-1h-2v-1h-3v-1l-6-2v-1h-2v-1h-3l-1-2-6-2-1-2-4-1-1-2H95l-17-16v-2l-3-2v-2l-2-1-1-4-2-1-1-4H68v-2H67l-2-6H64l-2-9H61l-1-13c-1-3.7-2.47-18.89-1-24h1l1-13c1.16-3.61,2.73-7.12,3-12-2.44-1.54-.62-1.21-2-3H61l-1-2H58l-2-3H54l-2-3H50l-2-3H46l-2-3H42l-2-3H38l-1-2H35l-2-3H31l-1-2H28l-2-3H24l-4-5H18l-5-6H11l-6-7-2-1-1-4-2-1v-13c1.14-1.14.4,0,1-2,14-6.47,27.32.71,43,1l1-2c-2.63-1.73-3.35-4.21-5-7H39v-2l-2-1-1-4-2-1-1-4-2-1-2-6H28v-2l-2-1v-3H25v-2H24v-3H23v-14c3-2,.94-2.82,5-4,3-2.74,14.76-.4,17,1l1,2,4,1,1,2,42,20v-16l2-1Z"/>
                  </g>
                </g>
              </svg>
            </div>
          </Link>

          <Link to ="/login">
          <div className="icon-container ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" style={{ fill: '#fb6376', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none' }}>
              <path d="M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z"/>
            </svg>
            <div className="icon-description">
              LOG IN
            </div>
          </div>
          </Link>

          <Link to ="/signup">
          <div className="icon-container ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 712 612" width="30px" style={{ fill: '#fb6376', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none' }}>
              <path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"/>
            </svg>
            <div className="icon-description">
              SIGN UP
            </div>
          </div>
          </Link>

          <Link to ="/about">
            <div className="icon-container ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 462.25 267.27" width="40px">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1" style={{ fill: '#fb6376', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none' }}>
                    <path className="cls-1" d="M95,8.27c3.32-.63,11.36-2.54,16-1v1h3l1,2,4,1,1,2h2v1h2v1h2v1h2v1l9,3v1h2v1l6,2v1h3v1h2v1l4,1v1h3v1h2v1h2v1h2v1h3v1h2v1h3v1c4.83,1.55,12.19-1.17,15-2h6v-1h7v-1h9v-1h21c19.17,0,36.46.57,51,5h5v1c2.61.57,15.67-4.86,18-6v-1h3v-1h2v-1l4-1v-1h3v-1h2v-1h2v-1h2v-1l9-3v-1h2v-1h2v-1h2v-1h2v-1h2v-1l4-1,1-2h2v-1l4-1v-1c4.54-1.64,12.75.44,16,1l1,3h1c1.73,4.78-2,12.68,1,16,2.47-2.74,6.45-3.26,10-5v-1h3v-1l4-1v-1h2v-1l4-1v-1l4-1v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2l1-2,4-1,1-2h3v-1h13l3,4h1v16h-1l-1,5h-1v2h-1v2h-1v2h-1v2l-2,1-2,6-2,1-1,4-2,1v2l-2,1v2l-2,1v2h-1l-1,3h1v1h6v-1h7c6.42-1.83,26.36-7.23,29,2,1.88,2,1.1,9.23,1,13-2.44,1.58-.65.82-2,3h-1v2l-3,2-6,7h-2l-5,6h-2l-3,4h-2l-2,3h-2l-2,3h-2l-1,2h-2l-2,3h-2l-1,2h-2l-2,3h-2l-2,3h-2l-2,3c-3.63,2.57-7.67,3-9,8-1.58,1.7-2.06,4.71-1,8h1v4h1v5h1l1,33h-1v7h-1v5h-1v4h-1v2h-1v3h-1l-1,4h-1v3l-2,1-1,4-2,1-1,4-2,1v2l-3,2v2l-9,8-4,5h-2l-2,3h-2l-1,2-4,1-1,2-4,1-1,2h-2v1h-2v1h-3v1h-2v1l-4,1v1h-3v1h-2v1h-3v1h-2v1l-35,7h-7v1h-8v1h-9v1H257v1H236v1H225v-1c-6-1.73-15.56.57-21-1H194l-21-2-38-7v-1h-3v-1h-3v-1h-3v-1h-2v-1h-3v-1l-6-2v-1h-2v-1h-3l-1-2-6-2-1-2-4-1-1-2H95l-17-16v-2l-3-2v-2l-2-1-1-4-2-1-1-4H68v-2H67l-2-6H64l-2-9H61l-1-13c-1-3.7-2.47-18.89-1-24h1l1-13c1.16-3.61,2.73-7.12,3-12-2.44-1.54-.62-1.21-2-3H61l-1-2H58l-2-3H54l-2-3H50l-2-3H46l-2-3H42l-2-3H38l-1-2H35l-2-3H31l-1-2H28l-2-3H24l-4-5H18l-5-6H11l-6-7-2-1-1-4-2-1v-13c1.14-1.14.4,0,1-2,14-6.47,27.32.71,43,1l1-2c-2.63-1.73-3.35-4.21-5-7H39v-2l-2-1-1-4-2-1-1-4-2-1-2-6H28v-2l-2-1v-3H25v-2H24v-3H23v-14c3-2,.94-2.82,5-4,3-2.74,14.76-.4,17,1l1,2,4,1,1,2,42,20v-16l2-1Z"/>
                  </g>
                </g>
              </svg>
              <div className="icon-description">
                ABOUT
              </div>
            </div>
          </Link>

        </div>
      )
    } else {
      return (
        <div className="nav-container">
          <Link to ="/movie">
            <div className="icon-container" key={0}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25px" style={{ fill: '#fb6376', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none' }}>
              <path d="M326.1 160l127.4-127.4C451.7 32.39 449.9 32 448 32h-86.06l-128 128H326.1zM166.1 160l128-128H201.9l-128 128H166.1zM497.7 56.19L393.9 160H512V96C512 80.87 506.5 67.15 497.7 56.19zM134.1 32H64C28.65 32 0 60.65 0 96v64h6.062L134.1 32zM0 416c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V192H0V416z"/>
              </svg>
              <div className="icon-description">
                MOVIE
              </div>
            </div>
          </Link>

          <Link to ="/book">
            <div className="icon-container ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25px" style={{ fill: '#fb6376', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none' }}>
              <path d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z"/>
              </svg>
              <div className="icon-description">
                BOOK
              </div>
            </div>
          </Link>

          <Link to ="/music">
            <div className="icon-container ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25px" style={{ fill: '#fb6376', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none' }}>
                <path d="M511.1 367.1c0 44.18-42.98 80-95.1 80s-95.1-35.82-95.1-79.1c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32.01 4.898V148.1L192 224l-.0023 208.1C191.1 476.2 149 512 95.1 512S0 476.2 0 432c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32 4.898V126.5c0-12.97 10.06-26.63 22.41-30.52l319.1-94.49C472.1 .6615 477.3 0 480 0c17.66 0 31.97 14.34 32 31.99L511.1 367.1z"/>
              </svg>
              <div className="icon-description">
                MUSIC
              </div>
            </div>
          </Link>

          <Link to ="/">
            <div className="title-container">
              <svg className='axolotl' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 462.25 267.27">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1" style={{ fill: '#fb6376', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none' }}>
                    <path className="cls-1" d="M95,8.27c3.32-.63,11.36-2.54,16-1v1h3l1,2,4,1,1,2h2v1h2v1h2v1h2v1l9,3v1h2v1l6,2v1h3v1h2v1l4,1v1h3v1h2v1h2v1h2v1h3v1h2v1h3v1c4.83,1.55,12.19-1.17,15-2h6v-1h7v-1h9v-1h21c19.17,0,36.46.57,51,5h5v1c2.61.57,15.67-4.86,18-6v-1h3v-1h2v-1l4-1v-1h3v-1h2v-1h2v-1h2v-1l9-3v-1h2v-1h2v-1h2v-1h2v-1h2v-1l4-1,1-2h2v-1l4-1v-1c4.54-1.64,12.75.44,16,1l1,3h1c1.73,4.78-2,12.68,1,16,2.47-2.74,6.45-3.26,10-5v-1h3v-1l4-1v-1h2v-1l4-1v-1l4-1v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2l1-2,4-1,1-2h3v-1h13l3,4h1v16h-1l-1,5h-1v2h-1v2h-1v2h-1v2l-2,1-2,6-2,1-1,4-2,1v2l-2,1v2l-2,1v2h-1l-1,3h1v1h6v-1h7c6.42-1.83,26.36-7.23,29,2,1.88,2,1.1,9.23,1,13-2.44,1.58-.65.82-2,3h-1v2l-3,2-6,7h-2l-5,6h-2l-3,4h-2l-2,3h-2l-2,3h-2l-1,2h-2l-2,3h-2l-1,2h-2l-2,3h-2l-2,3h-2l-2,3c-3.63,2.57-7.67,3-9,8-1.58,1.7-2.06,4.71-1,8h1v4h1v5h1l1,33h-1v7h-1v5h-1v4h-1v2h-1v3h-1l-1,4h-1v3l-2,1-1,4-2,1-1,4-2,1v2l-3,2v2l-9,8-4,5h-2l-2,3h-2l-1,2-4,1-1,2-4,1-1,2h-2v1h-2v1h-3v1h-2v1l-4,1v1h-3v1h-2v1h-3v1h-2v1l-35,7h-7v1h-8v1h-9v1H257v1H236v1H225v-1c-6-1.73-15.56.57-21-1H194l-21-2-38-7v-1h-3v-1h-3v-1h-3v-1h-2v-1h-3v-1l-6-2v-1h-2v-1h-3l-1-2-6-2-1-2-4-1-1-2H95l-17-16v-2l-3-2v-2l-2-1-1-4-2-1-1-4H68v-2H67l-2-6H64l-2-9H61l-1-13c-1-3.7-2.47-18.89-1-24h1l1-13c1.16-3.61,2.73-7.12,3-12-2.44-1.54-.62-1.21-2-3H61l-1-2H58l-2-3H54l-2-3H50l-2-3H46l-2-3H42l-2-3H38l-1-2H35l-2-3H31l-1-2H28l-2-3H24l-4-5H18l-5-6H11l-6-7-2-1-1-4-2-1v-13c1.14-1.14.4,0,1-2,14-6.47,27.32.71,43,1l1-2c-2.63-1.73-3.35-4.21-5-7H39v-2l-2-1-1-4-2-1-1-4-2-1-2-6H28v-2l-2-1v-3H25v-2H24v-3H23v-14c3-2,.94-2.82,5-4,3-2.74,14.76-.4,17,1l1,2,4,1,1,2,42,20v-16l2-1Z"/>
                  </g>
                </g>
              </svg>
              <h1 className='alotl'><a href="/">ALOTL</a></h1>
              <svg className='axolotl' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 462.25 267.27">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1" style={{ fill: '#fb6376', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none' }}>
                    <path className="cls-1" d="M95,8.27c3.32-.63,11.36-2.54,16-1v1h3l1,2,4,1,1,2h2v1h2v1h2v1h2v1l9,3v1h2v1l6,2v1h3v1h2v1l4,1v1h3v1h2v1h2v1h2v1h3v1h2v1h3v1c4.83,1.55,12.19-1.17,15-2h6v-1h7v-1h9v-1h21c19.17,0,36.46.57,51,5h5v1c2.61.57,15.67-4.86,18-6v-1h3v-1h2v-1l4-1v-1h3v-1h2v-1h2v-1h2v-1l9-3v-1h2v-1h2v-1h2v-1h2v-1h2v-1l4-1,1-2h2v-1l4-1v-1c4.54-1.64,12.75.44,16,1l1,3h1c1.73,4.78-2,12.68,1,16,2.47-2.74,6.45-3.26,10-5v-1h3v-1l4-1v-1h2v-1l4-1v-1l4-1v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2l1-2,4-1,1-2h3v-1h13l3,4h1v16h-1l-1,5h-1v2h-1v2h-1v2h-1v2l-2,1-2,6-2,1-1,4-2,1v2l-2,1v2l-2,1v2h-1l-1,3h1v1h6v-1h7c6.42-1.83,26.36-7.23,29,2,1.88,2,1.1,9.23,1,13-2.44,1.58-.65.82-2,3h-1v2l-3,2-6,7h-2l-5,6h-2l-3,4h-2l-2,3h-2l-2,3h-2l-1,2h-2l-2,3h-2l-1,2h-2l-2,3h-2l-2,3h-2l-2,3c-3.63,2.57-7.67,3-9,8-1.58,1.7-2.06,4.71-1,8h1v4h1v5h1l1,33h-1v7h-1v5h-1v4h-1v2h-1v3h-1l-1,4h-1v3l-2,1-1,4-2,1-1,4-2,1v2l-3,2v2l-9,8-4,5h-2l-2,3h-2l-1,2-4,1-1,2-4,1-1,2h-2v1h-2v1h-3v1h-2v1l-4,1v1h-3v1h-2v1h-3v1h-2v1l-35,7h-7v1h-8v1h-9v1H257v1H236v1H225v-1c-6-1.73-15.56.57-21-1H194l-21-2-38-7v-1h-3v-1h-3v-1h-3v-1h-2v-1h-3v-1l-6-2v-1h-2v-1h-3l-1-2-6-2-1-2-4-1-1-2H95l-17-16v-2l-3-2v-2l-2-1-1-4-2-1-1-4H68v-2H67l-2-6H64l-2-9H61l-1-13c-1-3.7-2.47-18.89-1-24h1l1-13c1.16-3.61,2.73-7.12,3-12-2.44-1.54-.62-1.21-2-3H61l-1-2H58l-2-3H54l-2-3H50l-2-3H46l-2-3H42l-2-3H38l-1-2H35l-2-3H31l-1-2H28l-2-3H24l-4-5H18l-5-6H11l-6-7-2-1-1-4-2-1v-13c1.14-1.14.4,0,1-2,14-6.47,27.32.71,43,1l1-2c-2.63-1.73-3.35-4.21-5-7H39v-2l-2-1-1-4-2-1-1-4-2-1-2-6H28v-2l-2-1v-3H25v-2H24v-3H23v-14c3-2,.94-2.82,5-4,3-2.74,14.76-.4,17,1l1,2,4,1,1,2,42,20v-16l2-1Z"/>
                  </g>
                </g>
              </svg>
            </div>
          </Link>

          <Link to ="/mypage">
          <div className="icon-container ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 -100 652 612" width="30px" style={{ fill: '#fb6376', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none' }}>
              <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/>
            </svg>
            <div className="icon-description">
              MY PAGE
            </div>
          </div>
          </Link>

          <div className="icon-container" onClick={(e) => {this.logout(e)}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" style={{ fill: '#fb6376', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none' }}>
            <path d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z"/>
            </svg>
            <div className="icon-description">
              LOG OUT
            </div>
          </div>

          <Link to ="/about">
            <div className="icon-container ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 462.25 267.27" width="40px">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1" style={{ fill: '#fb6376', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none' }}>
                    <path className="cls-1" d="M95,8.27c3.32-.63,11.36-2.54,16-1v1h3l1,2,4,1,1,2h2v1h2v1h2v1h2v1l9,3v1h2v1l6,2v1h3v1h2v1l4,1v1h3v1h2v1h2v1h2v1h3v1h2v1h3v1c4.83,1.55,12.19-1.17,15-2h6v-1h7v-1h9v-1h21c19.17,0,36.46.57,51,5h5v1c2.61.57,15.67-4.86,18-6v-1h3v-1h2v-1l4-1v-1h3v-1h2v-1h2v-1h2v-1l9-3v-1h2v-1h2v-1h2v-1h2v-1h2v-1l4-1,1-2h2v-1l4-1v-1c4.54-1.64,12.75.44,16,1l1,3h1c1.73,4.78-2,12.68,1,16,2.47-2.74,6.45-3.26,10-5v-1h3v-1l4-1v-1h2v-1l4-1v-1l4-1v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2l1-2,4-1,1-2h3v-1h13l3,4h1v16h-1l-1,5h-1v2h-1v2h-1v2h-1v2l-2,1-2,6-2,1-1,4-2,1v2l-2,1v2l-2,1v2h-1l-1,3h1v1h6v-1h7c6.42-1.83,26.36-7.23,29,2,1.88,2,1.1,9.23,1,13-2.44,1.58-.65.82-2,3h-1v2l-3,2-6,7h-2l-5,6h-2l-3,4h-2l-2,3h-2l-2,3h-2l-1,2h-2l-2,3h-2l-1,2h-2l-2,3h-2l-2,3h-2l-2,3c-3.63,2.57-7.67,3-9,8-1.58,1.7-2.06,4.71-1,8h1v4h1v5h1l1,33h-1v7h-1v5h-1v4h-1v2h-1v3h-1l-1,4h-1v3l-2,1-1,4-2,1-1,4-2,1v2l-3,2v2l-9,8-4,5h-2l-2,3h-2l-1,2-4,1-1,2-4,1-1,2h-2v1h-2v1h-3v1h-2v1l-4,1v1h-3v1h-2v1h-3v1h-2v1l-35,7h-7v1h-8v1h-9v1H257v1H236v1H225v-1c-6-1.73-15.56.57-21-1H194l-21-2-38-7v-1h-3v-1h-3v-1h-3v-1h-2v-1h-3v-1l-6-2v-1h-2v-1h-3l-1-2-6-2-1-2-4-1-1-2H95l-17-16v-2l-3-2v-2l-2-1-1-4-2-1-1-4H68v-2H67l-2-6H64l-2-9H61l-1-13c-1-3.7-2.47-18.89-1-24h1l1-13c1.16-3.61,2.73-7.12,3-12-2.44-1.54-.62-1.21-2-3H61l-1-2H58l-2-3H54l-2-3H50l-2-3H46l-2-3H42l-2-3H38l-1-2H35l-2-3H31l-1-2H28l-2-3H24l-4-5H18l-5-6H11l-6-7-2-1-1-4-2-1v-13c1.14-1.14.4,0,1-2,14-6.47,27.32.71,43,1l1-2c-2.63-1.73-3.35-4.21-5-7H39v-2l-2-1-1-4-2-1-1-4-2-1-2-6H28v-2l-2-1v-3H25v-2H24v-3H23v-14c3-2,.94-2.82,5-4,3-2.74,14.76-.4,17,1l1,2,4,1,1,2,42,20v-16l2-1Z"/>
                  </g>
                </g>
              </svg>
              <div className="icon-description">
                ABOUT
              </div>
            </div>
          </Link>

        </div>
      )
    }
  }
}

//movie
//book
//music
//about
//sign up 
//login

//movie
//book
//music
//friends
//my page
//logout

export default Nav;