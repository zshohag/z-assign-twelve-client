import React from 'react';
import { Carousel } from 'react-bootstrap';



const Slider = () => {
    return (
        <div>

    <Carousel>

        <Carousel.Item >
        <img
            className="d-block w-100"
            src="https://i.ibb.co/ctGKq2z/pexels-karl-gerber-4058940.jpg" 
            alt="First slide"
        />
        <Carousel.Caption>
            <h3> Order your favorite food from Hungry Takeout</h3>
            <p></p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://i.ibb.co/fSsy85n/pexels-pok-rie-529598.jpg"
            alt="Second slide"
        />
        <Carousel.Caption>
            <h3 >Never compromise with the quality of food  </h3>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://i.ibb.co/WvsGxCX/pexels-suliman-sallehi-1852984.jpg"
            alt="Third slide"
        />
        <Carousel.Caption>
            <h3>Fastest Delivery Service </h3>
        </Carousel.Caption>
        </Carousel.Item>

    </Carousel>

        </div>
    );
};

export default Slider;