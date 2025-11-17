import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import DailyLifePage from './pages/DailyLifePage';
import EndangeredCraftsPage from './pages/EndangeredCraftsPage';
import DesertSurvivalPage from './pages/DesertSurvivalPage';
import RabariMigrationPage from './pages/RabariMigrationPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/daily-life" element={<DailyLifePage />} />
            <Route path="/endangered-crafts" element={<EndangeredCraftsPage />} />
            <Route path="/desert-survival" element={<DesertSurvivalPage />} />
            <Route path="/rabari-migration" element={<RabariMigrationPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
