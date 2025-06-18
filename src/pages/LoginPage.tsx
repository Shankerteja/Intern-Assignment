import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types';

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleLogin = () => {
    if (isFormValid) {
      // Mock user data for demo
      const userData: User = {
        fullName: 'John Doe',
        email: email,
        phone: '+1234567890',
        isAgency: true
      };
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/account-settings');
    }
  };

  return (
    <div className="p-8 pt-16 bg-transparent">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-black">Signin to your PopX account</h1>
          <p className="text-[#666666] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-[#6A0DAD] font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#6A0DAD] focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]/20 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[#6A0DAD] font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:border-[#6A0DAD] focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]/20 transition-colors"
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={!isFormValid}
            className={`w-full py-4 rounded-lg font-semibold transition-colors ${
              isFormValid
                ? 'bg-[#A259FF] text-white hover:bg-[#7C2AE8]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
} 