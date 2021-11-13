import React from 'react';
import { Container, Nav, Navbar, NavDropdown ,Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'

const Navigation = () => {

    const {user,logOut , admin } = useAuth() 


    return (
        <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Fly-Go</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link ></Nav.Link>
                    <Nav.Link ></Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link as={HashLink} to="/home"><i class="fas fa-home"></i> Home</Nav.Link>
                    <Nav.Link as={HashLink} to='/explore' >Explore</Nav.Link>


                    { 
                        user?.email ? 
                        <Button  variant="dark"><i class="fas fa-sign-out-alt"></i> <span>Signed in as -</span>  <span style={{ backgroundColor:'cadetblue',padding:"5px",borderRadius:"4px" }}  > {user.displayName}</span>  </Button>
                        :
                        <Nav.Link  className='text-white bg-dark' as={HashLink} to="/login"><i class="fas fa-sign-in-alt"></i>  Login</Nav.Link>
           
                     }
                    
                    
               { user?.email ? 
               
               
                 <NavDropdown  title="DashBoard" >
                <NavDropdown.Item as={HashLink}  to='/pay'><i class="fas fa-dollar-sign"></i> Pay</NavDropdown.Item>               
                <NavDropdown.Item as={HashLink} to="/myOrders"><i class="fas fa-shopping-cart"></i> My Orders</NavDropdown.Item>


                {
                 admin && 
                 <NavDropdown.Item as={HashLink} to="/manageAllOrder"><i class="fas fa-cart-arrow-down"></i> Manage All Orders</NavDropdown.Item>
                }
                {
                 admin &&
                <NavDropdown.Item as={HashLink} to="/addANewItem"><i class="fas fa-plus"></i> Add A New Item </NavDropdown.Item>
                }
                {

                admin &&
                 <NavDropdown.Item as={HashLink} to="/makeAdmin"><i class="fas fa-user-lock"></i> Make Admin </NavDropdown.Item>
                }
                <NavDropdown.Item  as={HashLink} to="/review"  ><i class="far fa-star"></i> Review</NavDropdown.Item>
                <NavDropdown.Item onClick={logOut} > <i class="fas fa-sign-in-alt"></i> LogOut</NavDropdown.Item>
               </NavDropdown> : <p></p> }

                </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar> 



        </div>
    );
};

export default Navigation;