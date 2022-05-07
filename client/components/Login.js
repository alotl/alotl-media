import React, {useState, useEffect} from 'react'

export default function Login(props) {

const [user, userLogin] = useState({username: '', password: ''})

function handleChange(e) {
    const {user, value} = e.target;
    setItem((prevInput) => {
        return {
            ...prevInput,
            [user]: value,
        };
    });
    console.log('typing')
}

  return(
  <div className ='high'>
    <div 
    className ='login' 
    style={{
        textAlign: 'center',}}>

    <h1 className='loginText'>alotl</h1>
    <img style={{width:'50%', height:'50%'}} src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b24336a0-4b53-4098-8e93-876674bc23c2/depn9bu-dae92a33-b9b7-4bef-ac48-0ae2a397a285.png/v1/fill/w_724,h_500,q_80,strp/axolotl__simple_background__by_thefruitwitch_depn9bu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAwIiwicGF0aCI6IlwvZlwvYjI0MzM2YTAtNGI1My00MDk4LThlOTMtODc2Njc0YmMyM2MyXC9kZXBuOWJ1LWRhZTkyYTMzLWI5YjctNGJlZi1hYzQ4LTBhZTJhMzk3YTI4NS5wbmciLCJ3aWR0aCI6Ijw9NzI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.y5gkHTDkrgqJXejvocHn1DRGvLMg9uZ9TAlhqDFwU3s'}/>
    <h2 className='loginText'>Login</h2>

    <div id='login-container' class='container'>
      <div class='row justify-content-md-center'>
        <input 
        className='col-2 mb-3 '
        username='username'
        value={user.username}
        onChange={handleChange}
        placeholder='User Name'></input>
      </div>

      <div class='row justify-content-md-center'>
        <input 
        className='col-2 mb-3 '
        password="password"
        value={user.password}
        onChange={handleChange}
        placeholder='Password'></input>
      </div>

      <div class='row justify-content-md-center mb-3'>
        <div className='col-1'><button type="button" class="btn btn-danger">Login</button></div>
        <div className='col-1'><button type="button" class="btn btn-primary">Sign Up</button></div>
      </div>
    </div>
  </div>
 </div> )
}