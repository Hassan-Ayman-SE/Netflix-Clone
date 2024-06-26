import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Movie List</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favlist">Favorite Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
