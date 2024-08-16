import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import CustomRoutePage from './pages/tripPage'; // Yeni sayfa bileşeni

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/your-custom-route" element={<CustomRoutePage />} />
      </Routes>
    </Router>
  );
}

export default App;
