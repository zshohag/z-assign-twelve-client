import React, { useEffect, useState } from 'react';
import { Card, Col ,Button } from 'react-bootstrap';

const OrderArea = ({order}) => {

    const {productName,productImage,productPrice,productDescription,_id} = order


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


        <div >
    

     
                <Col>
                <Card className="bg-light" >
                <Card.Img variant="top" className='img-thumbnail' src={productImage} />
                <Card.Body className=' bg-light' >
                    <Card.Title> Order Item: {productName}</Card.Title>
                    <Card.Title>Item Price : {productPrice}</Card.Title>
                    <Card.Text>
                      {productDescription}
                    </Card.Text>
                </Card.Body>
                <div className='mb-2'  >

                <Button onClick={ ()=> handleDeleteUser(_id) } > Cancel Order </Button> 
                </div>
                </Card>
                </Col>
                            
               
        </div>
    );
};

export default OrderArea;