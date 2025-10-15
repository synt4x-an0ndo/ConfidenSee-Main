import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import IndexPage from './pages/IndexPage';
import DashboardPage from './pages/DashboardPage';
import QuestionPacksPage from './pages/QuestionPacksPage';
import PerformancePage from './pages/PerformancePage';
import PricingPage from './pages/PricingPage';
import ProfilePage from './pages/ProfilePage';
import LanguagePage from './pages/LanguagePage';
import AITrainingPage from './pages/AITrainingPage';
import RegisterPage from './pages/RegisterPage';
import CreateCVPage from './pages/CreateCVPage';
import AIVideoInterviewPage from './pages/AIVideoInterviewPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/*"
          element={
            <div className="dashboard-container">
              <Sidebar />
              <main className="main-content">
                <Routes>
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/question-packs" element={<QuestionPacksPage />} />
                  <Route path="/performance" element={<PerformancePage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/language" element={<LanguagePage />} />
                  <Route path="/ai-training" element={<AITrainingPage />} />
                  <Route path="/create-cv" element={<CreateCVPage />} />
                  <Route path="/ai-interview" element={<AIVideoInterviewPage />} />
                </Routes>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
