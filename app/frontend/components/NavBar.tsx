import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary ">
            <Container className="m-0">
                <Link to='/'>
                    <Navbar.Brand href="#home" >
                        <img
                            src="/images/logo.png"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Brand href="#account" >
                    <img
                        src="/images/placeholder.jpeg"
                        width="50"
                        height="50"
                        className="d-inline-block align-top rounded-circle"
                        alt="profile placeholder"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBar;