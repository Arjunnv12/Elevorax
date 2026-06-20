import React from "react";
import "../../styles/home/ElevatorScene.css";
import { ChevronDown } from "lucide-react";

interface ElevatorSceneProps {
  boyRef: React.RefObject<HTMLDivElement>;
  progress: number;
  activeIdx: number;
  isGreenGlow: boolean;
}

export default function ElevatorScene({
  boyRef,
  progress,
  activeIdx,
  isGreenGlow,
}: ElevatorSceneProps) {
  // Determine current floor text based on milestones
  const getLevelLabel = (prog: number) => {
    if (prog >= 0.85) return "LEVEL 04 — CAREER";
    if (prog >= 0.6) return "LEVEL 03 — PROJECTS";
    if (prog >= 0.35) return "LEVEL 02 — ADVANCED";
    if (prog >= 0.15) return "LEVEL 01 — CORE";
    return "LEVEL 00 — BASICS";
  };

  return (
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:sticky md:top-[85px] py-8 z-20 self-start">
      {/* Visual background elements */}
      <div className="absolute inset-0 bg-[#07070b]/20 rounded-3xl blur-3xl pointer-events-none z-0" />

      {/* Container bounds (340x520px) */}
      <div
        id="elevator-scene-container"
        className="relative w-[340px] h-[520px] bg-[#0c0c14]/45 border border-white/5 rounded-2xl flex flex-col justify-between overflow-hidden shadow-2xl grid-pattern bento-panel z-10"
        style={{ padding: "20px 0" }}
      >
        {/* Java floating snippet (Top-Left) */}
        <div
          id="java-snippet"
          className="code-snippet floating-snippet top-left-snippet max-w-[190px] transition-all duration-500"
          style={{
            top: "-35px",
            left: "-50px",
            opacity: activeIdx >= 1 ? 0.95 : 0.1,
            borderColor: activeIdx >= 1 ? "#7c3aed" : "rgba(255,255,255,0.05)",
            transform: activeIdx >= 1 ? "scale(1)" : "scale(0.95)",
          }}
        >
          <span style={{ color: "#ec4899" }}>public class</span>{" "}
          <span style={{ color: "#00ff88" }}>Dev</span> {"{"} <br />
          <span style={{ color: "#7c3aed", paddingLeft: "12px" }}>
            void
          </span>{" "}
          <span style={{ color: "#f59e0b" }}>rise</span>() {"{}"} <br />
          {"}"}
        </div>

        {/* Python floating snippet (Bottom-Right) */}
        <div
          id="python-snippet"
          className="code-snippet floating-snippet bottom-right-snippet max-w-[190px] transition-all duration-500"
          style={{
            bottom: "30px",
            right: "-50px",
            opacity: activeIdx >= 3 ? 0.95 : 0.1,
            borderColor: activeIdx >= 3 ? "#00ff88" : "rgba(255,255,255,0.05)",
            transform: activeIdx >= 3 ? "scale(1)" : "scale(0.95)",
          }}
        >
          <span style={{ color: "#ec4899" }}>def</span>{" "}
          <span style={{ color: "#f59e0b" }}>level_up</span>(): <br />
          <span style={{ color: "#7c3aed", paddingLeft: "12px" }}>
            return
          </span>{" "}
          <span style={{ color: "#00ff88" }}>"hired"</span>
        </div>

        {/* Glowing top-floor indicator */}
        <div className="w-full flex flex-col items-center px-4 relative z-20">
          <div className="text-[10px] font-mono text-[#00ff88] tracking-widest uppercase mb-1">
            &uarr; CAREER LEVEL &uarr;
          </div>
          <div
            className="w-[120px] h-2 rounded-full transition-all duration-500"
            style={{
              backgroundColor: isGreenGlow
                ? "#00ff88"
                : "rgba(0, 255, 136, 0.25)",
              boxShadow: isGreenGlow
                ? "0 0 15px #00ff88, 0 0 5px rgba(0, 255, 136, 0.5)"
                : "0 0 6px rgba(0, 255, 136, 0.1)",
            }}
          />
        </div>

        {/* Core Scene Area / Escalator structure vector viewport */}
        <div className="absolute inset-0 w-full h-[520px] pointer-events-none z-10">
          <svg viewBox="0 0 340 520" className="w-full h-full absolute inset-0">
            <defs>
              <linearGradient
                id="stepGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00ff88" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
              <linearGradient
                id="railGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00ff88" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient
                id="stepRiserGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#1e1e2f" />
                <stop offset="100%" stopColor="#0a0a12" />
              </linearGradient>
              <linearGradient
                id="stepTreadGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00ff88" />
                <stop offset="50%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
              <linearGradient
                id="portalCenterGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00ff88" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Mechanical gears background (spinning gears that drive the escalator) */}
            <g className="spinning-gear" transform="translate(50, 460)">
              <circle
                cx="0"
                cy="0"
                r="16"
                fill="#131324"
                stroke="#7c3aed"
                strokeWidth="2"
              />
              <circle
                cx="0"
                cy="0"
                r="10"
                fill="#09090f"
                stroke="#00ff88"
                strokeWidth="1"
              />
              <line
                x1="-16"
                y1="0"
                x2="14"
                y2="0"
                stroke="#7c3aed"
                strokeWidth="3"
              />
              <line
                x1="0"
                y1="-16"
                x2="0"
                y2="16"
                stroke="#7c3aed"
                strokeWidth="3"
              />
              <line
                x1="-11"
                y1="-11"
                x2="11"
                y2="11"
                stroke="#7c3aed"
                strokeWidth="2"
              />
              <line
                x1="-11"
                y1="11"
                x2="11"
                y2="-11"
                stroke="#7c3aed"
                strokeWidth="2"
              />
            </g>

            <g className="spinning-gear" transform="translate(280, 150)">
              <circle
                cx="0"
                cy="0"
                r="16"
                fill="#131324"
                stroke="#7c3aed"
                strokeWidth="2"
              />
              <circle
                cx="0"
                cy="0"
                r="10"
                fill="#09090f"
                stroke="#00ff88"
                strokeWidth="1"
              />
              <line
                x1="-16"
                y1="0"
                x2="14"
                y2="0"
                stroke="#7c3aed"
                strokeWidth="3"
              />
              <line
                x1="0"
                y1="-16"
                x2="0"
                y2="16"
                stroke="#7c3aed"
                strokeWidth="3"
              />
              <line
                x1="-11"
                y1="-11"
                x2="11"
                y2="11"
                stroke="#7c3aed"
                strokeWidth="2"
              />
              <line
                x1="-11"
                y1="11"
                x2="11"
                y2="-11"
                stroke="#7c3aed"
                strokeWidth="2"
              />
            </g>

            {/* Stationary Escalator Foundations with premium steel colors */}
            <path
              d="M 20 460 L 50 460 L 280 150 L 335 150"
              stroke="#1e293b"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M 35 460 L 55 460 L 285 150 L 320 150"
              stroke="#0f172a"
              strokeWidth="22"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity="0.8"
            />

            {/* Glass balustrade overlay with fancy styling */}
            <polygon
              points="45,465 275,155 295,155 295,185 240,185 55,485"
              fill="rgba(124, 58, 237, 0.08)"
              stroke="rgba(0, 255, 136, 0.25)"
              strokeWidth="1.5"
            />

            {/* Top door at top right - Sliding panels open when progress is high! */}
            <g id="top-door-portal">
              {/* Outer deep tech Door frame */}
              <rect
                x="256"
                y="68"
                width="52"
                height="84"
                rx="8"
                fill="#09090f"
                stroke="#7c3aed"
                strokeWidth="3"
              />

              {/* Inner glowing portal grid visible when doors slides away */}
              <rect
                x="260"
                y="72"
                width="44"
                height="76"
                rx="5"
                fill="#050508"
              />
              <rect
                x="260"
                y="72"
                width="44"
                height="76"
                rx="5"
                fill="url(#portalCenterGradient)"
                opacity={isGreenGlow ? "0.8" : "0"}
                className="transition-all duration-500"
              />

              {/* Portal dynamic cyber ring light */}
              {isGreenGlow && (
                <circle
                  cx="282"
                  cy="110"
                  r="18"
                  fill="none"
                  stroke="#00ff88"
                  strokeWidth="1.5"
                  strokeDasharray="6,4"
                  className="spinning-gear"
                  style={{ filter: "drop-shadow(0 0 4px #00ff88)" }}
                />
              )}

              {/* Left Sliding Door Panel */}
              <rect
                x={isGreenGlow ? "242" : "260"}
                y="72"
                width="22"
                height="76"
                fill="#121224"
                stroke="#7c3aed"
                strokeWidth="1.5"
                className="transition-all duration-500 pointer-events-none"
              />

              {/* Right Sliding Door Panel */}
              <rect
                x={isGreenGlow ? "302" : "282"}
                y="72"
                width="22"
                height="76"
                fill="#121224"
                stroke="#7c3aed"
                strokeWidth="1.5"
                className="transition-all duration-500 pointer-events-none"
              />
            </g>

            {/* elevorexv Text written above the door */}
            <text
              x="282"
              y="55"
              fill={isGreenGlow ? "#00ff88" : "#8b5cf6"}
              fontFamily="'Space Grotesk', sans-serif"
              fontSize="11"
              fontWeight="700"
              textAnchor="middle"
              style={{
                letterSpacing: "1px",
                filter: isGreenGlow
                  ? "drop-shadow(0 0 6px rgba(0, 255, 136, 0.7))"
                  : "none",
                transition: "all 0.3s ease",
              }}
            >
              elevorexv
            </text>

            {/* High Fidelity 3D Volumetric Escalator Steps in infinite loop */}
            <g className="escalator-steps">
              {Array.from({ length: 11 }).map((_, i) => {
                const x = 50 + i * 23;
                const y = 460 + i * -31;
                return (
                  <g
                    key={i}
                    transform={`translate(${x}, ${y})`}
                    className="escalator-step-anim"
                  >
                    {/* 3D Riser Face */}
                    <polygon
                      points="-12,0 12,0 12,14 -12,14"
                      fill="url(#stepRiserGradient)"
                      stroke="#0f172a"
                      strokeWidth="0.5"
                    />
                    {/* Riser Vertical Ribs for genuine metal grill effect */}
                    <line
                      x1="-9"
                      y1="2"
                      x2="-9"
                      y2="12"
                      stroke="#1f2937"
                      strokeWidth="0.75"
                    />
                    <line
                      x1="-5"
                      y1="2"
                      x2="-5"
                      y2="12"
                      stroke="#1f2937"
                      strokeWidth="0.75"
                    />
                    <line
                      x1="-1"
                      y1="2"
                      x2="-1"
                      y2="12"
                      stroke="#1f2937"
                      strokeWidth="0.75"
                    />
                    <line
                      x1="3"
                      y1="2"
                      x2="3"
                      y2="12"
                      stroke="#1f2937"
                      strokeWidth="0.75"
                    />
                    <line
                      x1="7"
                      y1="2"
                      x2="7"
                      y2="12"
                      stroke="#1f2937"
                      strokeWidth="0.75"
                    />

                    {/* 3D Top Tread Face (with perspective slope) */}
                    <polygon
                      points="-12,0 12,0 18,-6 -6,-6"
                      fill="url(#stepTreadGradient)"
                      stroke="#00ff88"
                      strokeWidth="0.75"
                      opacity="0.9"
                    />
                  </g>
                );
              })}
            </g>

            {/* Inner neon railing handrail (Static) */}
            <path
              d="M 40 450 L 270 140"
              stroke="url(#railGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              opacity="0.35"
            />

            {/* Outer flowing handrail belt that has active flow motion */}
            <path
              d="M 40 450 L 270 140"
              stroke="#00ff88"
              strokeWidth="2.5"
              strokeDasharray="12, 6"
              fill="none"
              className="handrail-flow-anim pointer-events-none"
              style={{ filter: "drop-shadow(0 0 5px rgba(0, 255, 136, 0.7))" }}
            />

            {/* Platforms */}
            <line
              x1="15"
              y1="460"
              x2="65"
              y2="460"
              stroke="#7c3aed"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="255"
              y1="150"
              x2="315"
              y2="150"
              stroke="#7c3aed"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          {/* Boy Character positioned absolutely over coordinates */}
          <div
            ref={boyRef}
            id="boy-character-wrapper"
            className="absolute w-[44px] h-[80px] pointer-events-none"
            style={{
              left: "50px",
              top: "380px",
              zIndex: 25,
            }}
          >
            <div className="boy-breathe-anim w-full h-full">
              {/* HIGH-FIDELITY BOY INTERACTIVE SVG with moving arms & legs & glowing parts */}
              <svg
                width="44"
                height="80"
                viewBox="0 0 44 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Hair background (back of head) */}
                <path
                  className="boy-hair-flutter"
                  d="M 12 16 C 11 12, 14 8, 22 7 C 30 8, 33 12, 32 16 Z"
                  fill="#1e1a14"
                />

                {/* Tech backpack (behind body) */}
                <path
                  className="boy-backpack-straps"
                  d="M 8 34 L 12 28 L 32 28 L 36 34 L 36 52 L 8 52 Z"
                  fill="#2e1065"
                  stroke="#7c3aed"
                  strokeWidth="1.5"
                />
                <rect
                  x="14"
                  y="34"
                  width="16"
                  height="14"
                  fill="#4c1d95"
                  opacity="0.65"
                  rx="2"
                />

                {/* Left Arm (Swing animated) */}
                <g className="boy-left-arm">
                  <path
                    d="M 10 32 L 2 46 C 1 48, 1 50, 2 52 C 4 54, 7 53, 9 49 L 14 36 Z"
                    fill="#5b21b6"
                    stroke="#c084fc"
                    strokeWidth="0.5"
                  />
                  <circle cx="3" cy="51" r="2.5" fill="#f9c98e" />
                </g>

                {/* Left Leg (Walk animated) */}
                <g className="boy-left-leg">
                  <rect
                    x="11"
                    y="55"
                    width="6"
                    height="15"
                    rx="1.5"
                    fill="#1e1b4b"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.5"
                  />
                  {/* Sneaker with Glowing Sole */}
                  <path d="M 11 69 L 18 69 L 20 75 L 8 75 Z" fill="#111827" />
                  <path
                    d="M 8 73 L 20 73 L 20 75 L 8 75 Z"
                    fill="#00ff88"
                    style={{ filter: "drop-shadow(0 0 3px #00ff88)" }}
                  />
                </g>

                {/* Right Leg (Walk animated) */}
                <g className="boy-right-leg">
                  <rect
                    x="27"
                    y="55"
                    width="6"
                    height="15"
                    rx="1.5"
                    fill="#1e1b4b"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.5"
                  />
                  {/* Sneaker with Glowing Sole */}
                  <path d="M 27 69 L 34 69 L 36 75 L 24 75 Z" fill="#111827" />
                  <path
                    d="M 24 73 L 36 73 L 36 75 L 24 75 Z"
                    fill="#00ff88"
                    style={{ filter: "drop-shadow(0 0 3px #00ff88)" }}
                  />
                </g>

                {/* Body Torso (High Tech Hoodie with details) */}
                <path
                  d="M 10 31 L 34 31 C 36 31, 36 33, 36 34 L 33 56 C 33 58, 11 58, 11 58 L 8 34 C 8 33, 8 31, 10 31 Z"
                  fill="#4c1d95"
                  stroke="#7c3aed"
                  strokeWidth="1"
                />

                {/* Neon zip line */}
                <line
                  x1="22"
                  y1="31"
                  x2="22"
                  y2="56"
                  stroke="#00ff88"
                  strokeWidth="1.5"
                />

                {/* Tech logo badge */}
                <rect
                  x="13"
                  y="35"
                  width="5"
                  height="4"
                  rx="1"
                  fill="#111827"
                />
                <circle cx="15.5" cy="37" r="1" fill="#00ff88" />

                {/* Right Arm (Swing animated) */}
                <g className="boy-right-arm">
                  <path
                    d="M 34 32 L 42 46 C 43 48, 43 50, 42 52 C 40 54, 37 53, 35 49 L 30 36 Z"
                    fill="#5b21b6"
                    stroke="#c084fc"
                    strokeWidth="0.5"
                  />
                  <circle cx="41" cy="51" r="2.5" fill="#f9c98e" />
                </g>

                {/* Head & Accessories */}
                <g className="boy-head">
                  {/* Head skin */}
                  <circle cx="22" cy="18" r="9" fill="#f9c98e" />

                  {/* Glowing cyberpunk wrap visor */}
                  <path
                    d="M 14 15 L 30 15 C 31 15, 31 18, 30 19 L 14 19 C 13 19, 13 15, 14 15 Z"
                    fill="#00ff88"
                    style={{ filter: "drop-shadow(0 0 4px #00ff88)" }}
                  />
                  <line
                    x1="16"
                    y1="17"
                    x2="28"
                    y2="17"
                    stroke="#fff"
                    strokeWidth="1"
                    opacity="0.8"
                  />

                  {/* Smiling mouth strip */}
                  <path
                    d="M 19 22 Q 22 24 25 22"
                    stroke="#111827"
                    strokeWidth="1"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Front Hair bangs (Flutter animated) */}
                  <path
                    className="boy-hair-flutter"
                    d="M 12 15 C 15 11, 29 11, 32 15 C 30 13, 26 10, 22 11 L 18 10 C 15 11, 13 13, 12 15 Z"
                    fill="#111827"
                  />

                  {/* Glowing gaming headset band */}
                  <path
                    d="M 12 18 A 10 10 0 0 1 32 18"
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="12"
                    cy="18"
                    r="2"
                    fill="#00ff88"
                    style={{ filter: "drop-shadow(0 0 3px #00ff88)" }}
                  />
                  <circle
                    cx="32"
                    cy="18"
                    r="2"
                    fill="#00ff88"
                    style={{ filter: "drop-shadow(0 0 3px #00ff88)" }}
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Dynamic bottom markers */}
        <div className="w-full flex flex-col items-center px-4 relative z-20">
          <div
            className="px-3 py-1.5 rounded-md border text-[11px] font-mono tracking-widest text-[#00ff88] bg-[#0c0c14]/90 shadow-md transform translate-y-[2px]"
            style={{
              borderColor: isGreenGlow ? "#00ff88" : "rgba(124,58,237,0.3)",
              boxShadow: isGreenGlow ? "0 0 10px rgba(0,255,136,0.2)" : "none",
            }}
          >
            {getLevelLabel(progress)}
          </div>

          {/* Ground Line at bottom */}
          <div className="w-[180px] h-0.5 mt-4 relative">
            <div
              className="elevator-ground-line"
              style={{ left: "0", width: "100%", position: "absolute" }}
            />
          </div>
          <div className="text-[10px] font-mono text-gray-500 uppercase mt-2">
            FLOOR 00 &mdash; START
          </div>
        </div>
      </div>

      {/* Scroll Hint at bottom of scene */}
      <div className="mt-8 flex flex-col items-center scroll-hint select-none z-10 pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
          &darr; Scroll To Rise
        </span>
        <ChevronDown size={14} className="text-[#00ff88] mt-1" />
      </div>
    </div>
  );
}
