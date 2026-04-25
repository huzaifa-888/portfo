"use client";
import { useEffect, useState } from "react";

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
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
          Fale<span>stix</span>
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
