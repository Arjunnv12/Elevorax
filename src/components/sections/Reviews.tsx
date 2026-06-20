import { Star } from "lucide-react";
import "../../styles/sections/Reviews.css";

export default function Reviews() {
  const testimonials = [
    {
      name: "Arjun Kumar",
      role: "Backend Dev @ PayEdge",
      quote:
        '"I came in knowing nothing about Java beyond basics. The Spring Boot classes and mock interviews prepared me thoroughly. In 6 months, I went from a curious hobbyist to a production engineer!"',
      avatarBg: "bg-[#f59e0b]/15 text-[#f59e0b]",
      avatarInitials: "AK",
      borderHover: "hover:border-amber-500/20",
    },
    {
      name: "Priya Sharma",
      role: "ML Engineer @ DataNova",
      quote:
        '"The Python + ML track opened doors I didn\'t think were accessible without a PhD. Coding FastAPI endpoints and building direct models gave me deep confidence. Excellent mentors!"',
      avatarBg: "bg-[#00ff88]/15 text-[#00ff88]",
      avatarInitials: "PS",
      borderHover: "hover:border-green-500/20",
    },
    {
      name: "Rohan Verma",
      role: "Full-Stack @ CloudNest",
      quote:
        '"The dual bundle was a game changer for me. Understanding both the robustness of enterprise core Java systems and the lightweight rapid prototyping of Python gave me a massive tech advantage."',
      avatarBg: "bg-[#7c3aed]/15 text-[#c084fc]",
      avatarInitials: "RV",
      borderHover: "hover:border-purple-500/20",
    },
  ];

  return (
    <section
      id="reviews"
      className="relative py-24 bg-[#f5f5f7] overflow-hidden"
    >
      {/* Glow blob far right */}
      <div className="absolute top-[50%] right-[-10%] w-[380px] h-[380px] bg-gradient-to-br from-[#7c3aed]/4 to-transparent rounded-full blur-[40px] pointer-events-none" />

      <div className="w-full px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0 mb-16">
          <span className="text-sm font-mono text-[#7c3aed] uppercase tracking-widest bg-[#7c3aed]/5 px-3 py-1 rounded-full border border-[#7c3aed]/10">
            STUDENT REVIEWS
          </span>
          <h2 className="font-syne text-3xl sm:text-5xl text-gray-900 mt-4 mb-4">
            Real Stories. Real Floors Scaled.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-light">
            See how our alumni successfully transitioned from code novices to
            professional engineers.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl glass-card text-left flex flex-col justify-between ${t.borderHover} transition-all duration-300`}
            >
              <div>
                {/* Rating */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className="fill-[#f59e0b] text-[#f59e0b]"
                    />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic mb-8 font-light">
                  {t.quote}
                </p>
              </div>
              {/* Creator info */}
              <div className="flex items-center gap-4 pt-5 border-t border-slate-200/50">
                <div
                  className={`w-11 h-11 rounded-full ${t.avatarBg} flex items-center justify-center font-bold text-sm shrink-0`}
                >
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
