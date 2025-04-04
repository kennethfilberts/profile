import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-background border-t border-foreground/20 text-foreground py-4 fixed bottom-0 left-0">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Kenneth Filbert. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          {[
            {
              href: "https://github.com/kennethfilberts",
              icon: <Github className="w-6 h-6" />,
            },
            {
              href: "https://linkedin.com/in/kennethfilberts",
              icon: <Linkedin className="w-6 h-6" />,
            },
            {
              href: "mailto:kennethfilbert686@gmail.com",
              icon: <Mail className="w-6 h-6" />,
            },
          ].map(({ href, icon }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.35 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
