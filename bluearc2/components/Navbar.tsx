// "use client";
// import { useState, useEffect } from "react";

// const links = [
//   { label: "Services", href: "#services" },
//   { label: "Industries", href: "#industries" },
//   { label: "Workforce", href: "#workforce" },
//   { label: "Safety", href: "#hsq" },
//   { label: "About", href: "#about" },
//   { label: "Contact", href: "#contact" },
// ];

// export default function Navbar({ visible }: { visible: boolean }) {
//   const [scrolled, setScrolled] = useState(false);
//   const [active, setActive]   = useState("");
//   const [open, setOpen]       = useState(false);

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 60);
//     window.addEventListener("scroll", fn);
//     return () => window.removeEventListener("scroll", fn);
//   }, []);

//   useEffect(() => {
//     const ids = links.map(l => l.href.slice(1));
//     const obs = new IntersectionObserver(
//       entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
//       { threshold: 0.35 }
//     );
//     ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <header style={{
//       position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
//       transition: "opacity 0.6s ease, transform 0.6s ease, background 0.3s",
//       opacity: visible ? 1 : 0,
//       transform: visible ? "none" : "translateY(-20px)",
//       background: scrolled ? "rgba(6,13,26,0.92)" : "transparent",
//       backdropFilter: scrolled ? "blur(12px)" : "none",
//       borderBottom: scrolled ? "1px solid rgba(0,180,160,0.1)" : "none",
//     }}>
//       <nav style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//         {/* Logo */}
//         <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
//           <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="arc-glow" style={{ animationDuration: "3s" }}>
//             <path d="M2 22 Q16 2 30 22" stroke="url(#ng)" strokeWidth="3" strokeLinecap="round" fill="none"/>
//             <circle cx="30" cy="22" r="3" fill="#2A6BC7"/>
//             <circle cx="16" cy="6" r="2" fill="#00B4A0"/>
//             <defs>
//               <linearGradient id="ng" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="#00B4A0"/>
//                 <stop offset="100%" stopColor="#2A6BC7"/>
//               </linearGradient>
//             </defs>
//           </svg>
//           <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 18, color: "#F8FAFB", lineHeight: 1 }}>
//             Blue<span style={{ color: "#00B4A0" }}>arc</span>
//             <span style={{ display: "block", fontSize: 9, fontWeight: 400, color: "rgba(248,250,251,0.4)", letterSpacing: "0.3em", textTransform: "uppercase" }}>Contracting LLC</span>
//           </span>
//         </a>

//         {/* Desktop */}
//         <ul style={{ display: "flex", gap: 32, listStyle: "none", padding: 0 }} className="hidden md:flex">
//           {links.map(l => (
//             <li key={l.href}>
//               <a href={l.href} style={{
//                 fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500,
//                 color: active === l.href.slice(1) ? "#00B4A0" : "rgba(248,250,251,0.6)",
//                 textDecoration: "none", transition: "color 0.2s",
//                 position: "relative",
//               }}
//               onMouseEnter={e => { if (active !== l.href.slice(1)) (e.currentTarget as HTMLAnchorElement).style.color = "#F8FAFB"; }}
//               onMouseLeave={e => { if (active !== l.href.slice(1)) (e.currentTarget as HTMLAnchorElement).style.color = "rgba(248,250,251,0.6)"; }}
//               >
//                 {l.label}
//                 {active === l.href.slice(1) && (
//                   <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #00B4A0, #2A6BC7)", borderRadius: 1 }}/>
//                 )}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <a href="#contact" className="hidden md:inline-flex btn-shimmer" style={{
//           padding: "10px 22px", borderRadius: 50, fontSize: 13, fontWeight: 600,
//           fontFamily: "'Inter', sans-serif", color: "#0A1628", textDecoration: "none",
//           transition: "transform 0.2s",
//         }}
//         onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)"}
//         onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"}
//         >
//           Get a Quote
//         </a>

