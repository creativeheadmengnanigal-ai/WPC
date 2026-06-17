// "use client";
// import { useEffect, useRef } from "react";

// export default function Hero({ visible }: { visible: boolean }) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const mouseRef  = useRef({ x: 0.5, y: 0.5 });

//   /* Particle canvas */
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d")!;
//     let running = true;

//     const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
//     resize();
//     window.addEventListener("resize", resize);

//     const onMove = (e: MouseEvent) => {
//       mouseRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
//     };
//     window.addEventListener("mousemove", onMove);

//     type P = { x:number;y:number;vx:number;vy:number;life:number;max:number;r:number;hue:number };
//     const pool: P[] = [];
//     let frame = 0;

//     const spawnAmbient = () => {
//       if (Math.random() > 0.4) return;
//       pool.push({
//         x: Math.random() * canvas.width,
//         y: canvas.height + 10,
//         vx: (Math.random() - 0.5) * 0.6,
//         vy: -(Math.random() * 1.5 + 0.5),
//         life: 0, max: 120 + Math.random() * 80,
//         r: Math.random() * 1.5 + 0.5,
//         hue: Math.random() > 0.6 ? 174 : 210,
//       });
//     };

//     const spawnMouseSpark = () => {
//       const mx = mouseRef.current.x * canvas.width;
//       const my = mouseRef.current.y * canvas.height;
//       if (Math.random() > 0.7) return;
//       pool.push({
//         x: mx + (Math.random() - 0.5) * 30,
//         y: my + (Math.random() - 0.5) * 30,
//         vx: (Math.random() - 0.5) * 2,
//         vy: -Math.random() * 3 - 0.5,
//         life: 0, max: 30 + Math.random() * 30,
//         r: Math.random() * 2 + 0.5,
//         hue: 174,
//       });
//     };

//     const draw = () => {
//       if (!running) return;
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       spawnAmbient();
//       if (frame % 2 === 0) spawnMouseSpark();
//       for (let i = pool.length - 1; i >= 0; i--) {
//         const p = pool[i];
//         p.x += p.vx; p.y += p.vy; p.life++;
//         const alpha = Math.max(0, 1 - p.life / p.max);
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r * alpha, 0, Math.PI * 2);
//         ctx.fillStyle = `hsla(${p.hue},100%,65%,${alpha * 0.8})`;
//         ctx.fill();
//         if (p.life >= p.max) pool.splice(i, 1);
//       }
//       frame++;
//       requestAnimationFrame(draw);
//     };
//     draw();
//     return () => { running = false; window.removeEventListener("resize", resize); window.removeEventListener("mousemove", onMove); };
//   }, []);

//   const stats = [
//     { val: "7+",   label: "Industries" },
//     { val: "ISO",  label: "Compliant" },
//     { val: "24/7", label: "Support" },
//     { val: "UAE",  label: "& Gulf" },
//   ];

//   return (
//     <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#0A1628" }}>
//       {/* Grid */}
//       <div className="perspective-grid" style={{ position: "absolute", inset: 0, opacity: 1 }}/>

//       {/* Canvas */}
//       <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}/>

//       {/* Glow orbs */}
//       <div style={{ position: "absolute", top: "25%", left: "20%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,180,160,0.12) 0%, transparent 70%)", pointerEvents: "none" }}/>
//       <div style={{ position: "absolute", top: "30%", right: "15%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,74,140,0.15) 0%, transparent 70%)", pointerEvents: "none" }}/>

//       {/* Scan line */}
//       <div className="scanline" style={{ zIndex: 2 }}/>

//       {/* Content */}
//       <div style={{ position: "relative", zIndex: 3, textAlign: "center", maxWidth: 1000, margin: "0 auto", padding: "120px 24px 60px",
//         opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)",
//         transition: "opacity 0.8s ease, transform 0.8s ease",
//       }}>
//         {/* Eyebrow badge */}
//         <div className="fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "both", display: "inline-flex", alignItems: "center", gap: 8,
//           padding: "7px 18px", borderRadius: 50, marginBottom: 32,
//           border: "1px solid rgba(0,180,160,0.3)", background: "rgba(0,180,160,0.08)",
//         }}>
//           <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00B4A0", display: "block", animation: "arcPulse 1.5s ease-in-out infinite" }}/>
//           <span style={{ fontFamily: "'Inter'", fontSize: 11, fontWeight: 600, color: "#00B4A0", letterSpacing: "0.25em", textTransform: "uppercase" }}>
//             UAE & Middle East Specialists
//           </span>
//         </div>

