import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const ManageOrder = ({all}) => {

   
    const {productName,productImage,productPrice,productDescription,_id} = all

    const {user} =  useAuth()

    const [users,setUsers]  = useState([])


    //  DELETE ITEM

  const handleDeleteUser = id => {
    console.log(id)
        const proceed = window.confirm("Are u sure,you want to  delete? ")
        if(proceed){
            const url = `https://infinite-cove-73906.herokuapp.com/orders/${id}`
            fetch(url , {
                method: 'DELETE'
                
            })
            .then(res => res.json())
            .then(data => {
                 
                setUsers(data)

             if (data.deletedCount === 1) {
                 alert("Successfully deleted ");
                 window.location.reload()
                 const remaingingUsers = users.filter( user => user._id !== id)
                 setUsers(remaingingUsers)
               } else {
                 alert("No documents matched the query. Deleted 0 documents.");
               }


            })
        }
  }

    return (
        <div>

            
            <Col>
             
             <Card className="bg-light" >
               <Card.Img variant="top"  src={productImage} />
               <Card.Body>
                 <Card.Title>{productName}</Card.Title>
                 <Card.Text >
                  {productDescription}
                 </Card.Text>

                 <Card.Title> Price : ${productPrice}</Card.Title>
               </Card.Body>
               <div  className="mb-2" >
  

               <Button onClick={ ()=> handleDeleteUser(_id) } > Delete  Order </Button> 

               </div>
             </Card>

       </Col>   
        </div>
    );
};

export default ManageOrder;