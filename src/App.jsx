
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Screens/Homescreen';
import Dashboard from '../src/Screens/Dashboard';
import Profile from '../src/Screens/Profile';
import Footer from '../src/Footer/Footer.jsx';
import UpdateProfile from './Screens/Updateprofile.jsx';
import Deposit from './Screens/Deposit.jsx';
import Withdraw from './Screens/Withdraw.jsx';
import ActivationPackage from './Screens/ActivationPackage.jsx';
import DynamicHistory from './Screens/Report.jsx';
import TeamReport from './Screens/TeamReport.jsx';
import Register from './Screens/RegistionPage.jsx';
import TermsAndConditions from './Screens/TermsAndConditions.jsx';
import PrivacyPolicy from './Screens/PrivacyPolicy.jsx';
import FAQ from './Screens/FAQ.jsx';
import OtpVerifictaion from './Screens/Otpverifictaion.jsx';
import Kyc from './Screens/Kyc.jsx';
import { ToastContainer } from 'react-toastify';
import DirectTeam from './Screens/DirectTeam.jsx';
import DownLine from './Screens/Downline.jsx';
import EarningsScreen from './Screens/Earnings.jsx';
import TokenPresale from './Screens/TokenPreSale.jsx';
import PackageActivation from './Screens/Active_package.jsx';
import DirectDeposit from './Screens/Deposit.jsx';
import Daily_earning from './Screens/Daily_earning.jsx';
import EKyc from './Screens/E_kyc.jsx';


function App() {
  return (
    <Router>
      <div className="app">
        <ToastContainer />

        {/* Your header here if any */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/UpdateProfile" element={<UpdateProfile />} />
          <Route path="/Deposit" element={<Deposit />} />
          <Route path="/Direct_deposit" element={<DirectDeposit />} />
          <Route path="/Withdraw" element={<Withdraw />} />
          <Route path="/ActivationPackage" element={<ActivationPackage />} />
          <Route path="/report/:reason" element={<DynamicHistory />} />
          <Route path="/TeamReport" element={<TeamReport />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/OtpVerifictaion" element={<OtpVerifictaion />} />
          <Route path="/Kyc" element={<Kyc />} />
          <Route path="/EKyc" element={<EKyc />} />
          <Route path="/DirectTeam" element={<DirectTeam />} />
          <Route path="/DownLine" element={<DownLine />} />
          <Route path="/Earnings" element={<EarningsScreen />} />
          <Route path="/DownLine" element={<DownLine />} />
          <Route path="/TokenPresale" element={<TokenPresale/>} />
          <Route path="/Package_active" element={<PackageActivation/>} />
          <Route path="/Daily_earning" element={<Daily_earning/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
