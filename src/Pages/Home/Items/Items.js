import React, { useEffect, useState } from 'react';
import { Row ,Button } from 'react-bootstrap';
import Item from '../Item/Item';

const Items = () => {
     
    const [items,setItems]  =  useState([])

    useEffect(()=> {
        fetch('https://infinite-cove-73906.herokuapp.com/drones')
        .then(res=> res.json())
        .then(data=>setItems(data))
    },[])


    return (
        <div>

            

            <h2 style={{marginTop:'25px'}} > OUR  PRODUCTS    </h2>
              
            <Row xs={1} md={4}  className="g-4 m-4 p-4 h-100 ">
                    
                {
                    items.slice(0,6).map(item => <Item item={item} ></Item> )
                } 

            </Row>    
            
        </div>
    );
};

export default Items;