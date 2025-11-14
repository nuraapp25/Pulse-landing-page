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

        {/* GIF */}
        <div className="video-container">
          <img
            className="video-player"
            src="https://customer-assets.emergentagent.com/job_pulse-landing/artifacts/ryysitql_Jo%20Jo%20G1.gif"
            alt="Nura Pulse Animation"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;