import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Layout & Section Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Courses from "./components/sections/Courses";
import Reviews from "./components/sections/Reviews";

// Home Section Components
import HeroIntro from "./components/home/HeroIntro";
import LevelSidebar from "./components/home/LevelSidebar";
import ElevatorScene from "./components/home/ElevatorScene";

// Modals
import EnrollModal from "./components/modals/EnrollModal";
import DemoModal from "./components/modals/DemoModal";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // Navigation states
  const [activeSection, setActiveSection] = useState("home");

  // Enrollment modal states
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(
    "Java + Python Power Bundle",
  );

  // Demo modal states
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  // Scroll tracking for elevator animation
  const [progress, setProgress] = useState(0);

  // References for elements
  const boyRef = useRef<HTMLDivElement>(null);

  // Scroll, Resize, and GSAP ScrollTrigger sequence
  useEffect(() => {
    // 1. General Active Section highlighter on scroll
    const handleScroll = () => {
      const sections = ["home", "about", "courses", "reviews"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    // 2. Coordinated GSAP ScrollTrigger timeline for sticky escalator
    const ctx = gsap.context(() => {
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          onUpdate: (self) => {
            setProgress(self.progress);
          },
        },
      });

      scrollTimeline
        .fromTo(
          "#boy-character-wrapper",
          { x: 0, y: 0 },
          { x: 15, y: 0, duration: 0.15, ease: "none" },
        )
        .to("#boy-character-wrapper", {
          x: 215,
          y: -310,
          duration: 0.7,
          ease: "none",
        })
        .to("#boy-character-wrapper", {
          x: 230,
          y: -310,
          duration: 0.15,
          ease: "none",
        });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      ctx.revert();
    };
  }, []);

  const getActiveLevelIndex = (prog: number) => {
    if (prog >= 0.85) return 4;
    if (prog >= 0.6) return 3;
    if (prog >= 0.35) return 2;
    if (prog >= 0.15) return 1;
    return 0;
  };

  const activeIdx = getActiveLevelIndex(progress);
  const isGreenGlow = progress >= 0.8;

  const triggerEnroll = (courseName: string) => {
    setSelectedCourse(courseName);
    setEnrollModalOpen(true);
  };

  return (
    <div className="min-h-screen app-container text-gray-800 font-space antialiased selection:bg-slate-800 selection:text-white">
      {/* 1. FIXED NAVIGATION BAR */}
      <Navbar activeSection={activeSection} triggerEnroll={triggerEnroll} />

      {/* 2. HERO & LEVELS SECTION */}
      <section
        id="home"
        className="relative pt-[72px] pb-16"
        style={{ overflowX: "clip", overflowY: "visible" }}
      >
        {/* Decorative ambient blobs */}
        <div className="hero-radial-blob" />
        <div className="absolute top-[60%] right-[10%] w-[500px] height-[500px] background-[radial-gradient(circle,rgba(0,255,136,0.04)_0%,transparent_70%)] filter blur-[50px] pointer-events-none z-0" />
        <div className="absolute top-[30%] left-[5%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(124,58,237,0.05)_0%,transparent_70%)] filter blur-[40px] pointer-events-none" />
        <div className="absolute bottom-[30%] right-[5%] w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(0,255,136,0.04)_0%,transparent_70%)] filter blur-[50px] pointer-events-none" />

        <div
          id="home-scroll-container"
          className="w-full px-6 lg:px-12 flex flex-col md:flex-row gap-16 md:gap-34 items-start relative z-10"
        >
          {" "}
          {/* LEFT HALF (text/intro & levels) */}
          <div className="w-full md:w-1/2 flex flex-col my-8 px-4 sm:px-6">
            <HeroIntro onWatchDemoClick={() => setDemoModalOpen(true)} />
            <LevelSidebar activeIdx={activeIdx} />
          </div>
          {/* RIGHT HALF - STICKY ESCALATOR */}
          <ElevatorScene
            boyRef={boyRef}
            progress={progress}
            activeIdx={activeIdx}
            isGreenGlow={isGreenGlow}
          />
        </div>
      </section>

      {/* Decorative gradient section divider */}
      <div className="section-divider" />

      {/* 3. ABOUT SECTION */}
      <About />

      {/* Decorative gradient section divider */}
      <div className="section-divider" />

      {/* 4. COURSES SECTION */}
      <Courses triggerEnroll={triggerEnroll} />

      {/* Decorative gradient section divider */}
      <div className="section-divider" />

      {/* 5. TESTIMONIALS SECTION */}
      <Reviews />

      {/* Decorative gradient section divider */}
      <div className="section-divider" />

      {/* 6. FOOTER */}
      <Footer />

      {/* SPECIAL ACTIVE ENROLL NOW DIALOG MODAL */}
      <EnrollModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        selectedCourse={selectedCourse}
      />

      {/* 8. VIDEO DEMO MODAL PLAYER */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
