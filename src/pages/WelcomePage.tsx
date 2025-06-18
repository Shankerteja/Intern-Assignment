import React from 'react';
import { useNavigate } from 'react-router-dom';

export function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-end p-8 pb-16 bg-transparent">
      <div className="text-center space-y-6">
        <div className="space-y-4 mb-12">
          <h1 className="text-2xl font-bold text-black">Welcome to PopX</h1>
          <p className="text-[#666666] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => navigate('/create-account')}
            className="w-full bg-[#6A0DAD] text-white font-semibold py-4 rounded-lg hover:bg-[#5A0B9A] transition-colors"
          >
            Create Account
          </button>
          
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-[#E5D1FA] text-black font-semibold py-4 rounded-lg hover:bg-[#D5C1EA] transition-colors"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
} 