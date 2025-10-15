import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const stats = [
    { icon: "fa-brain", value: "3", label: "Total Interviews" },
    { icon: "fa-bullseye", value: "7.5/10", label: "Average Score" },
    { icon: "fa-trophy", value: "2 Days", label: "Current Streak" },
    { icon: "fa-clock", value: "18h", label: "Hours Remaining" },
  ];

  const skills = [
    {
      name: "Communication",
      score: 75,
      description: "Clarity and articulation",
    },
    {
      name: "Technical Knowledge",
      score: 85,
      description: "Programming and algorithms",
    },
    { name: "Problem Solving", score: 78, description: "Analytical thinking" },
    { name: "Leadership", score: 78, description: "Team management skills" },
    {
      name: "Time Management",
      score: 78,
      description: "Efficiency and planning",
    },
    { name: "Cultural Fit", score: 78, description: "Company alignment" },
  ];

  const quickStartPacks = [
    {
      title: "Technical Skills",
      duration: "20-30 min",
      questions: "5-8 questions",
      description: "Programming, algorithms, and system design questions",
    },
    {
      title: "Behavioral",
      duration: "15-25 min",
      questions: "4-6 questions",
      description: "Teamwork, leadership, and situational questions",
    },
    {
      title: "System Design",
      duration: "30-45 min",
      questions: "2-4 questions",
      description: "Architecture and scalability challenges",
    },
  ];

  const proTips = [
    "Practice regularly to maintain your interview streak and improve your skills",
    "Use voice mode to practice speaking your answers out loud",
    "Review AI feedback to identify areas for improvement",
    "Hours don't expire for 30 days - use them at your own pace",
  ];

  return (
    <div className="flex min-h-screen bg-light-bg">
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={toggleModal}
        >
          <div
            className="bg-white p-5 rounded-xl w-96 text-center relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2.5 right-4 text-xl border-none bg-none cursor-pointer text-text-gray"
              onClick={toggleModal}
            >
              &times;
            </button>
            <div className="text-4xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
              <i className="fas fa-bell"></i>
            </div>
            <h2 className="text-2xl font-bold mb-2">Notifications</h2>
            <p className="text-text-gray mb-4">
              You do not have any notifications.
            </p>
            <button
              className="py-2 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-md cursor-pointer font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col">
        <div className="bg-white/95 backdrop-blur-lg p-6 flex items-center gap-6 border-b border-gray-200">
          <button
            onClick={toggleSidebar}
            className="lg:hidden bg-none border-none text-text-gray"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="flex-1 relative max-w-md">
            <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-text-gray"></i>
            <input
              placeholder="Search..."
              className="w-full py-3 pl-11 pr-4 bg-white/70 border border-gray-200 rounded-lg text-text-dark placeholder-text-gray"
            />
          </div>
          <div className="flex items-center gap-4">
            <button
              className="relative bg-none border-none text-2xl cursor-pointer text-text-gray"
              onClick={toggleModal}
            >
              <i className="fas fa-bell"></i>
            </button>
            <button className="bg-none border-none">
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
                alt="Profile"
                className="w-9 h-9 rounded-full"
              />
            </button>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 mb-6 flex justify-between items-center gap-4 border border-gray-100 shadow-lg">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                Welcome back, User!
              </h1>
              <p className="text-text-gray">
                You've completed 2 practice sessions this week. Keep up the good
                work!
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/90 p-5 rounded-2xl flex items-center gap-4 border border-gray-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-2xl text-primary">
                  <i className={`fas ${stat.icon}`}></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-text-gray text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/90 p-6 rounded-2xl mb-6 border border-gray-100 shadow-lg">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Your Interview Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white/70 p-5 rounded-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{skill.name}</h3>
                    <div className="bg-gradient-to-r from-primary to-secondary py-1 px-2.5 rounded-full text-white text-sm font-semibold">
                      {skill.score}%
                    </div>
                  </div>
                  <p className="text-text-gray text-sm mb-3">
                    {skill.description}
                  </p>
                  <div className="h-2 bg-gray-200 rounded-full my-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      style={{ width: `${skill.score}%` }}
                    ></div>
                  </div>
                  <button className="w-full p-2.5 border border-primary rounded-lg bg-transparent text-primary cursor-pointer transition-all duration-300 relative overflow-hidden hover:bg-primary/10 hover:-translate-y-0.5">
                    Review Session
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Start Interview */}
          <div className="bg-white/90 p-6 rounded-2xl mb-6 border border-gray-100 shadow-lg">
            <div className="mb-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Quick Start Interview
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickStartPacks.map((pack, index) => (
                <div
                  key={index}
                  className="bg-white/70 p-5 rounded-2xl border border-gray-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="text-center font-bold mb-4">
                    <div className="text-lg">{pack.title}</div>
                    <small className="block text-text-gray text-sm">
                      <p className="font-bold">
                        {pack.duration} • {pack.questions}
                      </p>
                      {pack.description}
                    </small>
                  </div>
                  <ul className="list-none mb-4">
                    <li className="flex items-center gap-2 text-text-gray text-sm">
                      <i className="fas fa-check text-primary"></i> Instant
                      feedback
                    </li>
                    <li className="flex items-center gap-2 text-text-gray text-sm">
                      <i className="fas fa-check text-primary"></i> AI generated
                      questions
                    </li>
                  </ul>
                  <button className="w-full py-3 px-5 bg-gradient-to-r from-primary to-secondary border-none rounded-lg text-white font-semibold cursor-pointer inline-flex gap-2 items-center transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg">
                    Need Hours
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/90 p-6 rounded-2xl mb-6 border border-gray-100 shadow-lg">
            <div className="mb-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Recent Activity
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white/70 p-5 rounded-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-2">
                  <h3 className="font-semibold">
                    No recent interview sessions
                  </h3>
                </div>
                <p className="text-text-gray text-sm">
                  Start your first interview to see your progress here
                </p>
              </div>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="bg-white/90 p-6 rounded-2xl mb-6 border border-gray-100 shadow-lg">
            <div className="mb-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                💡 Pro Tips
              </h2>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-4">
              <div className="bg-white/70 p-5 rounded-2xl border border-gray-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="text-center font-bold mb-4">
                  <div className="text-lg">Tips to become a Pro</div>
                </div>
                <ul className="list-none mb-4">
                  {proTips.map((tip, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-text-gray text-sm mb-2"
                    >
                      <i className="fas fa-check text-primary"></i> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
