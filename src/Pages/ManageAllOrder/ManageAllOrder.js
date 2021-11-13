import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageAllOrder = () => {



   const [alls,setAlls] =  useState([])

   useEffect(()=>{
       fetch('http://localhost:5000/orders')
       .then(res => res.json())
       .then(data=> setAlls(data))
   },[])

    return (
        <div>

               <h2> Total Order - {alls.length} </h2>

            <Row xs={1} md={4} className="g-4 m-4 ">
                          
               {
                   alls.map(all=> <ManageOrder all={all} ></ManageOrder> )
               }
                     
             </Row>
               
        </div>
    );
};

export default ManageAllOrder;