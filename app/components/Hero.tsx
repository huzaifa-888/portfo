"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const typedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strings = ["Website Developer", "App Developer", "Video Designer", "Creative Coder", "UI/UX Enthusiast"];
    let tIdx = 0, cIdx = 0, deleting = false;

    function typeLoop() {
      if (!typedRef.current) return;
      const current = strings[tIdx];
      const shown = current.substring(0, cIdx);
      typedRef.current.innerHTML = shown + '<span class="cursor-blink">|</span>';
      if (!deleting) {
        if (cIdx < current.length) { cIdx++; setTimeout(typeLoop, 70); }
        else { deleting = true; setTimeout(typeLoop, 1400); }
      } else {
        if (cIdx > 0) { cIdx--; setTimeout(typeLoop, 40); }
        else { deleting = false; tIdx = (tIdx + 1) % strings.length; setTimeout(typeLoop, 300); }
      }
    }
    typeLoop();
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-glow" />
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="dot" /> Available for Projects
          </div>
          <h1 className="hero-h1">
            CODE THE <span className="pink">FUTURE</span><br />
            WITH <span className="stroke">FALESTIX</span>
          </h1>
          <div className="hero-typed" ref={typedRef}>
            Website Developer<span className="cursor-blink">|</span>
          </div>
          <p className="hero-desc">
            I create immersive digital experiences that blend cutting-edge technology with stunning visuals.
            My passion is turning complex ideas into intuitive interfaces that captivate users and push boundaries.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => onNavigate("projects")}>🔥 New Projects</button>
            <button className="btn-outline" onClick={() => onNavigate("services")}>📧 Services</button>
          </div>
          <div className="hero-stats">
            <div className="stat"><div className="stat-num">7+</div><div className="stat-label">Projects</div></div>
            <div className="stat"><div className="stat-num">4</div><div className="stat-label">Team Members</div></div>
            <div className="stat"><div className="stat-num">100%</div><div className="stat-label">Dedication</div></div>
          </div>
        </div>
        <div className="hero-img-wrap">
          <div className="hero-ring">
            <div className="hero-ring-inner">
              <Image src="/mmm.png" alt="Falestix Hero" width={300} height={300} style={{ borderRadius: "50%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
