import React, { useState, useEffect } from 'react';

const fallbackCourses = [
  {
    id: 1,
    title: "Java Enterprise Developer",
    description: "Master core & advanced Java, Spring Boot, Microservices, Hibernate, and database integrations.",
    category: "programming",
    duration: "12 Weeks",
    price: 599.0,
    oldPrice: 1199.0,
    highlights: ["REST APIs", "Spring Security"]
  },
  {
    id: 2,
    title: "Python Core & Data Science",
    description: "Start programming with Python. Progress to Pandas, NumPy, visualization, and statistical modeling.",
    category: "programming",
    duration: "10 Weeks",
    price: 499.0,
    oldPrice: 999.0,
    highlights: ["Data Analytics", "Web Scraping"]
  },
  {
    id: 3,
    title: "Applied AI & Machine Learning",
    description: "Deep dive into Deep Learning, NLP, Computer Vision, TensorFlow, PyTorch, and LLM fine-tuning.",
    category: "ai-ds",
    duration: "16 Weeks",
    price: 899.0,
    oldPrice: 1799.0,
    highlights: ["LLM Integration", "Neural Networks"]
  },
  {
    id: 4,
    title: "Full Stack Web Engineer",
    description: "Build dynamic web applications using MongoDB, Express, React, Node.js, and modern CSS/HTML.",
    category: "web-dev",
    duration: "14 Weeks",
    price: 699.0,
    oldPrice: 1399.0,
    highlights: ["React Architecture", "GraphQL & REST"]
  },
  {
    id: 5,
    title: "AWS & Azure Cloud Architect",
    description: "Master core cloud infrastructure, VPCs, identity management, serverless deployment, and cost scaling.",
    category: "devops-cloud",
    duration: "10 Weeks",
    price: 599.0,
    oldPrice: 1199.0,
    highlights: ["Serverless Tech", "Hybrid Architectures"]
  },
  {
    id: 6,
    title: "DevOps Systems Engineer",
    description: "Automate code pipelines with Git, Jenkins, Docker, Kubernetes, Ansible, and Terraform IAC.",
    category: "devops-cloud",
    duration: "12 Weeks",
    price: 699.0,
    oldPrice: 1399.0,
    highlights: ["Kubernetes (K8s)", "CI/CD Pipelines"]
  },
  {
    id: 7,
    title: "UI/UX Product Design",
    description: "Learn visual design, prototyping in Figma, user research, wireframing, and interactive design testing.",
    category: "design-test",
    duration: "8 Weeks",
    price: 399.0,
    oldPrice: 799.0,
    highlights: ["Interactive Figma", "User Testing"]
  },
  {
    id: 8,
    title: "Quality Assurance & Automation",
    description: "Learn manual testing basics. Build automated test suites with Selenium, Playwright, JUnit, and API testing.",
    category: "design-test",
    duration: "8 Weeks",
    price: 399.0,
    oldPrice: 799.0,
    highlights: ["Selenium Webdriver", "API Testing"]
  }
];

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    fetch('http://localhost:8080/api/courses')
      .then(res => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then(data => {
        if (data && data.length > 0) {
          setCourses(data);
        } else {
          setCourses(fallbackCourses);
        }
      })
      .catch(err => {
        console.warn("Backend Courses API not available. Using fallback mock courses.");
        setCourses(fallbackCourses);
      });
  }, []);

  const handleFilterChange = (filterVal) => {
    setActiveFilter(filterVal);
  };

  const getCourseTag = (title) => {
    const t = title.toLowerCase();
    if (t.includes('java')) return 'Java';
    if (t.includes('python')) return 'Python';
    if (t.includes('ai') || t.includes('machine learning')) return 'AI & ML';
    if (t.includes('full stack') || t.includes('web')) return 'MERN Stack';
    if (t.includes('cloud') || t.includes('aws')) return 'Cloud';
    if (t.includes('devops')) return 'DevOps';
    if (t.includes('ui/ux') || t.includes('design')) return 'UI/UX';
    if (t.includes('quality') || t.includes('testing') || t.includes('automation')) return 'QA Testing';
    return 'Tech';
  };

  const getTagClass = (tag) => {
    switch (tag) {
      case 'Java': return 'tag-java';
      case 'Python': return 'tag-python';
      case 'AI & ML': return 'tag-ai';
      case 'MERN Stack': return 'tag-web';
      case 'Cloud': return 'tag-cloud';
      case 'DevOps': return 'tag-devops';
      case 'UI/UX': return 'tag-design';
      case 'QA Testing': return 'tag-testing';
      default: return 'tag-testing';
    }
  };

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  return (
    <section id="courses" className="courses-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Our Programs</span>
          <h2 className="section-title">Explore Professional Courses</h2>
          <p className="section-desc">Carefully structured curriculums designed to take you from beginner to advanced professional.</p>
        </div>
        
        {/* Course Filter Tabs */}
        <div className="course-tabs-wrapper">
          <div className="course-tabs" id="course-tabs">
            <button 
              className={`tab-btn ${activeFilter === 'all' ? 'active' : ''}`} 
              onClick={() => handleFilterChange('all')}
            >
              All Courses
            </button>
            <button 
              className={`tab-btn ${activeFilter === 'programming' ? 'active' : ''}`} 
              onClick={() => handleFilterChange('programming')}
            >
              Programming
            </button>
            <button 
              className={`tab-btn ${activeFilter === 'ai-ds' ? 'active' : ''}`} 
              onClick={() => handleFilterChange('ai-ds')}
            >
              AI & Data Science
            </button>
            <button 
              className={`tab-btn ${activeFilter === 'web-dev' ? 'active' : ''}`} 
              onClick={() => handleFilterChange('web-dev')}
            >
              Web Development
            </button>
            <button 
              className={`tab-btn ${activeFilter === 'devops-cloud' ? 'active' : ''}`} 
              onClick={() => handleFilterChange('devops-cloud')}
            >
              DevOps & Cloud
            </button>
            <button 
              className={`tab-btn ${activeFilter === 'design-test' ? 'active' : ''}`} 
              onClick={() => handleFilterChange('design-test')}
            >
              Design & Testing
            </button>
          </div>
        </div>
        
        {/* Course Cards Grid */}
        <div className="courses-grid" id="courses-grid">
          {filteredCourses.map(course => {
            const tag = getCourseTag(course.title);
            const tagClass = getTagClass(tag);
            return (
              <div key={course.id} className="course-card glass-card">
                <div className="course-card-inner">
                  <div className="course-header">
                    <span className={`course-tag ${tagClass}`}>{tag}</span>
                    <span className="course-duration"><i className="fa-regular fa-clock"></i> {course.duration}</span>
                  </div>
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-desc">{course.description}</p>
                  <div className="course-highlights">
                    {course.highlights && course.highlights.map((highlight, idx) => (
                      <span key={idx}><i className="fa-solid fa-circle-check"></i> {highlight}</span>
                    ))}
                  </div>
                  <div className="course-footer">
                    <div className="course-price">${Math.round(course.price)} <span className="old-price">${Math.round(course.oldPrice)}</span></div>
                    <a href="#contact" className="btn btn-card">Enroll Now <i className="fa-solid fa-chevron-right"></i></a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
