import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Chatbot from "../components/Chatbot";

const LanguagePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      <MainContent openSidebar={toggleSidebar} />
      <Chatbot />
    </div>
  );
};

export default LanguagePage;
