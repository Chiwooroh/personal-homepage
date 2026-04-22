import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PublicationsPage from './pages/PublicationsPage'
import ProjectsPage from './pages/ProjectsPage'
import ResearchPage from './pages/ResearchPage'

export default function App() {
  return (
    <HashRouter>
      {/* Global texture overlay */}
      <div
        className="fixed inset-0 z-50 pointer-events-none"
        style={{
          backgroundImage: 'url(/texture.png)',
          backgroundSize: 'cover',
          mixBlendMode: 'lighten',
          opacity: 0.6,
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/research" element={<ResearchPage />} />
      </Routes>
    </HashRouter>
  )
}
