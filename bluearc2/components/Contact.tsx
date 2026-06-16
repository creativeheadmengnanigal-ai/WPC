"use client";
import { useState } from "react";
import { useReveal } from "./useReveal";

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name:"", company:"", email:"", phone:"", service:"", message:"" });
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  const inp: React.CSSProperties = {
    width:"100%", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(0,180,160,0.2)",
    borderRadius:12, padding:"14px 16px", color:"#F8FAFB",
    fontFamily:"'Inter',sans-serif", fontSize:14, outline:"none",
    transition:"border-color 0.2s, background 0.2s",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1600));
    setStatus("sent");
  };

  return (
    <section id="contact" ref={ref} style={{ padding:"100px 0", background:"#F8FAFB" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:64, alignItems:"start" }}>
          {/* Left */}
          <div>
            <div className="reveal">
              <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:600, color:"#00B4A0", letterSpacing:"0.3em", textTransform:"uppercase", display:"block", marginBottom:12 }}>Get in Touch</span>
              <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(32px,5vw,48px)", color:"#0A1628", lineHeight:1.1, marginBottom:16 }}>
                Let's Build<br/>
                <span style={{ WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundImage:"linear-gradient(135deg,#1E4A8C,#00B4A0)", backgroundClip:"text" }}>Something Solid.</span>
              </h2>
              <p style={{ fontFamily:"'Inter',sans-serif", fontSize:15, color:"rgba(10,22,40,0.55)", lineHeight:1.7, marginBottom:40 }}>
                Tell us about your project and we'll respond with a tailored quote and timeline — usually within 24 hours.
              </p>
            </div>
            <div className="reveal rd1" style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {[
                { icon:"📍", label:"Address", val:"[Company Address], UAE" },
                { icon:"📞", label:"Phone",   val:"[Phone Number]" },
                { icon:"✉️", label:"Email",   val:"[Email Address]" },
                { icon:"🌐", label:"Website", val:"[Website URL]" },
              ].map(c=>(
                <div key={c.label} style={{ display:"flex", alignItems:"center", gap:16, padding:"16px 20px", background:"#fff", borderRadius:14, border:"1px solid rgba(10,22,40,0.08)" }}>
                  <span style={{ fontSize:18 }}>{c.icon}</span>
                  <div>
                    <p style={{ fontFamily:"'Inter',sans-serif", fontSize:10, fontWeight:600, color:"#00B4A0", textTransform:"uppercase", letterSpacing:"0.2em", marginBottom:2 }}>{c.label}</p>
                    <p style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:"rgba(10,22,40,0.65)" }}>{c.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal rd2" style={{ borderRadius:24, overflow:"hidden", background:"linear-gradient(145deg,#0E1E3A,#132549)" }}>
            <div style={{ padding:"40px 36px" }}>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:20, color:"#F8FAFB", marginBottom:28 }}>Request a Quote</h3>

              {status === "sent" ? (
                <div style={{ textAlign:"center", padding:"48px 0" }}>
                  <div style={{ width:64, height:64, borderRadius:"50%", background:"linear-gradient(135deg,#00B4A0,#2A6BC7)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px" }}>
                    <svg viewBox="0 0 24 24" fill="none" width="32" height="32"><path d="M5 12L10 17L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:20, color:"#F8FAFB", marginBottom:8 }}>Message Sent!</p>
                  <p style={{ fontFamily:"'Inter',sans-serif", fontSize:14, color:"rgba(248,250,251,0.45)" }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:14 }}>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                    <input style={inp} placeholder="Your Name *" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}
                      onFocus={e=>{ (e.target as HTMLInputElement).style.borderColor="#00B4A0"; (e.target as HTMLInputElement).style.background="rgba(0,180,160,0.06)"; }}
                      onBlur={e=>{ (e.target as HTMLInputElement).style.borderColor="rgba(0,180,160,0.2)"; (e.target as HTMLInputElement).style.background="rgba(255,255,255,0.05)"; }}/>
                    <input style={inp} placeholder="Company" value={form.company} onChange={e=>setForm({...form,company:e.target.value})}
                      onFocus={e=>{ (e.target as HTMLInputElement).style.borderColor="#00B4A0"; (e.target as HTMLInputElement).style.background="rgba(0,180,160,0.06)"; }}
                      onBlur={e=>{ (e.target as HTMLInputElement).style.borderColor="rgba(0,180,160,0.2)"; (e.target as HTMLInputElement).style.background="rgba(255,255,255,0.05)"; }}/>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                    <input style={inp} type="email" placeholder="Email *" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}
                      onFocus={e=>{ (e.target as HTMLInputElement).style.borderColor="#00B4A0"; (e.target as HTMLInputElement).style.background="rgba(0,180,160,0.06)"; }}
                      onBlur={e=>{ (e.target as HTMLInputElement).style.borderColor="rgba(0,180,160,0.2)"; (e.target as HTMLInputElement).style.background="rgba(255,255,255,0.05)"; }}/>
                    <input style={inp} placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}
                      onFocus={e=>{ (e.target as HTMLInputElement).style.borderColor="#00B4A0"; (e.target as HTMLInputElement).style.background="rgba(0,180,160,0.06)"; }}
                      onBlur={e=>{ (e.target as HTMLInputElement).style.borderColor="rgba(0,180,160,0.2)"; (e.target as HTMLInputElement).style.background="rgba(255,255,255,0.05)"; }}/>
                  </div>
                  <select style={{...inp, cursor:"pointer"}} value={form.service} onChange={e=>setForm({...form,service:e.target.value})}
                    onFocus={e=>{ (e.target as HTMLSelectElement).style.borderColor="#00B4A0"; }}
                    onBlur={e=>{ (e.target as HTMLSelectElement).style.borderColor="rgba(0,180,160,0.2)"; }}>
                    <option value="" disabled>Service Required</option>
                    <option>Welding Works</option>
                    <option>Surface Preparation</option>
                    <option>Protective Coatings</option>
                    <option>Maintenance & Repair</option>
                    <option>Offshore & Marine</option>
                    <option>Steel Fabrication</option>
                    <option>Multiple Services</option>
                  </select>
                  <textarea style={{...inp, minHeight:110, resize:"none"}} placeholder="Describe your project..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                    onFocus={e=>{ (e.target as HTMLTextAreaElement).style.borderColor="#00B4A0"; (e.target as HTMLTextAreaElement).style.background="rgba(0,180,160,0.06)"; }}
                    onBlur={e=>{ (e.target as HTMLTextAreaElement).style.borderColor="rgba(0,180,160,0.2)"; (e.target as HTMLTextAreaElement).style.background="rgba(255,255,255,0.05)"; }}/>
                  <button type="submit" disabled={status==="sending"} className="btn-shimmer" style={{
                    padding:"15px", borderRadius:14, fontFamily:"'Inter',sans-serif",
                    fontWeight:700, fontSize:15, color:"#0A1628", border:"none",
                    cursor: status==="sending" ? "not-allowed" : "pointer",
                    opacity: status==="sending" ? 0.7 : 1,
                    transition:"transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={e=>{ if(status!=="sending"){ (e.currentTarget as HTMLButtonElement).style.transform="scale(1.02)"; (e.currentTarget as HTMLButtonElement).style.boxShadow="0 12px 32px rgba(0,180,160,0.35)"; }}}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLButtonElement).style.transform="scale(1)"; (e.currentTarget as HTMLButtonElement).style.boxShadow="none"; }}
                  >
                    {status==="sending" ? "Sending…" : "Send Enquiry →"}
                  </button>
                  <p style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:"rgba(248,250,251,0.3)", textAlign:"center" }}>Typically respond within 24 business hours</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
