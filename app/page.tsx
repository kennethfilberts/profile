"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-poppins-sans)]">
      <Navbar />

      <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div>Kenneth Filbert</div>
      </div>

      <Footer />
    </div>
  );
}
