import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import '../styles/navbar.css'


function NavBar() {
    return (
        <Navbar className="navbar">
            <Container>
                <Navbar.Brand style={{color: 'white', fontFamily: 'Overpass'}} href="#home">Down WTF</Navbar.Brand>
                <p>|</p>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Workouts" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/workouts">Standard Workouts</NavDropdown.Item>
                            <NavDropdown.Item href="/">
                                My Custom Workouts
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                Exercise Guide
                            </NavDropdown.Item>
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