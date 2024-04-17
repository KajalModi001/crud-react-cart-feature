import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBIcon} from 'mdb-react-ui-kit';

export default function Register() {
 
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
  	const [password, setPassword] = useState('');
 	const [confirmPassword, setConfirmPassword] = useState(''); 

  
  	const [error, setError] = useState('');
  	const navigate = useNavigate();

  	const handleRegister = (e) => {
		e.preventDefault();

  
		if (password !== confirmPassword) 
		{
      		setError('Passwords do not match');
    	} 
		else 
		{
      		localStorage.setItem('firstname', firstname);
      		localStorage.setItem('lastname', lastname);
	  		  localStorage.setItem('email', email);
      		localStorage.setItem('password', password);
      		localStorage.setItem('isAuthenticated', 'true');
      		navigate('/login');
    	}
  	};


  return (
    <>
    <br/>
    <h1 className='registerheading'>Sign up</h1><br/>
    <div className='registermaindiv'>
        
    <form className='registerform' onSubmit={handleRegister} id="register_form">
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='firstname' label='First name' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        </MDBCol>
        <MDBCol>
          <MDBInput id='lastname' label='Last name' value={lastname} onChange={(e) => setLastname(e.target.value)} />
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4' type='email' id='email' label='Email address' value={email} onChange={(e) => setEmail(e.target.value)}/>
      <MDBInput className='mb-4' type='password' id='password' label='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <MDBInput className='mb-4' type='password' id='confirmPassword' label='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />


      <MDBBtn type='submit' className='mb-4'>
        Sign up
      </MDBBtn>
      {error && <p>{error}</p>}

      <div className='text-center'>
        <p>
          Already registered? <Link to='../login'>Sign in</Link>
        </p>
        <p>or sign up with:</p>

        <MDBBtn className='mx-1'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn className='mx-1'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn className='mx-1'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn className='mx-1'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </div>
    </form>
    </div>
    
    
    </>
  )
}
