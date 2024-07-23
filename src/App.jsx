import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

import { about, timeline, projects, skills } from "../constents/constents.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home timelines={timeline} skills={skills} projects={projects} />
          }
        />
        <Route path="/about" element={<About about={about} />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
