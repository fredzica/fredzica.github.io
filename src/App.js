function App() {
  return (
    <div className="Cover-container text-center d-flex h-100 p-3 mx-auto flex-column">
      <header className="masthead mb-auto">
        <div className="inner">
          <nav className="nav justify-content-center">
            <a className="nav-link" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              About
            </a>
          </nav>
        </div>
      </header>
      <main role="main" className="inner cover">
        <h1>Frederico Zica</h1>
        <p>Software engineer</p>
        <a href="https://github.com/fredzica" class="fa fa-github"></a>
        <a
          href="https://www.linkedin.com/in/fredericozica/"
          class="fa fa-linkedin"
        ></a>
      </main>
      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p>Thanks for visiting. Have a great day!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
