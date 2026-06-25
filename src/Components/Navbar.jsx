import { useState } from "react";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-pink-900 shadow z-9999 text-white text-sm">
      <div className="max-w-6xl mx-auto px-6">

        {/* Desktop Navbar */}
        <div className="h-14 flex items-center justify-center">

          <ul className="hidden md:flex items-center gap-10 font-medium">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-blue-600 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
  className="md:hidden ml-auto text-xl text-white"
>
  MENU
</button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;