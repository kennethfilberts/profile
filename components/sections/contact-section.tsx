"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Loader2, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://linkedin.com/in/kennethfilberts",
    label: "LinkedIn",
  },
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/kennethfilberts",
    label: "GitHub",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:kennethfilbert686@gmail.com",
    label: "Email",
  },
];

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    const { default: emailjs } = await import("emailjs-com");
    
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        () => {
          setSent(true);
          setSending(false);
        },
        (error) => {
          console.error(error.text);
          setSending(false);
        },
      );
  };

  const resetForm = () => {
    setSent(false);
    if (form.current) form.current.reset();
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-background text-foreground selection:bg-foreground selection:text-background py-24 md:py-32 min-h-screen flex flex-col justify-center"
    >
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-center">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, color-mix(in oklch, var(--dark-fg) 3%, transparent) 1px, transparent 1px),
              linear-gradient(to bottom, color-mix(in oklch, var(--dark-fg) 3%, transparent) 1px, transparent 1px)
            `,
            backgroundSize: "4rem 4rem",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 px-6 sm:px-12 md:px-24 max-w-[1600px] mx-auto w-full">
        {/* Massive Header */}
        <div className="mb-16 md:mb-24 overflow-hidden py-4">
          <motion.h2
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] md:text-[9vw] font-black uppercase leading-none tracking-tighter text-transparent"
            style={{ WebkitTextStroke: "2px var(--dark-fg)" }}
          >
            Initiate
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 border-t border-dark-fg/10 pt-12 lg:pt-16">
          {/* Left Column: Info & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl md:text-5xl font-light leading-tight mb-8">
                Let's build something exceptional together.
              </h3>
              <p className="text-dark-fg/50 text-sm md:text-base leading-relaxed font-light max-w-md mb-12">
                Whether you have a complex AI integration in mind, a full-stack
                project, or just want to connect — my inbox is always open.
              </p>
            </div>

            <div className="flex flex-col gap-8 border-t border-dark-fg/10 pt-8 mt-auto">
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-dark-fg/40 mb-4">
                  Direct Email
                </h4>
                <a
                  href="mailto:kennethfilbert686@gmail.com"
                  className="text-lg md:text-xl font-light hover:text-dark-fg/70 transition-colors"
                >
                  kennethfilbert686@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-dark-fg/40 mb-4">
                  Digital Presence
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-dark-fg/10 flex items-center justify-center text-dark-fg/50 hover:text-dark-bg hover:bg-dark-fg transition-all duration-300"
                    >
                      {item.icon}
                      <span className="sr-only">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-7 bg-dark-bg/20 backdrop-blur-sm p-6 md:p-12 border border-dark-fg/5 relative min-h-[500px] will-change-[backdrop-filter]"
          >
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  ref={form}
                  onSubmit={sendEmail}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-12 h-full justify-between"
                >
                  <div className="flex flex-col gap-10">
                    <div className="relative group">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-dark-fg/40 mb-3 block group-focus-within:text-dark-fg transition-colors">
                        01 // Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="w-full bg-transparent border-b border-dark-fg/10 pb-4 text-dark-fg text-lg font-light placeholder:text-dark-fg/20 focus:outline-none focus:border-dark-fg transition-colors"
                      />
                    </div>

                    <div className="relative group">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-dark-fg/40 mb-3 block group-focus-within:text-dark-fg transition-colors">
                        02 // Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        className="w-full bg-transparent border-b border-dark-fg/10 pb-4 text-dark-fg text-lg font-light placeholder:text-dark-fg/20 focus:outline-none focus:border-dark-fg transition-colors"
                      />
                    </div>

                    <div className="relative group flex-grow">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-dark-fg/40 mb-3 block group-focus-within:text-dark-fg transition-colors">
                        03 // Message
                      </label>
                      <textarea
                        name="message"
                        placeholder="Detail your project or inquiry here..."
                        required
                        className="w-full bg-transparent border-b border-dark-fg/10 pb-4 text-dark-fg text-lg font-light placeholder:text-dark-fg/20 focus:outline-none focus:border-dark-fg transition-colors resize-none h-32 md:h-40"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="group flex items-center justify-between border border-dark-fg/20 px-8 py-5 hover:bg-dark-fg hover:text-dark-bg transition-all duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  >
                    <span className="text-xs font-mono uppercase tracking-widest">
                      {sending ? "Transmitting..." : "Send Protocol"}
                    </span>
                    {sending ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-dark-bg-elevated/95 backdrop-blur-md border border-dark-fg/10 m-6 md:m-12"
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest text-dark-fg/40 mb-6 block">
                    System_Status // 200_OK
                  </span>
                  <h3 className="text-3xl font-light text-dark-fg mb-4">
                    Transmission Successful
                  </h3>
                  <p className="text-dark-fg/50 font-light mb-12 max-w-sm">
                    Your message has been securely routed to my inbox. I will
                    review your inquiry and respond shortly.
                  </p>
                  <button
                    onClick={resetForm}
                    className="text-xs font-mono uppercase tracking-widest border-b border-dark-fg/20 pb-1 hover:border-dark-fg hover:text-dark-fg text-dark-fg/60 transition-colors"
                  >
                    [ Send Another Message ]
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
