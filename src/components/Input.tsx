import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ 
  label, 
  error, 
  className = '',
  ...props 
}: InputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-[#6A0DAD] font-medium">{label}</label>
      <input
        className={`w-full p-4 border border-gray-300 rounded-lg focus:border-[#6A0DAD] focus:outline-none focus:ring-2 focus:ring-[#6A0DAD]/20 transition-colors ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
} 