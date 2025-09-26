import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/AITrainingPage.css'; // Import the custom CSS for sidebar styles

const Sidebar = ({ activePage }) => {
  const navItems = [
    { to: '/dashboard', icon: 'fa-home', label: 'Dashboard' },
    { to: '/question-packs', icon: 'fa-folder', label: 'Question Packs' },
    { to: '/performance', icon: 'fa-chart-line', label: 'Performance' },
    { to: '/pricing', icon: 'fa-tag', label: 'Pricing' },
    { to: '/ai-setup', icon: 'fa-robot', label: 'AI Setup' },
    { to: '/profile', icon: 'fa-user', label: 'Profile' },
    { to: '/aivideo', icon: 'fa-video', label: 'AI Video Interview' },
    { to: '/language', icon: 'fa-globe', label: 'Language' },
    { to: '/ai-training', icon: 'fa-graduation-cap', label: 'AI Training' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to="/" className="logo">
          <img src="/img/logo2.png" style={{width: '70px'}} alt="ConfidenSee Logo" />
        </Link>
      </div>

      <div className="user-profile">
        <div className="avatar">
          <img src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg" alt="User Avatar" />
          <div className="status-indicator"></div>
        </div>
        <div className="user-info">
          <h3>User</h3>
          <p>Premium Member</p>
        </div>
      </div>

      <ul className="sidebar-nav">
        {navItems.map(item => (
          <li key={item.label} className={`nav-item ${activePage === item.label ? 'active' : ''}`}>
            <Link to={item.to}>
              <i className={`fas ${item.icon}`}></i> {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="upgrade-card">
        <h3>Upgrade to Premium</h3>
        <p>Unlock all features and get personalized feedback</p>
        <button>Upgrade Now</button>
      </div>
    </div>
  );
};

export default Sidebar;
