import Home from "./Home";
import About from "./About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="cover-container text-center d-flex h-100 p-3 mx-auto flex-column">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*<Route component={Error} />*/}
      </Routes>
    </div>
  );
}

export default App;
