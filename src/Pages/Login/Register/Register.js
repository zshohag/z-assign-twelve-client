import React, { useState } from 'react';
import { NavLink , useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import {Button, Form, Spinner, Alert } from 'react-bootstrap';



const Register = () => {
    
    const [loginData,setLoginData]  = useState({})

    const { user, registerUser ,isLoading, authError  }  =  useAuth()
    
    
    const history =  useHistory()
    

    const handleOnBlur = e => {

       const field = e.target.name
       const value = e.target.value
       const newLoginData = {...loginData}

       newLoginData[field] = value

        setLoginData(newLoginData)

       
    }

    const handleLoginSubmit = e => {

        if(loginData.password !== loginData.password2){
            alert(' Password Did not match ')
            return;
        }

        
        registerUser(loginData.email, loginData.password , loginData.name, history )
        e.preventDefault()
    }

    return (


        <div className="m-5 mx-auto " style={{width:'50%'}} >


       <h1 variant="body1" gutterBottom>Register</h1>


            { !isLoading && <form  onSubmit={handleLoginSubmit} >

            <Form.Control 
            id="standard-basic" 
            placeholder="Your Name"
            name='name'
            type="text"
            onBlur={handleOnBlur}
            variant="standard" />  
            <br />

            <Form.Control 
            id="standard-basic" 
            placeholder="Your Email"
            name='email'
            type="email"
            onBlur={handleOnBlur}
            variant="standard" />
            <br />  

            <Form.Control  
            id="standard-basic" 
            placeholder="password"
            type="password"
            name="password"
            onBlur={handleOnBlur}
            variant="standard" /> 
             <br />
            
            <Form.Control  
            id="standard-basic"
            placeholder="Confirm password" 
            type="password"
            name="password2"
            onBlur={handleOnBlur}
            variant="standard" />
             <br /> 

            <Button type='submit' > Register Now </Button>      
            <NavLink
            style={{textDecoration:'none'}}
            to='/login' >
            <Button sx={{width:'75%',mt:4}} variant='text' type='submit' >Already Registered? Please Login  </Button>      
            </NavLink>
            </form>}

            { isLoading && <Spinner /> }
            { user?.email && <Alert severity="success">   User Create Successfully !</Alert> }

            {authError && <Alert severity="error">{authError}</Alert> }


        </div>
    );
};

export default Register;

