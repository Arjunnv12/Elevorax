import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Who We Are</span>
          <h2 className="section-title">Redefining Tech Education for the Future</h2>
          <p className="section-desc">Elevorex is not just a training center. We are an advanced learning ecosystem designed to bridge the gap between academic theory and real-world tech leadership.</p>
        </div>
        
        <div className="about-grid">
          <div className="about-img-container glass-card">
            <div className="tech-graphic">
              <div className="circle circle-outer"></div>
              <div className="circle circle-middle"></div>
              <div className="circle circle-inner"></div>
              <div className="core-hub"><i className="fa-solid fa-graduation-cap"></i></div>
            </div>
            <div className="floating-badge badge-1">
              <i className="fa-solid fa-microchip"></i>
              <div>
                <h4>AI Integrated</h4>
                <p>Smart learning tracks</p>
              </div>
            </div>
            <div className="floating-badge badge-2">
              <i className="fa-solid fa-award"></i>
              <div>
                <h4>100% Practical</h4>
                <p>Project-centric courses</p>
              </div>
            </div>
          </div>
          
          <div className="about-details">
            <h3 className="gradient-text subtitle-about">Empowering Students to Lead, Build, and Innovate</h3>
            <p>
              At Elevorex, we believe in active training. Our students don't just write simple code; they engineer robust products. By blending traditional computer science concepts with modern AI workflows, we prepare students for the demands of the 2026 tech industry.
            </p>
            <div className="about-features">
              <div className="about-feature-item">
                <span className="feature-icon"><i className="fa-solid fa-laptop-code"></i></span>
                <div>
                  <h4>Immersive Cloud Sandboxes</h4>
                  <p>Access virtual coding containers directly from your browser with zero configuration.</p>
                </div>
              </div>
              <div className="about-feature-item">
                <span className="feature-icon"><i className="fa-solid fa-user-astronaut"></i></span>
                <div>
                  <h4>AI Tutor Support</h4>
                  <p>Get instant feedback on your code and concept explanations, available 24/7.</p>
                </div>
              </div>
              <div className="about-feature-item">
                <span className="feature-icon"><i className="fa-solid fa-network-wired"></i></span>
                <div>
                  <h4>Global Alumni Network</h4>
                  <p>Connect with peers working at Amazon, Google, Microsoft, and leading startups.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
