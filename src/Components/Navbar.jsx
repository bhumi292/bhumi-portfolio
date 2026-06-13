function Navbar() {
  return (
     <nav className="bg-slate-950 text-white px-8 py-5 flex justify-between items-center sticky top-0">
      <h1 className="text-2xl font-bold">
        Bhumi.dev
      </h1>

      <ul className="hidden md:flex gap-8">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;