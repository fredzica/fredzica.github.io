import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="masthead mb-auto">
      <div className="inner">
        <nav className="nav nav-masthead justify-content-center">
          <Link className="nav-link active" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
