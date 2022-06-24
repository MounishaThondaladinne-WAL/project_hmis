import Header from "./header/header";
import Sampleroute from "./sampleroute";
import Sampleroutesss from "./sampleroute2";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <h1>West Agile</h1>
        <Link to="/sample">Sample</Link>
        <br />
        <Link to="/sampleone">Sample2</Link>
        <br />
        <Link to="/routes">Route</Link>
        <Routes>
          <Route path="/sample" element={<Sampleroutesss />} />
          <Route path="/sampleone" element={<Sampleroute />} />
          <Route path="/routes" element={<Sampleroute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
