
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Screens/Homescreen';
import Dashboard from '../src/Screens/Dashboard';
import Profile from '../src/Screens/Profile';
import Footer from '../src/Footer/Footer.jsx';
import UpdateProfile from './Screens/Updateprofile.jsx';
import Deposit from './Screens/Deposit.jsx';
import DepositHistory from './Screens/DepositHistory.jsx';
import Register from './Screens/RegistionPage.jsx';
function App() {
  return (
    <Router>
      <div className="app">
        {/* Your header here if any */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/UpdateProfile" element={<UpdateProfile />} />
          <Route path="/Deposit" element={<Deposit/>} />
           <Route path="/DepositHistory" element={<DepositHistory/>} />
           <Route path="/Register" element={<Register/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
