import React, { useState, useEffect, useRef } from 'react';

export default function Stats() {
  const statsSectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    placementRate: 0,
    studentsTrained: 0,
    highestPackage: 0,
    hiringPartners: 0
  });

  const targets = {
    placementRate: 95,
    studentsTrained: 5000,
    highestPackage: 45,
    hiringPartners: 150
  };

  useEffect(() => {
    const section = statsSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          animateNumbers();
          setHasAnimated(true);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(section);

    function animateNumbers() {
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function: easeOutQuad
        const easeProgress = progress * (2 - progress);

        setCounts({
          placementRate: Math.floor(easeProgress * targets.placementRate),
          studentsTrained: Math.floor(easeProgress * targets.studentsTrained),
          highestPackage: Math.floor(easeProgress * targets.highestPackage),
          hiringPartners: Math.floor(easeProgress * targets.hiringPartners)
        });

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          // Set exact final numbers
          setCounts(targets);
        }
      }

      requestAnimationFrame(update);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [hasAnimated]);

  return (
    <section id="stats" className="stats-section section-padding" ref={statsSectionRef}>
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-num">{counts.placementRate}</div>
            <div className="stat-symbol">%</div>
            <p className="stat-label">Placement Rate</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-num">{counts.studentsTrained}</div>
            <div className="stat-symbol">+</div>
            <p className="stat-label">Students Trained</p>
          </div>

          <div className="stat-card">
            <div className="stat-num">{counts.highestPackage}</div>
            <div className="stat-symbol">LPA</div>
            <p className="stat-label">Highest Package</p>
          </div>

          <div className="stat-card">
            <div className="stat-num">{counts.hiringPartners}</div>
            <div className="stat-symbol">+</div>
            <p className="stat-label">Hiring Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}
