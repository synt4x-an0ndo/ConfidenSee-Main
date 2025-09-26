
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const PerformancePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const weeklyData = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Performance',
        data: [60, 75, 65, 85, 65, 60, 85],
        backgroundColor: '#5e72e4',
        borderRadius: 4,
      },
    ],
  };

  const skillData = {
    labels: ['Technical', 'Communication', 'Problem Solving', 'Other'],
    datasets: [
      {
        data: [60, 25, 10, 5],
        backgroundColor: ['#5e72e4', '#ff5e7d', '#ffa502', '#ff4757'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-light-bg">
      <div className={`fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white/95 backdrop-blur-lg border-r border-gray-200 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar activePage="Performance" />
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
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">Performance Analytics</h1>
              <p className="text-text-gray">Track your progress and identify areas for improvement</p>
            </div>
            <button className="py-3 px-5 bg-gradient-to-r from-primary to-secondary border-none rounded-lg text-white font-semibold cursor-pointer inline-flex gap-2 items-center transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg">Export Report</button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/90 p-6 rounded-2xl border border-gray-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Weekly Performance</h3>
              </div>
              <div className="bg-white/70 p-4 rounded-lg border border-gray-100">
                <Bar data={weeklyData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
              </div>
            </div>

            <div className="bg-white/90 p-6 rounded-2xl border border-gray-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skill Distribution</h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 items-center">
                <div className="w-40 h-40 relative"><Pie data={skillData} options={{ responsive: true, plugins: { legend: { display: false } } }} /></div>
                <div className="flex flex-col gap-3">
                  {skillData.labels.map((label, i) => (
                    <div key={label} className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: skillData.datasets[0].backgroundColor[i] }}></span>
                      <span>{label}: {skillData.datasets[0].data[i]}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/90 p-6 rounded-2xl border border-gray-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Performance Overview</h3>
              </div>
              <div className="flex justify-around text-center">
                <div className="p-4"><div className="text-xl font-bold text-primary mb-1">0%</div><div className="text-text-gray text-sm">Avg. Score</div></div>
                <div className="p-4"><div className="text-xl font-bold text-primary mb-1">0</div><div className="text-text-gray text-sm">Total Sessions</div></div>
                <div className="p-4"><div className="text-xl font-bold text-primary mb-1">0 Days</div><div className="text-text-gray text-sm">Current Streak</div></div>
                <div className="p-4"><div className="text-xl font-bold text-primary mb-1">0 mins</div><div className="text-text-gray text-sm">Avg. Duration</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformancePage;
