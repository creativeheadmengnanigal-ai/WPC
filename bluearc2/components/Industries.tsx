"use client";
import { useReveal } from "./useReveal";

const items = [
  { name:"Oil & Gas",                 icon:"🛢️", desc:"Upstream, midstream & downstream" },
  { name:"Offshore & Marine",         icon:"⚓", desc:"Platforms, vessels & subsea" },
  { name:"Shipbuilding & Repair",     icon:"🚢", desc:"New builds & dry-dock" },
  { name:"Power & Energy",            icon:"⚡", desc:"Power plants & transmission" },
  { name:"Petrochemical Plants",      icon:"🏭", desc:"Refineries & process units" },
  { name:"Construction & Infrastructure", icon:"🏗️", desc:"Bridges, towers & structures" },
  { name:"Steel Fabrication",         icon:"🔩", desc:"Manufacturing & supply" },
];

export default function Industries() {
  const ref = useReveal();
  return (
    <section id="industries" ref={ref} style={{ padding:"100px 0", background:"#0A1628", position:"relative", overflow:"hidden" }}>
      <div className="perspective-grid" style={{ position:"absolute", inset:0, opacity:0.6 }}/>
      <div style={{ position:"relative", zIndex:1, maxWidth:1280, margin:"0 auto", padding:"0 24px" }}>
        <div className="reveal" style={{ marginBottom:56 }}>
          <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:600, color:"#00B4A0", letterSpacing:"0.3em", textTransform:"uppercase", display:"block", marginBottom:12 }}>Sectors We Serve</span>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(32px,5vw,52px)", color:"#F8FAFB", lineHeight:1.1 }}>
            Industries We Work In
          </h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:16 }}>
          {items.map((item, i) => (
            <div key={item.name} className={`reveal rd${Math.min(i+1,6)}`} style={{
              background:"rgba(255,255,255,0.04)", borderRadius:16, padding:24,
              border:"1px solid rgba(255,255,255,0.08)",
              cursor:"default", transition:"all 0.3s ease",
            }}
            onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.background="rgba(0,180,160,0.1)"; el.style.borderColor="rgba(0,180,160,0.3)"; el.style.transform="translateY(-4px)"; }}
            onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.background="rgba(255,255,255,0.04)"; el.style.borderColor="rgba(255,255,255,0.08)"; el.style.transform="none"; }}
            >
              <span style={{ fontSize:28, display:"block", marginBottom:14 }}>{item.icon}</span>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:15, color:"#F8FAFB", marginBottom:6, lineHeight:1.3 }}>{item.name}</h3>
              <p style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:"rgba(248,250,251,0.4)" }}>{item.desc}</p>
            </div>
          ))}

          {/* CTA card */}
          <div className="reveal rd6 float" style={{ borderRadius:16, padding:24, display:"flex", flexDirection:"column", justifyContent:"space-between", background:"linear-gradient(135deg,#1E4A8C,#00B4A0)" }}>
            <div>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:18, color:"#fff", marginBottom:8 }}>Ready to start?</h3>
              <p style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:"rgba(255,255,255,0.7)" }}>Tell us about your project requirements.</p>
            </div>
            <a href="#contact" style={{
              marginTop:24, display:"block", textAlign:"center",
              padding:"11px 20px", borderRadius:50, background:"#fff",
              color:"#0A1628", fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:13,
              textDecoration:"none", transition:"background 0.2s",
            }}
            onMouseEnter={e=>(e.currentTarget as HTMLAnchorElement).style.background="#E8F7F5"}
            onMouseLeave={e=>(e.currentTarget as HTMLAnchorElement).style.background="#fff"}
            >Contact Us →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
