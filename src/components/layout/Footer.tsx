export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact Us', href: '#' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* Logo & Info */}
        <div className="flex flex-col items-start gap-2">
          <span className="font-syne text-xl tracking-wider bg-gradient-to-r from-[#0f172a] to-[#475569] bg-clip-text text-transparent">
            ELEVORAX
          </span>
          <span className="text-xs text-gray-500 font-mono tracking-widest mt-1">
            &copy; {currentYear} ELEVORAX INSTITUTE. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Links Row */}
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs sm:text-sm text-gray-600 hover:text-[#7c3aed] transition-colors font-mono uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
