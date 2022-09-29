import { formHelperTextClasses } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Auth from '../utils/auth';
import '../index.css'

// Creates a persistent navbar that handles the functions of returning home, login/logout route, standard workouts all inclusive list, custom workouts all inclusive list.
function NavBar() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
            <Navbar className="navbar">
                <Container className="all-nav-items">
                    <div className="nav-style">
                    <Navbar.Brand className="nav-header"
                        style={{ color: 'white' }}
                        href="/">Down With The Fitness |</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <NavDropdown className="dropdown" title="☰" id="basic-nav-dropdown" align="end">
                                    <NavDropdown.Item className="nav-item" style={{ color: 'black' }} href="/">Home</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-item" style={{ color: 'black' }} href="/workouts">Standard Workouts</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-item" style={{ color: 'black' }} href="/customworkouts">My Custom Workouts</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-item" style={{ color: 'black' }} href="/exerciseguide">Exercise Guide</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="nav-item" style={{ color: 'black' }} href="#action/3.4">
                                        {Auth.loggedIn() ? (
                                            <div className="nav-auth-buttons">
                                                <Link className="profile-button" to="/me">
                                                    {Auth.getProfile().data.username}'s profile
                                                </Link>
                                                <button className="logout-button" onClick={logout}>
                                                    Logout
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="nav-auth-buttons">
                                                <Link className="login-button" to="/login">
                                                    Login
                                                </Link>
                                                <Link className="signup-button" to="/signup">
                                                    Signup
                                                </Link>
                                        </div>
                                    )}
                                </NavDropdown.Item>
                            </NavDropdown>                            
                        </Nav>
                    </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
    );
}

export default NavBar;