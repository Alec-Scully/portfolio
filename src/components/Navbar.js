import React from 'react'
import { NavLink } from 'react-router-dom';
import '../index.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="sticky-nav">
        <nav >
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                exact
                className="nav-links-a"
                activeClassName="active"
              >Home</NavLink>
            </li>

            <div className="split" />

            <li>
              <NavLink
                to="/about"
                exact
                className="nav-links-a"
                activeClassName="active"
              >About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar;
