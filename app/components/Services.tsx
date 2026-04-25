import Image from "next/image";

const services = [
  { img: "/App.jpg", title: "App Development", desc: "Build high-performance Android & iOS apps using modern frameworks." },
  { img: "/web.jpg", title: "Website Development", desc: "Responsive and modern websites using Next.js, React, and more." },
  { img: "/ve.jpg", title: "Video Editing", desc: "Stunning video edits, intros, motion graphics and reels." },
  { img: "/SE.jpg", title: "Software Development", desc: "Powerful software tailored to business needs and automation." },
  { img: "/desk.jpg", title: "Desktop Applications", desc: "Cross-platform apps with Electron, Python or native frameworks." },
  { img: "/wp.jpg", title: "WordPress Websites", desc: "Custom WordPress sites with themes, plugins & SEO optimization." },
  { img: "/flu.png", title: "Flutter Apps", desc: "Cross-platform apps built with Flutter for Android & iOS." },
];

export default function Services() {
  return (
    <section className="page-section">
      <div className="section-wrap">
        <div className="reveal">
          <div className="section-tag">What We Offer</div>
          <h2 className="section-title">Our <span>Services</span></h2>
          <p className="section-subtitle">We provide top-notch digital services to turn your ideas into reality.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card reveal">
              <Image src={s.img} className="service-img" alt={s.title} width={64} height={64} style={{ borderRadius: 12, objectFit: "cover" }} />
              <div className="service-title">{s.title}</div>
              <div className="service-desc">{s.desc}</div>
              <div className="service-arrow">Learn more <i className="fas fa-arrow-right" /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
