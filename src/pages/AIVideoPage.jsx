
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

const AIVideoPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [timer, setTimer] = useState(165); // 2:45 in seconds
  const [activeControl, setActiveControl] = useState('play');
  const [selectedOption, setSelectedOption] = useState('Software Developer');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const options = [
    { icon: 'fa-briefcase', title: 'Job Role', value: 'Software Developer' },
    { icon: 'fa-clock', title: 'Duration', value: '30 minutes' },
    { icon: 'fa-star', title: 'Difficulty', value: 'Intermediate' },
    { icon: 'fa-language', title: 'Language', value: 'English (US)' },
  ];

  return (
    <div className="flex min-h-screen bg-light-bg relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-primary-light to-secondary-light opacity-10 blur-2xl -z-10 animate-float top-[10%] left-[5%]"></div>
      <div className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-primary-light to-secondary-light opacity-10 blur-2xl -z-10 animate-float top-[60%] right-[5%]" style={{ animationDelay: '-5s' }}></div>
      <div className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-primary-light to-secondary-light opacity-10 blur-2xl -z-10 animate-float bottom-[10%] left-[10%]" style={{ animationDelay: '-10s' }}></div>

      <div className={`fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white/95 backdrop-blur-lg border-r border-gray-200 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out shadow-2xl`}>
        <Sidebar activePage="AI Video Interview" />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="bg-white/95 backdrop-blur-lg p-6 flex items-center gap-6 border-b border-gray-200 z-10">
          <button onClick={toggleSidebar} className="lg:hidden bg-none border-none text-text-gray">
            <i className="fas fa-bars"></i>
          </button>
          <div className="flex-1 relative max-w-md">
            <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-text-gray"></i>
            <input placeholder="Search interviews, feedback..." className="w-full py-3 pl-11 pr-4 bg-white/70 border border-gray-200 rounded-lg text-text-dark placeholder-text-gray" />
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          {/* Welcome Section */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-7 mb-6 flex justify-between items-center gap-4 border border-gray-100 shadow-lg relative overflow-hidden">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">AI Video Interview</h1>
              <p className="text-text-gray">Practice your interview skills with our hyper-realistic AI interviewer. Get real-time feedback and improve your confidence with our cutting-edge technology.</p>
            </div>
            <button className="py-3 px-5 bg-gradient-to-r from-primary to-secondary border-none rounded-lg text-white font-semibold cursor-pointer inline-flex gap-2 items-center transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg">
              <i className="fas fa-play"></i> Start New Session
            </button>
          </div>

          {/* Video Interview Section */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* AI Video Feed */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 border border-gray-100 flex flex-col gap-4 shadow-lg relative overflow-hidden">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Interviewer</h2>
                <span className="flex items-center gap-2 text-primary animate-pulse"><i className="fas fa-circle"></i> Live & Analyzing</span>
              </div>
              <div className="w-full h-80 bg-black/5 rounded-2xl flex items-center justify-center relative overflow-hidden border border-gray-100">
                <img src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/01/07110707/What-Your-Video-Interview-Background-Really-Says-About-You-2.jpg" alt="AI Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <button className="w-14 h-14 rounded-full border-none text-text-dark text-lg cursor-pointer flex items-center justify-center transition-all duration-300 shadow-lg relative overflow-hidden hover:scale-110 bg-white/70 border border-gray-100"><i className="fas fa-volume-up"></i></button>
                <button className="w-14 h-14 rounded-full border-none text-text-dark text-lg cursor-pointer flex items-center justify-center transition-all duration-300 shadow-lg relative overflow-hidden hover:scale-110 bg-white/70 border border-gray-100"><i className="fas fa-cog"></i></button>
                <button className="w-14 h-14 rounded-full border-none text-text-dark text-lg cursor-pointer flex items-center justify-center transition-all duration-300 shadow-lg relative overflow-hidden hover:scale-110 bg-white/70 border border-gray-100"><i className="fas fa-expand"></i></button>
              </div>
            </div>

            {/* User Video Feed */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 border border-gray-100 flex flex-col gap-4 shadow-lg relative overflow-hidden">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Your Camera</h2>
                    <span className="flex items-center gap-2 text-primary"><i className="fas fa-circle"></i> Active</span>
                </div>
                <div className="w-full h-80 bg-black/5 rounded-2xl flex items-center justify-center relative overflow-hidden border border-gray-100">
                    <img src="/img/heroalom.jpg" alt="User Camera" className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <button className="w-14 h-14 rounded-full border-none text-white text-lg cursor-pointer flex items-center justify-center transition-all duration-300 shadow-lg relative overflow-hidden hover:scale-110 bg-gradient-to-r from-primary to-secondary"><i className="fas fa-video"></i></button>
                  <button className="w-14 h-14 rounded-full border-none text-white text-lg cursor-pointer flex items-center justify-center transition-all duration-300 shadow-lg relative overflow-hidden hover:scale-110 bg-gradient-to-r from-primary to-secondary"><i className="fas fa-microphone"></i></button>
                  <button className="w-14 h-14 rounded-full border-none text-text-dark text-lg cursor-pointer flex items-center justify-center transition-all duration-300 shadow-lg relative overflow-hidden hover:scale-110 bg-white/70 border border-gray-100"><i className="fas fa-lightbulb"></i></button>
                </div>
            </div>
          </div>

          {/* Session Setup */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-7 mb-6 border border-gray-100 shadow-lg relative overflow-hidden">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2"><i className="fas fa-question-circle"></i> Current Question</h3>
              <div className="bg-white/70 p-5 rounded-2xl my-5 min-h-[120px] border border-gray-100 flex items-center justify-center text-center text-lg relative">
                <p>Tell me about a challenging project you worked on and how you overcame the obstacles.</p>
              </div>
              <div className="text-5xl text-center my-5 font-bold text-primary font-mono">{formatTime(timer)}</div>
            </div>

            <div className="flex justify-center gap-4 mt-4 mb-6">
                <button onClick={() => setActiveControl('play')} className={`w-14 h-14 rounded-full border-none text-white text-lg cursor-pointer flex items-center justify-center transition-all duration-300 shadow-lg relative overflow-hidden hover:scale-110 ${activeControl === 'play' ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-white/70 text-text-dark border border-gray-100'}`}><i className="fas fa-play"></i></button>
                <button onClick={() => setActiveControl('pause')} className={`w-14 h-14 rounded-full border-none text-white text-lg cursor-pointer flex items-center justify-center transition-all duration-300 shadow-lg relative overflow-hidden hover:scale-110 ${activeControl === 'pause' ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-white/70 text-text-dark border border-gray-100'}`}><i className="fas fa-pause"></i></button>
                <button onClick={() => setActiveControl('forward')} className={`w-14 h-14 rounded-full border-none text-white text-lg cursor-pointer flex items-center justify-center transition-all duration-300 shadow-lg relative overflow-hidden hover:scale-110 ${activeControl === 'forward' ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-white/70 text-text-dark border border-gray-100'}`}><i className="fas fa-forward"></i></button>
                <button onClick={() => setActiveControl('stop')} className={`w-14 h-14 rounded-full border-none text-white text-lg cursor-pointer flex items-center justify-center transition-all duration-300 shadow-lg relative overflow-hidden hover:scale-110 bg-gradient-to-r from-red-500 to-red-600`}><i className="fas fa-stop"></i></button>
                <button onClick={() => setActiveControl('redo')} className={`w-14 h-14 rounded-full border-none text-white text-lg cursor-pointer flex items-center justify-center transition-all duration-300 shadow-lg relative overflow-hidden hover:scale-110 ${activeControl === 'redo' ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-white/70 text-text-dark border border-gray-100'}`}><i className="fas fa-redo"></i></button>
            </div>

            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">Interview Setup</h2>
            <p className="text-text-gray mb-5">Customize your interview session based on your needs. Select from various job roles, difficulty levels, and interview types.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
              {options.map(opt => (
                <div key={opt.title} onClick={() => setSelectedOption(opt.value)} className={`bg-white/70 p-5 rounded-2xl cursor-pointer transition-all duration-300 border relative overflow-hidden hover:-translate-y-1 hover:border-primary hover:shadow-xl ${selectedOption === opt.value ? 'border-primary bg-primary/10 shadow-lg shadow-primary-glow' : 'border-transparent'}`}>
                  <h4 className="mb-2 flex items-center gap-2 font-semibold text-text-dark"><i className={`fas ${opt.icon}`}></i> {opt.title}</h4>
                  <p className="text-text-gray text-sm">{opt.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Session Information */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-7 mb-6 border border-gray-100 shadow-lg relative overflow-hidden">
            <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2"><i className="fas fa-info-circle"></i> Session Information</h3>
            <p className="text-text-gray mb-4">This session will focus on technical questions for a Software Developer position. The AI will evaluate your responses and provide feedback on your communication skills, technical knowledge, and overall presentation.</p>
          </div>

          {/* Real-time Feedback Section */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-7 mb-6 border border-gray-100 shadow-lg relative overflow-hidden">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">Real-time Feedback</h2>
            <p className="text-text-gray mb-5">Our AI is analyzing your performance in real-time. Here's how you're doing so far:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
              <div className="bg-white/70 p-5 rounded-2xl text-center border border-gray-100">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">87%</div>
                <div className="text-text-gray text-sm">Confidence</div>
              </div>
              <div className="bg-white/70 p-5 rounded-2xl text-center border border-gray-100">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">92%</div>
                <div className="text-text-gray text-sm">Clarity</div>
              </div>
              <div className="bg-white/70 p-5 rounded-2xl text-center border border-gray-100">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">78%</div>
                <div className="text-text-gray text-sm">Content</div>
              </div>
              <div className="bg-white/70 p-5 rounded-2xl text-center border border-gray-100">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">83%</div>
                <div className="text-text-gray text-sm">Overall</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AIVideoPage;
