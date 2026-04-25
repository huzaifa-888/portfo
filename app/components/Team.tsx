import Image from "next/image";

const team = [
  { img: "/sibgat.jpeg", name: "M. Sibgatullah", role: "App Developer", desc: "Specialist in building mobile applications using Flutter and React Native." },
  { img: "/Huzaifa.jpeg", name: "Huzaifa Kaleem", role: "Web Developer", desc: "Expert in crafting responsive and high-performance websites using React and Node.js." },
  { img: "/ali.jpeg", name: "Muhammad Ali Khan", role: "UI/UX Designer", desc: "User Interface | Mobile & Web Design Specialist | iOS Mobile Interface | Rapid Prototyping." },
  { img: "/asad.jpeg", name: "Asad", role: "Video Editor", desc: "Creative video editor specializing in cinematic edits, motion graphics, and storytelling." },
];

export default function Team() {
  return (
    <section className="page-section">
      <div className="section-wrap">
        <div className="reveal">
          <div className="section-tag">The People</div>
          <h2 className="section-title">Meet Our <span>Team</span></h2>
          <p className="section-subtitle">Talented individuals who bring ideas to life with skill and passion.</p>
        </div>
        <div className="team-grid">
          {team.map((m) => (
            <div key={m.name} className="team-card reveal">
              <div className="team-avatar-wrap">
                <Image src={m.img} alt={m.name} width={100} height={100} style={{ borderRadius: "50%", objectFit: "cover" }} />
              </div>
              <div className="team-role">{m.role}</div>
              <div className="team-name">{m.name}</div>
              <div className="team-desc">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
