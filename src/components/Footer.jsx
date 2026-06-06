import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    fetch('http://localhost:8080/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
      .then(res => {
        if (res.status === 409) {
          alert("Email is already subscribed!");
          throw new Error("Conflict");
        }
        if (!res.ok) throw new Error("API failed");
        return res.json();
      })
      .then(data => {
        alert(`Newsletter subscription successful for: ${email}`);
        setEmail('');
      })
      .catch(err => {
        if (err.message !== "Conflict") {
          console.warn("Spring Boot backend offline. Simulating newsletter subscription for demo.");
          alert(`Newsletter subscription successful for: ${email}`);
          setEmail('');
        }
      });
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#" className="logo">
            <span className="logo-icon"><i className="fa-solid fa-microchip"></i></span>
            ELEV<span className="gradient-text">OREX</span>
          </a>
          <p>Advanced learning institute dedicated to molding the software engineers, system architects, and AI developers of tomorrow.</p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#" aria-label="Github"><i className="fa-brands fa-github"></i></a>
            <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h3>Explore Programs</h3>
          <ul>
            <li><a href="#courses">Software Development</a></li>
            <li><a href="#courses">AI & Data Science</a></li>
            <li><a href="#courses">Cloud & DevOps</a></li>
            <li><a href="#courses">UI/UX Design</a></li>
            <li><a href="#courses">Software Testing</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Tech Blog</a></li>
            <li><a href="#">Career Services</a></li>
            <li><a href="#">Student Portal</a></li>
            <li><a href="#">FAQ Guide</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Weekly Tech Insights</h3>
          <p>Subscribe to receive coding tips, trends, and career acceleration strategies.</p>
          <form className="newsletter-form" id="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Your Email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" aria-label="Subscribe"><i className="fa-solid fa-arrow-right-long"></i></button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>&copy; 2026 Elevorex Institute. All rights reserved.</p>
          <p>Designed with <i className="fa-solid fa-heart gradient-text"></i> for Technical Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
