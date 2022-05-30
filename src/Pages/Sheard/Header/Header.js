import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { Link,    } from "react-router-dom";
const Header = () => {
  
    
 
 
    return (
        <>
       <Navbar collapseOnSelect expand="lg" bg="info"  variant="light">
  <Container>
  <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
      
      
    </Nav>
    <Nav>
   
       <Nav.Link className='btn btn-outline-dark text-success fa fa-sign-in me-1' as={Link} to="/login">Login</Nav.Link>
       <Nav.Link className='btn btn-outline-dark text-primary fa fa-user-plus me-1 ms-2' as={Link} to="/signUp">Sigb Up</Nav.Link>
       <Nav.Link className='btn btn-outline-dark text-white fa thin fa-cart-arrow-down me-1 ms-2' as={Link} to="/login">Cart(0)</Nav.Link>
      
     
      <Nav.Link eventKey={2} href="/conatact">
        Contact Us
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </>
    );
};

export default Header;