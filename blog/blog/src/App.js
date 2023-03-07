import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import AddBlog from "./AddBlog";
import About from "./About";
import Contact from "./contact";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
