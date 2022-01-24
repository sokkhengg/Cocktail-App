import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container";
import './Header.css';

function Header({currentUser}) {


  //console.log(currentUser)
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
<Navbar className='sticky-top' collapseOnSelect expand="md" bg="dark" variant="dark">
<Container>
<Navbar.Brand path="/home">Cocktail App</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="nav-container">
  <Link className="nav-links" to="/my-cocktails"> My Cocktails</Link>
    <Link className="nav-links" to="/cocktail-list">Cocktails</Link>
    <Link className="nav-links" to="/my-liquor-cabinet">My Liquor Cabinet</Link>
    <Link className="nav-links" to="/new-cocktail">New Cocktail</Link>
    <Link className="nav-links" to="/login">Login</Link>



    {/* testing tabs from react bootstrap    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3"    {/* <Nav.Link className="nav-links" href="/new-cocktail">New Cocktail</Nav.Link>> */}

{/* </Tabs */}
{/* need to figure out a ternary to decide what login links to display */}
    {/* {currentUser ? <p>logged in as {currentUser}</p> : <Nav.Link href="/login">Login</Nav.Link>}
    {currentUser ? null : <Nav.Link href="/signup">Sign Up</Nav.Link>} */}
    {/* <p>logged in as {currentUser}</p> */}
  </Nav>
</Navbar.Collapse>
</Container>
</Navbar>
</>

  );
}

export default Header;