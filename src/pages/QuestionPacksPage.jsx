import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const QuestionPacksPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const questionPacks = [
    {
      icon: "💻",
      title: "Software Engineering",
      questions: 45,
      duration: "30-45 min",
      rating: 4.8,
      difficulty: "intermediate",
      difficultyColor: "text-yellow-500",
      description: "Core programming concepts and problem-solving"
    },
    {
      icon: "👥",
      title: "Behavioral Questions",
      questions: 30,
      duration: "20-30 min",
      rating: 4.7,
      difficulty: "beginner",
      difficultyColor: "text-green-500",
      description: "Soft skills and past experience scenarios"
    },
    {
      icon: "📊",
      title: "Product Management",
      questions: 30,
      duration: "20-30 min",
      rating: 4.7,
      difficulty: "intermediate",
      difficultyColor: "text-yellow-500",
      description: "Product strategy and execution"
    },
    {
      icon: "🔬",
      title: "Data Science",
      questions: 30,
      duration: "20-30 min",
      rating: 4.7,
      difficulty: "advanced",
      difficultyColor: "text-red-500",
      description: "Data analysis and machine learning"
    },
    {
      icon: "👔",
      title: "Leadership & Management",
      questions: 30,
      duration: "20-30 min",
      rating: 4.7,
      difficulty: "intermediate",
      difficultyColor: "text-yellow-500",
      description: "Team management and leadership skills"
    },
    {
      icon: "🔧",
      title: "System Design",
      questions: 25,
      duration: "45-60 min",
      rating: 4.9,
      difficulty: "advanced",
      difficultyColor: "text-red-500",
      description: "Architecture and scalable systems"
    },
    {
      icon: "🔒",
      title: "Security Engineering",
      questions: 35,
      duration: "30-40 min",
      rating: 4.8,
      difficulty: "advanced",
      difficultyColor: "text-red-500",
      description: "Cybersecurity and system protection"
    },
    {
      icon: "📱",
      title: "Mobile Development",
      questions: 40,
      duration: "25-35 min",
      rating: 4.7,
      difficulty: "intermediate",
      difficultyColor: "text-yellow-500",
      description: "iOS, Android, and cross-platform development"
    },
    {
      icon: "☁️",
      title: "Cloud Computing",
      questions: 35,
      duration: "30-45 min",
      rating: 4.8,
      difficulty: "advanced",
      difficultyColor: "text-red-500",
      description: "Cloud platforms and distributed systems"
    },
    {
      icon: "🤖",
      title: "Machine Learning",
      questions: 30,
      duration: "40-50 min",
      rating: 4.9,
      difficulty: "advanced",
      difficultyColor: "text-red-500",
      description: "AI algorithms and ML implementations"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      questions: 35,
      duration: "25-35 min",
      rating: 4.7,
      difficulty: "intermediate",
      difficultyColor: "text-yellow-500",
      description: "User interface and experience design"
    },
    {
      icon: "📈",
      title: "Business Analytics",
      questions: 30,
      duration: "30-40 min",
      rating: 4.6,
      difficulty: "intermediate",
      difficultyColor: "text-yellow-500",
      description: "Data-driven business decisions"
    },
  ];

  return (
    <div className="flex bg-light-bg min-h-screen">
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-6 bg-white/95 backdrop-blur-lg p-6 border-gray-200 border-b">
          <button
            onClick={toggleSidebar}
            className="lg:hidden bg-none border-none text-text-gray"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="relative flex-1 max-w-md">
            <i className="top-1/2 left-3.5 absolute text-text-gray -translate-y-1/2 fas fa-search"></i>
            <input
              placeholder="Search..."
              className="bg-white/70 py-3 pr-4 pl-11 border border-gray-200 rounded-lg w-full placeholder-text-gray text-text-dark"
            />
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between items-center gap-4 bg-white/90 shadow-lg backdrop-blur-lg mb-6 p-6 border border-gray-100 rounded-2xl">
            <div>
              <h1 className="bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2 font-bold text-transparent text-3xl">
                Interview Question Packs
              </h1>
              <p className="text-text-gray">
                Choose from our curated collection of domain-specific interview
                questions.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="min-w-[160px]">
              <label className="block mb-2 text-text-gray text-sm">
                Category
              </label>
              <select className="bg-white/70 p-2.5 border border-gray-200 hover:border-primary rounded-lg w-full text-text-dark transition-all duration-300">
                <option>All Categories</option>
                <option>Technical</option>
                <option>Behavioral</option>
              </select>
            </div>
            <div className="min-w-[160px]">
              <label className="block mb-2 text-text-gray text-sm">
                Difficulty
              </label>
              <select className="bg-white/70 p-2.5 border border-gray-200 hover:border-primary rounded-lg w-full text-text-dark transition-all duration-300">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
              </select>
            </div>
            <div className="min-w-[160px]">
              <label className="block mb-2 text-text-gray text-sm">
                Sort By
              </label>
              <select className="bg-white/70 p-2.5 border border-gray-200 hover:border-primary rounded-lg w-full text-text-dark transition-all duration-300">
                <option>Most Popular</option>
                <option>Newest</option>
              </select>
            </div>
            <div className="relative ml-auto">
              <i className="top-1/2 left-3 absolute text-text-gray -translate-y-1/2 fas fa-search"></i>
              <input
                placeholder="Search question packs..."
                className="bg-white/70 p-2.5 pl-10 border border-gray-200 hover:border-primary rounded-lg w-64 text-text-dark transition-all duration-300"
              />
            </div>
          </div>

          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {questionPacks.map((pack, index) => (
              <div
                key={index}
                className="group relative bg-white/80 shadow-lg hover:shadow-xl backdrop-blur-lg p-6 border border-white/20 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="top-0 right-0 absolute p-2">
                  <span className="bg-green-100 px-3 py-1 rounded-full font-medium text-green-600 text-sm">
                    Excellent
                  </span>
                </div>
                <div className="relative flex items-center gap-4 mb-4">
                  <div className="flex flex-shrink-0 justify-center items-center bg-primary/10 shadow-lg rounded-2xl w-14 h-14 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{pack.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 font-bold text-gray-900 text-xl">{pack.title}</h3>
                    <p className="text-gray-500 text-sm">{pack.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex-1">
                    <div className="mb-1 font-bold text-primary text-4xl">
                      {pack.questions}
                      <span className="ml-1 text-gray-500 text-sm">/ 100</span>
                    </div>
                    <div className="bg-gray-200 mb-1 rounded-full w-full h-2">
                      <div
                        className="bg-primary group-hover:opacity-80 rounded-full h-2 transition-all duration-500 ease-out"
                        style={{ width: `${pack.questions}%` }}
                      ></div>
                    </div>
                    <div className="text-gray-500 text-sm">Questions</div>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <div className="flex items-center gap-1 font-medium text-sm">
                      <i className="text-primary fas fa-clock"></i>
                      <span>{pack.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 font-medium text-sm">
                      <i className="text-yellow-400 fas fa-star"></i>
                      <span>{pack.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-gray-200 border-t">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${pack.difficulty === 'beginner' ? 'bg-green-100 text-green-600' :
                      pack.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-red-100 text-red-600'
                    }`}>
                    {pack.difficulty}
                  </span>
                  <div className="flex gap-2">
                    <button className="bg-primary/10 hover:bg-primary p-2 rounded-lg text-primary hover:text-white transition-all hover:-translate-y-1 duration-300">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="bg-primary/10 hover:bg-primary p-2 rounded-lg text-primary hover:text-white transition-all hover:-translate-y-1 duration-300">
                      <i className="fas fa-microphone"></i>
                    </button>
                    <button className="bg-primary/10 hover:bg-primary p-2 rounded-lg text-primary hover:text-white transition-all hover:-translate-y-1 duration-300">
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/90 shadow-lg p-6 border border-gray-100 rounded-2xl">
            <div className="text-center">
              <i className="fa-layer-group mb-4 text-primary text-3xl fas"></i>
              <h3 className="mb-2 font-bold text-xl">Create Custom Pack</h3>
              <p className="mb-4 text-text-gray">
                Can't find what you're looking for? Create a custom interview
                pack tailored to your needs.
              </p>
              <button className="inline-flex items-center gap-2 bg-transparent hover:bg-primary/10 px-4 py-2.5 border border-primary rounded-lg text-primary transition-all hover:-translate-y-0.5 duration-300 cursor-pointer">
                Create Custom Pack
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPacksPage;
