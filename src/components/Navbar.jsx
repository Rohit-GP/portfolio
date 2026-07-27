import "./Navbar.css";

function Navbar() {
  return (
    <nav classname="navbar">
      <h2 classname="logo">My Portfolio</h2>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;