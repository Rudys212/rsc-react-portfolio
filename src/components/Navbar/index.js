import "./style.css";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  const linkStyle = { border: "1px black", padding: "5px" };
  return (
    <nav className="navbarSec">
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div style={linkStyle}>
          <Link to="/Aboutme" className="navBarLinks">
            About Me
          </Link>
        </div>
        <div style={linkStyle}>
          <Link to="/Mywork" className="navBarLinks">
            My work
          </Link>
        </div>
        <div style={linkStyle}>
          <Link to="/Contactme" className="navBarLinks">
            Contact
          </Link>
        </div>
        <div style={linkStyle}>
          <Link to="/Resume" className="navBarLinks">
            Resume
          </Link>
        </div>
      </section>
    </nav>
  );
}
export default Navbar;
