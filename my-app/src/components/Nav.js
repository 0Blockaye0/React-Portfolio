import { NavLink } from "react-router-dom";


function Nav(props) {
  return (
    <aside className="sidebar">
      <nav className="nav">
        <ul>
          <li className="active">
            <NavLink activateClassName="is-active" id="navLink" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink activateClassName="is-active" id="navLink" to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink activateClassName="is-active" id="navLink" to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink activateClassName="is-active" id="navLink" to="/resume">Resume</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Nav;
