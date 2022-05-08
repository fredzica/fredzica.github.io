import Home from "./Home";
import About from "./About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/*<Route component={Error} />*/}
    </Routes>
  );
}

export default App;
