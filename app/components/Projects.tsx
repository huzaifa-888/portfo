"use client";
import { useState } from "react";
import Image from "next/image";

const projects = [
  { img: "/App.jpg", title: "Mobile App 1", desc: "A task manager with reminders, local DB and sync.", video: "https://youtube.com/shorts/s1cPZ9GIxjM?si=syjveFvbzmabf3iv" },
  { img: "/aa.jpg", title: "Mobile App 2", desc: "A productivity app with YouTube demo link.", video: "https://youtube.com/shorts/D558TdNEfX8?si=ULWLv8HrIrmuKPj4" },
  { img: "/ww.jpg", title: "Website", desc: "Responsive marketing site with CMS integration.", video: "/videos/web.mp4" },
  { img: "/desk.jpg", title: "Desktop Application", desc: "Electron-based inventory manager with barcode scanning.", video: "https://youtu.be/rKAReNowzZ4?si=LoMkM3KaQ8hJ5dQw" },
  { img: "/main.png", title: "Hand Gesture Detection (AI)", desc: "Real-time gesture recognition using a trained ML model.", video: "https://youtu.be/YwE4Rg6QSzg?si=RQaef3-ThjYehZU5" },
  { img: "/web.jpg", title: "E-Commerce Store", desc: "Full-stack online store with cart, checkout & payments.", video: "/videos/ecommerce.mp4" },
  { img: "/ve.jpg", title: "Video Editing Project", desc: "Cinematic edits, motion graphics & storytelling.", video: "/videos/editing.mp4" },
];

export default function Projects() {
  const [modalSrc, setModalSrc] = useState<string | null>(null);

  const openVideo = (url: string) => {
    if (url.includes("youtube") || url.includes("youtu.be")) {
      window.open(url, "_blank");
      return;
    }
    setModalSrc(url);
  };

  return (
    <section className="page-section">
      <div className="section-wrap">
        <div className="reveal">
          <div className="section-tag">Our Work</div>
          <h2 className="section-title">My <span>Projects</span></h2>
          <p className="section-subtitle">A showcase of projects built with passion, precision, and creativity.</p>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card reveal">
              <div className="project-thumb">
                <Image src={p.img} alt={p.title} fill style={{ objectFit: "cover" }} />
                <div className="project-thumb-overlay" />
              </div>
              <div className="project-body">
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-btns">
                  <button className="proj-btn proj-btn-pink" onClick={() => openVideo(p.video)}>🎥 Watch Video</button>
                  <a className="proj-btn proj-btn-ghost" href="#">📖 Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <div className={`modal-overlay ${modalSrc ? "open" : ""}`} onClick={() => setModalSrc(null)}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setModalSrc(null)}>
            <i className="fas fa-times" />
          </button>
          <div className="modal-video-wrap">
            {modalSrc && <video src={modalSrc} controls autoPlay />}
          </div>
        </div>
      </div>
    </section>
  );
}
