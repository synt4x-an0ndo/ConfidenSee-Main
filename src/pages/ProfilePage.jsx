
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const ProfilePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [fullName, setFullName] = useState('User');
  const [email, setEmail] = useState('user@example.com');
  const [bio, setBio] = useState('Passionate about technology and interview preparation');
  const [jobTitle, setJobTitle] = useState('Software Developer');
  const [isProfilePrivate, setIsProfilePrivate] = useState(false);
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const [isEmailNotificationsEnabled, setIsEmailNotificationsEnabled] = useState(true);
  const [isPracticeRemindersEnabled, setIsPracticeRemindersEnabled] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSaveChanges = () => {
    alert('Profile changes saved!');
  };

  const handleUpdatePrivacy = () => {
    alert('Privacy settings updated!');
  };

  const handleDangerAction = (action) => {
    if (window.confirm(`Are you sure you want to ${action}? This action cannot be undone.`)) {
      alert(`${action} confirmed!`);
    }
  };

  return (
    <div className="flex min-h-screen bg-light-bg">
      <div className={`fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white/95 backdrop-blur-lg border-r border-gray-200 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar activePage="Profile" />
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
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">Profile Settings</h1>
              <p className="text-text-gray">Manage your account settings and preferences</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="min-w-[260px] flex-1">
              <div className="bg-white/90 p-6 rounded-2xl border border-gray-100 mb-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-4 mb-5">
                  <img src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg" alt="User Avatar" className="w-20 h-20 rounded-full object-cover border-2 border-primary" />
                  <div className="flex flex-col gap-2">
                    <button className="py-2.5 px-4 border border-primary rounded-lg bg-transparent text-primary cursor-pointer transition-all duration-300 inline-flex items-center gap-2 hover:bg-primary/10 hover:-translate-y-0.5"><i className="fas fa-camera"></i> Change Avatar</button>
                    <button className="py-2.5 px-4 border border-primary rounded-lg bg-transparent text-primary cursor-pointer transition-all duration-300 inline-flex items-center gap-2 hover:bg-primary/10 hover:-translate-y-0.5"><i className="fas fa-sync-alt"></i> Regenerate</button>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-text-gray mb-2 text-sm">Full Name</label>
                  <input type="text" placeholder="Your Name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full p-3 rounded-lg bg-white/70 border border-gray-200 text-text-dark transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="mb-4">
                  <label className="block text-text-gray mb-2 text-sm">Email Address</label>
                  <input type="email" placeholder="your.email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 rounded-lg bg-white/70 border border-gray-200 text-text-dark transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="mb-4">
                  <label className="block text-text-gray mb-2 text-sm">Bio</label>
                  <textarea placeholder="Tell us about yourself..." rows="3" value={bio} onChange={(e) => setBio(e.target.value)} className="w-full p-3 rounded-lg bg-white/70 border border-gray-200 text-text-dark resize-y transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-text-gray mb-2 text-sm">Job Title</label>
                  <input type="text" placeholder="e.g. Software Engineer" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="w-full p-3 rounded-lg bg-white/70 border border-gray-200 text-text-dark transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="text-right mt-4">
                  <button onClick={handleSaveChanges} className="py-2.5 px-4 bg-gradient-to-r from-primary to-secondary border-none rounded-lg text-white font-semibold cursor-pointer inline-flex gap-2 items-center transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg"><i className="fas fa-save"></i> Save Changes</button>
                </div>
              </div>

              <div className="bg-white/90 p-6 rounded-2xl border border-gray-100 mb-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">Privacy & Security</h3>
                <div className="flex items-center gap-2 mb-3">
                  <label htmlFor="toggle-profile-private" className="relative inline-block w-12 h-6 mr-2 cursor-pointer">
                    <input type="checkbox" id="toggle-profile-private" checked={isProfilePrivate} onChange={() => setIsProfilePrivate(!isProfilePrivate)} className="sr-only peer" />
                    <span className="absolute inset-0 bg-gray-300 rounded-full transition-all duration-300 before:absolute before:content-[''] before:h-4 before:w-4 before:left-0.5 before:bottom-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-secondary peer-checked:before:translate-x-6"></span>
                  </label>
                  <span>Make profile private</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <label htmlFor="toggle-two-factor" className="relative inline-block w-12 h-6 mr-2 cursor-pointer">
                    <input type="checkbox" id="toggle-two-factor" checked={isTwoFactorEnabled} onChange={() => setIsTwoFactorEnabled(!isTwoFactorEnabled)} className="sr-only peer" />
                    <span className="absolute inset-0 bg-gray-300 rounded-full transition-all duration-300 before:absolute before:content-[''] before:h-4 before:w-4 before:left-0.5 before:bottom-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-secondary peer-checked:before:translate-x-6"></span>
                  </label>
                  <span>Enable two-factor authentication</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <label htmlFor="toggle-email-notifications" className="relative inline-block w-12 h-6 mr-2 cursor-pointer">
                    <input type="checkbox" id="toggle-email-notifications" checked={isEmailNotificationsEnabled} onChange={() => setIsEmailNotificationsEnabled(!isEmailNotificationsEnabled)} className="sr-only peer" />
                    <span className="absolute inset-0 bg-gray-300 rounded-full transition-all duration-300 before:absolute before:content-[''] before:h-4 before:w-4 before:left-0.5 before:bottom-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-secondary peer-checked:before:translate-x-6"></span>
                  </label>
                  <span>Email notifications</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <label htmlFor="toggle-practice-reminders" className="relative inline-block w-12 h-6 mr-2 cursor-pointer">
                    <input type="checkbox" id="toggle-practice-reminders" checked={isPracticeRemindersEnabled} onChange={() => setIsPracticeRemindersEnabled(!isPracticeRemindersEnabled)} className="sr-only peer" />
                    <span className="absolute inset-0 bg-gray-300 rounded-full transition-all duration-300 before:absolute before:content-[''] before:h-4 before:w-4 before:left-0.5 before:bottom-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-secondary peer-checked:before:translate-x-6"></span>
                  </label>
                  <span>Practice reminders</span>
                </div>
                <div className="text-right mt-4">
                  <button onClick={handleUpdatePrivacy} className="py-2.5 px-4 border border-primary rounded-lg bg-transparent text-primary cursor-pointer transition-all duration-300 inline-flex items-center gap-2 hover:bg-primary/10 hover:-translate-y-0.5"><i className="fas fa-shield-alt"></i> Update Privacy</button>
                </div>
              </div>
            </div>

            <div className="min-w-[260px] flex-1">
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-5 rounded-2xl mb-6 shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-white">Basic Subscription</h3>
                <p className="text-white/80 mb-4">You're currently on our basic plan with full access to all features</p>
                <ul className="list-none mb-4">
                  <li className="mb-2 flex items-center gap-2"><i className="fas fa-check text-white/90"></i> 10 hours of interview practice</li>
                  <li className="mb-2 flex items-center gap-2"><i className="fas fa-check text-white/90"></i> AI generated questions</li>
                  <li className="mb-2 flex items-center gap-2"><i className="fas fa-check text-white/90"></i> Basic AI feedback and scoring</li>
                  <li className="mb-2 flex items-center gap-2"><i className="fas fa-check text-white/90"></i> Voice + text hybrid mode</li>
                  <li className="mb-2 flex items-center gap-2"><i className="fas fa-check text-white/90"></i> Basic performance tracking</li>
                  <li className="mb-2 flex items-center gap-2"><i className="fas fa-check text-white/90"></i> Use anytime within 30 days</li>
                  <li className="mb-2 flex items-center gap-2"><i className="fas fa-check text-white/90"></i> Email support</li>
                </ul>
                <div className="text-right mt-4">
                  <button className="py-2.5 px-4 border border-white/50 rounded-lg bg-transparent text-white cursor-pointer transition-all duration-300 inline-flex items-center gap-2 hover:bg-white/10 hover:-translate-y-0.5"><i className="fas fa-crown"></i> Manage Subscription</button>
                </div>
              </div>

              <div className="bg-white/90 p-5 rounded-2xl border border-gray-100 mb-6 shadow-lg">
                <h4 className="text-xl font-bold text-text-dark mb-4">Your Activity</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-white/70 rounded-lg border border-gray-100">
                    <div className="text-xl font-bold text-primary mb-1">0</div>
                    <div className="text-text-gray text-sm">Interviews Completed</div>
                  </div>
                  <div className="text-center p-3 bg-white/70 rounded-lg border border-gray-100">
                    <div className="text-xl font-bold text-primary mb-1">0%</div>
                    <div className="text-text-gray text-sm">Average Score</div>
                  </div>
                  <div className="text-center p-3 bg-white/70 rounded-lg border border-gray-100">
                    <div className="text-xl font-bold text-primary mb-1">0h</div>
                    <div className="text-text-gray text-sm">Total Practice</div>
                  </div>
                  <div className="text-center p-3 bg-white/70 rounded-lg border border-gray-100">
                    <div className="text-xl font-bold text-primary mb-1">0</div>
                    <div className="text-text-gray text-sm">Skills Improved</div>
                  </div>
                </div>
              </div>

              <div className="border border-red-300 bg-red-50 p-6 rounded-2xl mb-6 shadow-lg">
                <h3 className="text-xl font-bold text-danger mb-4">Danger Zone</h3>
                <p className="text-text-gray mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                <div className="text-right mt-4 flex justify-end gap-2">
                  <button onClick={() => handleDangerAction('Sign Out')} className="py-2.5 px-4 border border-danger rounded-lg bg-transparent text-danger cursor-pointer transition-all duration-300 inline-flex items-center gap-2 hover:bg-red-100 hover:-translate-y-0.5"><i className="fas fa-sign-out-alt"></i> Sign Out</button>
                  <button onClick={() => handleDangerAction('Delete Account')} className="py-2.5 px-4 border border-danger rounded-lg bg-transparent text-danger cursor-pointer transition-all duration-300 inline-flex items-center gap-2 hover:bg-red-100 hover:-translate-y-0.5"><i className="fas fa-trash-alt"></i> Delete Account</button>
                </div>
              </div>

              <div className="bg-white/90 p-6 rounded-2xl border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">Data Management</h3>
                <p className="text-text-gray mb-4">Download a copy of your data or request account deletion</p>
                <div className="text-right mt-4">
                  <button className="py-2.5 px-4 border border-primary rounded-lg bg-transparent text-primary cursor-pointer transition-all duration-300 inline-flex items-center gap-2 hover:bg-primary/10 hover:-translate-y-0.5"><i className="fas fa-download"></i> Export Data</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
