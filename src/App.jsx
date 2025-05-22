
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Screens/Homescreen';
import Dashboard from '../src/Screens/Dashboard';
import Profile from '../src/Screens/Profile';
import Footer from '../src/Footer/Footer.jsx';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Your header here if any */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
