import { levels } from "../../data/levels";
import "../../styles/home/LevelSidebar.css";

interface LevelSidebarProps {
  activeIdx: number;
}

export default function LevelSidebar({ activeIdx }: LevelSidebarProps) {
  return (
    <div className="flex flex-col items-start text-left max-w-xl md:max-w-full lg:pr-6 py-20 mt-12 border-t border-slate-200">
      <span className="text-xs font-mono text-[#059669] uppercase tracking-widest bg-[#059669]/5 px-3 py-1 rounded-full border border-[#059669]/10 mb-4">
        Interactive Learning Journey
      </span>
      <h2 className="font-syne text-3xl sm:text-5xl leading-tight text-slate-900 mb-6">
        Scale The <br />
        <span className="bg-gradient-to-r from-[#059669] to-[#7c3aed] bg-clip-text text-transparent">
          Elevorax Path.
        </span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-light max-w-md">
        Watch the avatar ascend from writing syntax basics at Floor 00 to
        unlocking career placements as you scroll down the page.
      </p>

      {/* Level List */}
      <div className="level-sidebar">
        {levels.map((level, idx) => {
          const isActive = activeIdx === idx;
          return (
            <div
              key={idx}
              className={`level-card-custom ${isActive ? "level-card-active" : "opacity-35"}`}
              style={{
                boxShadow: isActive ? `0 4px 20px -5px ${level.glow}` : "none",
              }}
            >
              {/* Status Indicator */}
              <div className="flex flex-col items-center">
                <span
                  className="text-xs font-mono font-bold leading-none mb-2"
                  style={{ color: level.color }}
                >
                  {level.num}
                </span>
                <div
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: isActive
                      ? level.color
                      : "rgba(15, 23, 42, 0.1)",
                    boxShadow: isActive ? `0 0 10px ${level.color}` : "none",
                  }}
                />
              </div>

              {/* Level text details */}
              <div>
                <h3 className="text-sm font-bold font-syne text-slate-900 tracking-wide flex items-center gap-2">
                  {level.title}
                  <span className="text-xs font-normal text-gray-500 font-space">
                    &mdash; {level.subtitle}
                  </span>
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-light mt-1 leading-relaxed">
                  {level.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
