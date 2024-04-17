import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';

export default function Login() {
    const [email, setEmail] = useState('');
  	const [password, setPassword] = useState('');
 	const [error, setError] = useState('');
  	const navigate = useNavigate();
	
	
	const handleLogin = (e) => {
		e.preventDefault();
    	const storedemail = localStorage.getItem('email');
    	const storedPassword = localStorage.getItem('password');
    
    	if (email === storedemail && password === storedPassword) 
		{
      		localStorage.setItem('isAuthenticated', 'true');
     		navigate('/index');
    	} 
		else 
		{
      		setError('Invalid email or password');
    	}
  	};

  return (
    <>
     <br/>
    <h1 className='loginheading'>Login</h1><br/>
    <div className='loginmaindiv'>
        
    <form className='loginform' onSubmit={handleLogin}>
      <MDBInput className='mb-4' type='email' id='email' label='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
      <MDBInput className='mb-4' type='password' id='password' label='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
        </MDBCol>
        <MDBCol>
          <a href='#!'  >Forgot password?</a>
        </MDBCol>
      </MDBRow>
      <div className='text-center'>
        <p>
          Not registered? <Link to='../'>Sign up</Link>
        </p>
        </div>

      <MDBBtn type='submit' >
        Sign in
      </MDBBtn>
      {error && <p>{error}</p>}
    </form>
    </div>
    
    </>
  )
}
