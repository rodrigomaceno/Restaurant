import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'; // I added this
import CartButton from './components/cartButton';

function MyNavbar() {
  return (
    <Navbar bg="light"  expand="lg">
      <Container>
        <Navbar.Brand  href="/">Mac's Diner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/pasta"> Pasta</Nav.Link>
            <Nav.Link href="/burger"> Burgers</Nav.Link>
            <Nav.Link href="/info"> Pizzas</Nav.Link>
            <Nav.Link href="/another"> Dessert</Nav.Link>
            <Nav.Link href="#"> Drinks</Nav.Link>
            <NavDropdown title="Our Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/info">Pizzas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/another"}>
                Dessert
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Beverages</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            {/* <Nav.Link href="/cart"> Cart</Nav.Link> */}
            

          </Nav>
        </Navbar.Collapse>
        <CartButton/>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;