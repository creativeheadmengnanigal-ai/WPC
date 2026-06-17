// export default function Footer() {
//   const year = new Date().getFullYear();
//   const cols = [
//     { title:"Services", items:["Welding Works","Surface Preparation","Protective Coatings","Offshore & Marine","Steel Fabrication"] },
//     { title:"Industries", items:["Oil & Gas","Offshore & Marine","Shipbuilding","Power & Energy","Petrochemical"] },
//     { title:"Company", items:["About Us","Core Values","Health & Safety","Contact"] },
//   ];
//   return (
//     <footer style={{ background:"#060D1A", borderTop:"1px solid rgba(0,180,160,0.08)" }}>
//       <div style={{ maxWidth:1280, margin:"0 auto", padding:"64px 24px 32px" }}>
//         <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:40, marginBottom:48 }}>
//           {/* Brand */}
//           <div style={{ gridColumn:"span 1" }}>
//             <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
//               <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="arc-glow" style={{ animationDuration:"3s" }}>
//                 <path d="M2 18Q14 2 26 18" stroke="url(#fg)" strokeWidth="3" strokeLinecap="round" fill="none"/>
//                 <circle cx="26" cy="18" r="2.5" fill="#2A6BC7"/>
//                 <circle cx="14" cy="5" r="1.8" fill="#00B4A0"/>
//                 <defs><linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#00B4A0"/><stop offset="100%" stopColor="#2A6BC7"/></linearGradient></defs>
//               </svg>
//               <span style={{ fontFamily:"'Inter',sans-serif", fontWeight:800, fontSize:16, color:"#F8FAFB" }}>
//                 Blue<span style={{ color:"#00B4A0" }}>arc</span> Contracting LLC
//               </span>
//             </div>
//             <p style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:"rgba(248,250,251,0.35)", lineHeight:1.8, maxWidth:240 }}>
//               Specialized welding and industrial painting contracting across UAE and Middle East.
//             </p>
//           </div>

//           {cols.map(col=>(
//             <div key={col.title}>
//               <h4 style={{ fontFamily:"'Inter',sans-serif", fontWeight:700, fontSize:13, color:"#F8FAFB", marginBottom:18 }}>{col.title}</h4>
//               <ul style={{ listStyle:"none", padding:0, display:"flex", flexDirection:"column", gap:10 }}>
//                 {col.items.map(item=>(
//                   <li key={item}>
//                     <a href={item==="Contact" ? "#contact" : item==="About Us" ? "#about" : "#services"} style={{
//                       fontFamily:"'Inter',sans-serif", fontSize:12, color:"rgba(248,250,251,0.38)",
//                       textDecoration:"none", transition:"color 0.2s",
//                     }}
//                     onMouseEnter={e=>(e.currentTarget as HTMLAnchorElement).style.color="#00B4A0"}
//                     onMouseLeave={e=>(e.currentTarget as HTMLAnchorElement).style.color="rgba(248,250,251,0.38)"}
//                     >{item}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div style={{ borderTop:"1px solid rgba(255,255,255,0.05)", paddingTop:24, display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:12 }}>
//           <p style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:"rgba(248,250,251,0.22)" }}>
//             © {year} Bluearc Contracting LLC. All rights reserved.
//           </p>
//           <div style={{ display:"flex", alignItems:"center", gap:8 }}>
//             <span style={{ width:6, height:6, borderRadius:"50%", background:"#00B4A0", display:"block", animation:"arcPulse 2s infinite" }}/>
//             <span style={{ fontFamily:"'Inter',sans-serif", fontSize:11, color:"rgba(248,250,251,0.22)" }}>UAE & Middle East</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


// app/components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();
  const cols = [
    { title: "Services", items: ["Welding Works", "Surface Preparation", "Protective Coatings", "Offshore & Marine", "Steel Fabrication"] },
    { title: "Industries", items: ["Oil & Gas", "Offshore & Marine", "Shipbuilding", "Power & Energy", "Petrochemical"] },
    { title: "Company", items: ["About Us", "Core Values", "Health & Safety", "Contact"] },
  ];
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="arc-glow" style={{ animationDuration: "3s" }}>
                <path d="M2 18Q14 2 26 18" stroke="url(#fg)" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <circle cx="26" cy="18" r="2.5" fill="#2A6BC7"/>
                <circle cx="14" cy="5" r="1.8" fill="#00B4A0"/>
                <defs>
                  <linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00B4A0"/>
                    <stop offset="100%" stopColor="#2A6BC7"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="footer-logo-text">
                Blue<span style={{ color: "#00B4A0" }}>arc</span> Contracting LLC
              </span>
            </div>
            <p className="footer-brand-text">
              Specialized welding and industrial painting contracting across UAE and Middle East.
            </p>
          </div>

          {cols.map(col => (
            <div key={col.title} className="footer-col">
              <h4 className="footer-col-title">{col.title}</h4>
              <ul className="footer-col-list">
                {col.items.map(item => (
                  <li key={item}>
                    <a 
                      href={item === "Contact" ? "#contact" : item === "About Us" ? "#about" : "#services"} 
                      className="footer-col-link"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} Bluearc Contracting LLC. All rights reserved.
          </p>
          <div className="footer-location">
            <span className="footer-location-dot" />
            <span className="footer-location-text">UAE & Middle East</span>
          </div>
        </div>
      </div>
    </footer>
  );
}