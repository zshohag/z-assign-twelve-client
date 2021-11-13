import React from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';
 
const AddANewItem = () => {

    const { register, handleSubmit , reset } = useForm();
    const onSubmit = data => {
        
        console.log(data)

        axios.post('https://infinite-cove-73906.herokuapp.com/drones' , data )
        .then(res => {
            if(res.data.insertedId){
                alert('Item added successfully')
                reset()
            }
            console.log(res)
        })
    };
    return ( 
        <div className="mt-5 w-75 mx-auto" >
            <h1>Add A New Item</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

               <Form.Control placeholder='Name'  {...register("name", { required: true, maxLength: 20 })}/> <br />
                <Form.Control  placeholder="Price" type="number" {...register("price")} /> <br />

                <Form.Control  as="textarea"
                placeholder="Description"
                 {...register("description")} 
                style={{ height: '150px' }}
                /> 
                <Form.Control placeholder="image" {...register("image")}/> <br />
                <Button type="submit" > Add  Item </Button>

                </form>  
        </div>
    );
};

export default AddANewItem;