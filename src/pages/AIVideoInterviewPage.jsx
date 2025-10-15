import React, { useState, useEffect } from 'react';
import './AIVideoInterviewPage.css';

const AIVideoInterviewPage = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoEnabled, setIsVideoEnabled] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [settings] = useState({
        jobRole: 'Software Developer',
        duration: '30 minutes',
        difficulty: 'Intermediate',
        language: 'English (US)',
        interviewType: 'Technical Interview'
    });

    // Timer functionality
    useEffect(() => {
        let interval;
        if (isRecording && !isPaused) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isRecording, isPaused]);

    // Format timer to MM:SS
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const startNewSession = () => {
        setTimer(0);
        setIsRecording(true);
        setIsPaused(false);
        setCurrentQuestion('Tell me about your experience with React development.');
    };

    const handlePause = () => {
        setIsPaused(true);
    };

    const handleResume = () => {
        setIsPaused(false);
    };

    const handleStop = () => {
        setIsRecording(false);
        setIsPaused(false);
        setTimer(0);
        setCurrentQuestion('');
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const toggleVideo = () => {
        setIsVideoEnabled(!isVideoEnabled);
    };

    return (
        <div className="ai-interview-page">
            <div className="interview-header">
                <div className="header-content">
                    <h1>AI Video Interview</h1>
                    <p className="description">
                        Practice your interview skills with our hyper-realistic AI interviewer.
                        Get real-time feedback and improve your confidence.
                    </p>
                </div>
                {!isRecording && (
                    <button className="start-button" onClick={startNewSession}>
                        <span className="start-icon">▶</span>
                        <span>Start Interview</span>
                    </button>
                )}
            </div>

            <div className="session-information">
                <div className="info-icon">ℹ️</div>
                <h2>Session Information</h2>
                <p>
                    This session will focus on technical questions for a Software Developer position.
                    The AI will evaluate your responses and provide feedback on your communication skills,
                    technical knowledge, and overall presentation.
                </p>
            </div>

            <div className="interview-container">
                <div className="video-section">
                    <div className="video-grid">
                        <div className="video-feed interviewer-video">
                            <div className="video-header">
                                <div className="participant-info">
                                    <span className="participant-status"></span>
                                    <h3>AI Interviewer</h3>
                                </div>
                                <span className="status-badge live">Live & Analyzing</span>
                            </div>
                            <div className="video-frame">
                                {isRecording && (
                                    <div className="interviewer-overlay">
                                        <div className="connection-status">
                                            <span className="status-dot"></span>
                                            <span>Connected</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="video-feed user-video">
                            <div className="video-header">
                                <div className="participant-info">
                                    <span className="participant-status"></span>
                                    <h3>You</h3>
                                </div>
                                <span className="status-badge active">Active</span>
                            </div>
                            <div className="video-frame">
                                {isRecording && (
                                    <div className="user-overlay">
                                        <div className="recording-status">
                                            <span className="status-dot recording"></span>
                                            <span>Recording</span>
                                        </div>
                                    </div>
                                )}
                                {!isVideoEnabled && (
                                    <div className="video-disabled">
                                        <span className="avatar">You</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="video-controls">
                        <div className="control-section">
                            <div className="main-controls">
                                <button
                                    className={`control-btn ${!isVideoEnabled ? 'disabled' : ''}`}
                                    onClick={toggleVideo}
                                    title={isVideoEnabled ? 'Disable Video' : 'Enable Video'}
                                >
                                    <span className="control-icon">
                                        {isVideoEnabled ? '🎥' : '🚫'}
                                    </span>
                                </button>
                                <button
                                    className={`control-btn ${isMuted ? 'disabled' : ''}`}
                                    onClick={toggleMute}
                                    title={isMuted ? 'Unmute' : 'Mute'}
                                >
                                    <span className="control-icon">
                                        {isMuted ? '🔇' : '🎤'}
                                    </span>
                                </button>
                                {isRecording && (
                                    <>
                                        {isPaused ? (
                                            <button
                                                className="control-btn primary"
                                                onClick={handleResume}
                                                title="Resume"
                                            >
                                                <span className="control-icon">▶</span>
                                            </button>
                                        ) : (
                                            <button
                                                className="control-btn primary"
                                                onClick={handlePause}
                                                title="Pause"
                                            >
                                                <span className="control-icon">⏸</span>
                                            </button>
                                        )}
                                        <button
                                            className="control-btn stop"
                                            onClick={handleStop}
                                            title="End Interview"
                                        >
                                            <span className="control-icon">⏹</span>
                                        </button>
                                    </>
                                )}
                            </div>
                            {isRecording && (
                                <div className="timer">
                                    <span className="timer-icon">⏱</span>
                                    {formatTime(timer)}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {isRecording && currentQuestion && (
                    <div className="current-question">
                        <div className="question-header">
                            <span className="question-icon">💭</span>
                            <h3>Current Question</h3>
                        </div>
                        <p>{currentQuestion}</p>
                    </div>
                )}

                <div className="interview-info">
                    <div className="info-grid">
                        <div className="info-card">
                            <span className="info-icon">💼</span>
                            <h4>Role</h4>
                            <p>{settings.jobRole}</p>
                        </div>
                        <div className="info-card">
                            <span className="info-icon">⏱</span>
                            <h4>Duration</h4>
                            <p>{settings.duration}</p>
                        </div>
                        <div className="info-card">
                            <span className="info-icon">📊</span>
                            <h4>Level</h4>
                            <p>{settings.difficulty}</p>
                        </div>
                        <div className="info-card">
                            <span className="info-icon">🌐</span>
                            <h4>Language</h4>
                            <p>{settings.language}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIVideoInterviewPage;