import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const PerformancePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const weeklyData = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Performance",
        data: [60, 75, 65, 85, 65, 60, 85],
        backgroundColor: "#5e72e4",
        borderRadius: 4,
      },
    ],
  };

  const skillData = {
    labels: ["Technical", "Communication", "Problem Solving", "Other"],
    datasets: [
      {
        data: [60, 25, 10, 5],
        backgroundColor: ["#5e72e4", "#ff5e7d", "#ffa502", "#ff4757"],
        borderWidth: 0,
      },
    ],
  };

  const feedbackMetrics = [
    { label: "Confidence", value: 87, color: "from-primary to-secondary" },
    { label: "Clarity", value: 92, color: "from-primary to-secondary" },
    { label: "Content", value: 78, color: "from-primary to-secondary" },
    { label: "Overall", value: 83, color: "from-primary to-secondary" },
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
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2 font-bold text-transparent text-3xl">
                Performance Analytics
              </h1>
              <p className="text-text-gray">
                Track your progress and identify areas for improvement
              </p>
            </div>
            <button className="inline-flex relative items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:shadow-lg px-5 py-3 border-none rounded-lg overflow-hidden font-semibold text-white transition-all hover:-translate-y-0.5 duration-300 cursor-pointer">
              Export Report
            </button>
          </div>

          <div className="gap-6 grid lg:grid-cols-2 mb-6">
            <div className="bg-white/90 shadow-lg hover:shadow-xl p-6 border border-gray-100 rounded-2xl transition-all hover:-translate-y-1 duration-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-transparent text-xl">
                  Weekly Performance
                </h3>
              </div>
              <div className="bg-white/70 p-4 border border-gray-100 rounded-lg">
                <Bar
                  data={weeklyData}
                  options={{
                    responsive: true,
                    plugins: { legend: { display: false } },
                  }}
                />
              </div>
            </div>

            <div className="bg-white/90 shadow-lg hover:shadow-xl p-6 border border-gray-100 rounded-2xl transition-all hover:-translate-y-1 duration-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-transparent text-xl">
                  Skill Distribution
                </h3>
              </div>
              <div className="flex sm:flex-row flex-col items-center gap-5">
                <div className="relative w-40 h-40">
                  <Pie
                    data={skillData}
                    options={{
                      responsive: true,
                      plugins: { legend: { display: false } },
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  {skillData.labels.map((label, i) => (
                    <div key={label} className="flex items-center gap-2">
                      <span
                        className="inline-block rounded-full w-3 h-3"
                        style={{
                          backgroundColor:
                            skillData.datasets[0].backgroundColor[i],
                        }}
                      ></span>
                      <span>
                        {label}: {skillData.datasets[0].data[i]}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white/90 shadow-lg hover:shadow-xl p-6 border border-gray-100 rounded-2xl transition-all hover:-translate-y-1 duration-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 font-bold text-transparent text-2xl">
                  Performance Overview
                </h3>
              </div>
              <div className="flex justify-around text-center">
                <div className="p-4">
                  <div className="mb-1 font-bold text-primary text-xl">0%</div>
                  <div className="text-text-gray text-sm">Avg. Score</div>
                </div>
                <div className="p-4">
                  <div className="mb-1 font-bold text-primary text-xl">0</div>
                  <div className="text-text-gray text-sm">Total Sessions</div>
                </div>
                <div className="p-4">
                  <div className="mb-1 font-bold text-primary text-xl">
                    0 Days
                  </div>
                  <div className="text-text-gray text-sm">Current Streak</div>
                </div>
                <div className="p-4">
                  <div className="mb-1 font-bold text-primary text-xl">
                    0 mins
                  </div>
                  <div className="text-text-gray text-sm">Avg. Duration</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white/90 shadow-lg hover:shadow-xl p-8 border border-gray-100 rounded-2xl transition-all hover:-translate-y-1 duration-300">
              <div className="mb-8">
                <h3 className="bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 font-bold text-transparent text-2xl">
                  AI-Powered Performance Insights
                </h3>
                <p className="text-text-gray text-base leading-relaxed">
                  Advanced analytics evaluating your key performance indicators across multiple dimensions
                </p>
              </div>
              <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {feedbackMetrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="group relative bg-gradient-to-br from-gray-50 hover:from-white to-white hover:to-gray-50 shadow-md hover:shadow-xl p-6 border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex justify-center items-center bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg w-10 h-10">
                          <span className="font-bold text-primary text-lg">
                            {index + 1}
                          </span>
                        </div>
                        <div className="bg-green-100 px-2 py-1 rounded-full font-semibold text-green-700 text-xs">
                          {metric.value >= 85 ? 'Excellent' : metric.value >= 70 ? 'Good' : 'Fair'}
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className={`bg-gradient-to-r ${metric.color} bg-clip-text font-bold text-5xl text-transparent`}>
                          {metric.value}
                        </div>
                        <div className="text-gray-400 text-xs">/ 100</div>
                      </div>
                      <div className="mb-3 font-semibold text-gray-800 text-sm uppercase tracking-wide">
                        {metric.label}
                      </div>
                      <div className="relative bg-gray-200 rounded-full w-full h-2 overflow-hidden">
                        <div
                          className="top-0 left-0 absolute bg-gradient-to-r from-primary to-secondary rounded-full h-full transition-all duration-500"
                          style={{ width: `${metric.value}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformancePage;
