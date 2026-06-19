"use client";

import { useEffect, useRef } from "react";

export default function GsapAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    let ctx: any;

    const initGsap = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-gsap='fade-up']").forEach((el) => {
          ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            onEnter: () => {
              gsap.to(el, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
              });
            },
            once: true,
          });
          gsap.set(el, { y: 40, opacity: 0 });
        });

        gsap.utils
          .toArray<HTMLElement>("[data-gsap='stagger-in']")
          .forEach((parent) => {
            const children = Array.from(parent.children);
            if (children.length === 0) return;
            ScrollTrigger.create({
              trigger: parent,
              start: "top 85%",
              onEnter: () => {
                gsap.fromTo(
                  children,
                  { y: 30, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: "power2.out",
                  }
                );
              },
              once: true,
            });
            gsap.set(children, { y: 30, opacity: 0 });
          });

        gsap.utils
          .toArray<HTMLElement>("[data-gsap='scale-in']")
          .forEach((el) => {
            ScrollTrigger.create({
              trigger: el,
              start: "top 85%",
              onEnter: () => {
                gsap.to(el, {
                  scale: 1,
                  opacity: 1,
                  duration: 0.7,
                  ease: "back.out(1.7)",
                });
              },
              once: true,
            });
            gsap.set(el, { scale: 0.9, opacity: 0 });
          });

        gsap.utils
          .toArray<HTMLElement>("[data-gsap='parallax']")
          .forEach((el) => {
            const speed = parseFloat(el.dataset.speed || "0.3");
            ScrollTrigger.create({
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              onUpdate: (self) => {
                gsap.set(el, { y: self.progress * speed * 100 });
              },
            });
          });

        const counters = document.querySelectorAll("[data-gsap='counter']");
        counters.forEach((el) => {
          const target = parseInt(el.textContent || "0", 10);
          ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            once: true,
            onEnter: () => {
              gsap.fromTo(
                el,
                { textContent: 0 },
                {
                  textContent: target,
                  duration: 2,
                  ease: "power2.out",
                  snap: { textContent: 1 },
                }
              );
            },
          });
        });

        const progressBar = document.getElementById("scroll-progress");
        if (progressBar) {
          ScrollTrigger.create({
            onUpdate: (self) => {
              progressBar.style.transform = `scaleX(${self.progress})`;
            },
          });
        }
      });
    };

    initGsap();

    return () => ctx?.revert();
  }, []);

  return null;
}
