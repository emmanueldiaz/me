import { Routes, Route } from "react-router";
import { Home } from "./Home";
import { ProjectsPage } from "./projects/ProjectsPage";
import { ProjectPage } from "./projects/ProjectPage";
import "./styles.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
