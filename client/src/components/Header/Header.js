import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import './Header.css';

function Header({ currentUser }) {
  const loggedin = `Logged in as ${currentUser.username}`;

  console.log(currentUser)
  return (
    <Navbar
      className="sticky-top nav-bar"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="title">Cocktailor</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div>
            <Nav className="nav-container">

              { currentUser ? <LinkContainer to="/my-cocktail-list">
                <Nav.Link className="nav-links"> My Cocktails</Nav.Link>
              </LinkContainer> : null }

              


              { currentUser ? 
              <LinkContainer className="nav-links" to="/cocktail-list">
                <Nav.Link>Cocktails</Nav.Link>
              </LinkContainer>
              : null }

              {currentUser ? <LinkContainer to="/my-liquor-cabinet">
                <Nav.Link className="nav-links">My Liquor Cabinet</Nav.Link>
              </LinkContainer> : null}

              {currentUser ? <LinkContainer to="/new-cocktail">
                <Nav.Link className="nav-links">New Cocktail</Nav.Link>
              </LinkContainer> : null }

              {/* <LinkContainer to="/popular-cocktails">
                <Nav.Link className="nav-links">Popular Cocktails</Nav.Link>
              </LinkContainer> */}


              {/* if the current user is not log in display the log in button otherwise display the logout */}
              {!currentUser.username ? (
                <LinkContainer to="/login">
                  <Nav.Link className="nav-links">Login</Nav.Link>
                </LinkContainer>
              ) : (
                <NavDropdown title={loggedin} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
                </NavDropdown>
              )}

            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
