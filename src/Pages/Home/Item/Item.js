import React from 'react';
import { Button, Card, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({item}) => {

    const {name, image ,_id , description ,price } = item

    return (
        <div>

   <Col>
             
             <Card className="bg-light" >
               <Card.Img variant="top"  src={image} />
               <Card.Body>
                 <Card.Title>{name}</Card.Title>
                 <Card.Text >
                  {description}
                 </Card.Text>

                 <Card.Title> Price : ${price}</Card.Title>
               </Card.Body>
               <div className="mb-2">
                      <Link to={`/order/${_id}`} >
  
                      <Button style={{backgroundColor:'cadetblue',border:'none' }} > Order  {name.toLowerCase()}  </Button>
                    
                      </Link> 
                    </div>
             </Card>

       </Col>           

        </div>
    );
};

export default Item;