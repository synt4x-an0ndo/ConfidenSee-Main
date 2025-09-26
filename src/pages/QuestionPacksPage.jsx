
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const QuestionPacksPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const questionPacks = [
    {
      icon: 'fa-code',
      title: 'Software Engineering',
      questions: 45,
      duration: '30-45 min',
      rating: 4.8,
      difficulty: 'intermediate',
      difficultyColor: 'text-yellow-500',
    },
    {
      icon: 'fa-users',
      title: 'Behavioral Questions',
      questions: 30,
      duration: '20-30 min',
      rating: 4.7,
      difficulty: 'beginner',
      difficultyColor: 'text-green-500',
    },
    {
      icon: 'fa-shopping-bag',
      title: 'Product Management',
      questions: 30,
      duration: '20-30 min',
      rating: 4.7,
      difficulty: 'intermediate',
      difficultyColor: 'text-yellow-500',
    },
    {
      icon: 'fa-project-diagram',
      title: 'Data Science',
      questions: 30,
      duration: '20-30 min',
      rating: 4.7,
      difficulty: 'advanced',
      difficultyColor: 'text-red-500',
    },
    {
      icon: 'fa-medal',
      title: 'Leadership & Management',
      questions: 30,
      duration: '20-30 min',
      rating: 4.7,
      difficulty: 'intermediate',
      difficultyColor: 'text-yellow-500',
    },
    {
      icon: 'fa-sitemap',
      title: 'System Design',
      questions: 25,
      duration: '45-60 min',
      rating: 4.9,
      difficulty: 'advanced',
      difficultyColor: 'text-red-500',
    },
  ];

  return (
    <div className="flex min-h-screen bg-light-bg">
      <div className={`fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white/95 backdrop-blur-lg border-r border-gray-200 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar activePage="Question Packs" />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="bg-white/95 backdrop-blur-lg p-6 flex items-center gap-6 border-b border-gray-200">
          <button onClick={toggleSidebar} className="lg:hidden bg-none border-none text-text-gray"><i className="fas fa-bars"></i></button>
          <div className="flex-1 relative max-w-md">
            <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-text-gray"></i>
            <input placeholder="Search..." className="w-full py-3 pl-11 pr-4 bg-white/70 border border-gray-200 rounded-lg text-text-dark placeholder-text-gray" />
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 mb-6 flex justify-between items-center gap-4 border border-gray-100 shadow-lg">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">Interview Question Packs</h1>
              <p className="text-text-gray">Choose from our curated collection of domain-specific interview questions.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="min-w-[160px]">
              <label className="block text-text-gray mb-2 text-sm">Category</label>
              <select className="w-full p-2.5 rounded-lg bg-white/70 text-text-dark border border-gray-200 transition-all duration-300 hover:border-primary">
                <option>All Categories</option>
                <option>Technical</option>
                <option>Behavioral</option>
              </select>
            </div>
            <div className="min-w-[160px]">
              <label className="block text-text-gray mb-2 text-sm">Difficulty</label>
              <select className="w-full p-2.5 rounded-lg bg-white/70 text-text-dark border border-gray-200 transition-all duration-300 hover:border-primary">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
              </select>
            </div>
            <div className="min-w-[160px]">
              <label className="block text-text-gray mb-2 text-sm">Sort By</label>
              <select className="w-full p-2.5 rounded-lg bg-white/70 text-text-dark border border-gray-200 transition-all duration-300 hover:border-primary">
                <option>Most Popular</option>
                <option>Newest</option>
              </select>
            </div>
            <div className="ml-auto relative">
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-text-gray"></i>
              <input placeholder="Search question packs..." className="p-2.5 pl-10 rounded-lg bg-white/70 border border-gray-200 text-text-dark w-64 transition-all duration-300 hover:border-primary" />
            </div>
          </div>

          <div>
            {questionPacks.map((pack, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center gap-4 p-5 bg-white/90 rounded-xl mb-4 border border-gray-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="min-w-[60px] text-center">
                  <i className={`fas ${pack.icon} text-2xl text-primary`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">{pack.title}</h3>
                  <div className="text-text-gray flex flex-wrap gap-3 text-sm">
                    <span><i className="fas fa-question-circle"></i> {pack.questions} questions</span>
                    <span><i className="fas fa-clock"></i> {pack.duration}</span>
                    <span><i className="fas fa-star"></i> {pack.rating}</span>
                    <span className={`${pack.difficultyColor} border border-white/10 rounded-md px-1 py-0.5 bg-white/10`}> {pack.difficulty} </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="py-2 px-4 border border-gray-200 rounded-md bg-transparent text-text-dark cursor-pointer transition-all duration-300 relative overflow-hidden hover:border-primary hover:text-primary hover:-translate-y-0.5"><i className="fas fa-eye"></i> Preview</button>
                  <button className="py-2 px-4 border border-gray-200 rounded-md bg-transparent text-text-dark cursor-pointer transition-all duration-300 relative overflow-hidden hover:border-primary hover:text-primary hover:-translate-y-0.5"><i className="fas fa-microphone"></i></button>
                  <button className="py-2 px-4 border border-gray-200 rounded-md bg-transparent text-text-dark cursor-pointer transition-all duration-300 relative overflow-hidden hover:border-primary hover:text-primary hover:-translate-y-0.5"><i className="fas fa-play"></i></button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/90 p-6 rounded-2xl border border-gray-100 shadow-lg">
            <div className="text-center">
              <i className="fas fa-layer-group text-3xl text-primary mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Create Custom Pack</h3>
              <p className="text-text-gray mb-4">Can't find what you're looking for? Create a custom interview pack tailored to your needs.</p>
              <button className="py-2.5 px-4 border border-primary rounded-lg bg-transparent text-primary cursor-pointer transition-all duration-300 inline-flex items-center gap-2 hover:bg-primary/10 hover:-translate-y-0.5">Create Custom Pack</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPacksPage;
