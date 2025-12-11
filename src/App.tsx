import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Navbar from "./components/Navbar";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import AuthPage from "./pages/AuthPage";


function App() {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-400 via-indigo-500 to-cyan-500 min-h-screen w-full">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/projects" element={<ProjectsPage />}/>
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />}/>
          <Route path="/auth" element={<AuthPage />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
