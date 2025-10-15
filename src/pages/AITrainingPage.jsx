import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "./AITrainingPage.css"; // Import the new CSS file

const AITrainingPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [voiceProgress, setVoiceProgress] = useState(25);
  const [isSaving, setIsSaving] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    let timer;
    if (isRecording) {
      timer = setInterval(() => {
        setRecordingTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  useEffect(() => {
    if (recordingTime > 0 && recordingTime <= 30) {
      const progress = Math.min(25 + Math.floor((recordingTime / 30) * 50), 75);
      setVoiceProgress(progress);
    }
  }, [recordingTime]);

  const handleRecord = () => {
    setIsRecording(true);
    setRecordingTime(0);
  };

  const handleStop = () => {
    setIsRecording(false);
    setVoiceProgress(75);
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setVoiceProgress(100);
      setIsSaving(false);
    }, 1500);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="dashboard-container">
      {/* Main Content */}
      <div className="main-content">
        <div className="dashboard-header">
          <button
            id="openSidebar"
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "var(--text-gray)",
            }}
            onClick={toggleSidebar}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="dashboard-content">
          {/* Page Header */}
          <div className="page-header">
            <div>
              <h1 className="gradient-text">AI Training</h1>
              <p>
                Train the AI to better understand your responses and provide
                more accurate feedback
              </p>
            </div>
            <button className="btn-primary">
              <i className="fas fa-brain"></i> Train AI
            </button>
          </div>

          {/* Training Progress */}
          <div className="training-progress">
            <div className="progress-card gradient-bg">
              <h3>
                <i className="fas fa-microphone"></i> Voice Recognition
              </h3>
              <div className="progress-info">
                <span>Training Progress</span>
                <span id="voice-progress">{voiceProgress}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${voiceProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="progress-card">
              <h3>
                <i className="fas fa-comment-alt"></i> Response Style
              </h3>
              <div className="progress-info">
                <span>Training Progress</span>
                <span id="style-progress">40%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "40%" }}></div>
              </div>
            </div>

            <div className="progress-card">
              <h3>
                <i className="fas fa-chart-line"></i> Accuracy
              </h3>
              <div className="progress-info">
                <span>AI Understanding</span>
                <span id="accuracy-progress">65%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "65%" }}></div>
              </div>
            </div>
          </div>

          {/* Voice Recognition Training */}
          <div className="settings-card">
            <h3>Voice Recognition Training</h3>
            <p>
              Read the sentences to help our AI better understand your accent
              and speech patterns
            </p>

            <div className="form-group">
              <label>Training Text</label>
              <textarea readOnly>
                Hello, my name is Alex Morgan. I am a software engineer with
                experience in JavaScript and Python. I enjoy solving complex
                problems and building scalable applications. My strengths
                include communication, teamwork, and analytical thinking.
              </textarea>
            </div>

            <div className="voice-recording">
              <div
                className={`recording-visualizer ${isRecording ? "recording" : ""
                  }`}
                id="recording-visualizer"
              >
                <div className="visualizer-bars" id="visualizer-bars">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="visualizer-bar"
                      style={{
                        height: isRecording
                          ? `${Math.floor(Math.random() * 30) + 5}px`
                          : "10px",
                      }}
                    ></div>
                  ))}
                </div>
                <div className="recording-time" id="recording-time">
                  {formatTime(recordingTime)}
                </div>
              </div>

              {!isRecording ? (
                <button
                  className="btn-outline"
                  id="record-btn"
                  onClick={handleRecord}
                >
                  <i className="fas fa-microphone"></i> Start Recording
                </button>
              ) : (
                <button
                  className="btn-danger"
                  id="stop-btn"
                  onClick={handleStop}
                >
                  <i className="fas fa-stop"></i> Stop
                </button>
              )}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <span style={{ color: "var(--text-gray)" }}>
                Training Completion:{" "}
                <span id="training-percent">{voiceProgress}%</span>
              </span>
              <button
                className="btn-primary"
                id="save-recording"
                onClick={handleSave}
                disabled={isSaving}
              >
                {isSaving ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : voiceProgress === 100 ? (
                  <i className="fas fa-check"></i>
                ) : (
                  <i className="fas fa-save"></i>
                )}
                {isSaving
                  ? "Saving..."
                  : voiceProgress === 100
                    ? "Saved!"
                    : "Save Recording"}
              </button>
            </div>
          </div>

          {/* Response Style Training */}
          <div className="settings-card">
            <h3>Response Style Training</h3>
            <p>
              Answer these questions to help the AI learn your communication
              style and preferences
            </p>

            <div className="training-questions">
              <div className="question-item">
                <h4>Question 1: Tell me about yourself</h4>
                <div className="form-group">
                  <textarea placeholder="Type your answer here...">
                    I'm a passionate software developer with 5 years of
                    experience in full-stack development. I specialize in
                    creating efficient and scalable web applications using
                    modern technologies.
                  </textarea>
                </div>
              </div>

              <div className="question-item">
                <h4>Question 2: What are your greatest strengths?</h4>
                <div className="form-group">
                  <textarea placeholder="Type your answer here...">
                    My greatest strengths include problem-solving, adaptability,
                    and effective communication. I enjoy collaborating with
                    teams to deliver high-quality solutions.
                  </textarea>
                </div>
              </div>

              <div className="question-item">
                <h4>Question 3: How do you handle challenging situations?</h4>
                <div className="form-group">
                  <textarea placeholder="Type your answer here...">
                    I approach challenges methodically, breaking them down into
                    manageable parts. I prioritize tasks and maintain clear
                    communication with stakeholders throughout the process.
                  </textarea>
                </div>
              </div>
            </div>

            <div className="card-actions">
              <button className="btn-primary">
                <i className="fas fa-save"></i> Save Answers
              </button>
            </div>
          </div>

          {/* Advanced Training Options */}
          <div className="settings-card">
            <h3>Advanced Training Options</h3>
            <p>Customize how the AI learns from your interactions</p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <div className="form-group">
                  <label>Learning Intensity</label>
                  <select
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <option>Balanced</option>
                    <option>Aggressive</option>
                    <option>Conservative</option>
                  </select>
                </div>
              </div>

              <div style={{ flex: 1, minWidth: "200px" }}>
                <div className="form-group">
                  <label>Feedback Style</label>
                  <select
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <option>Constructive</option>
                    <option>Direct</option>
                    <option>Encouraging</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="card-actions">
              <button className="btn-outline">
                <i className="fas fa-cog"></i> Apply Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITrainingPage;
