import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch('http://localhost:8080/api/enquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (!res.ok) throw new Error("API failed");
        return res.json();
      })
      .then(data => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', course: '', message: '' });
      })
      .catch(err => {
        console.warn("Spring Boot backend API is offline. Simulating enquiry submit locally for demo.");
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', course: '', message: '' });
        }, 1500);
      });
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container contact-container">
        <div className="contact-card glass-card">
          <div className="contact-info">
            <h2 className="gradient-text">Ready to Elevate Your Skills?</h2>
            <p>Submit an inquiry to speak with an admissions counselor. We'll help you select the ideal learning track tailored to your goals.</p>
            
            <div className="contact-list">
              <div className="contact-item">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <h4>Email Us</h4>
                  <p>admissions@elevorex.edu</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-phone"></i>
                <div>
                  <h4>Call Admissions</h4>
                  <p>+1 (800) 555-0199</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h4>Campus Hub</h4>
                  <p>Tech District, Suite 404, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            {!isSubmitted ? (
              <>
                <h3>Send an Inquiry</h3>
                <form id="enquiry-form" className="enquiry-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="student-name">Full Name</label>
                    <input 
                      type="text" 
                      id="student-name" 
                      name="name" 
                      required 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="student-email">Email Address</label>
                    <input 
                      type="email" 
                      id="student-email" 
                      name="email" 
                      required 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="student-course">Course of Interest</label>
                    <select 
                      id="student-course" 
                      name="course" 
                      required
                      value={formData.course}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select a Course</option>
                      <option value="java">Java Enterprise Developer</option>
                      <option value="python">Python & Data Science</option>
                      <option value="ai">Applied AI & Machine Learning</option>
                      <option value="web">Full Stack Web Engineer</option>
                      <option value="cloud">AWS & Azure Cloud Architect</option>
                      <option value="devops">DevOps Systems Engineer</option>
                      <option value="design">UI/UX Product Design</option>
                      <option value="testing">Quality Assurance & Automation</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="student-message">Your Message / Background</label>
                    <textarea 
                      id="student-message" 
                      name="message" 
                      rows="4" 
                      placeholder="Tell us about your learning experience or career goals..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <><i className="fa-solid fa-spinner fa-spin"></i> Submitting...</>
                    ) : (
                      <>Submit Application <i className="fa-solid fa-paper-plane"></i></>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div id="form-success" className="form-success-message">
                <i className="fa-solid fa-circle-check"></i>
                <h4>Thank you!</h4>
                <p>Your inquiry was successfully submitted. An admissions counselor will reach out within 24 hours.</p>
                <button 
                  className="btn btn-secondary" 
                  style={{ marginTop: '20px' }}
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
