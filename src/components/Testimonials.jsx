import React, { useState, useEffect, useCallback } from 'react';

const testimonialsData = [
  {
    name: "Rohan Mehta",
    role: "Cloud Devops Graduate",
    text: "Elevorex changed my career trajectory. The Cloud and DevOps program was incredibly practical. Building multiple Kubernetes clusters and automation pipelines helped me clear the interviews at my dream company!",
    placement: "Placed at AWS (Cloud Engineer)",
    stars: 5
  },
  {
    name: "Neha Sharma",
    role: "AI Engineer Graduate",
    text: "The AI and ML course was exhaustive. The mentors from industry guided us on state-of-the-art frameworks like PyTorch and Hugging Face. The project-centric learning structure was extremely challenging but highly rewarding.",
    placement: "Placed at Nvidia (ML Associate)",
    stars: 5
  },
  {
    name: "Amit Patil",
    role: "Full Stack Graduate",
    text: "I had zero coding experience before joining Elevorex. The MERN Stack course is so well structured that it holds your hand through basic HTML and JavaScipt all the way to complex React deployments and custom APIs.",
    placement: "Placed at Oracle (App Dev)",
    stars: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  }, []);

  // Autoplay hook
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="testimonials-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Success Stories</span>
          <h2 className="section-title">What Our Alumni Say</h2>
          <p className="section-desc">Join thousands of students who have fast-tracked their technical careers.</p>
        </div>
        
        <div className="testimonials-carousel-wrapper">
          <button className="carousel-control prev" id="prev-testimonial" aria-label="Previous testimonial" onClick={prevSlide}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          
          <div className="testimonials-carousel">
            <div 
              className="testimonial-track" 
              id="testimonial-track"
              style={{ transform: `translateX(${-currentIndex * 100}%)` }}
            >
              {testimonialsData.map((t, idx) => (
                <div 
                  key={idx} 
                  className={`testimonial-slide ${currentIndex === idx ? 'active' : ''}`}
                >
                  <div className="testimonial-card glass-card">
                    <div className="testimonial-header">
                      <div className="user-info">
                        <div className="user-avatar-placeholder"><i className="fa-solid fa-user-graduate"></i></div>
                        <div>
                          <h4>{t.name}</h4>
                          <p>{t.role}</p>
                        </div>
                      </div>
                      <div className="stars">
                        {[...Array(t.stars)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star"></i>
                        ))}
                      </div>
                    </div>
                    <p className="testimonial-text">"{t.text}"</p>
                    <div className="placement-badge">{t.placement}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-control next" id="next-testimonial" aria-label="Next testimonial" onClick={nextSlide}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="carousel-dots" id="carousel-dots">
          {testimonialsData.map((_, idx) => (
            <span 
              key={idx} 
              className={`dot ${currentIndex === idx ? 'active' : ''}`} 
              onClick={() => handleDotClick(idx)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
