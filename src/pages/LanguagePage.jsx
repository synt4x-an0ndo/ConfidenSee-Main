
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import Chatbot from '../components/Chatbot';

const LanguagePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      <div className={`fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white/95 backdrop-blur-lg border-r border-gray-200 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar activePage="Language" />
      </div>
      <MainContent openSidebar={toggleSidebar} />
      <Chatbot />
    </div>
  );
};

export default LanguagePage;
