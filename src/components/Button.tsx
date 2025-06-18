import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = 'py-4 rounded-lg font-semibold transition-colors';
  const variantClasses = {
    primary: 'bg-[#6A0DAD] text-white hover:bg-[#5A0B9A]',
    secondary: 'bg-[#E5D1FA] text-black hover:bg-[#D5C1EA]'
  };
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
} 