import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'; 
import './header.css';



const Header = () => {
    return (

    <Navbar className='navbar' expand="lg">
     <Container>
       <Navbar.Brand href="/" >Construction Company Landing</Navbar.Brand>
       <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
       <Navbar.Collapse  id="responsive-navbar-nav" className="justify-content-end">
             <Nav  >
                <Nav.Link href="/project">Project</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/service">Service</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link >Icon</Nav.Link>
              </Nav>
        </Navbar.Collapse>
     </Container>
    </Navbar>

    );
};
export default Header;