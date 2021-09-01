import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle = { border: "1px black", padding: "5px" };
  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: "flex",
          fontFamily: "helvetica",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div style={linkStyle}>
          <Link to="/">Home</Link>
        </div>
        <div style={linkStyle}>
          <Link to="/Aboutme">About Me</Link>
        </div>
        <div style={linkStyle}>
          <Link to="/Mywork">My work</Link>
        </div>
        <div style={linkStyle}>
          <Link to="/Contactme">Contact</Link>
        </div>
      </section>
    </nav>
  );
}
export default Navbar;
