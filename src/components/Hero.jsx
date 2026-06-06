import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [currentStep, setCurrentStep] = useState(0);

  const stepsData = [
    { num: '01', name: 'Java', iconClass: 'fa-brands fa-java' },
    { num: '02', name: 'Python', iconClass: 'fa-brands fa-python' },
    { num: '03', name: 'AI & DS', iconClass: 'fa-solid fa-brain' },
    { num: '04', name: 'UX & Design', iconClass: 'fa-solid fa-wand-magic-sparkles' },
    { num: '05', name: 'Full Stack', iconClass: 'fa-solid fa-layer-group' },
    { num: '06', name: 'Cloud & DevOps', iconClass: 'fa-solid fa-cloud-arrow-up' },
    { num: '07', name: 'Real Projects', iconClass: 'fa-solid fa-rocket' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep < stepsData.length - 1) {
          return prevStep + 1;
        } else {
          return 0;
        }
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [stepsData.length]);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge-container">
            <span className="hero-badge"><i className="fa-solid fa-sparkles"></i> AI-Powered Tech Education</span>
          </div>
          <h1 className="hero-title">
            <span className="reveal-text">Transform Your Skills</span><br />
            <span className="reveal-text gradient-text">Learn. Build. Grow.</span>
          </h1>
          <p className="hero-description">
            Elevate your career with next-generation, AI-integrated learning. Master industry-demanded skills through hands-on labs, real-world projects, and expert mentoring.
          </p>
          <div className="hero-actions">
            <a href="#courses" className="btn btn-primary">Explore Courses <i className="fa-solid fa-arrow-right"></i></a>
            <a href="#about" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
        
        <div className="hero-animation-container">
          <div className="glow-sphere sphere-1"></div>
          <div className="glow-sphere sphere-2"></div>
          <div className="staircase-wrapper">
            <div className="staircase-grid" id="staircase-grid">
              <div className="staircase">
                {stepsData.map((step, index) => (
                  <div 
                    key={index}
                    className={`step ${currentStep === index ? 'active' : ''}`} 
                    data-step={index}
                    style={{ '--step-index': index }}
                  >
                    <div className="step-card">
                      <span className="step-num">{step.num}</span>
                      <span className="step-name">{step.name}</span>
                      <span className="step-icon"><i className={step.iconClass}></i></span>
                    </div>
                  </div>
                ))}

                <div 
                  className="student-avatar" 
                  id="student-avatar"
                  style={{ '--avatar-index': currentStep }}
                >
                  <div className="avatar-glow"></div>
                  <div className="avatar-model">
                    <div className="avatar-head"></div>
                    <div className="avatar-body"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
