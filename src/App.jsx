import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import "./App.css";
import VisaCheckPage from './components/vevoPage1';
import VEVOContentPage from './components/VEVOContentPage ';
import Footer from './components/Footer';

const MainContent = () => (
  <div>
    <VisaCheckPage />
    <VEVOContentPage />
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Your desired default route */}
        <Route
          path="/homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/check-conditions-online"
          element={<MainContent />}
        />

        {/* Optionally redirect '/' to your default page */}
        <Route
          path="/"
          element={
            <Navigate to="/homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/check-conditions-online" replace />
          }
        />

        {/* Catch-all: redirect to default as well */}
        <Route
          path="*"
          element={
            <Navigate to="/homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/check-conditions-online" replace />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
