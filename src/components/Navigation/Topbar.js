import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from "react-bootstrap";

export default class Topbar extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" collapseOnSelect>
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=''
                width="50"
                height="50"
                src={window.location.origin + "/logo.png"}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/About">About</Nav.Link>
                <NavDropdown title="Register">
                  <NavDropdown.Item href="/signin/resident">
                    Sign-In as Resident 
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/signin/complex-manager">
                    Register new Complex
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
