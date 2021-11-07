import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useHistory } from 'react-router';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    const linkStyle = {
        fontWeight: "bold",
        color: "white",
        borderBottom: "3px solid"
    }
    const history = useHistory()
    const handleClick = path => {
        history.push(path);
    }
    return (
        <Navbar className="header-container" collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="https://i.ibb.co/xLJ84Kx/249171771-312921683601873-5477875164565582481-n.png"
                        width="40"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />{' '}
                    Travel With HRD
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/home" activeStyle={linkStyle} className="header-link">Home</Nav.Link>
                        <Nav.Link as={NavLink} to={"/allPackage"} activeStyle={linkStyle} className="header-link">Packages</Nav.Link>

                        {
                            user?.email ? <>
                                <Nav.Link as={NavLink} to={"/bookings"} activeStyle={linkStyle} className="header-link">My Bookings</Nav.Link>
                                <Nav.Link as={NavLink} to="/addPackage" activeStyle={linkStyle} className="header-link">Add New Package</Nav.Link>
                                <Nav.Link as={NavLink} to="/manageBookings" activeStyle={linkStyle} className="header-link">Manage Bookings</Nav.Link>
                                <Nav.Link className="ms-3">{user.displayName}</Nav.Link>
                                <button onClick={logOut} className="btn btn-danger rounded-pill mx-2">Log out</button>
                            </>
                                :
                                <>
                                    <button onClick={() => { handleClick("login") }} className="btn btn-success rounded-pill mx-2">Log in</button>
                                    <button onClick={() => { handleClick("register") }} className="btn btn-primary rounded-pill mx-2">Sign up</button>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;