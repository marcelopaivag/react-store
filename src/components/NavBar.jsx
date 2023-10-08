import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import jumbotronImg from '../assets/img/jumbotronImg';

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <img
          src={jumbotronImg.img4}
          height={80} />
        <Container>
          <Navbar.Brand as={Link} to='/react-store/'>OMT Store</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/react-store/'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/react-store/products'>Productos</Nav.Link>
            <Nav.Link as={Link} to='/react-store/shoppingcart'>Carro de compras</Nav.Link>
            <Nav.Link as={Link} to='/react-store/contact'>Contacto</Nav.Link>
            <Nav.Link as={Link} to='/react-store/blog'>Blog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}