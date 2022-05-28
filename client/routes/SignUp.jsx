const React = require('react');

class SignUp extends React.Component {

  render() {
    return (
      <div className="usercred-box">
        <div className="usercred-title">ALOTL</div>
        <form className="usercred-form" method="POST" action='/api/signup'>
          <input type="text" placeholder="username" name="username" required />
          <input type="password" placeholder="password" name="password" required />
          <input type="password" placeholder="comfirm password" name="password2" required />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
}

export default SignUp;