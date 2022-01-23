import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container";
import './Header.css';

function Header() {
  return (
    // <div className="header">
    //   <nav>
    //     <ul>
    //       <span className="title">
    //         <Link className="title" to="/home">
    //           Cocktail App
    //         </Link>
    //       </span>

    //       <li className="nav-links">
    //         <Link to="/my-cocktails" className="link">
    //           My Cocktails
    //         </Link>
    //       </li>

    //       <li className="nav-links">
    //         <Link to="/cocktail-list" className="link">
    //           Cocktails
    //         </Link>
    //       </li>

    //       <li className="nav-links">
    //         <Link to="/my-liquor-cabinet" className="link">
    //           My Liquor Cabinet
    //         </Link>
    //       </li>

    //       <li className="nav-links">
    //         <Link to="/new-cocktail" className="link">
    //           New Cocktail
    //         </Link>
    //       </li>

    //       <li className="nav-links">
    //         <Link to="/login" className="link">
    //           Login
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
<>
<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
<Container>
<Navbar.Brand href="#home">Cocktail App</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">
    <Nav.Link href="/my-cocktails"> My Cocktails</Nav.Link>
    <Nav.Link href="/cocktail-list">Cocktails</Nav.Link>
    <Nav.Link href="/my-liquor-cabinet">My Liquor Cabinet</Nav.Link>
    <Nav.Link href="/new-cocktail">New Cocktail</Nav.Link>
    <Nav.Link href="/login">Login</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Container>
</Navbar>
</>
  );
}

export default Header;
