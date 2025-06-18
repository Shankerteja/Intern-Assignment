import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { WelcomePage } from './pages/WelcomePage';
import { LoginPage } from './pages/LoginPage';
import { CreateAccountPage } from './pages/CreateAccountPage';
import { AccountSettingsPage } from './pages/AccountSettingsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f7f8f9] flex items-center justify-center p-4">
        <div className="w-[455px] bg-[#c4c3c325] min-h-screen shadow-lg">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/account-settings" element={<AccountSettingsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;