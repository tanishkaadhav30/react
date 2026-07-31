import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
      </a>

      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
