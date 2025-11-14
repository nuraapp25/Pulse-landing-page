import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  // Update this URL whenever needed
  const REDIRECT_URL = 'https://driver-docs-2.preview.emergentagent.com/dashboard/admin/files';

  const handleButtonClick = () => {
    window.open(REDIRECT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="landing-container">
      <div className="content-wrapper">
        {/* Button */}
        <button 
          className="nura-button"
          onClick={handleButtonClick}
          aria-label="Click here for Nura Pulse"
        >
          CLICK HERE FOR NURA PULSE
        </button>

        {/* Video */}
        <div className="video-container">
          <video
            className="video-player"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source 
              src="https://customer-assets.emergentagent.com/job_pulse-landing/artifacts/nzi0dr8q_Jo%20Jo%201.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;