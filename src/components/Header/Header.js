import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

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
                        <Nav>
                            <Link to="/home" >Home</Link>
                            <Link to="/order">Order</Link>
                            <Link to="/admin">Admin</Link>
                            <Link to="/deals">Deals</Link>
                            <Link onClick={() => setLoggedInUser({})} to="/login">LogIn</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;