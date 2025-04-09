"use client";

import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <section className="font-[family-name:var(--font-poppins-sans)]">
      <Navbar />
      <Hero />
      <Footer />
    </section>
  );
}
