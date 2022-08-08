import { formHelperTextClasses } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Auth from '../utils/auth';
import '../index.css'


function NavBar() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <div className="navbar">
            <Navbar>
                <Container>
                    <Navbar.Brand
                        style={{ color: 'white' }}
                        href="#home">Down WTF</Navbar.Brand>
                    <p>|</p>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown className="dropdown" title="☰" id="basic-nav-dropdown">
                                <NavDropdown.Item className="nav-item" style={{ color: 'black' }} href="/workouts">Standard Workouts</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" style={{ color: 'black' }} href="/customworkouts">My Custom Workouts</NavDropdown.Item>
                                <NavDropdown.Item className="nav-item" style={{ color: 'black' }} href="/exerciseguide">Exercise Guide</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="nav-item" style={{ color: 'black' }} href="#action/3.4">
                                    {Auth.loggedIn() ? (
                                        <>
                                            <Link className="btn btn-lg btn-info m-2" to="/me">
                                                {Auth.getProfile().data.username}'s profile
                                            </Link>
                                            <button className="btn btn-lg btn-light m-2" onClick={logout}>
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <Link className="btn btn-lg btn-info m-2" to="/login">
                                                Login
                                            </Link>
                                            <Link className="btn btn-lg btn-light m-2" to="/signup">
                                                Signup
                                            </Link>
                                        </>
                                    )}
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