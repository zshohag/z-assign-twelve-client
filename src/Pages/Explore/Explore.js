import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Item from '../Home/Item/Item';

const Explore = () => {



    const [items,setItems]  =  useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/drones')
        .then(res=> res.json())
        .then(data=>setItems(data))
    },[])



    return (
        <div>
            <h2 className='mt-4' >   Explore Now </h2>

            <Row xs={1} md={4}  className="g-4 m-4 p-4 h-100 ">
                    
                    {
                        items.map(item => <Item key={item.id} item={item} ></Item> )
                    } 
    
                </Row>  
        </div>
    );
};

export default Explore;