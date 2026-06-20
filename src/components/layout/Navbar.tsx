import { useState } from "react";
import "../../styles/layout/Navbar.css";
import logo from "../../assets/Elvorax High.png";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  triggerEnroll: (courseName: string) => void;
}

export default function Navbar({ activeSection, triggerEnroll }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "courses", label: "Courses" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 glass-nav h-[72px] transition-all duration-300"
    >
      <div className="w-full h-full px-6 lg:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-4 group select-none">
          <img
            src={logo}
            alt="Elvorax logo"
            className="w-28 sm:w-32 md:w-40 lg:w-48 h-auto object-contain transition-all duration-300 group-hover:opacity-95 drop-shadow-sm"
          />
          {/* <span className="logo-text transition-all duration-300 group-hover:opacity-90">
            ELEVORAX
          </span> */}
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link-custom ${
                activeSection === link.id ? "text-[#00ff88]" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="nav-enroll-btn"
            onClick={() => triggerEnroll("Java + Python Power Bundle")}
            className="enroll-btn-navbar"
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 text-gray-400 hover:text-[#00ff88] focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-gray-200 px-6 py-6 flex flex-col gap-5 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-base uppercase tracking-wider font-semibold py-1.5 transition-colors ${
                activeSection === link.id
                  ? "text-black font-bold"
                  : "text-gray-600"
              }`}
            >
              {link.label}
            </a>
          ))}

          <button
            id="mobile-enroll-btn"
            onClick={() => {
              setIsMobileMenuOpen(false);
              triggerEnroll("Java + Python Power Bundle");
            }}
            className="bg-[#0f172a] text-white font-bold text-center py-3 rounded-full mt-2 transition-all"
          >
            Enroll Now
          </button>
        </div>
      )}
    </nav>
  );
}
