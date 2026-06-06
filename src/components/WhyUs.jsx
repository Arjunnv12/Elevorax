import React from 'react';

export default function WhyUs() {
  return (
    <section id="why-choose-us" className="why-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Our Superpowers</span>
          <h2 className="section-title">Why Students Succeed at Elevorex</h2>
          <p className="section-desc">Our methodology focuses on outcome-oriented engineering, not passive lectures.</p>
        </div>
        
        <div className="why-grid">
          <div className="why-card glass-card">
            <div className="why-icon"><i className="fa-solid fa-laptop-code"></i></div>
            <h3>Project-Driven Curriculum</h3>
            <p>You don't study to write a test; you build real systems. Graduate with a portfolio hosted on cloud services.</p>
          </div>
          
          <div className="why-card glass-card">
            <div className="why-icon"><i className="fa-solid fa-user-group"></i></div>
            <h3>Mentoring from Senior Engineers</h3>
            <p>Learn tips, tricks, and best practices directly from active engineers and tech leads working at top tech firms.</p>
          </div>

          <div className="why-card glass-card">
            <div className="why-icon"><i className="fa-solid fa-bolt"></i></div>
            <h3>Accelerated Interview Prep</h3>
            <p>Mock interviews, system design workshops, and algorithmic drills run by career coaches to prep you for placements.</p>
          </div>
          
          <div className="why-card glass-card">
            <div className="why-icon"><i className="fa-solid fa-shield-halved"></i></div>
            <h3>AI Co-Pilot Integration</h3>
            <p>Develop using standard AI assistants. Learn how to write optimal prompts, review code, and speed up your workflow.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
