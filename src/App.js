import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import TopNav from "./components/topnav/TopNav";
import Footer from "./components/footer/Footer";
import About from "./pages/aboutme/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
