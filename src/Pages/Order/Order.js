import React, { useEffect, useState } from 'react';
import { Button, Form} from 'react-bootstrap';

import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';


const Order = () => {

    const {detailId}  =  useParams()
   
    const [ order,setOrder]  = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/drones/${detailId}`)
        .then(res => res.json())
        .then(data => setOrder(data))
        },[detailId])

 
        const { register, handleSubmit, reset, formState: { errors } } = useForm()
        const { user } =  useAuth()
        const onSubmit = data => {
            
            
            data.productName = order.name
            data.productPrice = order.price
            data.productImage = order.image
            data.productDescription = order.description
           

            fetch('http://localhost:5000/order',{
        
             method:"POST",
             headers: {
                "content-type" :'application/json'
             },
             body : JSON.stringify(data)
             })
            
             .then(res => res.json())
             .then(result => {
                 if(result.insertedId){
                     alert("Your Order is Done Successfully  ")
                     reset()
                 }
             })         
        };

    return (
        <div>

        <div className='p-5 ' >

        <h3 className="mb-3" > Order {order.name} Here </h3>
        <div className="card  bg-light " >
        <div className="row g-0">
            <div className="col-md-4">
            <img src={order.image} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8 mt-5 ">
            <div className="card-body mt-4 ">
                <h2 className="card-title mt-5 pt-2 ">{order.name}</h2>
                <p className="card-text">{order.description}</p>
                <h3 className="card-text"> Price - ${order.price}</h3>
            </div>
            </div>
        </div>
        </div>

        </div>
     
     <div>

     <div className='mx-auto w-75 '  >
                 
                 <h2> Place Your Order -   </h2>

            <form onSubmit={handleSubmit(onSubmit)}>

            <Form.Control defaultValue={user.displayName} {...register("name")} />  <br />
            <Form.Control defaultValue={user.email} {...register("email", { required: true })} /> <br />
            <Form.Control placeholder='Address' {...register("Address")}  /> <br />
            <Form.Control placeholder='City'    {...register("City")}/> <br />
            <Form.Control placeholder='Phone'  {...register("Phone")} /> <br />

            {errors.email && <span className='error'  >This field is required</span>}

            
            <Button type="submit" >  Order  </Button>

           </form>  


    
        </div>
     </div>

        </div>
    );
};

export default Order;

