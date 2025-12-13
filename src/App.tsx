import { Routes, Route } from "react-router-dom";
import "./App.css";

// Importe as seções e páginas
import MainSection from "./sections/mainsection";
import AboutMe from "./pages/Aboutme";
import Moments from "./pages/Moments";
import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Routes>
        {/* Rota Principal (Home) */}
        <Route path="/" element={<MainSection />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/moments" element={<Moments />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </div>
  );
}

export default App;