import React from "react";
import './MainNavbar.css';
import{ Nav,Navbar,Container} from "react-bootstrap"
class MainNavbar extends React.Component {
    render() {
      return (
          <div className="Navbar">
<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Account</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

          </div>
      );
    }
  }
  export default MainNavbar