"use client";
import { useReveal } from "./useReveal";

const roles = [
  { title:"Certified Welders",               badge:"Qualified", icon:"🔧" },
  { title:"Blasters & Spray Painters",       badge:"Skilled",   icon:"🎨" },
  { title:"Welding Foremen & Supervisors",   badge:"Senior",    icon:"📋" },
  { title:"Coating Inspectors",              badge:"Certified", icon:"🔍" },
  { title:"Fabricators & Fitters",           badge:"Expert",    icon:"⚙️" },
  { title:"Skilled Technicians",             badge:"Versatile", icon:"👷" },
];

const strengths = [
  "Experienced and qualified workforce",
  "Commitment to quality and safety",
  "Timely project execution",
  "Competitive pricing",
  "Flexible manpower mobilization",
  "Shutdown & maintenance capability",
  "Customer-focused support",
];

export default function Workforce() {
  const ref = useReveal();
  return (
    <section id="workforce" ref={ref} style={{ padding:"100px 0", background:"#fff" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 24px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:64, alignItems:"center" }}>
        {/* Left */}
        <div>
          <div className="reveal">
            <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:600, color:"#00B4A0", letterSpacing:"0.3em", textTransform:"uppercase", display:"block", marginBottom:12 }}>Our Team</span>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(32px,5vw,48px)", color:"#0A1628", lineHeight:1.1, marginBottom:16 }}>
              Skilled People.<br/>
              <span style={{ WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundImage:"linear-gradient(135deg,#1E4A8C,#00B4A0)", backgroundClip:"text" }}>Strong Outcomes.</span>
            </h2>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:16, color:"rgba(10,22,40,0.55)", lineHeight:1.7, marginBottom:28 }}>
              Our workforce is our greatest asset — qualified, trained, and committed to delivering safe, high-quality results on every project.
            </p>
          </div>
          <div className="reveal rd1" style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {strengths.map(s=>(
              <div key={s} style={{ display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ width:20, height:20, borderRadius:"50%", background:"linear-gradient(135deg,#00B4A0,#2A6BC7)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <svg viewBox="0 0 10 10" width="12" height="12" fill="none"><path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:"rgba(10,22,40,0.65)" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
          {roles.map((r,i)=>(
            <div key={r.title} className={`reveal rd${Math.min(i+1,6)} card-hover`} style={{
              background:"#F8FAFB", borderRadius:16, padding:20,
              border:"1px solid rgba(10,22,40,0.07)", cursor:"default",
            }}>
              <span style={{ fontSize:22, display:"block", marginBottom:10 }}>{r.icon}</span>
              <span style={{ display:"inline-block", padding:"3px 8px", borderRadius:50, fontSize:10, fontWeight:600, fontFamily:"'Inter',sans-serif", background:"rgba(0,180,160,0.1)", color:"#00B4A0", marginBottom:8 }}>{r.badge}</span>
              <h4 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:13, color:"#0A1628", lineHeight:1.35 }}>{r.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
