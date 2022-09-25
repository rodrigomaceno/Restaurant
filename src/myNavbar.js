import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'; // I added this
import CardButton from './components/cartButton';

function MyNavbar() {
  return (
    <Navbar bg="light"  expand="lg">
      <Container>
        <Navbar.Brand  href="/">Mac's Bistro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/about"> Pasta</Nav.Link>
            <Nav.Link href="/contact"> Burgers</Nav.Link>
            <NavDropdown title="Full Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/info">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/another"}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            {/* <Nav.Link href="/cart"> Cart</Nav.Link> */}
            

          </Nav>
        </Navbar.Collapse>
        <CardButton/>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;