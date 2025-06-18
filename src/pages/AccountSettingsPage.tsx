import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { User } from '../types';

export function AccountSettingsPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) return null;

  return (
    <div className="p-8 pt-16 bg-transparent">
      <div className="space-y-8">
        <h1 className="text-2xl font-bold text-black">Account Settings</h1>

        <div className="space-y-6">
          {/* Profile Section */}
          <div className="flex items-start space-x-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#6A0DAD] to-[#E5D1FA] flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {user.fullName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              <label className="absolute -bottom-1 -right-1 bg-[#6A0DAD] p-1.5 rounded-full cursor-pointer hover:bg-[#5A0B9A] transition-colors">
                <Camera size={12} className="text-white" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
            
            <div className="flex-1 space-y-1">
              <h2 className="font-bold text-black text-lg">{user.fullName}</h2>
              <p className="text-[#666666]">{user.email}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-gray-300 my-6"></div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-[#666666] leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod 
              Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. 
              At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 