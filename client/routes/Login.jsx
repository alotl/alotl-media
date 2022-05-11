const React = require('react');

class SignUp extends React.Component {

  render() {
    return (
      <div className="usercred-box">
        <div className="usercred-title">ALOTL</div>
        <form className="usercred-form" method="POST" action='/loginUser'>
          <input type="text" placeholder="username" name="username" id="username" required />
          <input type="password" placeholder="password" name="password" id="password" required />
          <input type="submit" value="Log in" />
        </form>
      </div>
    )
  }
}

export default SignUp;