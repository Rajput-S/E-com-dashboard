import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
<>
<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/add">Addproduct</Link>
          <Link to="/update">Update Product</Link>



           

        
          </Nav>
        </Container>      </Navbar>
</>
  )
}

export default Header