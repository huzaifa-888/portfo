interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="nav-logo" style={{ fontSize: "1.4rem" }}>Fale<span style={{ color: "var(--pink)" }}>stix</span></div>
          <p>A creative and technology-driven studio specializing in modern digital experiences.</p>
          <div className="footer-socials">
            {[["fab fa-facebook-f", "#"], ["fab fa-instagram", "#"], ["fab fa-x-twitter", "#"],
              ["fab fa-youtube", "#"], ["fab fa-linkedin-in", "#"]].map(([icon, href]) => (
              <a key={icon} href={href} className="social-icon"><i className={icon} /></a>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h4>Pages</h4>
          <ul>
            {["home", "services", "team", "projects", "about"].map((p) => (
              <li key={p}><a onClick={() => onNavigate(p)}>{p === "about" ? "About Us" : p.charAt(0).toUpperCase() + p.slice(1)}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {["App Development", "Web Development", "Video Editing", "Flutter Apps", "WordPress"].map((s) => (
              <li key={s}><a href="#">{s}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 <span>Falestix</span>. All rights reserved.</p>
        <p>Built with <span>♥</span> in Pakistan</p>
      </div>
    </footer>
  );
}
