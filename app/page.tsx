"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [activePage, setActivePage] = useState("home");

  const navigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(triggerReveal, 100);
  };

  const triggerReveal = () => {
    document.querySelectorAll(".reveal").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) el.classList.add("shown");
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", triggerReveal);
    setTimeout(triggerReveal, 200);
    return () => window.removeEventListener("scroll", triggerReveal);
  }, [activePage]);

  return (
    <>
      <Navbar activePage={activePage} onNavigate={navigate} />
      {activePage === "home" && <Hero onNavigate={navigate} />}
      {activePage === "services" && <Services />}
      {activePage === "team" && <Team />}
      {activePage === "projects" && <Projects />}
      {activePage === "about" && <About />}
      {activePage === "contact" && <Contact />}
      <Footer onNavigate={navigate} />
    </>
  );
}
