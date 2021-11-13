import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import OrderArea from '../../Pages/OrderArea/OrderArea';

const MyOrder = () => {

        const { user } = useAuth();

        const [orders, setOrders] = useState([]);
        useEffect( () => {
          fetch(`http://localhost:5000/orders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
        }, [user.email]);

      
    return (
        <div>
              <h2 className="mt-3" > {user?.displayName} , Your total order is - {orders.length} items </h2>

              
        <Row xs={1} md={4} className="g-4 m-4 ">
                          
            {
              orders.map(order=> <OrderArea order={order}  > </OrderArea> )
              
            }
       
        </Row>
            
  
    
        </div>
    );
};

export default MyOrder;