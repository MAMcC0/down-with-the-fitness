import { formHelperTextClasses } from '@mui/material';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../index.css'

function NavBar() {
    return (
        <Navbar className="navbar">
            <Container>
                <Navbar.Brand
                style={{color: 'white'}} 
                href="#home">Down WTF</Navbar.Brand>
                <p>|</p>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown className="dropdown" title="☰" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/workouts">Standard Workouts</NavDropdown.Item>
                            <NavDropdown.Item href="/customworkouts">My Custom Workouts</NavDropdown.Item>
                            <NavDropdown.Item href="/exerciseguide">Exercise Guide</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Sign-out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;