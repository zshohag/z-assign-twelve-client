import React, { useState } from 'react';
import { Container ,Button, Form, Spinner, Alert } from 'react-bootstrap';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
     

    const [loginData,setLoginData]  = useState({})

    const {user,isLoading,authError,loginUser,signInWithGoogle} = useAuth()

    const location =  useLocation()

    const history = useHistory()


     
    const handleOnChange = e => {

       const field = e.target.name
       const value = e.target.value
       const newLoginData = {...loginData}

       newLoginData[field] = value

     
        setLoginData(newLoginData)

        
    }

    const handleLoginSubmit = e => {
         loginUser( loginData.email , loginData.password ,location ,history)
        e.preventDefault()
    }

    const handleGoogleSignIn = () => {
            
      signInWithGoogle(location,history)

    }

    
    return (

      <div  className="m-5 mx-auto " style={{width:'50%',  }} >
     

        <Container>
         
            <h1 variant="body1" gutterBottom>Login</h1>

                <form  onSubmit={handleLoginSubmit} >

                <Form.Control 
                id="standard-basic" 
                placeholder="Your Email"
                name='email'
                onBlur={handleOnChange}
                variant="standard" />
                <br />  

                <Form.Control 
                label="Your Password" 
                id="standard-basic" 
                placeholder="password"
                type="password"
                name="password"
                onBlur={handleOnChange}
                variant="standard" />
                 <br />   

                <Button  type='submit' > Login </Button>     

                <NavLink
                style={{textDecoration:'none'}}
                 to='/register' >
                <Button  variant='text' type='submit' > New User? Please Register  </Button>      
                </NavLink>

                 <br/>
                { isLoading && <Spinner  style={{marginTop:'30px'}}  /> }
                { user?.email && <Alert variant="success"> User Create Successfully !</Alert> }

                {authError && <Alert variant="success">{authError}</Alert>}

              </form>
               <hr/>


               <Button onClick={handleGoogleSignIn}   type='submit' > Google Sign In </Button>      

            
        </Container>

        </div>
    );
};

export default Login;