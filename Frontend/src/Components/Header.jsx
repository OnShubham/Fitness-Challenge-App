import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../Store/AuthContext";

export const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Navbar expand="lg" className="navbar-custom  white">
      <Container>
        <Navbar.Brand>
          <img
            src="logo.png"
            alt="logo"
            style={{ width: "100px", height: "100px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/link">
                  Services
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </>
            ) : (
              <>
                {" "}
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/diet ">
                  Diet Food
                </Nav.Link>
                <Nav.Link as={Link} to="/link">
                  Workout Plans
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  Challenge
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            {!isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/link">
                  Suggestions
                </Nav.Link>

                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
