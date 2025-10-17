"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import emailjs from "emailjs-com";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => setSent(true),
        (error) => console.error(error.text)
      );
  };

  const closeModal = (e: any) => {
    e.preventDefault();
    setSent(false);
    form.current!.reset();
  };

  return (
    <div className="font-[family-name:var(--font-poppins-sans)]">
      <Navbar />
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen px-6 py-24 sm:px-12 lg:px-44 text-foreground bg-background justify-center items-center flex flex-col"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground text-center max-w-xl mx-auto mb-10"
        >
          Whether you have a question, a project in mind, or just want to say hi
          — my inbox is always open.
        </motion.p>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 max-w-xl mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="px-4 py-3 rounded-md border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-md border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="px-4 py-3 rounded-md border h-32 resize-none bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <Button
            type="submit"
            className="w-fit self-center px-8 hover:cursor-pointer"
          >
            {sent ? "Message Sent!" : "Send Message"}
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-muted-foreground mt-8"
        >
          Or reach me directly at
          <a
            href="mailto:kennethfilbert686@gmail.com"
            className="text-primary underline ml-1"
          >
            kennethfilbert686@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center gap-6 mt-6"
        >
          {[
            {
              icon: <Linkedin className="h-6 w-6" />,
              href: "https://linkedin.com/in/yourprofile",
            },
            {
              icon: <Github className="h-6 w-6" />,
              href: "https://github.com/yourprofile",
            },
            {
              icon: <Mail className="h-6 w-6" />,
              href: "mailto:kennethfilbert686@gmail.com",
            },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-muted-foreground hover:text-primary transition"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.section>
      <Footer />

      {sent && (
        <motion.div className="fixed inset-0 flex items-center justify-center z-50 bg-black/90">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-background border shadow-xl rounded-xl px-6 py-8 max-w-md w-full text-center"
          >
            <h3 className="text-2xl font-semibold mb-2">🎉 Message Sent!</h3>
            <p className="text-muted-foreground mb-4">
              Thank you for reaching out. I'll get back to you as soon as
              possible!
            </p>
            <Button
              onClick={(e) => closeModal(e)}
              className="px-6 py-2 mt-2 hover:cursor-pointer"
            >
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
