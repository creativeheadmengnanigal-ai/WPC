"use client";
import { useReveal } from "./useReveal";

const pillars = [
  {
    icon: <svg viewBox="0 0 52 52" fill="none" width="44" height="44"><path d="M26 5L42 14L42 28C42 38 35 46 26 49C17 46 10 38 10 28L10 14Z" stroke="#00B4A0" strokeWidth="2.5" strokeLinejoin="round" fill="none"/><path d="M18 26L23 31L34 20" stroke="#00B4A0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title:"Health & Safety",
    desc:"Non-negotiable safe working practices across all sites. Full compliance with industry regulations and zero-compromise safety protocols.",
    color:"#00B4A0",
  },
  {
    icon: <svg viewBox="0 0 52 52" fill="none" width="44" height="44"><circle cx="26" cy="26" r="18" stroke="#2A6BC7" strokeWidth="2.5"/><path d="M17 26L23 32L35 19" stroke="#2A6BC7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="26" cy="26" r="7" stroke="#2A6BC7" strokeWidth="1.2" strokeDasharray="2 3"/></svg>,
    title:"Quality Assurance",
    desc:"Inspection-ready documentation, certified welding procedures, and coating controls aligned with international standards and client specifications.",
    color:"#2A6BC7",
  },
  {
    icon: <svg viewBox="0 0 52 52" fill="none" width="44" height="44"><rect x="11" y="8" width="30" height="38" rx="4" stroke="#00B4A0" strokeWidth="2.5"/><path d="M18 22H34M18 30H30M18 38H26" stroke="#00B4A0" strokeWidth="2" strokeLinecap="round"/><path d="M31 34L34 37L40 31" stroke="#00B4A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title:"Compliance",
    desc:"Full adherence to welding qualification standards, coating inspection requirements, and procedural documentation throughout project lifecycle.",
    color:"#00B4A0",
  },
];

export default function HSQ() {
  const ref = useReveal();
  return (
    <section id="hsq" ref={ref} style={{ padding:"100px 0", background:"#F8FAFB" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 24px" }}>
        <div className="reveal" style={{ textAlign:"center", maxWidth:560, margin:"0 auto 56px" }}>
          <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:600, color:"#00B4A0", letterSpacing:"0.3em", textTransform:"uppercase", display:"block", marginBottom:12 }}>Non-Negotiables</span>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(32px,5vw,52px)", color:"#0A1628", lineHeight:1.1, marginBottom:16 }}>
            Health, Safety & Quality
          </h2>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:16, color:"rgba(10,22,40,0.55)", lineHeight:1.7 }}>
            Safety and quality are integral to every operation — lived practices that protect our teams and deliver results clients trust.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20, marginBottom:32 }}>
          {pillars.map((p,i)=>(
            <div key={p.title} className={`reveal rd${i+1} card-hover`} style={{
              background:"#fff", borderRadius:20, padding:32,
              border:"1px solid rgba(10,22,40,0.07)", textAlign:"center", cursor:"default",
            }}>
              <div style={{ display:"flex", justifyContent:"center", marginBottom:20 }}>{p.icon}</div>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:20, color:"#0A1628", marginBottom:12 }}>{p.title}</h3>
              <p style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:"rgba(10,22,40,0.55)", lineHeight:1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="reveal" style={{ borderRadius:20, overflow:"hidden", background:"linear-gradient(135deg,#0A1628 0%,#1E4A8C 55%,#00B4A0 100%)", position:"relative" }}>
          <div className="scanline"/>
          <div style={{ padding:"40px 48px", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:24 }}>
            <div>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(20px,3vw,30px)", color:"#fff", marginBottom:8 }}>Every project. Every weld. Every coat.</h3>
              <p style={{ fontFamily:"'Inter',sans-serif", fontSize:14, color:"rgba(255,255,255,0.5)" }}>Delivered to spec, on time, with zero safety compromises.</p>
            </div>
            <a href="#contact" className="btn-shimmer" style={{
              padding:"13px 32px", borderRadius:50, fontFamily:"'Inter',sans-serif",
              fontWeight:700, fontSize:14, color:"#0A1628", textDecoration:"none",
              flexShrink:0, whiteSpace:"nowrap",
            }}>Start Your Project →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
