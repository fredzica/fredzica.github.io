import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="masthead mb-auto">
      <div className="inner">
        <nav className="nav nav-masthead justify-content-center">
          <NavLink activeClassName="active" className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" className="nav-link" to="/about">
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
