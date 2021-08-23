import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='p-2 text-white text-decoration-none'>
                            <Link className='p-2 text-white text-decoration-none' to="/home" >Home</Link>
                            <Link className='p-2 text-white text-decoration-none' to="/order">Order</Link>
                            <Link className='p-2 text-white text-decoration-none' to="/admin">Admin</Link>
                            <Link className='p-2 text-white text-decoration-none' to="/deals">Deals</Link>
                            <Link className='p-2 text-white text-decoration-none' onClick={() => setLoggedInUser({})} to="/login">LogIn</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;