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
                to="/about"
                exact
                className="nav-links-a"
                activeClassName="active"
              >About</NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                exact
                className="nav-links-a"
                activeClassName="active"
              >Projects</NavLink>
            </li>


            <li>
              <NavLink
                to="/blog"
                exact
                className="nav-links-a"
                activeClassName="active"
              >Blog</NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                exact
                className="nav-links-a"
                activeClassName="active"
              >Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar;