//         {/* Hamburger */}
//         <button onClick={() => setOpen(!open)} className="md:hidden" style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}>
//           <div style={{ width: 24, height: 2, background: "#F8FAFB", marginBottom: 6, transition: "transform 0.3s", transform: open ? "rotate(45deg) translate(4px,8px)" : "none" }}/>
//           <div style={{ width: 18, height: 2, background: "#F8FAFB", marginBottom: 6, opacity: open ? 0 : 1, transition: "opacity 0.2s" }}/>
//           <div style={{ width: 24, height: 2, background: "#F8FAFB", transition: "transform 0.3s", transform: open ? "rotate(-45deg) translate(4px,-8px)" : "none" }}/>
//         </button>
//       </nav>

//       {/* Mobile drawer */}
//       <div className="md:hidden" style={{
//         background: "rgba(6,13,26,0.97)", borderTop: "1px solid rgba(0,180,160,0.1)",
//         maxHeight: open ? 500 : 0, overflow: "hidden", transition: "max-height 0.35s ease",
//       }}>
//         <div style={{ padding: "20px 24px 28px", display: "flex", flexDirection: "column", gap: 20 }}>
//           {links.map(l => (
//             <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
//               fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 500,
//               color: active === l.href.slice(1) ? "#00B4A0" : "rgba(248,250,251,0.75)",
//               textDecoration: "none",
//             }}>{l.label}</a>
//           ))}
//           <a href="#contact" onClick={() => setOpen(false)} className="btn-shimmer" style={{
//             textAlign: "center", padding: "12px 24px", borderRadius: 50,
//             fontSize: 14, fontWeight: 600, fontFamily: "'Inter', sans-serif",
//             color: "#0A1628", textDecoration: "none", marginTop: 4,
//           }}>Get a Quote</a>
//         </div>
//       </div>
//     </header>
//   );
// }


