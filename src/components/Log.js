import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Log.css"
function Log() {
    const [formData, setFormData] = useState({
        email: '',
        emailConfirmation: '',
        password: '',
        title: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        subscribe: false,
        privacyPolicy: false
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
      return (
        
        <form onSubmit={handleSubmit} className="account-form">
          <div>
            
            <h2 >Welcome </h2>
            <p className='l2'>Login to your account to have access to a more personalized experience</p>
            </div>
           <div className='content'>
              <div className='l' id="left">
                <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder='Enter your email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                </div>
                
                <div>
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder='Enter the password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
               <a href='#'>Forgot password?</a>
              </div>
            </div>
          <div className='bu'> 
        
            <label>
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
              />
              <we className='bi'>Subscribe to receive emails.</we>
            </label>
         
        
            <label>
              <input
                type="checkbox"
                name="privacyPolicy"
                checked={formData.privacyPolicy}
                onChange={handleChange}
                required
              />
               <we className='bi'>I have read, understood and agree to the <a href='#' >Privacy Policy.</a> </we>
              
            </label>
          </div>
          <div className='lastbuttons'>
      <button id='google'>
        <img src="/google.png" alt="Google Icon"  className='logos'/>
        Continue with Google
      </button>
      <button id='apple'>
        <img src="/apple.png" alt="Apple Icon"  className='logos'/>
        Continue with Apple
      </button>
    </div>
    <Link to='/Homepagel'> 
    <button className='continue' type="submit">Continue</button>
    </Link>
        </form>
      );
}

export default Log;
