import { CheckCircle2, ArrowRight } from "lucide-react";
import "../../styles/sections/Courses.css";

interface CoursesProps {
  triggerEnroll: (courseName: string) => void;
}

export default function Courses({ triggerEnroll }: CoursesProps) {
  const javaFeatures = [
    "Core Java & Object-Oriented Design",
    "Spring Boot & REST APIs",
    "Data Persistence with Hibernate & JPA",
    "Containers & Cloud: Docker / AWS",
    "Data Structures & Algorithms",
    "Technical Coding Mock Interviews",
  ];

  const pythonFeatures = [
    "Python Syntax, Generators & Core",
    "Web APIs with Django & FastAPI",
    "Data Analysis: Pandas & NumPy",
    "Machine Learning & Deep Learning",
    "Generative AI integrations & LLM APIs",
    "Industrial AI Capstone Project",
  ];

  const bundleFeatures = [
    "Full Java Full-Stack curriculum details Included",
    "Full Python & AI/ML curriculum details Included",
    "Unified multi-stack system architecture designs",
    "Dual-stack GitHub projects references portfolio",
    "Direct Senior Executive Interview referrals",
    "Guaranteed Priority Mentorship access",
  ];

  return (
    <section
      id="courses"
      className="relative py-24 bg-[#ffffff] overflow-hidden"
    >
      {/* Glow blobs */}
      <div className="absolute top-[80%] left-[20%] w-[400px] h-[400px] bg-[#7c3aed]/3 rounded-full blur-[50px] pointer-events-none" />

      <div className="w-full px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0 mb-16">
          <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-widest bg-[#7c3aed]/5 px-3 py-1 rounded-full border border-[#7c3aed]/10">
            EXPLORE SPECIALIZATIONS
          </span>
          <h2 className="font-syne text-3xl sm:text-5xl text-gray-900 mt-4 mb-4">
            Our Professional Tracks
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-light">
            Highly intensive programs curated and delivered by veteran tech
            leads. Pick your language, master your environment.
          </p>
        </div>

        {/* Three course cards in responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 — Java Full-Stack Developer Track */}
          <div className="rounded-2xl bg-white border border-gray-200/80 shadow-md hover:shadow-xl p-8 card-lift card-java-hover flex flex-col justify-between h-full transition-shadow duration-300">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#d97706] text-xs font-mono font-medium mb-6">
                <span>☕</span> Java Development
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Java Full-Stack Developer Track
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                Build scalable, enterprise-ready microservices. Master Java
                ecosystem libraries and backend systems architecture.
              </p>
              <div className="space-y-3 mb-8">
                {javaFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="text-[#d97706] shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700 text-xs sm:text-sm text-left">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="pt-6 border-t border-gray-100 flex items-baseline justify-between mb-6">
                <span className="text-gray-500 font-mono text-xs uppercase tracking-wider">
                  Tuition Fees
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                    ₹24,999
                  </span>
                  <span className="text-gray-500 text-xs">INR</span>
                </div>
              </div>
              <button
                id="enroll-java-btn"
                onClick={() => triggerEnroll("Java Full-Stack Developer Track")}
                className="w-full py-3.5 rounded-xl bg-[#f59e0b] hover:bg-[#e08e00] text-black font-bold tracking-wide transition-colors duration-300 transform active:scale-95 flex items-center justify-center gap-2"
              >
                Enroll Now <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Card 2 — Python & AI/ML Developer Track */}
          <div className="rounded-2xl bg-white border border-gray-200/80 shadow-md hover:shadow-xl p-8 card-lift card-python-hover flex flex-col justify-between h-full transition-shadow duration-300">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20 text-[#047857] text-xs font-mono font-medium mb-6">
                <span>🐍</span> Python Development
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Python &amp; AI/ML Developer Track
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                Harness the power of Python, high-volume server backends, and
                full-scale Deep Learning pipelines.
              </p>
              <div className="space-y-3 mb-8">
                {pythonFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="text-[#047857] shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700 text-xs sm:text-sm text-left">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="pt-6 border-t border-gray-100 flex items-baseline justify-between mb-6">
                <span className="text-gray-500 font-mono text-xs uppercase tracking-wider">
                  Tuition Fees
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                    ₹27,999
                  </span>
                  <span className="text-gray-500 text-xs">INR</span>
                </div>
              </div>
              <button
                id="enroll-python-btn"
                onClick={() => triggerEnroll("Python & AI/ML Developer Track")}
                className="w-full py-3.5 rounded-xl bg-[#00ff88] hover:bg-[#00e677] text-black font-bold tracking-wide transition-colors duration-300 transform active:scale-95 flex items-center justify-center gap-2"
              >
                Enroll Now <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Card 3 — Java + Python Power Bundle */}
          <div className="rounded-2xl bg-white border border-gray-200/80 shadow-md hover:shadow-xl p-8 card-lift card-bundle-hover flex flex-col justify-between h-full relative transition-shadow duration-300">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#7c3aed] text-xs font-mono font-medium mb-6">
                <span>⚡</span> Full Bundle
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Java + Python Power Bundle
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                Become a dual-stack powerhouse. Acquire elite skills covering
                everything from Java scale to Python AI dominance.
              </p>
              <div className="space-y-3 mb-8">
                {bundleFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      className="text-[#7c3aed] shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700 text-xs sm:text-sm text-left font-semibold">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10">
              <div className="pt-6 border-t border-gray-100 flex items-baseline justify-between mb-6">
                <div className="flex flex-col text-left">
                  <span className="text-gray-400 font-mono text-xxs uppercase tracking-wider line-through">
                    ₹52,998
                  </span>
                  <span className="text-[#7c3aed] font-mono text-[10px] uppercase tracking-wider font-semibold">
                    Special Pricing
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                    ₹44,999
                  </span>
                  <span className="text-gray-500 text-xs">INR</span>
                </div>
              </div>
              <button
                id="enroll-bundle-btn"
                onClick={() => triggerEnroll("Java + Python Power Bundle")}
                className="w-full py-3.5 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold tracking-wide transition-colors duration-300 transform active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-[#7c3aed]/20"
              >
                Enroll Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