// app/components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Workforce", href: "#workforce" },
  { label: "Safety", href: "#hsq" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ visible }: { visible: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const ids = links.map(l => l.href.slice(1));
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.35 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "opacity 0.6s ease, transform 0.6s ease, background 0.3s",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(-20px)",
        background: scrolled ? "rgba(6,13,26,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,180,160,0.1)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 16px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo - Mobile Optimized */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <svg
            width="28"
            height="20"
            viewBox="0 0 32 24"
            fill="none"
            className="arc-glow"
            style={{ animationDuration: "3s" }}
          >
            <path
              d="M2 22 Q16 2 30 22"
              stroke="url(#ng)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="30" cy="22" r="3" fill="#2A6BC7" />
            <circle cx="16" cy="6" r="2" fill="#00B4A0" />
            <defs>
              <linearGradient id="ng" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00B4A0" />
                <stop offset="100%" stopColor="#2A6BC7" />
              </linearGradient>
            </defs>
          </svg>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: 16,
              color: "#F8FAFB",
              lineHeight: 1,
            }}
          >
            Blue<span style={{ color: "#00B4A0" }}>arc</span>
            <span
              style={{
                display: "block",
                fontSize: 7,
                fontWeight: 400,
                color: "rgba(248,250,251,0.4)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Contracting LLC
            </span>
          </span>
        </a>

        {/* Desktop Navigation - Hidden on mobile */}
        <ul
          style={{
            display: "flex",
            gap: 32,
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
          className="desktop-nav"
        >
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color:
                    active === l.href.slice(1)
                      ? "#00B4A0"
                      : "rgba(248,250,251,0.6)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  position: "relative",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => {
                  if (active !== l.href.slice(1))
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#F8FAFB";
                }}
                onMouseLeave={e => {
                  if (active !== l.href.slice(1))
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(248,250,251,0.6)";
                }}
              >
                {l.label}
                {active === l.href.slice(1) && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: "linear-gradient(90deg, #00B4A0, #2A6BC7)",
                      borderRadius: 1,
                    }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA - Hidden on mobile */}
        <a
          href="#contact"
          className="desktop-cta btn-shimmer"
          style={{
            padding: "10px 22px",
            borderRadius: 50,
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            color: "#0A1628",
            textDecoration: "none",
            transition: "transform 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={e =>
            (e.currentTarget as HTMLAnchorElement).style.transform =
              "scale(1.04)"
          }
          onMouseLeave={e =>
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"
          }
        >
          Get a Quote
        </a>

        {/* Hamburger - Visible on mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="hamburger-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: 8,
            transition: "background 0.2s",
          }}
          onTouchStart={e => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(255,255,255,0.1)";
          }}
          onTouchEnd={e => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "transparent";
          }}
          aria-label="Toggle menu"
        >
          <div
            style={{
              width: 22,
              height: 2,
              background: "#F8FAFB",
              marginBottom: 5,
              transition: "transform 0.3s, opacity 0.2s",
              transform: open ? "rotate(45deg) translate(4px, 6px)" : "none",
            }}
          />
          <div
            style={{
              width: 18,
              height: 2,
              background: "#F8FAFB",
              marginBottom: 5,
              opacity: open ? 0 : 1,
              transition: "opacity 0.2s",
            }}
          />
          <div
            style={{
              width: 22,
              height: 2,
              background: "#F8FAFB",
              transition: "transform 0.3s",
              transform: open ? "rotate(-45deg) translate(4px, -6px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className="mobile-drawer"
        style={{
          background: "rgba(6,13,26,0.98)",
          borderTop: "1px solid rgba(0,180,160,0.1)",
          maxHeight: open ? "calc(100vh - 60px)" : 0,
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          style={{
            padding: "16px 20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            overflowY: "auto",
            maxHeight: "calc(100vh - 60px)",
          }}
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color:
                  active === l.href.slice(1)
                    ? "#00B4A0"
                    : "rgba(248,250,251,0.8)",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "color 0.2s",
              }}
              onTouchStart={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#00B4A0";
              }}
            >
              {l.label}
              {active === l.href.slice(1) && (
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#00B4A0",
                    display: "block",
                  }}
                />
              )}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-shimmer"
            style={{
              textAlign: "center",
              padding: "14px 24px",
              borderRadius: 50,
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              color: "#0A1628",
              textDecoration: "none",
              marginTop: 8,
              width: "100%",
            }}
          >
            Get a Quote
          </a>
        </div>
      </div>

      {/* Responsive CSS */}
      <style jsx>{`
        /* Mobile: Hide desktop elements */
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
          .mobile-drawer {
            display: block !important;
          }
        }

        /* Desktop: Hide mobile elements */
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .hamburger-btn {
            display: none !important;
          }
          .mobile-drawer {
            display: none !important;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) {
          .desktop-nav a {
            -webkit-tap-highlight-color: transparent;
          }
          .hamburger-btn {
            touch-action: manipulation;
          }
        }

        /* Small phone optimizations */
        @media (max-width: 420px) {
          nav {
            padding: 0 12px !important;
            height: 56px !important;
          }
          .hamburger-btn {
            width: 36px !important;
            height: 36px !important;
            padding: 6px !important;
          }
          .hamburger-btn div {
            width: 18px !important;
            height: 1.5px !important;
            margin-bottom: 4px !important;
          }
          .hamburger-btn div:nth-child(2) {
            width: 14px !important;
          }
          .mobile-drawer div {
            padding: 12px 16px 20px !important;
          }
          .mobile-drawer a {
            font-size: 15px !important;
            padding: 10px 0 !important;
          }
        }

        /* Landscape phone */
        @media (max-height: 500px) and (orientation: landscape) {
          .mobile-drawer {
            max-height: calc(100vh - 56px) !important;
          }
          .mobile-drawer div {
            padding: 12px 16px 16px !important;
            gap: 8px !important;
          }
          .mobile-drawer a {
            padding: 8px 0 !important;
            font-size: 14px !important;
          }
        }
      `}</style>
    </header>
  );
}