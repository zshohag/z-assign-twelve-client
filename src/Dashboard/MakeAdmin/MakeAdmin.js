import React ,{ useState } from 'react';
import { Alert, Form ,Button } from 'react-bootstrap';


const MakeAdmin = () => {


    const [email,setEmail] =  useState('')
      
    const [success,setSuccess] =  useState(false)

   

    const handleOnBlur =  e => {
         
        setEmail(e.target.value)
        e.preventDefault()
    }


    const handleAdminSubmit =  e => {
       
        const  user =  { email}
        fetch('https://infinite-cove-73906.herokuapp.com/users/admin' , {
            method:"PUT",
            headers: {             
                'content-type':"application/json"
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>  {

            if(data.modifiedCount){

                setEmail('')
                setSuccess(true)

            }
        })
        e.preventDefault()
    }
    return (
        <div className='m-5 mx-auto ' style={{width:'50%'}}  >
            <h2> Make An admin  </h2>
            <form  onSubmit={handleAdminSubmit} >
               
               
                <Form.Control 
                label="Email" 
                type="email"
                name='email'
                onBlur={handleOnBlur}
                variant="standard"
                 />
                <Button type="submit" >Make Admin </Button>

            </form>

            { success && <Alert severity="success"> Made Admin Successfully !</Alert> }
        </div>
    );
};

export default MakeAdmin;


