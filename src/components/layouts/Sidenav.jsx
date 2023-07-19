import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="justify-content-center">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/about">Quienes Somos</Nav.Link>
            <Nav.Link href="/contact">Contactanos</Nav.Link>
            <Nav.Link href="/register">Registarse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
