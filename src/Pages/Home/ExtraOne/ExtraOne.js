import React from 'react';
import { Button, Card,  Col, Row } from 'react-bootstrap';




const ExtraOne = () => {
    return (
        <div  className='m-5 p-4 ' >
              <h2  className='text-dark m-5 '  >Drone Accessories</h2>

              <p>Drone flying is a deep-rooted desire of every millennial nowadays. Be it for professional calling or hobby satisfaction; drones use is rapidly finding many more applications including aerial photography, product deliveries, agriculture, policing and surveillance, infrastructure inspections, science and drone racing. A drone or unmanned aerial vehicle (UAV/un-crewed aerial vehicle) is an aircraft without a human pilot on board. Drone Accessories are also becoming of real importance as the drone market breaks the ceiling for goods. Drone accessories are the accessories which accelerate the performances of your drone and helps you increase your aircraft’s longevity while also giving the much needed protection to your drone if you’re a beginner level drone flyer or drone operator.  </p>

<Row xs={1} md={3} className=" g-4 m-2 " >
        
      <Col>
      <Card>
        <div>
        <Card.Img variant="top" src="https://i.ibb.co/rMvrf78/1481037307-IMG-719319.jpg" />
        </div>
        <Card.Body className='bg-light' >
          <Card.Title  >ZENMUSE Z30 </Card.Title>
          <Card.Text  >
            For DJI Matrice Drones
            30x Optical Zoom
            6x Digital Zoom
            f/1.6 Wide to f/4.7 Tele
            1/2.8″ CMOS Sensor with 2.13MP
            63.7° to 2.3° FOV
            TapZoom Support
            Gimbal Stabilization to 0.01°
            Burst and Interval Photo Modes
          </Card.Text>
           <h4> Price - $750</h4>
          <div>
           <Button> Order Now </Button>
         </div>
        </Card.Body>
      </Card>
        </Col>
        
      <Col  >
      <Card>
   <Card.Img variant="top"  src="https://i.ibb.co/G2Zzfcn/1535017949-1430450.jpg" />
   <Card.Body className='bg-light' >
     <Card.Title>Mavic 2 Fly More Kit</Card.Title>
     <Card.Text>
        For Mavic 2 Pro & Mavic 2 Zoom
        Turn Batteries into 2 x USB Type-A Banks
        Charge Batteries While Driving
        Charge Multiple Batteries in Sequence
        Low-Noise Design Propellers
        Travel Bag for the Mavic 2 & Accessories
     </Card.Text>
     <h4> Price - $950</h4>
     <div>
         <Button> Order Now </Button>
     </div>
   </Card.Body>

 </Card>
        </Col>
        
      <Col >
      <Card>
   <Card.Img variant="top" src="https://i.ibb.co/8gWDfDq/1546959031-1452609.jpg" />
   <Card.Body className='bg-light' >
     <Card.Title>DJI Smart controller </Card.Title>
     <Card.Text>
     For OcuSync 2.0-Compatible Drones
    Works with Mavic 2 Pro/Zoom and More
    Built-In 5.5″ Full HD Screen
    Ultra-Bright 1000 cd/m²
    DJI Go Share for Easy Mobile Transfers
    Livestream on Social Media with SkyTalk
    Built-In Microphone and Speaker
     </Card.Text>
     <h4> Price - $650</h4>
     <div>
         <Button> Order Now </Button>
     </div>
   </Card.Body>

 </Card>
        </Col>
      </Row>


        </div>
    );
};

export default ExtraOne;

