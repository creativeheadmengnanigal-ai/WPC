"use client";
import { useReveal } from "./useReveal";

const values = [
  { v:"Safety",                icon:"🛡️" },
  { v:"Quality",               icon:"✅" },
  { v:"Integrity",             icon:"🤝" },
  { v:"Reliability",           icon:"🔒" },
  { v:"Customer Satisfaction", icon:"⭐" },
  { v:"Continuous Improvement",icon:"📈" },
];

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" ref={ref} style={{ padding:"100px 0", background:"#0A1628", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle at 2px 2px, rgba(0,180,160,0.06) 1px, transparent 0)", backgroundSize:"40px 40px" }}/>
      <div style={{ position:"relative", zIndex:1, maxWidth:1280, margin:"0 auto", padding:"0 24px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:64 }}>
        {/* Mission / Vision */}
        <div>
          <div className="reveal">
            <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:600, color:"#00B4A0", letterSpacing:"0.3em", textTransform:"uppercase", display:"block", marginBottom:12 }}>Who We Are</span>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(32px,5vw,48px)", color:"#F8FAFB", lineHeight:1.1, marginBottom:32 }}>
              Trusted Contractor<br/>
              <span style={{ WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundImage:"linear-gradient(135deg,#00B4A0,#2A6BC7)", backgroundClip:"text" }}>Across the Region.</span>
            </h2>
          </div>
          {[{
            icon:<svg viewBox="0 0 22 22" fill="none" width="18" height="18"><path d="M11 2L14 7L20 8L15 13L16 19L11 16L6 19L7 13L2 8L8 7Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" fill="none"/></svg>,
            label:"Our Mission",
            text:"To provide high-quality welding and protective coating solutions that meet client requirements while ensuring safety, efficiency, and long-term asset protection.",
          },{
            icon:<svg viewBox="0 0 22 22" fill="none" width="18" height="18"><circle cx="11" cy="11" r="8" stroke="white" strokeWidth="1.5"/><path d="M11 6V11L14 13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>,
            label:"Our Vision",
            text:"To become a trusted and preferred contractor in welding and industrial painting services across the UAE and the Middle East.",
          }].map((item,i)=>(
            <div key={item.label} className={`reveal rd${i+1}`} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:16, padding:24, display:"flex", gap:16, marginBottom:16 }}>
              <div style={{ width:40, height:40, borderRadius:"50%", background:"linear-gradient(135deg,#00B4A0,#2A6BC7)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{item.icon}</div>
              <div>
                <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:16, color:"#F8FAFB", marginBottom:8 }}>{item.label}</h3>
                <p style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:"rgba(248,250,251,0.5)", lineHeight:1.7 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div>
          <h3 className="reveal" style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:24, color:"#F8FAFB", marginBottom:24 }}>Core Values</h3>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
            {values.map((v,i)=>(
              <div key={v.v} className={`reveal rd${Math.min(i+1,6)}`} style={{
                background:"rgba(255,255,255,0.05)", borderRadius:14, padding:20,
                border:"1px solid rgba(255,255,255,0.08)",
                cursor:"default", transition:"all 0.3s",
              }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.background="rgba(0,180,160,0.1)"; el.style.borderColor="rgba(0,180,160,0.3)"; el.style.transform="translateY(-3px)"; }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.background="rgba(255,255,255,0.05)"; el.style.borderColor="rgba(255,255,255,0.08)"; el.style.transform="none"; }}
              >
                <span style={{ fontSize:22, display:"block", marginBottom:8 }}>{v.icon}</span>
                <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:14, color:"#F8FAFB" }}>{v.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
