
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const AISetupPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-light-bg">
      <div className={`fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white/95 backdrop-blur-lg border-r border-gray-200 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar activePage="AI Setup" />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="bg-white/95 backdrop-blur-lg p-6 flex items-center gap-6 border-b border-gray-200">
          <button onClick={toggleSidebar} className="lg:hidden bg-none border-none text-text-gray">
            <i className="fas fa-bars"></i>
          </button>
          <div className="flex-1 relative max-w-md">
            <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-text-gray"></i>
            <input placeholder="Search..." className="w-full py-3 pl-11 pr-4 bg-white/70 border border-gray-200 rounded-lg text-text-dark placeholder-text-gray" />
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">AI Interviewer Setup</h1>
              <p className="text-text-gray">Customize your AI interviewer to match your target role and company</p>
            </div>
            <button className="py-3 px-5 bg-gradient-to-r from-primary to-secondary border-none rounded-lg text-white font-semibold cursor-pointer inline-flex gap-2 items-center transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg">
              <i className="fas fa-robot"></i> Configure
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg mb-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">Gemini API Configuration</h2>
              <p className="text-text-gray">Set up your Google Gemini API key to enable AI-powered features.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/70 p-5 rounded-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center font-bold text-white mb-3">1</div>
                <h4 className="font-semibold mb-2">Get API Key</h4>
                <p className="text-text-gray text-sm mb-4">Visit Google AI Studio to create your free Gemini API key.</p>
                <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="py-2 px-4 rounded-lg border border-gray-200 bg-transparent text-text-dark cursor-pointer transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-0.5">
                  <i className="fas fa-key"></i> Get API Key
                </a>
              </div>
              <div className="bg-white/70 p-5 rounded-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center font-bold text-white mb-3">2</div>
                <h4 className="font-semibold mb-2">Configure</h4>
                <p className="text-text-gray text-sm">Paste your API key in the form below and save it securely.</p>
              </div>
              <div className="bg-white/70 p-5 rounded-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center font-bold text-white mb-3">3</div>
                <h4 className="font-semibold mb-2">Test & Use</h4>
                <p className="text-text-gray text-sm">Test your connection and start using AI-powered interviews.</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">API Key Configuration</h3>
              <p className="text-text-gray mb-4">Your API key is stored locally in your browser and is never sent to our servers.</p>
              <div className="p-3 rounded-lg bg-warning/10 border border-warning mb-4">
                <p>No API key configured. Please add your Gemini API key to enable AI features.</p>
              </div>
              <div className="mb-4">
                <label htmlFor="api-key" className="block text-text-gray mb-2 text-sm">Gemini API Key</label>
                <input type="password" id="api-key" value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="Enter your Gemini API key..." className="w-full p-3 rounded-lg bg-white/70 border border-gray-200 text-text-dark transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                <p className="text-text-gray text-sm mt-2">Your API key should start with "AIza" and be approximately 39 characters long.</p>
              </div>
              <button className="py-3 px-5 bg-gradient-to-r from-primary to-secondary border-none rounded-lg text-white font-semibold cursor-pointer inline-flex gap-2 items-center transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg">
                <i className="fas fa-save"></i> Save Key
              </button>
            </div>

            <div className="bg-white/70 p-4 rounded-lg border border-gray-100 mb-4">
              <h4 className="font-semibold mb-3 text-text-dark">Model Information</h4>
              <p className="text-text-gray mb-3">Currently using Gemini 1.5 Flash for optimal performance.</p>
              <ul className="list-none mb-4">
                <li className="mb-2 flex items-center gap-2 text-text-gray text-sm"><i className="fas fa-check text-success"></i> Fast response times for real-time feedback</li>
                <li className="mb-2 flex items-center gap-2 text-text-gray text-sm"><i className="fas fa-check text-success"></i> Advanced reasoning for complex questions</li>
                <li className="mb-2 flex items-center gap-2 text-text-gray text-sm"><i className="fas fa-check text-success"></i> Context-aware question generation</li>
                <li className="mb-2 flex items-center gap-2 text-text-gray text-sm"><i className="fas fa-check text-success"></i> Detailed answer evaluation</li>
                <li className="mb-2 flex items-center gap-2 text-text-gray text-sm"><i className="fas fa-check text-success"></i> Multi-language support</li>
              </ul>
              <h4 className="font-semibold mb-3 text-text-dark">How we use your API:</h4>
              <ul className="list-none">
                <li className="mb-2 flex items-center text-text-gray text-sm"><i className="fas fa-info-circle text-info mr-2"></i> Generate personalized interview questions</li>
                <li className="mb-2 flex items-center text-text-gray text-sm"><i className="fas fa-info-circle text-info mr-2"></i> Evaluate your answers with detailed feedback</li>
                <li className="mb-2 flex items-center text-text-gray text-sm"><i className="fas fa-info-circle text-info mr-2"></i> Create follow-up questions based on responses</li>
                <li className="mb-2 flex items-center text-text-gray text-sm"><i className="fas fa-info-circle text-info mr-2"></i> Adapt difficulty to your experience level</li>
              </ul>
            </div>

            <div className="bg-white/70 p-4 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-3 text-text-dark">Important Notes</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-white/90 border-l-4 border-success">
                  <h5 className="font-semibold mb-2 flex items-center gap-2 text-text-dark"><i className="fas fa-shield-alt"></i> Privacy & Security</h5>
                  <p className="text-text-gray text-sm">API key stored locally. Never sent to our servers. Used only for generating interview content.</p>
                </div>
                <div className="p-3 rounded-lg bg-white/90 border-l-4 border-warning">
                  <h5 className="font-semibold mb-2 flex items-center gap-2 text-text-dark"><i className="fas fa-exclamation-triangle"></i> Best Practices</h5>
                  <p className="text-text-gray text-sm">Keep your API key confidential. Monitor usage in Google AI Studio. Set usage limits if needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISetupPage;
