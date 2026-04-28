"use client";
import { useEffect, useState } from "react";

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

// ── Logo 5: Connected-dots network icon + FALESTIX wordmark ──
function FalestixLogo() {
  return (
    <svg
      width="180"
      height="44"
      viewBox="0 0 180 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Connection lines */}
      <line x1="22" y1="22" x2="22" y2="6"  stroke="#E91E8C" strokeWidth="1.8"/>
      <line x1="22" y1="22" x2="36" y2="14" stroke="#E91E8C" strokeWidth="1.8"/>
      <line x1="22" y1="22" x2="36" y2="30" stroke="#E91E8C" strokeWidth="1.8"/>
      <line x1="22" y1="22" x2="22" y2="38" stroke="#E91E8C" strokeWidth="1.8"/>
      <line x1="22" y1="22" x2="8"  y2="30" stroke="#E91E8C" strokeWidth="1.8"/>
      <line x1="22" y1="22" x2="8"  y2="14" stroke="#E91E8C" strokeWidth="1.8"/>
      <line x1="22" y1="6"  x2="36" y2="14" stroke="#E91E8C" strokeWidth="1.2" opacity="0.5"/>
      <line x1="36" y1="14" x2="36" y2="30" stroke="#E91E8C" strokeWidth="1.2" opacity="0.5"/>
      <line x1="36" y1="30" x2="22" y2="38" stroke="#E91E8C" strokeWidth="1.2" opacity="0.5"/>
      <line x1="22" y1="38" x2="8"  y2="30" stroke="#E91E8C" strokeWidth="1.2" opacity="0.5"/>
      <line x1="8"  y1="30" x2="8"  y2="14" stroke="#E91E8C" strokeWidth="1.2" opacity="0.5"/>
      <line x1="8"  y1="14" x2="22" y2="6"  stroke="#E91E8C" strokeWidth="1.2" opacity="0.5"/>

      {/* Outer nodes */}
      <circle cx="22" cy="6"  r="3.5" fill="#FF4081"/>
      <circle cx="36" cy="14" r="3.5" fill="#ffffff"/>
      <circle cx="36" cy="30" r="3.5" fill="#E91E8C"/>
      <circle cx="22" cy="38" r="3.5" fill="#FF4081"/>
      <circle cx="8"  cy="30" r="3.5" fill="#ffffff"/>
      <circle cx="8"  cy="14" r="3.5" fill="#E91E8C"/>

      {/* Center node */}
      <circle cx="22" cy="22" r="6" fill="#E91E8C"/>
      <circle cx="22" cy="22" r="3" fill="white"/>

      {/* Wordmark — WHITE + Dark Pink */}
      <text
        x="52"
        y="30"
        fontFamily="'Poppins', 'Segoe UI', sans-serif"
        fontWeight="700"
        fontSize="22"
        letterSpacing="1"
      >
        <tspan fill="#FFFFFF">FALE</tspan>
        <tspan fill="#E91E8C">STIX</tspan>
      </text>
    </svg>
  );
}
export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pages = ["home", "services", "team", "projects", "about"];

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <button className="nav-logo" onClick={() => navigate("home")}>
          <FalestixLogo />
        </button>
        <ul className="nav-links">
          {pages.map((p) => (
            <li key={p}>
              <a
                className={activePage === p ? "active" : ""}
                onClick={() => navigate(p)}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a className="cta-btn" onClick={() => navigate("contact")}>
              Contact Us
            </a>
          </li>
        </ul>
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {pages.map((p) => (
          <a key={p} onClick={() => navigate(p)}>
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </a>
        ))}
        <a onClick={() => navigate("contact")}>Contact Us</a>
      </div>
    </>
  );
}