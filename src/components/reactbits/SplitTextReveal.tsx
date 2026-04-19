import { useEffect, useRef, createElement } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export const SplitTextReveal = ({ text, className = "", delay = 0, as = "h2" }: SplitTextRevealProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = el.querySelectorAll<HTMLSpanElement>("[data-char]");
    const ctx = gsap.context(() => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.95 && rect.bottom > 0;
      const animConfig: gsap.TweenVars = {
        yPercent: 120,
        opacity: 0,
        rotateX: -80,
        stagger: 0.025,
        duration: 0.9,
        delay,
        ease: "expo.out",
      };
      if (inView) {
        gsap.from(chars, animConfig);
      } else {
        gsap.from(chars, {
          ...animConfig,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      }
    }, el);
    return () => ctx.revert();
  }, [delay]);

  const words = text.split(" ");

  const content = words.map((w, wi) => (
    <span key={wi} className="inline-block whitespace-nowrap mr-[0.25em]" style={{ perspective: 600 }}>
      {Array.from(w).map((c, ci) => (
        <span key={ci} className="inline-block overflow-hidden align-baseline">
          <span data-char className="inline-block will-change-transform">{c}</span>
        </span>
      ))}
    </span>
  ));

  return createElement(as, { ref, className, "aria-label": text }, content);
};
