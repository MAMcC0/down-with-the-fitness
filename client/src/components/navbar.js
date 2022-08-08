import { formHelperTextClasses } from '@mui/material';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../index.css'

function NavBar() {
    return (
        <div className="navbar">
        <Navbar>
            <Container>
                <Navbar.Brand
                style={{color: 'white', fontSize: '1.5rem'}} 
                 href="#home">Down WTF</Navbar.Brand>
                <p>|</p>
                <Navbar.Toggle className="nav-toggle" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown className="dropdown" title="☰" id="basic-nav-dropdown">
                            <NavDropdown.Item className="nav-item" style={{color: 'black'}} href="/workouts">Standard Workouts</NavDropdown.Item>
                            <NavDropdown.Item className="nav-item" style={{color: 'black'}} href="/customworkouts">My Custom Workouts</NavDropdown.Item>
                            <NavDropdown.Item className="nav-item" style={{color: 'black'}} href="/exerciseguide">Exercise Guide</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="nav-item" style={{color: 'black'}} href="#action/3.4">
                                Sign-out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}

export default NavBar;