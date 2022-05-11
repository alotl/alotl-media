const React = require('react');
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';
import SignUp from './routes/SignUp.jsx';
import NotFound from './routes/NotFound.jsx';
import User from './routes/User.jsx';
// import User from './routes/User.jsx';
// import Search from './routes/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      loggedIn: false
    };

  }

  render() {
    return (
      <div>
        <Router>
          <Nav loggedIn = {this.state.loggedIn} username = {this.state.username}/>
          <Routes>
            <Route path="/mypage" element={<User />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/:id" element={<NotFound />}></Route>
          </Routes>
        </Router>
      </div>
    )
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

export default App;