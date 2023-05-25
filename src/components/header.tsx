import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { IoReorderFourSharp } from "react-icons/io5";
import './header.css';

type HeaderProps = {
    handleShow: () => void
}

function Header({handleShow}:HeaderProps){
    return ( 
    <Navbar bg="primary" variant="dark">
        <Container fluid>
            <div className='iconbox d-block d-xl-none' onClick={handleShow}>
                <IoReorderFourSharp/>
            </div>
        
            <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
            <Nav className="ms-auto right-header">
                <NavDropdown title="Tarun Kumar" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Change Password
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Container>
    </Navbar>)
}

export default Header;