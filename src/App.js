import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import CustomRoutePage from './pages/tripPage'; 
import MealAndBudgetPage  from './pages/mealAndbudgetPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/your-custom-route" element={<CustomRoutePage />} />
        <Route path="/meal" element={<MealAndBudgetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
