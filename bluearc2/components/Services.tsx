"use client";
import { useReveal } from "./useReveal";

const services = [
  {
    icon: <svg viewBox="0 0 44 44" fill="none" width="36" height="36"><path d="M8 36L22 8L36 36" stroke="#00B4A0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 26H31" stroke="#00B4A0" strokeWidth="2" strokeLinecap="round"/><circle cx="22" cy="8" r="3" fill="#2A6BC7"/><circle cx="22" cy="8" r="1" fill="#00B4A0" style={{animation:"arcPulse 2s infinite"}}/></svg>,
    title: "Structural Welding",
    desc: "SMAW, GTAW, GMAW & FCAW — certified for structural steel, pipe spools, offshore platforms, and stainless fabrication.",
    tags: ["Structural","Pipe","Stainless","Offshore"],
    color: "#00B4A0",
  },
  {
    icon: <svg viewBox="0 0 44 44" fill="none" width="36" height="36"><rect x="8" y="14" width="28" height="20" rx="3" stroke="#2A6BC7" strokeWidth="2.2"/><path d="M15 14V10M29 14V10" stroke="#2A6BC7" strokeWidth="2" strokeLinecap="round"/><path d="M11 22Q22 16 33 22" stroke="#00B4A0" strokeWidth="2" strokeLinecap="round" fill="none"/><path d="M11 28Q22 22 33 28" stroke="#00B4A0" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/></svg>,
    title: "Surface Preparation",
    desc: "Abrasive blasting to Sa 2.5 / Sa 3 and mechanical preparation — the foundation for coating longevity.",
    tags: ["Abrasive Blast","Mechanical","Sa 2.5/3"],
    color: "#2A6BC7",
  },
  {
    icon: <svg viewBox="0 0 44 44" fill="none" width="36" height="36"><path d="M9 34C9 22 17 16 22 11C27 16 35 22 35 34" stroke="#00B4A0" strokeWidth="2.2" strokeLinecap="round" fill="none"/><path d="M15 34C15 26 18 21 22 19C26 21 29 26 29 34" stroke="#2A6BC7" strokeWidth="2" strokeLinecap="round" fill="none"/><line x1="7" y1="37" x2="37" y2="37" stroke="#00B4A0" strokeWidth="2" strokeLinecap="round"/></svg>,
    title: "Protective Coatings",
    desc: "Airless spray application for tanks, pipelines, and offshore steel — including fireproofing and insulation coatings.",
    tags: ["Airless Spray","Fireproofing","Pipeline","Tank"],
    color: "#00B4A0",
  },
  {
    icon: <svg viewBox="0 0 44 44" fill="none" width="36" height="36"><circle cx="22" cy="22" r="14" stroke="#00B4A0" strokeWidth="2.2"/><path d="M22 11V22L29 29" stroke="#2A6BC7" strokeWidth="2.2" strokeLinecap="round"/><circle cx="22" cy="22" r="2.5" fill="#00B4A0"/></svg>,
    title: "Maintenance & Shutdown",
    desc: "Flexible mobilization for turnaround and shutdown projects — welding repairs, refurbishment coating, and touch-up.",
    tags: ["Shutdown","Turnaround","Refurbishment"],
    color: "#2A6BC7",
  },
  {
    icon: <svg viewBox="0 0 44 44" fill="none" width="36" height="36"><path d="M8 36L8 20L15 13L22 17L29 9L36 15L36 36" stroke="#00B4A0" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"/><line x1="8" y1="36" x2="36" y2="36" stroke="#00B4A0" strokeWidth="2" strokeLinecap="round"/><circle cx="22" cy="17" r="2.5" fill="#2A6BC7"/></svg>,
    title: "Offshore & Marine",
    desc: "Specialist welding and coating for offshore platforms, vessels, ship repair, and marine structures.",
    tags: ["Offshore","Ship Repair","Marine"],
    color: "#00B4A0",
  },
  {
    icon: <svg viewBox="0 0 44 44" fill="none" width="36" height="36"><rect x="9" y="24" width="11" height="13" rx="2" stroke="#2A6BC7" strokeWidth="2"/><rect x="24" y="15" width="11" height="22" rx="2" stroke="#00B4A0" strokeWidth="2"/><line x1="7" y1="37" x2="37" y2="37" stroke="#00B4A0" strokeWidth="2" strokeLinecap="round"/><path d="M13 24L14 17L17 20L20 11L22 15" stroke="#2A6BC7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>,
    title: "Steel Fabrication",
    desc: "Carbon steel and stainless fabrication, erection, and fitting with qualified supervision and full inspection compliance.",
    tags: ["Carbon Steel","Stainless","Erection"],
    color: "#2A6BC7",
  },
];

export default function Services() {
  const ref = useReveal();
  return (
    <section id="services" ref={ref} style={{ padding: "100px 0", background: "#F8FAFB" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="reveal" style={{ marginBottom: 56 }}>
          <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:600, color:"#00B4A0", letterSpacing:"0.3em", textTransform:"uppercase", display:"block", marginBottom:12 }}>What We Do</span>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(32px,5vw,52px)", color:"#0A1628", lineHeight:1.1, maxWidth:520 }}>
            Industrial Services,{" "}
            <span style={{ WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundImage:"linear-gradient(135deg,#1E4A8C,#00B4A0)", backgroundClip:"text" }}>
              Built to Last.
            </span>
          </h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:20 }}>
          {services.map((s,i) => (
            <div key={s.title} className={`reveal rd${Math.min(i+1,6)} card-hover`} style={{
              background:"#fff", borderRadius:20, padding:28,
              border:"1px solid rgba(10,22,40,0.07)",
              cursor:"default",
            }}>
              <div style={{ width:56, height:56, borderRadius:14, background:"rgba(0,180,160,0.08)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20, transition:"background 0.3s" }}
                onMouseEnter={e=>(e.currentTarget as HTMLDivElement).style.background="rgba(0,180,160,0.18)"}
                onMouseLeave={e=>(e.currentTarget as HTMLDivElement).style.background="rgba(0,180,160,0.08)"}
              >{s.icon}</div>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:18, color:"#0A1628", marginBottom:10 }}>{s.title}</h3>
              <p style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:"rgba(10,22,40,0.55)", lineHeight:1.7, marginBottom:16 }}>{s.desc}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {s.tags.map(t=>(
                  <span key={t} style={{ padding:"4px 10px", borderRadius:50, fontSize:11, fontWeight:600, fontFamily:"'Inter',sans-serif", background:"rgba(0,180,160,0.1)", color:"#00B4A0" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
