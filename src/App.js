function App() {
  return (
    <div className="cover-container text-center d-flex h-100 p-3 mx-auto flex-column">
      <header className="masthead mb-auto">
        <div className="inner">
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="/">
              Home
            </a>
            <a className="nav-link" href="/about">
              About
            </a>
          </nav>
        </div>
      </header>
      <main role="main" className="cover">
        <h1>Frederico Zica</h1>
        <p>Software Engineer</p>
        <a href="https://github.com/fredzica" class="fa fa-github"></a>
        <a
          href="https://www.linkedin.com/in/fredericozica/"
          class="fa fa-linkedin"
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

export default App;
