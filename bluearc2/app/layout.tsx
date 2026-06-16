// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Bluearc Contracting LLC | Welding & Industrial Painting — UAE",
//   description: "Specialized welding and industrial painting contracting for oil & gas, marine, offshore, construction, and infrastructure sectors across UAE and the Middle East.",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }


// app/layout.tsx
import type { Metadata } from "next";
 

export const metadata: Metadata = {
  title: "Bluearc Contracting LLC | Welding & Industrial Painting — UAE",
  description: "Specialized welding and industrial painting contracting for oil & gas, marine, offshore, construction, and infrastructure sectors across UAE and the Middle East.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  // Additional metadata for better mobile experience
  themeColor: "#0A1628",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Bluearc Contracting",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Viewport meta tag for mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        
        {/* Apple touch icon for iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0A1628" />
        
        {/* Mobile-friendly meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}