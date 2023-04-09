import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { Link } from "react-router-dom";
// import Pro from "./component/profilepage/profile";
// import Logo1 from "../homepage/logo1.png";
import "./navs.css";

function navs() {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand id="brand" href="#home">
          {/* <img src={Logo1} alt="logo" id="logo"></img> */}
          COL_PRO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            {/* <Nav.Link href="#Online Banking">Online Banking</Nav.Link> */}

            {/* <Nav.Link href="/Pro">pro</Nav.Link> */}

            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Pro">Add_visa</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">
                pay with COL_PRO
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="Online Banking" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Trans">Transactions</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">
                pay with COL_PRO
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <Nav.Link href="#Sign up">Sign up</Nav.Link>
            <Nav.Link href="#Login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navs;
