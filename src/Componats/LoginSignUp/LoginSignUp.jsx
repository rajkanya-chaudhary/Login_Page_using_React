import React from 'react'
import './LoginSignUp.css'
import user_icon from '../Assest/person.png'
import email_icon from '../Assest/email.png'
import password_icon from '../Assest/password.png'
const LoginSignUp = () => {

 // const [action,setAction] = useState("Sign Up");
  return (
    <div className='conainer'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type ="text" placeholder='Name'/>
          </div>
          
        <div className="input">
          <img src={email_icon} alt="" />
          <input type ="email" placeholder='Email Id'/>   
          </div>
          
        <div className="input">
          <img src={password_icon} alt="" />
          <input type ="password" placeholder='Password'/>  
          </div>
        </div>
        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
        <div className="Submit-container">
          <div className="Submit">Sign Up</div>
          <div className="Submit">Login </div>

        </div>
      </div>
      
    
  )
}

export default LoginSignUp
