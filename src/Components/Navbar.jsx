import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
    <nav className="fixed top-0 left-0 w-full bg-pink-900 shadow z-[9999] text-white text-sm">
  <div className="w-full px-4 md:px-6">

    <div className="h-14 flex items-center justify-center">

      <ul className="hidden md:flex items-center gap-10 font-medium">
        ...
      </ul>

      <button
        className="md:hidden ml-auto text-3xl text-white relative z-[9999]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

    </div>
  </div>

  <div
    className={`md:hidden bg-pink-900 overflow-hidden transition-all duration-300 ${
      menuOpen ? "max-h-64 py-4" : "max-h-0"
    }`}
  >
    ...
  </div>
</nav>
  );
}

export default Navbar;