import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="cover-container text-center d-flex h-100 p-3 mx-auto flex-column">
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
      <main role="main" className="cover">
        <h1>Frederico Zica</h1>
        <p>Software Engineer</p>
        <a href="https://github.com/fredzica" className="fa fa-github"></a>
        <a
          href="https://www.linkedin.com/in/fredericozica/"
          className="fa fa-linkedin"
        ></a>
      </main>
      <footer className="mastfoot mt-auto">
        <div>
          <p>Thanks for visiting. Have a great day!</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
