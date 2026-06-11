function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Bhumi
      </h1>

      <ul className="flex gap-8">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;