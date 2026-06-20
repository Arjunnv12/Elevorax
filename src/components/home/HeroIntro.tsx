import { Play } from "lucide-react";
import elementImg from "../../data/Element.png";
import "../../styles/home/HeroIntro.css";

interface HeroIntroProps {
  onWatchDemoClick: () => void;
}

export default function HeroIntro({ onWatchDemoClick }: HeroIntroProps) {
  return (
    <div className="relative flex flex-col items-start text-left max-w-xl md:max-w-full lg:pr-6 min-h-[calc(100vh-140px)] justify-center py-8">
      {/* Hero Image + Heading */}
      <div className="relative w-full flex justify-center mt-35 mb-30">
        <img
          src={elementImg}
          alt="Elevorax Element Background"
          className="
            absolute
            top-1/2
            left-[65%]
            -translate-x-1/2
            -translate-y-1/2
            w-[159%]
            max-w-4xl
            h-auto
            opacity-98
            pointer-events-none
            z-0
            object-contain
            animate-element-float
          "
        />

        <h1
          id="hero-headline"
          className="
    relative
    z-10
    font-syne
    font-extrabold
    leading-[1.05]
    tracking-tight
    translate-x-22
  "
          style={{
            fontSize: "clamp(2.8rem, 4.4vw, 5rem)",
          }}
        >
          <span className="block" style={{ color: "#ffffff" }}>
            Kerala's
          </span>

          <span className="block word-first whitespace-nowrap">
            First Industrial
          </span>

          <span className="block word-learning whitespace-nowrap">
            Learning Hub
          </span>
        </h1>
      </div>

      {/* Subtext */}
      <p
        id="hero-subtext"
        className="
          text-gray-600
          text-lg
          md:text-xl
          leading-relaxed
          mb-8
          max-w-lg
          font-light
        "
      ></p>

      {/* Buttons */}
      <div
        className="
          flex
          flex-wrap
          items-center
          gap-4
          mt-6
          mb-12
          w-full
          sm:w-auto
        "
      >
        <a
          href="#courses"
          id="hero-explore-btn"
          className="btn-primary w-full sm:w-auto"
        >
          Explore Courses
        </a>

        <button
          id="hero-watch-btn"
          onClick={onWatchDemoClick}
          className="btn-outline w-full sm:w-auto"
        >
          <Play size={16} className="fill-slate-900" />
          Watch Demo
        </button>
      </div>

      {/* Stats */}
      <div
        id="hero-stats"
        className="
          w-full
          stats-row
          grid
          grid-cols-3
          gap-2
          sm:gap-4
          shadow-sm
          mb-6
        "
      >
        <div>
          <p className="text-lg sm:text-2xl font-bold text-slate-900 font-syne">
            2.4K+
          </p>
          <p className="text-xxs sm:text-xs text-gray-500 uppercase tracking-widest font-mono">
            Placed Students
          </p>
        </div>

        <div className="border-l border-slate-200 pl-4 sm:pl-6">
          <p className="text-lg sm:text-2xl font-bold text-[#059669] font-syne">
            98%
          </p>
          <p className="text-xxs sm:text-xs text-gray-500 uppercase tracking-widest font-mono">
            Success Rate
          </p>
        </div>

        <div className="border-l border-slate-200 pl-4 sm:pl-6">
          <p className="text-lg sm:text-2xl font-bold text-[#7c3aed] font-syne">
            50+
          </p>
          <p className="text-xxs sm:text-xs text-gray-500 uppercase tracking-widest font-mono">
            Expert Mentors
          </p>
        </div>
      </div>
    </div>
  );
}
