"use client";

import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="font-[family-name:var(--font-poppins-sans)]">
      <Image
        width={750}
        height={750}
        src={"/assets/extras/gradient.png"}
        alt="gradient-background"
        className="absolute top-0 right-0 opacity-60 -z-10"
      ></Image>
      <motion.div className="h-0 w-[40rem] absolute top-[20%] right-0 shadow-[0_0_200px_50px_#D4A017] dark:shadow-[0_0_200px_30px_#FFFFFF] -rotate-[50deg]"></motion.div>

      <Navbar />
      <Hero />
      <Footer />
    </section>
  );
}
