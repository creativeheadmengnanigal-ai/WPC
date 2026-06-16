"use client";
import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Navbar     from "@/components/Navbar";
import Hero       from "@/components/Hero";
import Services   from "@/components/Services";
import Industries from "@/components/Industries";
import Workforce  from "@/components/Workforce";
import HSQ        from "@/components/HSQ";
import About      from "@/components/About";
import Contact    from "@/components/Contact";
import Footer     from "@/components/Footer";

const IntroOverlay = dynamic(() => import("@/components/IntroOverlay"), { ssr: false });

export default function Home() {
  const [introVisible, setIntroVisible] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleIntroDone = useCallback(() => {
    setIntroVisible(false);
    setTimeout(() => setContentVisible(true), 200);
  }, []);

  return (
    <>
      {introVisible && <IntroOverlay onDone={handleIntroDone} />}
      <Navbar visible={contentVisible} />
      <main>
        <Hero     visible={contentVisible} />
        <Services />
        <Industries />
        <Workforce />
        <HSQ />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
