import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types';

export function CreateAccountPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: true
  });

  const isFormValid = formData.fullName && formData.phone && formData.email && formData.password;

  const updateField = (field: keyof typeof formData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCreateAccount = () => {
    if (isFormValid) {
      const userData: User = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || undefined,
        isAgency: formData.isAgency
      };
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/account-settings');
    }
  };

  const labelClass = "block text-sm font-medium mb-1";
  const requiredAsterisk = <span className="text-[#A259FF]">*</span>;
  const inputClass =
    "w-full p-3 border border-gray-300 rounded-lg focus:border-[#A259FF] focus:outline-none focus:ring-2 focus:ring-[#A259FF]/20 transition-colors text-base";

  return (
    <div className="p-8 pt-12 bg-transparent">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-black">Create your<br/>PopX account</h1>
        </div>

        <div className="space-y-5">
          <div>
            <label className={labelClass + " text-[#A259FF]"}>
              Full Name {requiredAsterisk}
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => updateField('fullName', e.target.value)}
              className={inputClass}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className={labelClass + " text-[#A259FF]"}>
              Phone number {requiredAsterisk}
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              className={inputClass}
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className={labelClass + " text-[#A259FF]"}>
              Email address {requiredAsterisk}
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className={inputClass}
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label className={labelClass + " text-[#A259FF]"}>
              Password {requiredAsterisk}
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => updateField('password', e.target.value)}
              className={inputClass}
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label className={labelClass + " text-[#A259FF]"}>
              Company name
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => updateField('company', e.target.value)}
              className={inputClass}
              placeholder="Enter your company name (optional)"
            />
          </div>

          <div>
            <label className={labelClass + " text-[#A259FF] mb-2"}>
              Are you an Agency? {requiredAsterisk}
            </label>
            <div className="flex space-x-6 items-center mt-1">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency === true}
                  onChange={() => updateField('isAgency', true)}
                  className="accent-[#A259FF] w-4 h-4"
                />
                <span className="text-gray-700">Yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency === false}
                  onChange={() => updateField('isAgency', false)}
                  className="accent-[#A259FF] w-4 h-4"
                />
                <span className="text-gray-700">No</span>
              </label>
            </div>
          </div>

          <button
            onClick={handleCreateAccount}
            disabled={!isFormValid}
            className={`w-full py-3 rounded-lg font-bold transition-colors mt-6 ${
              isFormValid
                ? 'bg-[#A259FF] text-white hover:bg-[#7C2AE8]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
} 