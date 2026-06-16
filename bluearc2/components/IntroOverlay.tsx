"use client";
import { useEffect, useRef, useState } from "react";

interface Props { onDone: () => void; }

export default function IntroOverlay({ onDone }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<"arc" | "logo" | "tagline" | "done">("arc");
  const [tagText, setTagText] = useState("");
  const TAG = "Igniting Precision.";

  /* Spark particle system on canvas */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    type Spark = { x:number; y:number; vx:number; vy:number; life:number; max:number; hue:number; size:number };
    const sparks: Spark[] = [];
    const cx = canvas.width / 2;
    const cy = canvas.height / 2 + 30;

    const burst = (count = 20) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 2;
        sparks.push({
          x: cx, y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2,
          life: 0, max: 40 + Math.random() * 50,
          hue: Math.random() > 0.5 ? 174 : 210,
          size: Math.random() * 3 + 1,
        });
      }
    };

    let frame = 0;
    let running = true;
    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (frame % 8 === 0 && frame < 120) burst(15);
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx; s.y += s.vy; s.vy += 0.15; s.vx *= 0.98;
        s.life++;
        const alpha = Math.max(0, 1 - s.life / s.max);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * alpha, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue}, 100%, 65%, ${alpha})`;
        ctx.fill();
        /* tail */
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 3, s.y - s.vy * 3);
        ctx.strokeStyle = `hsla(${s.hue}, 100%, 75%, ${alpha * 0.4})`;
        ctx.lineWidth = s.size * 0.6 * alpha;
        ctx.stroke();
        if (s.life >= s.max) sparks.splice(i, 1);
      }
      frame++;
      requestAnimationFrame(draw);
    };
    draw();
    return () => { running = false; };
  }, []);

  /* Phase sequencer */
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("logo"),    1200);
    const t2 = setTimeout(() => setPhase("tagline"), 2200);
    const t3 = setTimeout(() => setPhase("done"),    4400);
    return () => [t1,t2,t3].forEach(clearTimeout);
  }, []);

  /* Typewriter for tagline */
  useEffect(() => {
    if (phase !== "tagline") return;
    let i = 0;
    const iv = setInterval(() => {
      setTagText(TAG.slice(0, ++i));
      if (i >= TAG.length) clearInterval(iv);
    }, 55);
    return () => clearInterval(iv);
  }, [phase]);

  useEffect(() => {
    if (phase === "done") {
      const t = setTimeout(onDone, 600);
      return () => clearTimeout(t);
    }
  }, [phase, onDone]);

  return (
    <div id="intro-overlay" className={phase === "done" ? "hidden" : ""}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Radial glow behind center */}
      <div className="absolute" style={{
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(0,180,160,0.2) 0%, transparent 70%)",
        left: "50%", top: "50%", transform: "translate(-50%, -50%)",
        transition: "opacity 0.5s",
        opacity: phase === "arc" ? 0 : 1,
      }}/>

      <div className="relative flex flex-col items-center justify-center gap-6 text-center px-6">
        {/* SVG arc draw */}
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="arc-glow">
          <path
            d="M 6 74 Q 60 6 114 74"
            stroke="url(#ig)" strokeWidth="4" strokeLinecap="round" fill="none"
            className={phase !== "arc" ? "intro-arc" : ""}
            style={{ strokeDasharray: 800, strokeDashoffset: phase === "arc" ? 800 : 0,
              transition: "stroke-dashoffset 1.4s cubic-bezier(.4,0,.2,1)" }}
          />
          <circle cx="114" cy="74" r="5" fill="#2A6BC7"
            style={{ opacity: phase === "arc" ? 0 : 1, transition: "opacity 0.3s 1.2s" }}/>
          <circle cx="60" cy="20" r="3.5" fill="#00B4A0"
            style={{ opacity: phase === "arc" ? 0 : 1, transition: "opacity 0.3s 1.4s" }}/>
          <defs>
            <linearGradient id="ig" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00B4A0"/>
              <stop offset="100%" stopColor="#2A6BC7"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Logo wordmark */}
        <div style={{ opacity: phase === "arc" ? 0 : 1, transform: phase === "arc" ? "translateY(12px)" : "none", transition: "opacity 0.5s 0.2s, transform 0.5s 0.2s" }}>
          <h1 className="glitch" data-text="Bluearc" style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(48px, 10vw, 80px)",
            fontWeight: 800,
            color: "#F8FAFB",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}>
            Blue<span style={{ color: "#00B4A0" }}>arc</span>
          </h1>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, letterSpacing: "0.35em", color: "rgba(248,250,251,0.4)", textTransform: "uppercase", marginTop: 6 }}>
            Contracting LLC
          </p>
        </div>

        {/* Tagline typewriter */}
        <p className={phase === "tagline" || phase === "done" ? "cursor" : ""} style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(16px, 3vw, 22px)",
          color: "rgba(0,180,160,0.9)",
          fontWeight: 300,
          letterSpacing: "0.05em",
          minHeight: 32,
          opacity: phase === "arc" ? 0 : 1,
          transition: "opacity 0.4s 0.8s",
        }}>
          {tagText}
        </p>

        {/* Loading bar */}
        <div style={{ width: 200, height: 2, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden", marginTop: 8 }}>
          <div style={{
            height: "100%",
            background: "linear-gradient(90deg, #00B4A0, #2A6BC7)",
            borderRadius: 2,
            transition: "width 3.2s cubic-bezier(.4,0,.2,1)",
            width: phase === "arc" ? "10%" : phase === "logo" ? "50%" : phase === "tagline" ? "90%" : "100%",
          }}/>
        </div>
      </div>
    </div>
  );
}
