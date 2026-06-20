import "../../styles/sections/About.css";

export default function About() {
  const features = [
    {
      icon: "🚀",
      title: "Fast-Track Programs",
      description:
        "Accelerated tracks designed to bypass the fluff and get you building server-side systems immediately.",
      gradient: "from-[#7c3aed]/20",
    },
    {
      icon: "🧑‍💻",
      title: "1-on-1 Mentorship",
      description:
        "Direct line to senior engineers from top companies for code reviews, architectural advice, and motivation.",
      gradient: "from-[#00ff88]/20",
    },
    {
      icon: "🏆",
      title: "Job Guarantee",
      description:
        "Work with our dedicated placement cell. Backed by legally structured career placement support agreements.",
      gradient: "from-[#f59e0b]/20",
    },
    {
      icon: "🌐",
      title: "Live Projects",
      description:
        "Gain enterprise exposure by building and hosting scaled web applications with production-grade pipelines.",
      gradient: "from-[#00f0ff]/20",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#f5f5f7] overflow-hidden">
      {/* Glow blob behind */}
      <div className="absolute top-[30%] left-[80%] w-[350px] h-[350px] bg-gradient-to-tr from-[#7c3aed]/5 to-transparent rounded-full blur-[40px] pointer-events-none" />

      <div className="w-full px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Col (Section Tag & Description) */}
          <div className="col-span-1 lg:col-span-6 flex flex-col items-start text-left">
            <div className="text-sm font-mono text-[#7c3aed] uppercase tracking-wider mb-3">
              &#47;&#47; About Us
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl leading-tight text-gray-900 mb-6">
              We Don't Teach Code. <br />
              <span className="bg-gradient-to-r from-[#00ff88] to-[#00f0ff] bg-clip-text text-transparent">
                We Build Careers.
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 font-light">
              At Elevorax Institute, we understand that syntax is just the raw
              material. Real software engineering is about solving problems,
              planning architectures, and moving smoothly up the career
              elevator.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 font-light">
              We design intensive, hands-on frameworks focused specifically on
              Java and Python—the world's most dominant language ecosystems.
              Learn the concepts, deploy live projects, work 1-on-1 with senior
              developers, and rise high.
            </p>

            {/* Highlight statistics box */}
            <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm max-w-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#7c3aed]/10 flex items-center justify-center text-[#7c3aed] font-bold text-xl font-syne">
                E
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  Interactive Training Method
                </h4>
                <p className="text-xs text-gray-500">
                  Industry-proven curriculums updated for 2026
                </p>
              </div>
            </div>
          </div>

          {/* Right Col (2x2 Grid of Feature Cards) */}
          <div className="col-span-1 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card card-lift hover-card text-left flex flex-col items-start"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} to-transparent flex items-center justify-center mb-5 text-xl font-semibold`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
