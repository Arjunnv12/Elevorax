import "../../styles/layout/Footer.css";
import footerImg from "../../assets/Gemini_Generated_Image_v9h2dnv9h2dnv9h2.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <footer className="relative bg-white border-t border-gray-200/80 overflow-hidden">
      <img src={footerImg} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-90" />
      <div className="relative z-10 w-full px-6 lg:px-12 py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* Logo & Info */}
        <div className="flex flex-col items-start gap-2">
          <span className="font-syne font-bold text-xl tracking-wider text-white">
            ELEVORAX
          </span>
          <span className="text-xs text-white font-bold font-syne tracking-widest mt-1">
            &copy; {currentYear} ELEVORAX INSTITUTE. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Links Row */}
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs sm:text-sm text-white hover:text-gray-200 font-bold transition-colors font-syne uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