//         {/* Main headline */}
//         <h1 className="fade-in-up" style={{
//           animationDelay: "0.25s", animationFillMode: "both",
//           fontFamily: "'Inter'", fontWeight: 800,
//           fontSize: "clamp(44px, 8vw, 96px)", lineHeight: 1.02,
//           letterSpacing: "-0.03em", color: "#F8FAFB", marginBottom: 24,
//         }}>
//           Where{" "}
//           <span style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//             backgroundImage: "linear-gradient(135deg, #00B4A0 20%, #2A6BC7 80%)",
//             backgroundClip: "text",
//           }}>Precision</span>
//           <br/>
//           Meets the{" "}
//           <span className="glitch" data-text="Arc." style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//             backgroundImage: "linear-gradient(135deg, #2A6BC7 20%, #00D4BC 80%)",
//             backgroundClip: "text",
//           }}>Arc.</span>
//         </h1>

//         {/* Subhead */}
//         <p className="fade-in-up" style={{
//           animationDelay: "0.4s", animationFillMode: "both",
//           fontFamily: "'Inter'", fontWeight: 300, fontSize: "clamp(16px, 2.5vw, 20px)",
//           color: "rgba(248,250,251,0.55)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 40px",
//         }}>
//           Specialized welding &amp; industrial painting contracting — delivering quality, safety, and precision across oil &amp; gas, marine, offshore, and infrastructure.
//         </p>

//         {/* CTAs */}
//         <div className="fade-in-up" style={{ animationDelay: "0.55s", animationFillMode: "both", display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
//           <a href="#contact" className="btn-shimmer" style={{
//             padding: "14px 36px", borderRadius: 50, fontFamily: "'Inter'",
//             fontWeight: 700, fontSize: 15, color: "#0A1628", textDecoration: "none",
//             transition: "transform 0.2s, box-shadow 0.2s",
//           }}
//           onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = "scale(1.05)"; el.style.boxShadow = "0 16px 40px rgba(0,180,160,0.4)"; }}
//           onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = "scale(1)"; el.style.boxShadow = "none"; }}
//           >
//             Request a Quote
//           </a>
//           <a href="#services" style={{
//             padding: "14px 36px", borderRadius: 50, fontFamily: "'Inter'",
//             fontWeight: 600, fontSize: 15, color: "rgba(248,250,251,0.8)", textDecoration: "none",
//             border: "1px solid rgba(248,250,251,0.2)", transition: "all 0.2s",
//           }}
//           onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(0,180,160,0.5)"; el.style.background = "rgba(0,180,160,0.08)"; el.style.color = "#F8FAFB"; }}
//           onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(248,250,251,0.2)"; el.style.background = "transparent"; el.style.color = "rgba(248,250,251,0.8)"; }}
//           >
//             Explore Services ↓
//           </a>
//         </div>

//         {/* Stats bar */}
//         <div className="fade-in-up" style={{
//           animationDelay: "0.7s", animationFillMode: "both",
//           display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
//           border: "1px solid rgba(0,180,160,0.15)", borderRadius: 16, overflow: "hidden",
//         }}>
//           {stats.map((s, i) => (
//             <div key={s.label} style={{
//               padding: "20px 16px", textAlign: "center",
//               background: "rgba(10,22,40,0.7)",
//               borderRight: i < 3 ? "1px solid rgba(0,180,160,0.1)" : "none",
//             }}>
//               <p style={{ fontFamily: "'Inter' ", fontWeight: 800, fontSize: "clamp(22px, 4vw, 32px)",
//                 WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//                 backgroundImage: "linear-gradient(135deg, #00B4A0, #2A6BC7)", backgroundClip: "text",
//               }}>{s.val}</p>
//               <p style={{ fontFamily: "'Inter'", fontSize: 10, fontWeight: 500, color: "rgba(248,250,251,0.35)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom arc wave */}
//       <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
//         <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", display: "block" }}>
//           <path d="M0,90 Q360,20 720,60 Q1080,100 1440,30 L1440,90 L0,90 Z" fill="#0D1F3C" opacity="0.6"/>
//           <path d="M0,90 Q360,50 720,80 Q1080,110 1440,60 L1440,90 L0,90 Z" fill="#F8FAFB"/>
//         </svg>
//       </div>
//     </section>
//   );
// }

