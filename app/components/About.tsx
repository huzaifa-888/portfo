import Image from "next/image";

export default function About() {
  return (
    <section className="page-section">
      <div className="section-wrap">
        <div className="reveal">
          <div className="section-tag">Who We Are</div>
          <h2 className="section-title">About <span>Falestix</span></h2>
          <p className="section-subtitle">A creative and technology-driven company building modern digital solutions.</p>
        </div>
        <div className="about-layout">
          <div>
            <div className="about-block reveal">
              <div className="about-block-title"><i className="fas fa-info-circle" /> Who We Are</div>
              <p>Falestix is a creative and technology-driven company specializing in building modern websites,
              mobile apps, and smart digital solutions. Our mission is to provide reliable and innovative IT services
              that help businesses grow and reach their full potential.</p>
            </div>
            <div className="about-block reveal">
              <div className="about-block-title"><i className="fas fa-eye" /> Our Vision</div>
              <p>At Falestix, we envision a world where businesses of all sizes can access smart technology solutions.
              We aim to empower brands by blending creativity with innovation and delivering quality at every step.</p>
            </div>
            <div className="about-block reveal">
              <div className="about-block-title"><i className="fas fa-tools" /> What We Do</div>
              <ul className="about-list">
                {["Web Development (Static & Dynamic)", "Mobile App Development (Android & iOS)",
                  "Custom Software Solutions", "E-Commerce Platforms",
                  "AI Chatbots & Smart Tools", "UI/UX Design Services"].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="about-block reveal">
              <div className="about-block-title"><i className="fas fa-address-card" /> Contact Info</div>
              <div className="contact-row"><i className="fas fa-envelope" style={{ color: "var(--pink)", width: 18 }} /> info@faylstech.com</div>
              <div className="contact-row"><i className="fas fa-map-marker-alt" style={{ color: "var(--pink)", width: 18 }} /> 123 Tech Street, Wah Cantt, Pakistan</div>
              <div className="contact-row"><i className="fas fa-globe" style={{ color: "var(--pink)", width: 18 }} /> www.falestix.com</div>
            </div>
            <div className="about-block reveal" style={{ textAlign: "center", padding: 36 }}>
              <div className="hero-ring" style={{ width: 200, height: 200, margin: "0 auto" }}>
                <div className="hero-ring-inner">
                  <Image src="/mmm.png" alt="Falestix" width={200} height={200} style={{ borderRadius: "50%", objectFit: "cover" }} />
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.3rem", fontWeight: 800 }}>Falestix</div>
                <div style={{ color: "var(--gray)", fontSize: "0.88rem", marginTop: 6 }}>Digital Studio · Wah Cantt, PK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
