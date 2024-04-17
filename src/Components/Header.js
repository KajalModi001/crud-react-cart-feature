import React, { useState, useEffect } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
  

export default function Header() {


    const [firstname, setfirstname] = useState('');

  // Function to retrieve the username from local storage or state
  useEffect(() => {
    const storedUsername = localStorage.getItem('firstname');
    setfirstname(storedUsername);
  }, []);



  return (
    <>
    

    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
      
      {firstname && (
            <MDBNavbarItem className='username'>
              <span>Welcome, {firstname}</span>
            </MDBNavbarItem>
          )}
       
            <Link to='../cart' className='carticonheader'>
              <MDBIcon fas icon='shopping-cart' />
            </Link>

            <Link to='../index' className='carticonheader'>
              <MDBIcon fas icon='home' />
            </Link>
        
         

      </MDBContainer>
    </MDBNavbar>

    </>
  )
}
