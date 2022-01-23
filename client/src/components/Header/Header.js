import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header({currentUser}) {


  return (
    <div className="header">
      <nav>
        <ul>
          <span className="title">
            <Link className="title" to="/home">
              Cocktail App
            </Link>
          </span>

          <li className="nav-links">
            <Link to="/my-cocktails" className="link">
              My Cocktails
            </Link>
          </li>

          <li className="nav-links">
            <Link to="/cocktail-list" className="link">
              Cocktails
            </Link>
          </li>

          <li className="nav-links">
            <Link to="/my-liquor-cabinet" className="link">
              My Liquor Cabinet
            </Link>
          </li>

          <li className="nav-links">
            <Link to="/new-cocktail" className="link">
              New Cocktail
            </Link>
          </li>

          <li className="nav-links">
            <Link to="/login" className="link">
              Login/Signup
            </Link>
          </li>

          {/* <li className="nav-links">
            <Link to="/signup" className="link">
              Sign Up
            </Link>
          </li> */}
          
        </ul>
      </nav>
    </div>
  );
}

export default Header;