// app/components/Hero.tsx
"use client";
import { useEffect, useRef } from "react";

export default function Hero({ visible }: { visible: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  /* Particle canvas */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let running = true;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("mousemove", onMove);

    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      max: number;
      r: number;
      hue: number;
    };
    const pool: P[] = [];
    let frame = 0;

    const spawnAmbient = () => {
      if (Math.random() > 0.4) return;
      pool.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -(Math.random() * 1.5 + 0.5),
        life: 0,
        max: 120 + Math.random() * 80,
        r: Math.random() * 1.5 + 0.5,
        hue: Math.random() > 0.6 ? 174 : 210,
      });
    };

    const spawnMouseSpark = () => {
      const mx = mouseRef.current.x * canvas.width;
      const my = mouseRef.current.y * canvas.height;
      if (Math.random() > 0.7) return;
      pool.push({
        x: mx + (Math.random() - 0.5) * 30,
        y: my + (Math.random() - 0.5) * 30,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 3 - 0.5,
        life: 0,
        max: 30 + Math.random() * 30,
        r: Math.random() * 2 + 0.5,
        hue: 174,
      });
    };

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      spawnAmbient();
      if (frame % 2 === 0) spawnMouseSpark();
      for (let i = pool.length - 1; i >= 0; i--) {
        const p = pool[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        const alpha = Math.max(0, 1 - p.life / p.max);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * alpha, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},100%,65%,${alpha * 0.8})`;
        ctx.fill();
        if (p.life >= p.max) pool.splice(i, 1);
      }
      frame++;
      requestAnimationFrame(draw);
    };
    draw();

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const stats = [
    { val: "7+", label: "Industries" },
    { val: "ISO", label: "Compliant" },
    { val: "24/7", label: "Support" },
    { val: "UAE", label: "& Gulf" },
  ];

  return (

<h1 className="text-5xl font-bold">
  Welding & Industrial Painting Services in UAE
</h1>

    <section id="hero" className="hero-section">
      {/* Grid */}
      <div className="hero-grid" />

      {/* Canvas */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Glow orbs */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      {/* Scan line */}
      <div className="hero-scanline" />

      {/* Content */}
      <div className={`hero-content ${visible ? "visible" : "hidden"}`}>
        {/* Eyebrow badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span className="hero-badge-text">
            UAE & Middle East Specialists
          </span>
        </div>

        {/* Main headline */}
        <h1 className="hero-heading">
          Where{" "}
          <span className="gradient-text gradient-primary">Precision</span>
          <br />
          Meets the{" "}
          <span className="glitch gradient-text gradient-secondary" data-text="Arc.">
            Arc.
          </span>
        </h1>

        {/* Subhead */}
        <p className="hero-description">
          Specialized welding &amp; industrial painting contracting — delivering
          quality, safety, and precision across oil &amp; gas, marine, offshore,
          and infrastructure.
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <a href="#contact" className="btn-primary btn-shimmer">
            Request a Quote
          </a>
          <a href="#services" className="btn-secondary">
            Explore Services ↓
          </a>
        </div>

        {/* Stats bar */}
        <div className="hero-stats">
          {stats.map((s, i) => (
            <div key={s.label} className="hero-stat-item">
              <p className="hero-stat-value">{s.val}</p>
              <p className="hero-stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom arc wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,90 Q360,20 720,60 Q1080,100 1440,30 L1440,90 L0,90 Z"
            fill="#0D1F3C"
            opacity="0.6"
          />
          <path
            d="M0,90 Q360,50 720,80 Q1080,110 1440,60 L1440,90 L0,90 Z"
            fill="#F8FAFB"
          />
        </svg>
      </div>
    </section>
  );
}
