import Footer from "./Footer";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <main role="main" className="cover">
        <h1>Frederico Zica</h1>
        <p>Software Engineer</p>
        <a href="https://github.com/fredzica" className="fa fa-github"></a>
        <a
          href="https://www.linkedin.com/in/fredericozica/"
          className="fa fa-linkedin"
        ></a>
      </main>
      <Footer />
    </>
  );
}

export default Home;
