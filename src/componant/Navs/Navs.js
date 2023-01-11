import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navs.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../assets/logo.png';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Navs= ()=>{
    return(
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} title="logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">about us</Nav.Link>
                <Nav.Link href="#home">explor food</Nav.Link>
                <Nav.Link href="#home">Review</Nav.Link>
                <Nav.Link href="#link">fag</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link id="lastnav">235648210</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Navs;