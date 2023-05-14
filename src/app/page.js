"use client";

import { useEffect } from "react";
import About from "src/sections/About";
import Contact from "src/sections/Contact";
import Home from "src/sections/Home";
import Portfolio from "src/sections/Portfolio";

import ScrollReveal from "scrollreveal";
import Head from "next/head";

export default function Page() {
  useEffect(() => {
    const sr = ScrollReveal({ reset: true });
    sr.reveal("#home", { duration: 200 });

    sr.reveal("#portfolio", {
      origin: "right",
      duration: 2000,
    });

    sr.reveal("#about", {
      rotate: { x: 100, y: 100, z: 0 },
      duration: 1000,
    });

    sr.reveal("#contact", {
      viewFactor: 0.5,
    });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <title>Dang&pos;s Porfolio</title>
      </Head>
      <Home />
      <Portfolio />
      <About />
      <Contact />
      
    </main>
  );
}
